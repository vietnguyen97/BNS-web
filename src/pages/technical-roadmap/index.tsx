import { NextPage } from "next";
import React from "react";
import BreadcrumbIndex from "../../lib/shared/Breadcrumb";
import {
    CONTENTfOOTERMAIN,
    CONTENTFOOTERSUB,
    CONTENTHEADMAIN,
    CONTENTHEADSUB,
    IMAGE,
    TITLE,
} from "../../lib/shared/Contant/contant-roadmap";
import FooterIndex from "../../lib/shared/Footer";
import FooterInfomationIndex from "../../lib/shared/FooterInfomation";
import HeadMainIndex from "../../lib/shared/HeadMain";
import InformationBanner from "../../lib/shared/InfomationBanner";
import InfomationNowIndex from "../../lib/shared/InfomationNow";
import PageLayoutIndex from "../../lib/shared/PageLayout";
import ReviewUsIndex from "../../lib/shared/ReviewUs";
import RoadmapContentIndex from "../../lib/shared/RoadmapContent";
import SendInfomationIndex from "../../lib/shared/SendInformation";
import TitleBannerIndex from "../../lib/shared/TitleBanner";

const TechnicalRoadmapPage: NextPage = () => {
    return (
        <>
            <PageLayoutIndex>
                <>
                    <HeadMainIndex />
                    <BreadcrumbIndex />
                    <TitleBannerIndex title="Tư vấn lộ trình công nghệ" />
                    <InformationBanner
                        title={TITLE}
                        contentFooterMain={CONTENTfOOTERMAIN}
                        contentFooterSub={CONTENTFOOTERSUB}
                        contentHeadMain={CONTENTHEADMAIN}
                        contentHeadSub={CONTENTHEADSUB}
                        image={IMAGE}
                    />
                    <InfomationNowIndex />
                    <RoadmapContentIndex />
                    <ReviewUsIndex />
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

export default TechnicalRoadmapPage;
