import Container from "@/ui/atoms/Container";
import Footer from "@/ui/Footer";
import Nav from "@/ui/root/Nav";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Container as="main" className="relative flex-1">
        {children}
      </Container>
      <Footer />
    </div>
  );
}
