import "../../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    console.log('1111')
    cdiwqjdi
    return (
        <>
            <Head>
                <title>BNS</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
