import { readFile } from "fs";
import Image from 'next/image';
import Link from "next/link";
import participants from "../data/participants";

export default function Participants() {
    return (
        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            {participants.map(p => {
                return (
                    <Link key={p.Name} href={p.Url} className="pt-2">
                        <p className=" text-s font-bold tracking-wider max-w-xs text-indigo-600">{p.Name}</p>
                        <Image
                            src={p.Logo_path}
                            alt={p.Name + " logo"}
                            width={200}
                            height={50}
                        />
                    </Link>
                )
            })}
        </div>
    )
}
