import Link from "next/link";
import Image from "next/image";

export default function Project() {
    return (
        <section id="Project" className="w-full h-full items-center flex flex-col">
            <h1 className="text-4xl mb-12">MY PROJECT</h1>
            <div className="card flex flex-row gap-6 pb-30">
                <div className="flex flex-col w-full max-w-md rounded-lg ">

                    <Image src="/capture.PNG" alt="dummy" height={128} width={200} className="w-full h-auto object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl">Travel Agency Landing Page (Template)</h2>
                        <h3>Landing page siap edit dengan UI interaktif untuk setiap device</h3>
                        <div className="flex justify-between pt-4">
                            <Link href="/" target="_blank">
                                <button className="p-4 py-2 rounded bg-gray-800 text-white">
                                    View Code
                                </button>
                            </Link>
                            <Link href="/" target="_blank">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded">
                                    Live Preview
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}