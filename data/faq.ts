type Faq = {
    question: string;
    answer: string;
}

export const faq: Faq[] = [
    {
        question: "What is the budget for the hardware?",
        answer: "6000 USD MSRP",
    },
    {
        question: "What is the power budget for the cluster?",
        answer: "250 Watt",
    },
    {
        question: "Are eGPUs allowed?",
        answer: "Yes",
    },
    {
        question: "Does a DHCP server count as part of the cluster?",
        answer: "No, given that it is only used for managing the cluster network / accessing the cluster.",
    },
    {
        question: "When is the deadline for sign up?",
        answer: "The application deadline is on the 9th of February. Your real deadline is getting hardware, and setting it up in time.\r\n After sign up you need to submit a proposal for the hardware you're going to use by the 28th of february.",
    },
];
