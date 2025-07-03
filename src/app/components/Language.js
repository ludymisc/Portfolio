import Image from "next/image"

export default function Language() {
    return (
        <section id="Skill" className="w-full h-full flex flex-col items-center py-10">
            <h1 className="text-4xl mb-12">SKILL</h1>
            <div className="flex flex-row gap-4 mb-20">
                <Image src="/html.png" alt="html" height={128} width={128} />
                <Image src="/css.png" alt="html" height={128} width={128} />
                <Image src="/js.webp" alt="html" height={128} width={128} />
                <Image src="/node.webp" alt="html" height={128} width={128} />
                <Image src="/next.webp" alt="html" height={128} width={128} />
            </div>
        </section>
    )
}
