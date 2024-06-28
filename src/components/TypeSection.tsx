"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function TypeSection() {
    const words = [
        {
            text: "Build",
        },
        {
            text: "awesome",
        },
        {
            text: "websites",
        },
        {
            text: "with",
        },
        {
            text: "CodEthics.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[10rem] mb-12 sm:-mt-20 -mt-36 w-full">
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    Join now
                </button>
            </div>
        </div>
    );
}

export default TypeSection;