/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import React from "react";
import { STilePartner } from "./styled";

const TitlePartnerIndex = () => {
    return (
        <STilePartner>
            <Row>
                <Col span={11}>
                    <span className="title-left">
                        Grow your business with the right partner
                    </span>
                </Col>
                <Col span={2} />
                <Col span={11}>
                    <span className="title-right">
                        Cộng đồng Doanh nghiệp thế giới đã và đang đánh giá cao
                        môi trường kinh doanh và lợi thế cạnh tranh về vị trí
                        chiến lược số 1 khu vực Đông Nam Á của Việt Nam.
                    </span>
                </Col>
            </Row>
            <div className="bns-flex bns-justify-content-center img-banner">
                <img alt="banner" src="/asset/image/partner/banner.png" />
            </div>
        </STilePartner>
    );
};

export default TitlePartnerIndex;
