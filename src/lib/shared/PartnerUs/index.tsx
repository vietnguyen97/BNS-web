/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import React, { useState } from "react";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import { SPartnerUs } from "./styled";

const PartnerUsIndex = () => {
    const [data] = useState([1, 2, 3, 4]);
    return (
        <SPartnerUs>
            <div className="bns-flex bns-flex-column bns-align-items-center bns-pb-2">
                <ButtonSwitchIcon className="btn-switch bns-pb-2" />
                <span className="our-team">Our team</span>
            </div>
            <div className="bns-flex bns-justify-content-center team">
                <span>Những gương mặt tiêu biểu</span>
            </div>
            {data.map(el => (
                <Row className="partner-img" key={el}>
                    <Col span={6} className="common">
                        <img
                            src="/asset/image/home/andreessen.png"
                            alt="andreessen"
                        />
                    </Col>
                    <Col span={6} className="common">
                        <img
                            src="/asset/image/home/coinbase.png"
                            alt="coinbase"
                        />
                    </Col>
                    <Col span={6} className="common">
                        <img src="/asset/image/home/nft.png" alt="nft" />
                    </Col>
                    <Col span={6} className="common">
                        <img
                            src="/asset/image/home/quantstam.png"
                            alt="quantstam"
                        />
                    </Col>
                </Row>
            ))}
        </SPartnerUs>
    );
};

export default PartnerUsIndex;
