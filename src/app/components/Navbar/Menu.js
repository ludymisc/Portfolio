import Link from "next/link"


export default function Menu() {
    return(
        <section>
            <div className="flex text-md space-x-4 self-auto mx-3">
                    <Link href="/" className="hover:text-yellow-900 transition-colors">Home</Link>
                    <a href="#Orientation" className="hover:text-yellow-900 transition-colors">Orientation</a>
                    <a href="#Skill" className="hover:text-yellow-900 transition-colors">Skill</a>
                    <a href="#Project" className="hover:text-yellow-900 transition-colors">Project</a>
            </div>
        </section>
    )
}