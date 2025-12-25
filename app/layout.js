export const metadata = {
  title: "Shivansh — UX Designer",
  description: "Portfolio of Shivansh — UI/UX Designer",
};

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
