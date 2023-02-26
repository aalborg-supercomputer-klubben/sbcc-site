import {useTheme} from "next-themes";
import Image from "next/image";
import lightLogo from "../public/img/logo.svg";
import darkLogo from "../public/img/dark-logo.svg";
import {competition} from "../data/competition";
export const Logo = () => {
    const {resolvedTheme} = useTheme();

    return (
        <span>
            {resolvedTheme === "dark" ? (
                <Image
                    src={darkLogo}
                    alt={competition.title + " dark logo"}
                    className="w-36"
                />) : (
                    <Image
                    src={lightLogo}
                    alt={competition.title + " logo"}
                    className="w-36"
                />)}
        </span>)
};