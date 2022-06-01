import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { LindedInIcon } from "../icon";
import { SFooterInfomationIndex } from "./styled";

const FooterInfomationIndex: NextPage = () => {
    return (
        <SFooterInfomationIndex>
            <div className="bns-flex">
                <div className="image">
                    <Image
                        alt="logo"
                        src="/asset/image/home/logo.png"
                        height={148}
                        width={164}
                    />
                </div>
                <div className="bns-flex bns-flex-column">
                    <div className="bns-mb-3">
                        <span className="title">
                            A power team with more than 30 years experience in{" "}
                            <br />
                            FDI firm in Vietnam & Global
                        </span>
                    </div>
                    <div className="bns-flex bns-align-items-center">
                        <div className="bns-pr-2">
                            <LindedInIcon />
                        </div>
                        <div className="bns-flex bns-flex-column">
                            <span className="follow">Follow on LindedIn</span>
                            <span className="bns-vn">bns-vietnam</span>
                        </div>
                    </div>
                </div>
            </div>
        </SFooterInfomationIndex>
    );
};

export default FooterInfomationIndex;
