import Image from "next/image";
import { weddingData } from "../../../config/data";

export default function Pengantin() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row flex-wrap text-center mt-10 pb-10 justify-center">
                {/* Bride / Novi */}
                <div className="md:w-5/12 w-full mb-12 md:mb-0" data-aos="fade-up">
                    <div className="flex items-center justify-center">
                        <Image
                            className="rounded-full bg-auto"
                            src={weddingData.bride.image}
                            alt={weddingData.bride.name}
                            width={200}
                            height={200}
                        />
                    </div>
                    <h2 className="md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5">
                        - {weddingData.bride.nickname} -
                    </h2>
                    <h3 className="md:text-4xl text-3xl font-medium text-white leading-relaxed font-curs mt-2">
                        {weddingData.bride.name}
                    </h3>
                    <br/>
                    <p className="text-white">
                        {weddingData.bride.ordinal} <br/>
                        <span className="font-bold">{weddingData.bride.parents}</span>
                    </p>
                </div>

                {/* Groom / Rifki */}
                <div className="md:w-5/12 w-full" data-aos="fade-up" data-aos-delay="200">
                    <div className="flex items-center justify-center">
                        <Image
                            className="rounded-full bg-auto"
                            src={weddingData.groom.image}
                            alt={weddingData.groom.name}
                            width={200}
                            height={200}
                        />
                    </div>

                    <h2 className="md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5">
                        - {weddingData.groom.nickname} -
                    </h2>
                    <h3 className="md:text-4xl text-3xl font-medium text-white leading-relaxed font-curs mt-2">
                        {weddingData.groom.name}
                    </h3>
                    <br/>
                    <p className="text-white mb-5 md:mb-0">
                        {weddingData.groom.ordinal} <br/>
                        <span className="font-bold">{weddingData.groom.parents}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
