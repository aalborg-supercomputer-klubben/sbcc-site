import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";
import {navigation} from "./navbar";
import {Logo} from "./logo";
import {legal} from "../data/legal";
import {socials} from "../data/socials";
import {Discord, Facebook, Github, Instagram, Linkedin, Twitter} from "./socials-icons";

export default function Footer() {
    return (
        <div className="relative">
            <Container>
                <div
                    className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <div>
                            <Link href="/"
                                  className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                                <Logo/>
                            </Link>
                        </div>

                        <div className="mt-5">
                            <Link
                                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                                target="_blank"
                                rel="noopener"
                                className="relative block w-44">
                                <Image
                                    src="/img/vercel.svg"
                                    alt="Powered by Vercel"
                                    width="212"
                                    height="44"
                                    className="container"
                                />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                            {navigation.map((item, index) => (
                                <Link key={index} href={item}
                                      className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                            {legal.map((item, index) => (
                                <Link key={index} href={item.href}
                                      className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <div>Follow us</div>
                        <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
                          {socials.twitter && (
                            <Link
                                href={socials.twitter}
                                target="_blank"
                                rel="noopener">
                                <span className="sr-only">Twitter</span>
                                <Twitter/>
                            </Link>)}
                          {socials.facebook && (
                            <Link
                                href={socials.facebook}
                                target="_blank"
                                rel="noopener">
                                <span className="sr-only">Facebook</span>
                                <Facebook/>
                            </Link>)}
                            {socials.instagram && (
                            <Link
                                href={socials.instagram}
                                target="_blank"
                                rel="noopener">
                                <span className="sr-only">Instagram</span>
                                <Instagram/>
                            </Link>)}
                            {socials.linkedin && (
                            <Link
                                href={socials.linkedin}
                                target="_blank"
                                rel="noopener">
                                <span className="sr-only">Linkedin</span>
                                <Linkedin/>
                            </Link>
                          )}
                            {socials.github && (
                            <Link
                                href={socials.github}
                                target="_blank"
                                rel="noopener">
                                <span className="sr-only">Github</span>
                                <Github/>
                            </Link>
                            )}
                            {socials.discord && (
                            <Link
                                href={socials.discord}
                                target="_blank"
                                rel="noopener">
                                <span className="sr-only">Discord</span>
                                <Discord/>
                            </Link>
                            )}
                        </div>
                    </div>
                </div>

                <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
                    Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
                    <Link
                        href="https://github.com/supercomputer-klubben-aau/sbcc-site/"
                        target="_blank"
                        rel="noopener">
                        Super Computer Club @ Aalborg University.
                    </Link>
                        {" "}Illustrations from{" "}
                    <Link
                        href="https://openai.com/dall-e-2/"
                        target="_blank"
                        rel="noopener ">
                        Dall-e by OpenAI
                    </Link>
                    {" "}and {" "}
                    <Link href="https://www.freepik.com/free-vector/circuit-board-isometric-concept_4027496.htm#query=single%20board%20computer&position=17&from_view=search&track=ais"
                          target="_blank"
                          rel="noopener ">
                        Circuit board isometric concept by Macrovector on Freepik
                    </Link>
                </div>
            </Container>
        </div>
    );
}

