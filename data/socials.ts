import {competition} from "./competition";

type Socials = {
    twitter?: string;
    github?: string;
    discord?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;

}


export const socials: Socials = {
    discord: competition.discordServerInvitationLink,
    github: "https://github.com/supercomputer-klubben-aau"
}