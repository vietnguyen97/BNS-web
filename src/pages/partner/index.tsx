import { NextPage } from "next";
import React from "react";
import BreadcrumbIndex from "../../lib/shared/Breadcrumb";
import FooterIndex from "../../lib/shared/Footer";
import FooterInfomationIndex from "../../lib/shared/FooterInfomation";
import HeadMainIndex from "../../lib/shared/HeadMain";
import PageLayoutIndex from "../../lib/shared/PageLayout";
import PartnerUsIndex from "../../lib/shared/PartnerUs";
import SendInfomationIndex from "../../lib/shared/SendInformation";
import TitleBannerIndex from "../../lib/shared/TitleBanner";
import TitlePartnerIndex from "../../lib/shared/TitlePartner";

const PartnerPage: NextPage = () => {
    return (
        <>
            <PageLayoutIndex>
                <>
                    <HeadMainIndex />
                    <BreadcrumbIndex />
                    <TitleBannerIndex title="Đối tác của chúng tôi" />
                    <TitlePartnerIndex />
                    <PartnerUsIndex />
                    <SendInfomationIndex />
                    <FooterInfomationIndex />
                </>
            </PageLayoutIndex>
            <FooterIndex />
        </>
    );
};

export default PartnerPage;
