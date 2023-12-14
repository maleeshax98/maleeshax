import React from "react";

export default function Form({
  add,
  setName,
  setMessage,
  setEmail,
  name,
  email,
  message,
  loading,
}) {
  return (
    <div>
      <div className="mt-[30px]   flex flex-col gap-[40px]">
        <label>
          <p className="text-[#707070]">Email</p>
          <input
            type="text"
            className="p-2 sm:w-[100vw] text-sm outline-none text-white font-semibold max-w-[450px] rounded-lg bg-[#333333]"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          <p className="text-[#707070]">Name</p>
          <input
            type="text"
            className="p-2 sm:w-[100vw] text-sm outline-none text-white font-semibold max-w-[450px] rounded-lg bg-[#333333]"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          <p className="text-[#707070]">Your message</p>
          <textarea
            type="text"
            className="p-2 sm:w-[100vw] text-sm outline-none text-white font-semibold max-w-[450px] rounded-lg bg-[#333333]"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </label>

        <button
          onClick={() => {
            add(name, email, message);
          }}
          className="card p-2 rounded-md font-semibold text-[#9e9e9e] max-w-[150px] text-center"
        >
          Send
        </button>
      </div>
    </div>
  );
}
