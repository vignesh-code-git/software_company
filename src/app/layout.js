import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ThemeProvider } from "../components/providers/ThemeProvider";

export const metadata = {
  title: "Company Name | Software Solutions",
  description: "Premium software solutions for forward-thinking companies. Engineered to scale.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <div className="page-wrapper">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
