import Link from "next/link"
import Image from "next/image"
import More from "./More"

export default function Footer() {
    return (
        <nav className="bottom-0 w-full z-30 justify-between bg-gray-400/20 backdrop-blur-sm text-black px-6 py-4">
            <div className="flex md:flex-row flex-col justify-between gap-2">
                <Link href="/" className="flex items-center text-xl gap-2 font-bold md:text-base">
                    <Image src="/next.svg" alt="logo" width={64} height={64} />
                    <span className="hover:text-yellow-700 transition-colors">
                        MORE TO VISIT :
                    </span>
                </Link>
                <More />
            </div>
        </nav>
    )
}