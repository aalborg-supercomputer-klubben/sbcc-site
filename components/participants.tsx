import Image from 'next/image';
import Link from "next/link";
import participants from "../data/participants";
import React from "react";

const FadeIn = () => (<div className="relative w-0 h-0">
                <div className="absolute dark:from-trueGray-900 bg-gradient-to-r from-white opacity-100 w-48 h-36 z-10 bottom-0" />
                <div className="absolute dark:bg-trueGray-900 bg-white opacity-100 w-screen h-36 z-10 bottom-0 right-0" />
            </div>)
const FadeOut = () => (<div className="relative w-full">
                <div className="absolute dark:from-trueGray-900 bg-gradient-to-l from-white opacity-100 w-48 h-36 z-10 right-0 bottom-0" />
                <div className="absolute dark:bg-trueGray-900 bg-white opacity-100 w-screen h-36 z-10 bottom-0 left-full" />
            </div>)

export default function Participants() {
    // duplicate all participants to make the banner infinite
    const infiniteParticipants = [...participants, ...participants]

    return (
        <>
        <div className={"flex gap-5 mt-10 animate-infinite-banner ml-14"}>
            {infiniteParticipants.map(p => {
                return (
                    <Link key={p.Name} href={p.Url}>
                        <div className="flex flex-col items-center justify-center gap-[28px] w-48 h-36">
                        <Image
                            src={p.Logo_path}
                            alt={p.Name + " logo"}
                            width={192}
                            height={144}
                        />
                        </div>
                    </Link>
                )
            })}
        </div>
        <FadeIn/>
        <FadeOut/>
        </>
    )
}
