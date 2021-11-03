import Image from "next/image";
import BungaKiri from '../../assets/leaves-left.png'
import BungaKanan from '../../assets/leaves-right.png'
import MaskTop from '../../assets/mask.png'
import MaskBottom from '../../assets/mask_bottom.png'
import Pengantin from "./Pengantin/Pengantin";
import Waktu from "./Waktu";

export default function Mempelai() {

    return (
        <>
            <div className={"bg-color-pallete-200 bg-cover bg-bottom"}>
                <Image src={MaskBottom}/>
                <div className={"container mx-auto pt-5"}>
                    <div className={"flex justify-center items-center text-center "}>
                        <p className={"text-white md:w-6/12 mb-8 md:text-4xl text-2xl mx-10"}>وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم
                            مِّنْ أَنفُسِكُمْ أَزْوَٰجًا
                            لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ
                            لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ</p>

                    </div>
                    <p className={"text-white flex justify-center items-center text-center md:mx-40 mx-10 mb-8"}>“Dan di antara
                        tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari
                        jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
                        diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
                        tanda-tanda bagi kaum yang berfikir.”</p>
                    <p className={"text-white flex justify-center items-center text-center md:mx-40 mb-8 font-bold"}>
                        (QS Ar-Rum : 21)
                    </p>
                    <div className={"flex justify-center items-center content-center"}>
                        <Image src={BungaKiri} width={150} height={150}/>
                        <h1 className={"md:text-6xl text-center  text-5xl md:mb-0 font-medium text-white leading-relaxed font-curs"}>&nbsp;Groom
                            & Bride&nbsp;</h1>
                        <Image src={BungaKanan} width={150} height={150}/>
                    </div>
                    <br/>
                    <div className={"text-center px-10"}>
                        <p className={"leading-relaxed  text-white"}>Assalamu’alaikum Warahmatullahi Wabarakatuh
                            Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
                            Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri
                            kami:
                        </p>
                    </div>
                    <Pengantin/>
                </div>
                <div className={"flex md:-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}
