import { Poppins } from "next/font/google";
import "./globals.css";
import ToasterContext from "@/context/ToastContext/ToastContext";
import Footer from "@/Components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: "Maleesha X",
  description: "Maleesha Nayanashan's personal website. Portfolio",
  icons: {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    url: '/images/main-dark.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ToasterContext />

        {children}
        <Footer />
      </body>
    </html>
  );
}
