import { NextPage } from "next";
import React from "react";
import BreadcrumbIndex from "../../lib/shared/Breadcrumb";
import FooterIndex from "../../lib/shared/Footer";
import FooterInfomationIndex from "../../lib/shared/FooterInfomation";
import HeadMainIndex from "../../lib/shared/HeadMain";
import InformationBanner from "../../lib/shared/InfomationBanner";
import InfomationNowIndex from "../../lib/shared/InfomationNow";
import PageLayoutIndex from "../../lib/shared/PageLayout";
import SendInfomationIndex from "../../lib/shared/SendInformation";
import ServiceAccountIndex from "../../lib/shared/ServiceAccount";
import TitleBannerIndex from "../../lib/shared/TitleBanner";
import {
    CONTENTfOOTERMAIN,
    CONTENTFOOTERSUB,
    CONTENTFOOTERSUBS,
    CONTENTHEADMAIN,
    CONTENTHEADSUB,
    IMAGE,
    TITLE,
} from "./contant";

const ServicePage: NextPage = () => {
    return (
        <>
            <PageLayoutIndex>
                <>
                    <HeadMainIndex />
                    <BreadcrumbIndex />
                    <TitleBannerIndex title="Kế toán quản trị & thuế" />
                    <InformationBanner
                        title={TITLE}
                        contentFooterMain={CONTENTfOOTERMAIN}
                        contentFooterSub={CONTENTFOOTERSUB}
                        contentHeadMain={CONTENTHEADMAIN}
                        contentHeadSub={CONTENTHEADSUB}
                        image={IMAGE}
                        contentFooterSubs={CONTENTFOOTERSUBS}
                    />
                    <InfomationNowIndex />
                    <ServiceAccountIndex />
                    <SendInfomationIndex />
                    <FooterInfomationIndex />
                </>
            </PageLayoutIndex>
            <FooterIndex />
        </>
    );
};

export default ServicePage;
