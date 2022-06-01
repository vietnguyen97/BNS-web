import { NextPage } from "next";
import React from "react";
import { SFooter } from "./styled";

const FooterIndex: NextPage = () => {
    return (
        <SFooter>
            <div className="bns-flex h-100 bns-justify-content-center bns-align-items-center">
                <div>
                    <span className="content">Term & Policy</span>
                </div>
                <div className="bns-mr-5 bns-ml-5">
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
