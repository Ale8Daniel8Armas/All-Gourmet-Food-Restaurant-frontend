import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
    children: React.ReactNode;
    showHero?: boolean;
}

const Layout = ({ children, showHero = false }: Props) => {
    return(
        //Este div crea el ampliado de la pagina total (pantalla completa)
        <div className = "flex flex-col min-h-screen">
            <Header />
            {showHero && <Hero />}
            <Hero />
            <div className="container mx-auto flex-1 py-10">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;