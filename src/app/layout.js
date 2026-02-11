import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Weather App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
