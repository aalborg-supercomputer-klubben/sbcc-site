import {competition} from "../data/competition";
import Head from "next/head";

const Headers = () => {
    return (
        <Head>
            <title>{competition.title}</title>
            <meta
                name="description"
                content={competition.title + "is a Single Board Cluster Competition made for students by students"}
            />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website"/>
            <meta name="og:title" content={competition.title}/>
            <meta name="og:description"
                  content={competition.title + "is a Single Board Cluster Competition made for students by students"}/>
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://sbcc.supercomputersquad.dk/"/>
            <meta name="twitter:title" content={competition.title}/>
            <meta name="twitter:description"
                  content={competition.title + "is a Single Board Cluster Competition made for students by students"}/>


            {/* favicon */}
            <link rel="icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
    )
}

export default Headers;