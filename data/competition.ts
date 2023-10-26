export type Competetion = {
    date: Date;
    title: string;
    registrationLink: string;
    discordServerInvitationLink: string;

}

const dateOfCompetition = new Date(2024, 4);
export const competition: Competetion = {
    date: dateOfCompetition,
    title: "SBCC " + dateOfCompetition.getFullYear(),
    registrationLink: "https://forms.gle/rnRoD5s4hVZ7NGRq8",
    discordServerInvitationLink: "https://discord.gg/G6rJrXNrnc",
}