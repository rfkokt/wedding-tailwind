import Image from "next/image";
import Instagram from '../../../assets/instagram.png'

export default function Pengantin() {
    return (
        <>
            <div className={"container mx-auto hidden md:block"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5"}>-
                            Aziz
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>Aziz Dhaifullah,A.Md.T</h1>
                        <br/>
                        <p className={"text-white mb-5 md:mb-0"}>
                            Putra Pertama <br/> <span className={"font-bold"}>Bpk. H.Agus Mirzal,S.E & Ibu Hj.Yuni Arsih</span>
                        </p>
                        
                    </div>
                    <div className={'md:w-6/12 w-full '}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 "}>-
                            Icha
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>Icha Utami,S.Pi</h1>
                        <br/>
                        <p className={"text-white"}>
                            Putri Pertama <br/><span className={"font-bold"}> Bpk. Ponosono & Ibu Manise (Almh)</span>
                        </p>
                    </div>


                </div>
            </div>
            {/*Mobile*/}
            <div className={"container mx-auto md:hidden"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 "}>-
                            Icha
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed font-curs"}>Icha Utami,S.Pi</h1>
                        <br/>
                        <p className={"text-white mb-5"}>
                            Putri Pertama <br/><span className={"font-bold"}> Bpk. Ponosono & Ibu Manise (Almh)
                    </span>
                        </p>

                    </div>
                    <div className={'md:w-6/12 w-full '}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5"}>-
                            Aziz
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed font-curs"}>Aziz Dhaifullah,A.Md.T</h1>
                        <br/>
                        <p className={"text-white mb-5 md:mb-0"}>
                            Putra Pertama <br/> <span className={"font-bold"}>Bpk. H.Agus Mirzal & Ibu Hj.Yuni Arsih</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
