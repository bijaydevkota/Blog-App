
import Navbar from "@/components/website/Navbar";
import Footer from "@/components/website/Footer";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
    <Navbar/>
    {children}
    <Footer/>
    </div>;
}
