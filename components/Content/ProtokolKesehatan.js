import Image from "next/image";
import MaskBottom from "../../assets/mask_bottom.png";
import MaskTop from "../../assets/mask.png";
import BungaKiri from "../../assets/leaves-left.png";
import BungaKanan from "../../assets/leaves-right.png";
import Distance from '../../assets/distance.png'

export default function ProtokolKesehatan({}) {
    return (
        <>
            <div className={"bg-color-pallete-200 bg-cover bg-bottom"}>
                <Image src={MaskBottom}/>
                <div className={"container mx-auto pt-5"}>
                    <div className={"flex justify-center items-center content-center"}>
                        <Image src={BungaKiri} width={150} height={150}/>
                        <h1 className={"md:text-6xl text-center  text-5xl md:mb-0 font-medium text-white leading-relaxed font-curs"}>&nbsp;Protokol
                            Kesehatan&nbsp;</h1>
                        <Image src={BungaKanan} width={150} height={150}/>
                    </div>
                    <br/>
                    <br/>
                    <div className={"text-center px-10"}>
                        <p className={"leading-relaxed mb-10 text-white"}>Demi keamanan dan kenyamanan bersama, para
                            hadirin
                            undangan dihimbau untuk memenuhi beberapa peraturan berikut:
                        </p>
                        <div className={"flex mx-auto justify-center text-white"}>
                            <div className={"md:w-3/12 w-6/12"}>
                                <h4 className={"font-bold "}>Menjaga Jarak
                                </h4>
                                <Image src={Distance}/>
                                <p>Saling menjaga jarak ketika menghadiri acara</p>
                            </div>
                            <div className={"md:w-3/12 w-6/12"}>
                                <h4 className={"font-bold "}>Menggunakan Masker
                                </h4>
                                <Image src={Distance}/>
                                <p>Wajib menggunakan masker selama acara berlangsung</p>
                            </div>
                            <div className={"md:w-3/12 w-6/12"}>
                                <h4 className={"font-bold"}>Mencuci Tangan
                                </h4>
                                <Image src={Distance}/>
                                <p>Mencuci tangan dan menggunakan hand sanitizer</p>
                            </div>
                            <div className={"md:w-3/12 w-6/12"}>
                                <h4 className={"font-bold "}>Saling Menjaga Jarak di Dalam Acara
                                </h4>
                                <Image src={Distance}/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={"-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}