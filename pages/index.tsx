import Head from "next/head";
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
import Testimonials from "../components/testimonials";
import Video from "../components/video";

export default function () {
  return (
    <>
      <Head>
        <title>Single Board Cluster Competition</title>
        <meta
          name="description"
          content="SBCC is a Single Board Cluster Competition made for students by students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Rules and Requirements"
        title="Cluster Requirements">
        To ensure a level playing field for all participants, the competition
        has a few rules and requirements. Participants are not allowed to use
        Apple M1 and M2 processors, and their clusters must have a minimum of 4
        sockets. MPI is required, and there is a power limit of <Mark>250 watts</Mark> and a
        cost limit of <Mark>$6,000</Mark>.
      </SectionTitle>
      <ListSection data={benchmarks} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
