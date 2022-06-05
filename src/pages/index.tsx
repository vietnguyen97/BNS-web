import type { NextPage } from "next";
import AchievementIndex from "../lib/shared/Achievement";
import BannerIndex from "../lib/shared/Banner";
import FooterIndex from "../lib/shared/Footer";
import FooterInfomationIndex from "../lib/shared/FooterInfomation";
import HeadMainIndex from "../lib/shared/HeadMain";
import OurTeamIndex from "../lib/shared/OurTeam.tsx";
import PageLayoutIndex from "../lib/shared/PageLayout";
import PartnerIndex from "../lib/shared/Partner";

const Home: NextPage = () => {
    return (
        <>
            <PageLayoutIndex>
                <>
                    <HeadMainIndex />
                    <BannerIndex />
                    <OurTeamIndex />
                    <PartnerIndex />
                    <AchievementIndex />
                    <FooterInfomationIndex />
                </>
            </PageLayoutIndex>
            {/* <FooterIndex /> */}
        </>
    );
};

export default Home;
