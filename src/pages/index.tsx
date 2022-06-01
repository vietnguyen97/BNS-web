import type { NextPage } from "next";
import BreadcrumbIndex from "../lib/shared/Breadcrumb";
import FooterIndex from "../lib/shared/Footer";
import HeadMainIndex from "../lib/shared/HeadMain";
import PageLayoutIndex from "../lib/shared/PageLayout";

const Home: NextPage = () => {
    return (
        <>
            <PageLayoutIndex>
                <>
                    <HeadMainIndex />
                    <BreadcrumbIndex />
                </>
            </PageLayoutIndex>
            <FooterIndex />
        </>
    );
};

export default Home;
