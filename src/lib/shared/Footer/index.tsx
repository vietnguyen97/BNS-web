import { NextPage } from "next";
import React from "react";
import { SFooter } from "./styled";
import { useRouter } from "next/router";

const FooterIndex: NextPage = () => {
    const router = useRouter();
    const handleRoute = (link: string) => {
        router.push(link);
    };
    return (
        <SFooter>
            <div className="bns-flex h-100 bns-justify-content-center bns-align-items-center">
                <div>
                    <span className="content">Term & Policy</span>
                </div>
                <div
                    className="bns-mr-5 bns-ml-5"
                    onClick={() => handleRoute("/team")}
                >
                    <span className="content">About us</span>
                </div>
                <div>
                    <span className="content">Contact us</span>
                </div>
            </div>
        </SFooter>
    );
};

export default FooterIndex;
