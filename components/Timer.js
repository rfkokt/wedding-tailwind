import {useEffect, useState} from "react";


export default function Timer() {
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("12/4/2021 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setPartyTime(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={"flex md:w-5/12 w-full mx-auto mb-8"}>
                <div
                    className={"w-3/12 text-center justify-center py-10 shadow-xl mr-5 ml-5 box-border"}>
                    <h1 className={"text-2xl font-medium text-color-pallete-200 leading-relaxed"}>{days} <br/> <span
                        className={"text-blackContent"}>Hari</span></h1>
                </div>
                <div
                    className={"w-3/12 text-center justify-center py-10 shadow-xl mr-5"}>
                    <h1 className={"text-2xl font-medium text-color-pallete-200 leading-relaxed"}>{hours} <br/> <span
                        className={"text-blackContent"}>Jam</span></h1>
                </div>
                <div
                    className={"w-3/12 text-center justify-center py-10 shadow-xl mr-5"}>
                    <h1 className={"text-2xl font-medium text-color-pallete-200 leading-relaxed"}>{minutes} <br/> <span
                        className={"text-blackContent"}>Menit</span>
                    </h1>
                </div>
                <div
                    className={"w-3/12 text-center justify-center py-10 shadow-xl mr-5"}>
                    <h1 className={"text-2xl font-medium text-color-pallete-200 leading-relaxed"}>{seconds} <br/> <span
                        className={"text-blackContent"}>Detik</span>
                    </h1>
                </div>
            </div>
        </>
    )
}