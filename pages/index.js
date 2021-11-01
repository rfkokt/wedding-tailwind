import Hero from "../components/Hero/Hero";
import Mempelai from "../components/Content/Mempelai";
import {useState} from "react";
import Invited from "../components/Invited/Invited";

export default function Home() {
    const [invited, setInvited] = useState(true)
    const [tamu, setTamu] = useState("")
    const changeInvited = (e) => {
        setInvited(e)
    }
    const nameGuest = (e) => {
        setTamu(e)
    }
    return (
        <>
            {invited ?
                <Invited changeInvited={changeInvited} nameGuest={nameGuest}/> :
                <>
                    <Hero guest={tamu}/>
                    <Mempelai/>
                </>
            }
        </>
    )
}
