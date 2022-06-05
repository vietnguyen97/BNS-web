/* eslint-disable @next/next/no-img-element */
import { Button, Col, Row } from "antd";
import React from "react";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import { SPartner } from "./styled";

const PartnerIndex = () => {
    return (
        <SPartner>
            <div className="bns-flex bns-flex-column bns-align-items-start">
                <ButtonSwitchIcon className="btn-switch" />
                <span className="title">Đối tác</span>
            </div>
            <div>
                <span className="sub-title">Đối tác tạo nên giá trị</span>
            </div>
            <Row className="partner-img">
                <Col span={6}>
                    <img src="/asset/image/home/coinbase.png" alt="coinbase" />
                </Col>
                <Col span={6}>
                    <img
                        src="/asset/image/home/andreessen.png"
                        alt="andreessen"
                    />
                </Col>
                <Col span={6}>
                    <img src="/asset/image/home/nft.png" alt="nft" />
                </Col>
                <Col span={6}>
                    <img
                        src="/asset/image/home/quantstam.png"
                        alt="quantstam"
                    />
                </Col>
            </Row>
            <div className="bns-flex bns-justify-content-center btn-partner">
                <Button>Xem thêm</Button>
            </div>
        </SPartner>
    );
};

export default PartnerIndex;
