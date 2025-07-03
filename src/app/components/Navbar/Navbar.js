import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

export default function Navbar() {
    return(
        <nav className="fixed top-0 w-full z-30 justify-between bg-gray-400/20 backdrop-blur-sm text-black px-6 py-4">
            <div className="flex md:flex-row flex-col justify-between gap-2">
                    <Link href="/" className="flex items-center text-xl gap-2 font-bold md:text-base">
                    <Image src="/next.svg" alt="logo" width={64} height={64}/>
                    <span className="hover:text-yellow-700 transition-colors">
                        NAVBAR
                    </span>
                    </Link>
                    <Menu />           
            </div>
        </nav>
    )
}