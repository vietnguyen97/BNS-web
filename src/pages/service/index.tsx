import { NextPage } from "next";
import React from "react";
import BreadcrumbIndex from "../../lib/shared/Breadcrumb";
import HeadMainIndex from "../../lib/shared/HeadMain";
import InformationBanner from "../../lib/shared/InfomationBanner";
import PageLayoutIndex from "../../lib/shared/PageLayout";
import TitleBannerIndex from "../../lib/shared/TitleBanner";

const ServicePage: NextPage = () => {
    return (
        <>
            <PageLayoutIndex>
                <>
                    <HeadMainIndex />
                    <BreadcrumbIndex />
                    <TitleBannerIndex title="Kế toán quản trị & thuế" />
                    <InformationBanner />
                </>
            </PageLayoutIndex>
        </>
    );
};

export default ServicePage;
