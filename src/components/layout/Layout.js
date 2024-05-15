import Header from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-primary min-h-screen">
        {/* Header Navbar */}
        {/* <Header /> */}

        {children}
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
