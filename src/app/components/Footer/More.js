import Link from "next/link"



export default function More() {
    return(
        <section>
            <div className="flex text-md space-x-4 self-auto mx-3">
                    <Link href="/" className="hover:text-yellow-900 transition-colors">Home</Link>
                    <a href="/Achievement" className="hover:text-yellow-900 transition-colors">Achievement</a>
                    <a href="/Map" className="hover:text-yellow-900 transition-colors">Road Map</a>
                    <a href="/devlog.txt" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-900 transition-colors">Dev Log</a>
            </div>
        </section>
    )
}