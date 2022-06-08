/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import React from "react";
import { SInfomationBanner } from "./styled";

type Props = {
    title: string;
    contentHeadMain: string;
    contentHeadSub: string;
    image: string;
    contentFooterMain: string;
    contentFooterSub: string;
    contentFooterSubs?: string;
};
const InformationBanner = (props: Props) => {
    const {
        contentFooterMain,
        contentFooterSub,
        contentHeadMain,
        contentHeadSub,
        image,
        title,
        contentFooterSubs,
    } = props;
    return (
        <SInfomationBanner>
            <Row>
                <Col span={11}>
                    <div className="wrap-title">
                        <span className="title">
                            {title}
                        </span>
                    </div>
                </Col>
            </Row>
            <div className="common">
                <span className="content-head">
                    {contentHeadMain}
                </span>
            </div>
            <div>
                <span className="content-head">
                    {contentHeadSub}
                </span>
            </div>
            <Row className="content-footer">
                <Col span={12}>
                    <div>
                        <img
                            src={image}
                            alt="banner"
                        />
                    </div>
                </Col>
                <Col span={12} className="wrap-footer">
                    <div className="common">
                        <span className="content-head">
                            {contentFooterMain}
                        </span>
                    </div>
                    <div className="common">
                        <span className="content-head">
                            {contentFooterSub}
                        </span>
                    </div>
                    <div>
                        <span className="content-head">
                            {contentFooterSubs}
                        </span>
                    </div>
                </Col>
            </Row>
        </SInfomationBanner>
    );
};

export default InformationBanner;
