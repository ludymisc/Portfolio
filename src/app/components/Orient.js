import Link from "next/link";

export default function Orient() {
    return(
        <section id="Orientation" className="w-full h-screen relative flex flex-cols-1 justify-between pt-32 
        bg-gradient-to-b from-blue-200 via-blue-300 via-blue-400 via-blue-450 via-blue-500 to-blue-500">

            {/* overlay */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-600/80 to-transparent z-0"></div>

            {/* text isi */}
            <div className="px-5">
                <p className="text-xl text-white">Hi, there!</p>
                <h1 className="text-4xl font-bold">
                    PERKENALKAN, NAMA SAYA 
                    <span className="text-yellow-800"> ZAKY</span>
                </h1>
                <p className="mt-4 text-white">
                    Saya adalah seorang UI/UX developer yang berfokus pada bahasa 
                    <span className="text-yellow-600 font-bold"> Java Script</span>
                </p>
            </div>
            <div className="relative w-full h-full flex justify-center">
                <img src="/amor.jpg" alt="Mi Amor" className="absolute z-10 w-[200px] md:w-[250px]" />
            </div>
        </section>
    )
}