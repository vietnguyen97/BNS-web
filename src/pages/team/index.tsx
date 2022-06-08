import { NextPage } from "next";
import React from "react";
import BreadcrumbIndex from "../../lib/shared/Breadcrumb";
import HeadMainIndex from "../../lib/shared/HeadMain";
import PageLayoutIndex from "../../lib/shared/PageLayout";
import TeamSingleIndex from "../../lib/shared/TeamSingle";
import TitleBannerIndex from "../../lib/shared/TitleBanner";

const TeamPage: NextPage = () => {
    return (
        <>
            <PageLayoutIndex>
                <>
                    <HeadMainIndex />
                    <BreadcrumbIndex />
                    <TitleBannerIndex title="Đội ngũ" />
                    <TeamSingleIndex />
                </>
            </PageLayoutIndex>
        </>
    );
};

export default TeamPage;
