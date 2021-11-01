import {useEffect, useState} from "react";


export default function Timer(){
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

    return(
        <>
            <div className={"flex md:w-4/12 w-full mx-auto"}>
                <div
                    className={"w-3/12 text-center justify-center py-10 boxShadow group"}>
                    <h1 className={"text-2xl font-medium text-white leading-relaxed"}>{days} <br/> Hari</h1>
                </div>
                <div
                    className={"w-3/12 text-center justify-center py-10 boxShadow group"}>
                    <h1 className={"text-2xl font-medium text-white leading-relaxed"}>{hours} <br/> Jam</h1>
                </div>
                <div
                    className={"w-3/12 text-center justify-center py-10 boxShadow group"}>
                    <h1 className={"text-2xl font-medium text-white leading-relaxed"}>{minutes} <br/> Menit</h1>
                </div>
                <div
                    className={"w-3/12 text-center justify-center py-10 boxShadow group"}>
                    <h1 className={"text-2xl font-medium text-white leading-relaxed"}>{seconds} <br/> Detik</h1>
                </div>
            </div>
        </>
    )
}