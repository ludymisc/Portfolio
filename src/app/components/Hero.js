"use client"

import Image from "next/image";
import { ArrowDown } from "@phosphor-icons/react";

export default function Hero() {
    return (
        <section className="relative w-full h-screen text-center">
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/Hero_desktop.jpg"
                    alt="summerside"
                    fill
                    className="object-cover"
                />
            </div>

            {/* overlay */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent z-0"></div>

            {/* Teks bagian atas */}
            <div className="relative grid grid-cols-3 h-full py-30 px-6 z-10 text-left">
                <h1 className="font-extrabold text-white">
                    <div className="text-9xl">
                        <span>IT </span>
                        <span>IS </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-800">SUMMER!</span>
                    </div>
                    <div className="text-2xl font-bold pt-5">
                        <p>UI Designer Is Cool, </p>
                        <p>Untill UI Programmer Cry </p>
                    </div>
                    <a href="#Orientation">
                        <button type="button" className="mx-155 mt-25 hover:bg-grey-500 transition-colors cursor-pointer wave">
                            <ArrowDown size={80} />
                        </button>
                    </a>
                </h1>
            </div>

        </section>
    );
}
