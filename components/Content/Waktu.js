import Image from "next/image";
import MaskBottom from '../../assets/mask_bottom.png'
import Bunga from "../../assets/flower.png";
import Ring from '../../assets/ring.png'
import Ballons from '../../assets/balloons.png'
import Wedding from '../../assets/Resepsi.png'
import Timer from "../Timer";
import MaskTop from "../../assets/mask.png";
import {useState} from "react";
import {useSpring, animated} from "react-spring";

export default function Waktu() {
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState({
        rifki: false,
        novia: false,
        alamat: false
    })
    const fade = useSpring({
        opacity: showModal ? 1 : 0,

    })
    const showInMapClicked = () => {
        window.open("https://goo.gl/maps/w5ug1VdMPPLx6DN87");
    };

    const copyText = (e) => {
        const rekeningRifki = "003997541743"
        const rekeningNovia = "001302050534"
        const alamatRumah = "Jl. Caman Raya Gg. H. Moh. Ali (Belakang Kopi bob) No.1 RT 07/03, Jatibening."
        if (e === 'rifki') {
            navigator.clipboard.writeText(rekeningRifki)
            setCopied({
                ...copied,
                rifki: true
            })
        } else if (e === "novia") {
            navigator.clipboard.writeText(rekeningNovia)
            setCopied({
                ...copied,
                novia: true
            })
        } else {
            navigator.clipboard.writeText(alamatRumah)
            setCopied({
                ...copied,
                alamat: true
            })
        }
    }
    return (
        <>
            <div className={"bg-color-white bg-cover bg-bottom"}>
                <Image src={MaskBottom}/>
                <div className={"flex justify-center items-center content-center md:-mt-10"}>
                    <Image src={Bunga}/>
                </div>
                <div className={"container flex flex-wrap mx-auto pt-5"}>
                    <br/>
                    <div className="shadow-lg text-center md:w-5/12 md:ml-20 mb-6 px-3 py-10">
                        <Image src={Ring} width={100} height={100}/>
                        <h1 className={"md:text-6xl capitalize text-5xl md:mb-0 font-medium leading-relaxed font-curs"}>
                            Akad
                            Nikah</h1>
                        <p className={"font-bold"}>Sabtu, 03 Juni 2023</p>
                        <p className={"font-bold"}>Telah Dilaksanakan</p>
                        <br/>
                        <p className={"font-bold"}>Balai Harunggaun Bolon Conference Hall</p>
                        <p className={"px-16"}>MW8H+5F6, Pulau Sumatera, Tiga Raja, Kec. Girsang Sipangan Bolon, Kabupaten Simalungun, Sumatera Utara 21174</p>
                    </div>
                    <div className={"md:w-1/12"}>
                    </div>
                    <div className="shadow-lg text-center md:w-5/12 mb-6 px-3 py-10">
                        <Image src={Ballons} width={100} height={100}/>
                        <h1 className={"md:text-6xl capitalize text-5xl md:mb-0 font-medium leading-relaxed font-curs"}>
                            Ngunduh Mantu</h1>
                        <p className={"font-bold"}>Sabtu, 05 Agustus 2023</p>
                        <p className={"font-bold"}>10.00 - 21.00 WIB</p>
                        <br/>
                        <p className={"font-bold"}>Rumah H Agus Mirzal</p>
                        <p className={"px-16"}>Pondok Ungu Permai Blok AN 6 No 15 RT 11 RW 11, Kaliabang Tengah, Bekasi Utara, Kota Bekasi</p>
                    </div>
                </div>
                <Timer/>
                <div className={"text-center mb-2"}>
                    <button
                        className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                        onClick={showInMapClicked}
                    >
                        <p className={"flex"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                      clipRule="evenodd"/>
                            </svg>
                            &nbsp;
                            Buka Google Maps
                        </p>
                    </button>
                    &nbsp;
                    <button
                        className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            setShowModal(true)
                            setCopied({
                                rifki: false,
                                novia: false,
                                alamat: false
                            })
                        }}
                    >
                        <p className={"flex"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                                      clipRule="evenodd"/>
                                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"/>
                            </svg>
                            &nbsp;
                            Kirim Hadiah
                        </p>
                    </button>
                </div>
                {showModal ? (
                    <animated.div style={fade}>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-6xl">
                                {/*content*/}
                                <div
                                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div
                                        className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-2xl font-semibold">
                                            Kado Pernikahan
                                        </h3>
                                        <button
                                            className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                 viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 w-full">
                                        <div className={"text-center md:flex md:justify-center items-center"}>
                                            <div className={"mb-10 md:mb-0 md:mr-20 mr-0"}>
                                                <h3>003997541743 - BCA Digital
                                                    <br/>
                                                    An Aziz Dhaifullah </h3>
                                                <button
                                                    className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                                                    onClick={() => {
                                                        copyText('rifki')
                                                    }}
                                                >
                                                    <p className={"flex"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                             viewBox="0 0 20 20" fill="currentColor">
                                                            <path
                                                                d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"/>
                                                            <path
                                                                d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                                                        </svg>
                                                        &nbsp;
                                                        Copy Number
                                                    </p>
                                                </button>

                                                {copied.rifki ?
                                                    <>
                                                        <br/><br/>
                                                        <p className={"italic"}>Copied!</p>
                                                    </>
                                                    : null}
                                            </div>
                                            <div className={"mb-10 md:mb-0 md:mr-3 mr-0"}>
                                                <h3>001302050534 - BCA Digital
                                                    <br/>
                                                    An Icha Utami </h3>
                                                <button
                                                    className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                                                    onClick={() => {
                                                        copyText('novia')
                                                    }}
                                                >
                                                    <p className={"flex"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                             viewBox="0 0 20 20" fill="currentColor">
                                                            <path
                                                                d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"/>
                                                            <path
                                                                d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                                                        </svg>
                                                        &nbsp;
                                                        Copy Number
                                                    </p>
                                                </button>
                                                {copied.novia ?
                                                    <>
                                                        <br/><br/>
                                                        <p className={"italic"}>Copied!</p>
                                                    </>
                                                    : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </animated.div>
                ) : null}
                <div className={"mx-auto justify-center flex"}>
                    <iframe
                        className={"md:w-8/12 w-11/12"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.91691799132724!2d107.00956597389813!3d-6.1748235621412055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69897e62a7723f%3A0xcb4d89ec42c233e5!2sJl.%20Gotong%20Royong%20No.15%2C%20RT.011%2FRW.011%2C%20Kaliabang%20Tengah%2C%20Kec.%20Bekasi%20Utara%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017125!5e0!3m2!1sid!2sid!4v1686967474736!5m2!1sid!2sid"
                        height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                
                <div className={"-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}
