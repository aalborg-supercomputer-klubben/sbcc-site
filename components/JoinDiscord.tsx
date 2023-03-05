import Link from "next/link";
import Image from "next/image";
import {competition} from "../data/competition";

const JoinDiscord = () => {
    return (
        <Link href={competition.discordServerInvitationLink} className={"hover:nx-opacity-75"}>
            <Image src={"/img/discord.svg"} width="150" height="300" alt="Single board computer Illustration" />
        </Link>
    );
};

export default JoinDiscord;