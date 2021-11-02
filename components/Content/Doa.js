import Image from "next/image";
import MaskBottom from "../../assets/mask_bottom.png";
import Bunga from "../../assets/flower.png";
import Timer from "../Timer";
import MaskTop from "../../assets/mask.png";

export default function Doa({}) {
    return (
        <>
            <div className={"bg-color-pallete-150 bg-cover bg-bottom"}>
                <Image src={MaskBottom}/>
                <div className={"flex justify-center items-center content-center md:-mt-10"}>
                    <Image src={Bunga}/>
                </div>
                <div className={"container flex flex-wrap mx-auto pt-5"}>
                    <br/>
                    <div className="shadow-lg text-center md:w-5/12 md:ml-20 mb-6 px-3 py-10">
                        <h1 className={"md:text-6xl capitalize text-5xl md:mb-0 font-medium leading-relaxed font-mono"}>Akad
                            Nikah</h1>
                        <p className={"font-bold"}>Minggu, 05 Desember 2021</p>
                        <p className={"font-bold"}>11:00 - Selesai</p>
                        <br/>
                        <p className={"font-bold"}>Gedung Graha Cibening</p>
                        <p className={"px-16"}>Jalan Caman Raya No. 89, Jatibening II, Pondok Gede, RT.006/RW.003,
                            Jatibening, Kec.
                            Pondokgede, Kota Bks, Jawa Barat 17412</p>
                    </div>
                    <div className={"md:w-1/12"}>
                    </div>
                    <div className="shadow-lg text-center md:w-5/12 md:-ml-12 px-3 mb-6 py-10">
                        <h1 className={"md:text-6xl capitalize text-5xl md:mb-0 font-medium leading-relaxed font-mono"}>Resepsi</h1>
                        <p className={"font-bold"}>Minggu, 05 Desember 2021</p>
                        <p className={"font-bold"}>11:00 - Selesai</p>
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
                        className="bg-color-pallete-600 hover:bg-color-pallete-150 text-white font-bold py-2 px-4 rounded"
                        // onClick={showInMapClicked}
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
                </div>
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