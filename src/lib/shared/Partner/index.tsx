/* eslint-disable @next/next/no-img-element */
import { Button, Col, Row } from "antd";
import React from "react";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import { SPartner } from "./styled";
import { useRouter } from "next/router";

const PartnerIndex = () => {
    const router = useRouter();
    const handleRoute = (link: string) => {
        router.push(link);
    };
    return (
        <SPartner>
            <div className="bns-flex bns-flex-column bns-align-items-start bns-pb-2">
                <ButtonSwitchIcon className="btn-switch bns-pb-2" />
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
                <Button onClick={() => handleRoute("/partner")}>
                    Xem thêm
                </Button>
            </div>
        </SPartner>
    );
};

export default PartnerIndex;
