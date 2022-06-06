/* eslint-disable @next/next/no-img-element */
import { Button, Col, Row } from "antd";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { LindedInIcon } from "../icon";
import { SunIcon } from "../icon/components/SunIcon";
import { SBanner } from "./styled";

const BannerIndex: NextPage = () => {
    return (
        <SBanner>
            <Row className="wrap-head">
                <Col span={12}>
                    <div>
                        <div className="bns-pb-5">
                            <SunIcon className="sun-icon" />
                            <span className="bns-ml-1 join">Hãy tham gia </span>
                        </div>
                        <div className="title bns-pt-2">
                            <span>TỎA SÁNG CÙNG</span> <br />
                            <span className="company">DOANH NGHIỆP</span> <br />
                            <span>VIỆT NAM</span>
                        </div>
                        <div className="bns-pt-5">
                            <span className="title-sub">
                                BNS Vietnam cùng bạn chạm tới ước mơ
                            </span>
                            <div className="bns-pt-3">
                                <ul>
                                    <li>
                                        Lower charge, better value, save our
                                        cost{" "}
                                    </li>
                                    <li className="bns-pt-2">
                                        50 success cases study in Vietnam
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn bns-pt-3">
                            <Button className="btn-banner">
                                View our team
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <Image
                        src="/asset/image/home/banner-home.png"
                        alt="banner"
                        layout="intrinsic"
                        width={574}
                        height={483}
                        loading="eager"
                    />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <div>
                        <div className="footer-banner">
                            <span>
                                “A comprehensive mindset of strategy for Vietnam
                                FDI Post Covid 19”
                            </span>
                        </div>
                        <div className="bns-flex bns-align-items-center">
                            <LindedInIcon className="linded-icon" />
                            <div className="bns-flex bns-flex-column bns-pl-2">
                                <span className="follow">
                                    Follow on LindedIn
                                </span>
                                <span className="bns-vn">bns-vietnam</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </SBanner>
    );
};

export default BannerIndex;
