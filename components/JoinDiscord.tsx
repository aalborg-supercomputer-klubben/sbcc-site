import Link from "next/link";
import Image from "next/image";

const JoinDiscord = () => {
    return (
        <Link href={"https://discord.gg/Z49YY5FE"} className={"hover:nx-opacity-75"}>
            <Image src={"/img/discord.svg"} width="150" height="300" alt="Single board computer Illustration" />
        </Link>
    );
};

export default JoinDiscord;