import { Inter } from "next/font/google";
import "../styles/resets.css"; // Always first
import "../styles/global.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Tutorial",
  description: "Learning next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
