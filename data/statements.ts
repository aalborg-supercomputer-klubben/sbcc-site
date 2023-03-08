import {StaticImageData} from "next/image";
import louiseImg from "../public/img/statements/louise.webp";

type Expert = {
    image: string | StaticImageData;
    name: string;
    title: string;
}
export type Statement = {
    text: string;
    avatar: Expert;
    size?: "big" | "small";
}
export const statements: Statement[] = [
    {
        //text: "This is an excellent opportunity to encourage innovation, creativity, and collaboration among our students in the field of HPC.",
        text: "This is an excellent opportunity to gain hands-on **experience** with **HPC**, enhancing technical skills and preparing for **industry** challenges.",
        avatar: {
            image: louiseImg,
            name: "Louise Møller Haase",
            title: "Vice Dean, Aalborg University"
        },
        size: "big"
    },
];