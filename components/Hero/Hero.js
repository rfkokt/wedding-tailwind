import {motion} from "framer-motion";
import Image from "next/image";
import Bunga from '../../assets/bunga.png'
import {animated, useSpring} from "react-spring";
import MaskTop from "../../assets/mask.png";

export default function Hero({
                                 guest
                             }) {
    const fade = useSpring({
        from: {opacity: 0, y: 1000},
        to:
            {opacity: 1, y: 0},
        delay: 1000,
    })
    return (
        <>
            <div className={"bg-hero bg-cover bg-top"}>
                <div className={"text-center opacity-100"}>
                    <div className={"md:py-10 object-left-top"}>
                        <Image src={Bunga} width={512} height={282}/>
                    </div>
                    <animated.div style={fade}>
                        <h1 className={"md:text-6xl text-5xl md:mb-0 font-medium text-white leading-relaxed font-curs"}>The
                            Wedding Of</h1>
                        <h1
                            className={"md:text-5xl text-4xl font-medium text-white leading-relaxed md:mt-20 font-curs"}>Rifki
                            & Novia</h1>
                    </animated.div>
                    <p className={"text-white"}>Minggu. 5 Desember 2021</p>
                    {/*<Timer/>*/}
                    <p className={"text-white"}>Kepada Yth. Bapak/Ibu/Saudara/i</p>
                    <br/>
                    <div
                        className={"rounded-xl md:w-[600px] w-[300px] text-center justify-center bg-white mx-auto py-10 boxShadow group"}>
                        <h1 className={"text-3xl font-medium text-black leading-relaxed font-curs capitalize"}>{guest}</h1>
                    </div>
                    <br/>
                    <p className={"text-white italic pb-10"}>*Bila ada kesalahan nama/gelar mohon dimaklumi</p>

                </div>
                {/*</motion.div>*/}
                <div className={"-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
            <audio src={"../../assets/pernikahanImpian.mp3"}/>
        </>
    )
}