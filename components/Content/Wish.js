import Image from "next/image";
import MaskBottom from '../../assets/mask_bottom.png'
import Bunga from "../../assets/flower.png";
import MaskTop from "../../assets/mask.png";
import Card from "./Card";

export default function Wish() {
    const checkData = (r) => {
        console.log('debug', r.target.value)
    }
    return (
        <>
            <div className={"bg-color-white bg-cover container bg-bottom"}>
                <Image src={MaskBottom}/>
                <div className={"flex justify-center items-center content-center md:-mt-10 mb-10"}>
                    <Image src={Bunga}/>
                </div>
                <div className={"flex justify-center items-center content-center"}>
                    <h1 className={"md:text-6xl text-center  text-5xl md:mb-0 font-medium text-black leading-relaxed font-curs"}>&nbsp;Kirimkan
                        Ucapan & Doa untuk kami&nbsp;</h1>
                </div>
                <div className={"flex justify-center items-center content-center"}>

                    <div className="shadow-lg mx-auto md:w-8/12 w-11/12 mb-6 px-3 py-10">
                        <label className="block text-gray-700 md:text-lg font-bold mb-2" htmlFor="username">
                            Nama
                        </label>
                        <input type="text"
                               placeholder="Nama.."
                            // value={tamu}
                               onChange={(e) => e.target.value}
                               className={" text-sm appearance-none border-none bg-transparent" +
                               "justify-center leading-tight focus:outline-none text-black capitalize mb-10"}/>
                        <label className="block text-gray-700 md:text-lg font-bold mb-2" htmlFor="username">
                            Hubungan
                        </label>
                        <input type="text"
                               placeholder="Teman/Sahabat/Keluarga.."
                            // value={tamu}
                               onChange={(e) => e.target.value}
                               className={" text-sm appearance-none border-none bg-transparent" +
                               "justify-center leading-tight focus:outline-none text-black capitalize mb-10"}/>
                        <label className="block text-gray-700 md:text-lg font-bold mb-2" htmlFor="username">
                            Ucapan & Doa
                        </label>
                        <textarea type="text"
                                  placeholder="Ucapan & Doa..."
                            // value={tamu}
                                  onChange={(e) => e.target.value}
                                  className={"text-sm h-[200px] appearance-none border-none bg-transparent" +
                                  "justify-center leading-tight focus:outline-none text-black capitalize"}/>
                        <div>
                            <label className="block text-gray-700 md:text-lg font-bold mb-2" htmlFor="username">
                                Apakah anda berkenan hadir?
                            </label>
                            <label className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    className="form-radio"
                                    name="radio"
                                    value="1"
                                    checked
                                    onClick={(e) => {
                                        checkData(e)
                                    }}
                                />
                                <span className="ml-2">Hadir</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio" name="radio" value="2"
                                       onClick={(e) => {
                                           checkData(e)
                                       }}
                                />
                                <span className="ml-2">Tidak Hadir</span>
                            </label>
                        </div>
                        <br/>
                        <button
                            className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded"
                        >
                            <p className={"flex"}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                                    <path
                                        d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                                </svg>
                                &nbsp;
                                Kirim Pesan
                            </p>
                        </button>
                    </div>
                </div>
                <div className={"flex justify-center items-center content-center"}>
                    <h1 className={"md:text-6xl text-center my-5 text-5xl font-medium text-black leading-relaxed font-curs"}>&nbsp;Doa
                        dari kalian ♥&nbsp;</h1>
                </div>
                <div className={"flex flex-wrap justify-center overflow-auto md:h-128 h-96"}>
                    <div className={"lg:w-3/12 w-full lg:ml-10 lg:mb-0 ml-5 mb-10 mx-5 ml-4 "}>
                        <Card
                            name={"Rifki Okta Pratama"}
                            desc={"With high resolution camera,\n" +
                            "picture become clear and beautiful.\n" +
                            "It’s so easy to operate drone."}
                            work={"Keluarga"}
                        />
                    </div>
                    <div className={" lg:w-3/12 w-full  lg:ml-10 lg:mb-0 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Jennie Obrien"}
                            desc={"Taking high view video become easy and faster. Battery performance really helping for making film."}
                            work={"Director Film"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                    <div className={"lg:w-3/12 w-full  lg:ml-10 lg:mb-5 ml-5 mb-10 mx-5 ml-4"}>
                        <Card
                            name={"Lisa Millz"}
                            desc={"Making video content for my trip\n" +
                            "vlog so powerful and wonderful.\n" +
                            "Love the video quality."}
                            work={"Content WQCreator"}
                        />
                    </div>
                </div>

                <div className={"-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}
