import Image from "next/image";
import Bunga from "../../assets/bunga.png";
import {useState} from "react";

export default function Invited({
                                    changeInvited,
                                    nameGuest
                                }) {
    const [tamu, setTamu] = useState("")
    const [valid, setValid] = useState(false)
    const invited = (e) => {
        if (tamu === "") {
            setValid(true)
        } else {
            changeInvited(e)
        }
    }
    const validate = (e) => {
        setTamu(e)
        setValid(false)
        nameGuest(e)
    }
    return (
        <>
            <div className={"bg-invited min-h-screen bg-cover bg-bottom"}>
                <div className={"text-center" +
                " opacity-100"}>
                    <div className={"md:py-10 object-left-top"}>
                        <Image src={Bunga} width={512} height={282}/>
                    </div>
                    <h1 className={"md:text-6xl text-5xl md:mb-0 font-medium text-blackContent leading-relaxed font-curs"}>Hello,
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        You're Invited</h1>
                    <br/>
                    <h1 className={"md:text-2xl text-xl font-medium text-blackContent leading-relaxed"}>- Save the date of our
                        wedding. -</h1>
                    <p className={"text-blackContent"}>Minggu. 5 Desember 2021</p>
                    <br/>
                    <input type="text"
                           placeholder="Daftar tamu..."
                           value={tamu}
                           onChange={(e) => validate(e.target.value)}
                           className={"font-curs text-5xl md:w-[600px] w-[300px] appearance-none border-none bg-white rounded py-3 text-center " +
                           "justify-center leading-tight focus:outline-none text-black capitalize"}/>
                    {valid ?
                        <p className="text-red-500 text-xs italic">Silahkan isi daftar tamu terlebih dahulu.</p>
                        : null
                    }
                    <br/>
                    <br/>
                    <div>
                        <button
                            className="bg-color-pallete-400 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded"
                            onClick={() => {
                                invited(false)
                            }}
                        >
                            <p className={"flex"}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"/>
                                </svg>
                                &nbsp;
                                Buka Undangan
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}