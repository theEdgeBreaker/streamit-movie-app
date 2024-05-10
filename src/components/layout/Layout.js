import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* Header Navbar */}
      <Header />
      {children}
      {/* Footer */}
      <Footer />
    </>
  );
}
