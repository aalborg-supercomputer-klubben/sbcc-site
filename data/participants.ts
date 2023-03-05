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
    Name: "Boston University",
    Url: "https://www.bu.edu/",
    Logo_path: "/img/participants/Boston-University-Logo.png",
  },
  {
    Name: "ETH Zürich",
    Url: "https://ethz.ch/de.html",
    Logo_path: "/img/participants/ETH-Zurich_Logo_black.png",
  },
  {
    Name: "Friedrich-Alexander-Universität",
    Url: "https://www.fau.de/",
    Logo_path: "/img/participants/Friedrich-Alexander-University.png",
  },
  {
    Name: "MIT, Boston University",
    Url: "https://www.mit.edu/",
    Logo_path: "/img/participants/MIT-Massachusetts-Institute-of-Technology-Logo.png",
  },
  {
    Name: "Nanyang Technological University",
    Url: "https://www.ntu.edu.sg/",
    Logo_path: "/img/participants/Nanyang-technological-university.png",
  },
  {
    Name: "University of California San Diego",
    Url: "https://ucsd.edu/",
    Logo_path: "/img/participants/University-of-California-San-Diego.png",
  },
  // We haven't heard back from UT Austin yet
  // {
  //   Name: "University of Texas at Austin",
  //   Url: "https://www.utexas.edu/",
  //   Logo_path: "/img/participants/University-of-Texas-at-Austin.png",
  // },
];

export default participants;
