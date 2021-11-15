import Hero from "../components/Hero/Hero";
import Mempelai from "../components/Content/Mempelai";
import {useState} from "react";
import Invited from "../components/Invited/Invited";
import Waktu from "../components/Content/Waktu";
import ProtokolKesehatan from "../components/Content/ProtokolKesehatan";
import Music from "../components/Content/Music";
import {useSpring, animated} from "react-spring";
import Wish from "../components/Content/Wish";
import Footer from "../components/Content/Footer";
import Head from "next/head";

export default function Home() {
    const [invited, setInvited] = useState(true)
    const [tamu, setTamu] = useState("")
    const changeInvited = (e) => {
        setInvited(e)
    }
    const nameGuest = (e) => {
        setTamu(e)
    }
    const fade = useSpring({
        opacity: invited ? 0 : 1,
        delay: 50
    })
    return (
        <>
            <Head>
                <meta charset={"UTF-8"}/>
                <title>The Wedding Of Novi & Rifki</title>
                <meta name="description" content="Wedding Invitation"/>
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Novia &amp; Rifki" />
                <meta property="og:description" content="Wedding Invitation" />
                <meta property="og:url" content="https://www.pernikahannovirifki.my.id/" />
                <meta property="og:site_name" content="Wedding Invitation Novia & Rifki" />
                <meta property="og:image" content="https://i.ibb.co/MCmNrwQ/IMG-20211104-104058.png" />
                <meta property="og:image:secure_url" content="https://i.ibb.co/MCmNrwQ/IMG-20211104-104058.png" />
                <meta property="og:image:width" content="1296" />
                <meta property="og:image:height" content="864" />
                <meta property="og:image:alt" content="Novia &#038; Rifki" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="ya:ovs:upload_date" content="2018-11-10" />
                <meta property="ya:ovs:allow_embed" content="true" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Novia &amp; Rifki" />
                <meta name="twitter:description" content="Wedding Invitation" />
                <meta name="twitter:image" content="https://i.ibb.co/MCmNrwQ/IMG-20211104-104058.png" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {invited ?
                <Invited changeInvited={changeInvited} nameGuest={nameGuest}/> :
                <animated.div style={fade}>
                    <Music/>
                    <Hero guest={tamu}/>
                    <Mempelai/>
                    <Waktu/>
                    <ProtokolKesehatan/>
                    <Wish guest={tamu}/>
                    <Footer/>
                </animated.div>
            }
        </>
    )
}
