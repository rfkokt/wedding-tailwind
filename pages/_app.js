import 'tailwindcss/tailwind.css'
import 'aos/dist/aos.css'
import Head from "next/head";
import { useEffect } from 'react';
import AOS from 'aos';

function MyApp({Component, pageProps}) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic'
        });
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp
