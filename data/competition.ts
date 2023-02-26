export type Competetion = {
    date: Date;
    title: string
}

const dateOfCompetition = new Date(2023, 5, 25);
export const competition: Competetion = {
    date: dateOfCompetition,
    title: "SBCC " + dateOfCompetition.getFullYear()

}