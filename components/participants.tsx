import Image from 'next/image';
import Link from "next/link";
import participants from "../data/participants";
import React from "react";

export default function Participants() {
    return (
        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            {participants.map(p => {
                return (
                    <Link key={p.Name} href={p.Url} className="pt-">
                        <div className="flex flex-col items-center justify-center gap-2 h-36">
                        <Image
                            src={p.Logo_path}
                            alt={p.Name + " logo"}
                            width={200}
                            height={50}
                        />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
