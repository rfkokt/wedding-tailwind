import Image from "next/image";
import MaskBottom from '../../assets/mask_bottom.png'
import Bunga from "../../assets/flower.png";
import Ring from '../../assets/ring.png'
import Wedding from '../../assets/Resepsi.png'
import Timer from "../Timer";
import MaskTop from "../../assets/mask.png";
import {useState} from "react";
import {useSpring, animated} from "react-spring";
import Instagram from "../../assets/instagram.png";

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
        window.open("https://www.google.com/maps/place/Gedung+Serbaguna+Graha+Cibening,+Jalan+Caman+Raya+No.+89,+Jatibening+II,+Pondok+Gede,+RT.006%2FRW.003,+Jatibening,+Kec.+Pondokgede,+Kota+Bks,+Jawa+Barat+17412/@-6.264685,106.94529,16z/data=!4m2!3m1!1s0x2e698d107ea38e83:0xb701d016f793eb9b?hl=id&gl=ID");
    };

    const copyText = (e) => {
        const rekeningRifki = 1242725876
        const rekeningNovia = 7510870438
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
                        <p className={"font-bold"}>Minggu, 05 Desember 2021</p>
                        <p className={"font-bold"}>08:00 - 10:00</p>
                        <p className={"font-bold"}>(Khusus Keluarga)</p>
                        <a href="https://www.instagram.com/noviavia19/" target={"_blank"} rel="noreferrer">
                            <button
                                className="hover:bg-color-pallete-600 text-black font-bold py-2 px-4 rounded"
                            >
                                <p className={"flex"}>
                                    <Image src={Instagram} width={25} height={25}/>
                                    &nbsp;
                                    Live Instagram
                                </p>
                                <p>@noviavia19</p>
                            </button>
                        </a>
                        <br/>
                        <p className={"font-bold"}>Gedung Graha Cibening</p>
                        <p className={"px-16"}>Jalan Caman Raya No. 89, Jatibening II, Pondok Gede, RT.006/RW.003,
                            Jatibening, Kec.
                            Pondokgede, Kota Bks, Jawa Barat 17412</p>
                    </div>
                    <div className={"md:w-1/12"}>
                    </div>
                    <div className="shadow-lg text-center md:w-5/12 md:-ml-12 px-3 mb-6 py-10">
                        <Image src={Wedding} width={100} height={100}/>
                        <h1 className={"md:text-6xl capitalize text-5xl md:mb-0 font-medium leading-relaxed font-curs"}>Resepsi</h1>
                        <p className={"font-bold"}>Minggu, 05 Desember 2021</p>
                        <p className={"font-bold"}>11:00 - 16:00</p>
                        <br/>
                        <p className={"font-bold"}>Gedung Graha Cibening</p>
                        <p className={"px-16"}>Jalan Caman Raya No. 89, Jatibening II, Pondok Gede, RT.006/RW.003,
                            Jatibening, Kec.
                            Pondokgede, Kota Bks, Jawa Barat 17412</p>
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
                                            <div className={"mb-10 md:mb-0 md:mr-3 mr-0"}>
                                                <h3>1242725876 - BNI
                                                    <br/>
                                                    An Rifki Okta Pratama </h3>
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
                                                <h3>7510870438 - BCA
                                                    <br/>
                                                    An Novia Trie Rizkiyanti </h3>
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
                                            <div>
                                                <h3><span
                                                    className={"font-bold"}>Kediaman mempelai wanita : <br/></span>Jl.
                                                    Caman Raya Gg. H. Moh. Ali <br/>(Belakang Kopi bob) <br/>No.1 RT
                                                    07/03, Jatibening.</h3>
                                                <button
                                                    className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-5 md:mb-0"
                                                    onClick={() => {
                                                        copyText('alamat')
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
                                                        Copy Address
                                                    </p>
                                                </button>
                                                {copied.alamat ?
                                                    <>
                                                        <br/><br/>
                                                        <p className={"italic"}>Copied!</p>
                                                    </>
                                                    : null}
                                            </div>
                                            <h3><span
                                                className={"font-bold"}>Setelah transfer, mohon konfirmasi ke nomor dibawah ini : <br/></span>Novi
                                                : <br/>08997497842 <br/>Rifki : <br/> 089635112452</h3>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9927355798764!2d106.94310101449379!3d-6.264684595465545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d107ea38e83%3A0xb701d016f793eb9b!2sGedung%20Serbaguna%20Graha%20Cibening!5e0!3m2!1sid!2sid!4v1635829099069!5m2!1sid!2sid"
                        height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className={"-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}
