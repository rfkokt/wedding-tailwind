import Image from "next/image";
import MaskBottom from "../../assets/mask_bottom.png";
import MaskTop from "../../assets/mask.png";
import BungaKiri from "../../assets/leaves-left.png";
import BungaKanan from "../../assets/leaves-right.png";
import Distance from '../../assets/distance.png'
import Masker from '../../assets/masker.png'
import Hand from '../../assets/washing-hands.png'
import Suhu from '../../assets/thermometer.png'

export default function ProtokolKesehatan({}) {
    return (
        <>
            <div className={"bg-color-pallete-200 bg-cover bg-bottom"}>
                <Image src={MaskBottom} alt="Mask Bottom"/>
                <div className={"container mx-auto pt-5"}>
                    <div className={"flex justify-center items-center content-center"} data-aos="zoom-in">
                        <Image src={BungaKiri} width={150} height={150} alt="Bunga Kiri"/>
                        <h2 className={"md:text-6xl text-center  text-5xl md:mb-0 font-medium text-white leading-relaxed font-curs"}>&nbsp;Protokol
                            Kesehatan&nbsp;</h2>
                        <Image src={BungaKanan} width={150} height={150} alt="Bunga Kanan"/>
                    </div>
                    <br/>
                    <br/>
                    <div className={"text-center px-10"}>
                        <p className={"leading-relaxed mb-10 text-white"} data-aos="fade-up">Demi keamanan dan kenyamanan bersama, para
                            hadirin
                            undangan dihimbau untuk memenuhi beberapa peraturan berikut:
                        </p>
                        <div className={"flex flex-wrap mx-auto justify-center text-white w-full"}>
                            <div className={"md:w-3/12 w-6/12 mb-10"} data-aos="fade-up" data-aos-delay="100">
                                <h4 className={"font-bold "}>Menjaga <br className={"md:hidden"}/> Jarak
                                </h4>
                                <Image src={Distance} width={100} height={100} alt="Jaga Jarak"/>
                                <p>Saling menjaga jarak ketika menghadiri acara</p>
                            </div>
                            <div className={"md:w-3/12 w-6/12 mb-10"} data-aos="fade-up" data-aos-delay="200">
                                <h4 className={"font-bold "}>Menggunakan Masker
                                </h4>
                                <Image src={Masker} width={100} height={100} alt="Gunakan Masker"/>
                                <p>Wajib menggunakan masker selama acara berlangsung</p>
                            </div>
                            <div className={"md:w-3/12 w-6/12 mb-10"} data-aos="fade-up" data-aos-delay="300">
                                <h4 className={"font-bold"}>Mencuci Tangan
                                </h4>
                                <Image src={Hand} width={100} height={100} alt="Cuci Tangan"/>
                                <p>Mencuci tangan dan menggunakan hand sanitizer</p>
                            </div>
                            <div className={"md:w-3/12 w-6/12 mb-10"} data-aos="fade-up" data-aos-delay="400">
                                <h4 className={"font-bold "}>Cek Suhu Tubuh
                                </h4>
                                <Image src={Suhu} width={100} height={100} alt="Cek Suhu"/>
                                <p>Cek suhu ketika hendak memasuki ruangan acara</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={"-mb-2 flex"}>
                    <Image src={MaskTop} alt="Mask Top"/>
                </div>
            </div>
        </>
    )
}