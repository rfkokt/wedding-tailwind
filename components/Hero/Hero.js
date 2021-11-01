import {motion} from "framer-motion";
import Image from "next/image";
import Bunga from '../../assets/bunga.png'
import Timer from "../Timer";
import MaskTop from "../../assets/mask.png";

export default function Hero({
                                 guest
                             }) {
    return (
        <>
            <div className={"bg-hero min-h-screen bg-cover bg-bottom"}>
                {/*<motion.div*/}
                {/*    initial={{scale: 0}}*/}
                {/*    animate={{rotate: 0, scale: 1}}*/}
                {/*    transition={{*/}
                {/*        type: "tween",*/}
                {/*        duration: 2,*/}
                {/*        // ease: "easeOut",*/}
                {/*        // stiffness: 260,*/}
                {/*        // damping: 20,*/}
                {/*        // delay: 1*/}
                {/*    }}*/}
                {/*>*/}
                    <div className={"text-center opacity-100"}>
                        <div className={"md:py-10 object-left-top"}>
                            <Image src={Bunga} width={512} height={282}/>
                        </div>
                        <h1 className={"md:text-6xl text-5xl md:mb-0 font-medium text-white leading-relaxed font-mono"}>The
                            Wedding Of</h1>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed md:mt-20 font-mono"}>Rifki
                            & Novia</h1>
                        <p className={"text-white"}>Minggu. 5 Desember 2021</p>
                        {/*<Timer/>*/}
                        <p className={"text-white"}>Kepada Yth. Bapak/Ibu/Saudara/i</p>
                        <br/>
                        <div
                            className={"rounded-xl md:w-[600px] w-[300px] text-center justify-center bg-white mx-auto py-10 boxShadow group"}>
                            <h1 className={"text-2xl font-medium text-black leading-relaxed font-mono capitalize"}>{guest}</h1>
                        </div>
                        <br/>
                        <p className={"text-white italic pb-10"}>*Bila ada kesalahan nama/gelar mohon dimaklumi</p>

                    </div>
                {/*</motion.div>*/}
                <div className={"-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}