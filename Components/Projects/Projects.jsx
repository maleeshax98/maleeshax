import React, { useState, useEffect } from "react";
import { collection, getDocs, query, startAfter, orderBy, limit } from "firebase/firestore";
import { db } from "@/firebase/db";

import { motion } from "framer-motion";
import SingleProjectCard from "../SingleProjectCard/SingleProjectCard";

const pageSize = 10;

export default function Projects() {
  const [data, setData] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "projects"),
          orderBy("createdAt", "desc"),
          limit(pageSize)
        );
        const querySnapshot = await getDocs(q);

        const newData = [];
        querySnapshot.forEach((doc) => {
          newData.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setData(newData);

        const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastDoc(lastVisible);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMore = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "projects"),
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(pageSize)
      );
      const querySnapshot = await getDocs(q);

      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setData((prevData) => [...prevData, ...newData]);

      const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastDoc(lastVisible);
    } catch (error) {
      console.error("Error fetching more data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{
        y: 500,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="bg-[#1e1e1f] rounded-md p-4  border-[1px] border-[#333333] flex gap-[10px]  top-10 pb-[80px]"
    >
      <div>
        <h1 className="font-bold text-2xl text-white text-left">Projects</h1>
        <div className="underline w-[80px] h-[5px] rounded-full"></div>
        <div className="mt-[30px] flex flex-wrap items-start justify-center gap-[15px]">
          {data.map((d) => (
            <SingleProjectCard key={d.id} title={d.title} desc={d.desc} img={d.img} id={d.id}  tech={d.tech} type={d.type} link={d.link} github={d.github}/>
          ))}
        </div>
        <div className="mt-[40px]">
          <center>
            {loading && <p className="text-[#707070] mb-[15px]">Loading...</p>}
            {!loading && lastDoc && (
              <button
                onClick={loadMore}
                disabled={loading}
                className="card rounded-md font-semibold text-white p-2"
              >
                Load More
              </button>
            )}
          </center>
        </div>
      </div>
    </motion.div>
  );
}
