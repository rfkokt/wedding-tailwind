import Image from "next/image";
import MaskBottom from '../../assets/mask_bottom.png'
import Pengantin from "./Pengantin/Pengantin";
import Bunga from "../../assets/flower.png";

export default function BawahMempelai() {

    return (
        <>
            <div className={"bg-color-white bg-cover bg-bottom"}>
                <Image src={MaskBottom}/>
                <div className={"container mx-auto pt-5"}>
                    <div className={"flex justify-center items-center content-center md:-mt-10"}>
                        <Image src={Bunga}/>
                    </div>
                    <br/>
                    <div className={"text-center px-10"}>
                        <p className={"leading-relaxed  text-black"}>Assalamu’alaikum Warahmatullahi Wabarakatuh
                            Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
                            Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri
                            kami:
                        </p>
                    </div>
                    <Pengantin/>
                </div>
            </div>
        </>
    )
}
