import React from "react";
import Container from "./container";
import Link from "next/link";
import Image from 'next/image';


export default function SectionTitle(props) {
    return (
        <Container
            className={`flex w-full flex-col mt-4 ${props.align === "left" ? "" : "items-center justify-center text-center"
                }`}>

            {props.title && (
                <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                    {props.title}
                </h2>
            )}

            {props.pretitle && (
                <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
                    {props.pretitle}
                </div>
            )}
            {props.children && (
                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                    {props.children}
                </p>
            )}

            {/* <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
                <Link key={"Aalborg University"} href={"https://www.aau.dk/"} className="pt-">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image
                            src={"/img/participants/Aalborg-University-Denmark.png"}
                            alt={"Aalborg University logo"}
                            width={192}
                            height={144}
                        />
                    </div>
                </Link>
            </div> */}


        </Container>
    );
}
