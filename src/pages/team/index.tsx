import { NextPage } from "next";
import React from "react";
import BreadcrumbIndex from "../../lib/shared/Breadcrumb";
import FooterIndex from "../../lib/shared/Footer";
import FooterInfomationIndex from "../../lib/shared/FooterInfomation";
import HeadMainIndex from "../../lib/shared/HeadMain";
import PageLayoutIndex from "../../lib/shared/PageLayout";
import SendInfomationIndex from "../../lib/shared/SendInformation";
import TeamAllIndex from "../../lib/shared/TeamAll";
import TeamSingleIndex from "../../lib/shared/TeamSingle";
import TitleBannerIndex from "../../lib/shared/TitleBanner";
import ValueTeamIndex from "../../lib/shared/ValueTeam";
import WorkTeamIndex from "../../lib/shared/WorkTeam";

const TeamPage: NextPage = () => {
    return (
        <>
            <PageLayoutIndex>
                <>
                    <HeadMainIndex />
                    <BreadcrumbIndex />
                    <TitleBannerIndex title="Đội ngũ" />
                    <TeamSingleIndex />
                    <ValueTeamIndex />
                    <TeamAllIndex />
                    <WorkTeamIndex />
                    <SendInfomationIndex />
                    <FooterInfomationIndex />
                </>
            </PageLayoutIndex>
            <FooterIndex />
        </>
    );
};

export const getStaticProps = async () => {
    return {
        props: {},
    };
};

export default TeamPage;
