import type { NextPage } from "next";
import FooterIndex from "../lib/shared/Footer";
import HeadMainIndex from "../lib/shared/HeadMain";
import PageLayoutIndex from "../lib/shared/PageLayout";
import SendInfomationIndex from "../lib/shared/SendInformation";

const Home: NextPage = () => {
    return (
        <>
            <PageLayoutIndex>
                <>
                    <HeadMainIndex />
                    <SendInfomationIndex />
                </>
            </PageLayoutIndex>
            <FooterIndex />
        </>
    );
};

export default Home;
