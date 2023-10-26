import {useTheme} from "next-themes";
import Image from "next/image";
import lightLogo from "../public/img/logo-no-text.svg";
import darkLogo from "../public/img/dark-logo-no-text.svg";
import {competition} from "../data/competition";
import { useEffect, useState } from "react";

export const Logo = () => {
    const [mounted, setMounted] = useState(false);
    const {resolvedTheme} = useTheme();
    
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    
    return (
        <span className="hover:opacity-75 flex items-center">
            {resolvedTheme === "dark" ? (
                <Image
                    src={darkLogo}
                    alt={competition.title + " dark logo"}
                    className="w-24"/>) : (
                    <Image
                    src={lightLogo}
                    alt={competition.title + " logo"}
                    className="w-24"/>)}
            <div className="flex flex-col custom-color">
              <p>SBCC</p>
              <p>2024</p>
            </div>
        </span>)
};
