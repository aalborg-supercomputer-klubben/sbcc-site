import {useTheme} from "next-themes";
import Image from "next/image";
import lightLogo from "../public/img/logo.svg";
import darkLogo from "../public/img/dark-logo.svg";
import {competition} from "../data/competition";
import { useEffect, useState } from "react";

export const Logo = () => {
    const [mounted, setMounted] = useState(false);
    const {resolvedTheme} = useTheme();
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    
    return (
        <span className="hover:opacity-75">
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