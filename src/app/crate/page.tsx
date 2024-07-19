import { NavBar } from "@/components/nav-bar";
import Footer from "@/components/footer";
export default function Home() {

    return (
        <div>
            <nav className="z-10 sticky top-0 top"><NavBar /></nav>
            <Footer />
        </div>
    );

}