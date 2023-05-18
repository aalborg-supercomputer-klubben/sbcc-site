import Link from "next/link"
import Image from "next/image"
import { sponsors } from "../data/sponsors"

export const Sponsors = () => (
    <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
        {sponsors.map(p => {
            return (
                <Link key={p.name} href={p.url} className="pt-">
                        <div className="flex flex-col items-center justify-center gap-2 w-48 h-36">
                        <Image
                            src={p.logo}
                            alt={p.name + " logo"}
                            width={192}
                            height={144}
                        />
                        </div>
                    </Link>
            )
        })}
    </div>
    )