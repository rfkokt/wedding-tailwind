import Image from "next/image";
import Instagram from '../../../assets/instagram.png'

export default function Pengantin() {
    return (
        <>
            <div className={"container mx-auto hidden md:block"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                        <div className={"flex items-center justify-center"}>
                            <img
                                className={"rounded-full bg-auto h-[200px] w-[200px]"}
                                src="https://i.ibb.co/LvLqZYp/20211111-190428-removebg-preview-1-removebg-preview-4.png"
                                alt=""/>
                        </div>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 "}>-
                            Novi
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>Novia
                            Trie Rizkiyanti,A.Md.Kes</h1>
                        <br/>
                        <p className={"text-white"}>
                            Putri Ketiga <br/><span className={"font-bold"}> Bpk. Abdul Hamid & Ibu Mas`ulah (Almh)

                    </span>
                        </p>
                    </div>
                    <div className={'md:w-6/12 w-full '}>
                        <div className={"flex items-center justify-center"}>
                            <img
                                className={"rounded-full  w-[200px] h-[200px]"}
                                src="https://i.ibb.co/5Y5ryWq/IMG-20190116-230737-removebg-preview-removebg-preview-4.png"
                                alt=""/>
                        </div>

                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5"}>-
                            Rifki
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>Rifki
                            Okta Pratama,S.T</h1>
                        <br/>
                        <p className={"text-white mb-5 md:mb-0"}>
                            Putra Pertama <br/> <span className={"font-bold"}>Bpk. Nazwan & Ibu Eri Yanti</span>
                        </p>
                    </div>


                </div>
            </div>
            {/*Mobile*/}
            <div className={"container mx-auto md:hidden"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 "}>-
                            Novi
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed font-curs"}>Novia
                            Trie Rizkiyanti,A.Md.Kes</h1>
                        <br/>
                        <p className={"text-white mb-5"}>
                            Putri Ketiga <br/><span className={"font-bold"}> Bpk. Abdul Hamid & Ibu Mas`ulah (Almh)
                    </span>
                        </p>

                    </div>
                    <div className={"flex items-center w-full justify-center"}>
                        <img
                            className={"rounded-full mr-10 w-[150px] h-[150px]"}
                            src="https://i.ibb.co/LvLqZYp/20211111-190428-removebg-preview-1-removebg-preview-4.png"
                            alt=""/>
                        <img
                            className={"rounded-full bg-auto h-[150px] w-[150px]"}
                            src="https://i.ibb.co/5Y5ryWq/IMG-20190116-230737-removebg-preview-removebg-preview-4.png"
                            alt=""/>
                    </div>
                    <div className={'md:w-6/12 w-full '}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5"}>-
                            Rifki
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed font-curs"}>Rifki
                            Okta Pratama,S.T</h1>
                        <br/>
                        <p className={"text-white mb-5 md:mb-0"}>
                            Putra Pertama <br/> <span className={"font-bold"}>Bpk. Nazwan & Ibu Eri Yanti</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
