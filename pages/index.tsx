import ListSection from "../components/listSection";
import Cta from "../components/cta";
import benchmarks from "../data/benchmarks";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Mark from "../components/mark";
import Navbar from "../components/navbar";
import PopupWidget from "../components/popupWidget";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";
import Header from "../components/header";
import Testimonials from "../components/testimonials";
import Link from "next/link";
import Image from 'next/image';


const IndexPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Hero />
            <SectionTitle
                title="When and where"
                pretitle="Aalborg, Denmark">
                Date:<br></br> 
                April 18th - 20th 2024
                <br></br><br></br>
                Place:<br></br>
                Selma Lagerløfs Vej 300, 9220 Aalborg
                <br></br>
                Aalborg Universitet, Cassiopeia - House of Computer Science            
            </SectionTitle>
            <SectionTitle
                pretitle="Rules and Requirements"
                title="Cluster Requirements">
                To ensure a level playing field for all participants, the competition
                has a few rules and requirements. Participants are not allowed to use
                Apple M1, M2 and M3 processors, and their clusters must have a minimum of 4
                sockets. MPI is required, and there is a power limit of <Mark>250 watts</Mark> and a
                cost limit of <Mark>$6,000</Mark>.
            </SectionTitle>
            <ListSection data={benchmarks} />
            <SectionTitle
                pretitle="Water cooled raspberry pi cluster"
                title="What is a SBC Cluster?">
                A single board computer cluster is a group of single board computers, which comes in many shapes and
                sizes, that are connected together to form a single computer.
                Here is a video of a water cooled raspberry pi cluster, with some benchmarks against normal laptops at
                the end.
            </SectionTitle>
            <Video />
            <SectionTitle
                pretitle="SBCC is backed by our Faculty members"
                title="Advisors & Faculty members">
                The SBCC is backed by a team of faculty members, who backs this student initiative and advisors who are experts in the field of
                high-performance computing.
            </SectionTitle>
            <Testimonials />
            <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
                We will be updating this section with more questions and answers.
            </SectionTitle>
            <Faq />
            <Cta />
            <Footer />
            <PopupWidget />
        </>
    )
};
export default IndexPage
