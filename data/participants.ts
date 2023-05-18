type Participant = {
  Name: string;
  Url: string;
  Logo_path: string;
};

const participants: Participant[] = [
  {
    Name: "Aalborg University",
    Url: "https://www.aau.dk/",
    Logo_path: "/img/participants/Aalborg-University-Denmark.png",
  },
  {
    Name: "University of California San Diego",
    Url: "https://ucsd.edu/",
    Logo_path: "/img/participants/University-of-California-San-Diego.png",
  },
  {
    Name: "University of Pasadena",
    Url: "http://upasadena.org/",
    Logo_path: "/img/participants/pasadena.png",
  }
];

export default participants;
