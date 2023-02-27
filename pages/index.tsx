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


const IndexPage = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <Hero/>
            <SectionTitle
                pretitle="Rules and Requirements"
                title="Cluster Requirements">
                To ensure a level playing field for all participants, the competition
                has a few rules and requirements. Participants are not allowed to use
                Apple M1 and M2 processors, and their clusters must have a minimum of 4
                sockets. MPI is required, and there is a power limit of <Mark>250 watts</Mark> and a
                cost limit of <Mark>$6,000</Mark>.
            </SectionTitle>
            <ListSection data={benchmarks}/>
            <SectionTitle
                pretitle="Water cooled raspberry pi cluster"
                title="What is a SBC Cluster?">
                A single board computer cluster is a group of single board computers, which comes in many shapes and
                sizes, that are connected together to form a single computer.
                Here is a video of a water cooled raspberry pi cluster, with some benchmarks against normal laptops at
                the end.
            </SectionTitle>
            <Video/>
            {/*<SectionTitle*/}
            {/*    pretitle="Testimonials"*/}
            {/*    title="Here's what our customers said">*/}
            {/*    Testimonails is a great way to increase the brand trust and awareness.*/}
            {/*    Use this section to highlight your popular customers.*/}
            {/*</SectionTitle>*/}
            {/*<Testimonials/>*/}
            <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
                We will be updating this section with more questions and answers.
            </SectionTitle>
            <Faq/>
            <Cta/>
            <Footer/>
            <PopupWidget/>
        </>
    )
};
export default IndexPage
