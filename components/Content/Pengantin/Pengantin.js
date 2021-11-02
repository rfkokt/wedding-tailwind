import Image from "next/image";
import Instagram from '../../../assets/instagram.png'

export default function Pengantin() {
    return (
        <div className={"container mx-auto"}>

            <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                <div className={'md:w-6/12 w-full '}>
                    <div className={"flex items-center justify-center"}>
                        <img
                            className={"rounded-full  w-[300px] h-[300px]"}
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                            alt=""/>
                    </div>

                    <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5"}>-
                        Rifki
                        -</h1>
                    <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>Rifki
                        Okta Pratama,S.T</h1>
                    <br/>
                    <p className={"text-white mb-5 md:mb-0"}>
                        Putra Pertama <span className={"font-bold"}>Bpk. Nazwan & Ibu Eri Yanti</span>
                    </p>
                </div>
                <div className={'md:w-6/12 w-full'}>
                    <div className={"flex items-center justify-center"}>
                        <img
                            className={"rounded-full  w-[300px] h-[300px]"}
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                            alt=""/>
                    </div>
                    <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 "}>-
                        Novia
                        -</h1>
                    <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>Novia
                        Trie Rizkiyanti,A.Md.Kes</h1>
                    <br/>
                    <p className={"text-white"}>
                        Putri Ketiga<span className={"font-bold"}> Bpk. Abdul Hamid & Ibu Mas`ulah (Almh)
                    </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
