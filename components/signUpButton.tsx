import Link from "next/link";
import {competition} from "../data/competition";

export const SignUpButton = () => (
    <Link
        href={competition.registrationLink}
        target="_blank"
        rel="noopener"
        className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
        Sign up here
    </Link>
)