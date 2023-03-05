import {StaticImageData} from "next/image";
import userOneImg from "../public/img/user1.jpg";

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
    // {
    //     text: "Share a real **testimonial** that **hits** some of your **benefits** from one of your popular customer.",
    //     avatar: {
    //         image: userOneImg,
    //         name: "Sarah Steiner",
    //         title: "VP Sales at Google"
    //     },
    //     size: "big"
    // },
];