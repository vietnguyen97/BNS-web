/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import React from "react";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import { SRoadmapContent } from "./styled";

const RoadmapContentIndex = () => {
    return (
        <SRoadmapContent>
            <Row>
                <Col span={12}>
                    <div className="bns-justify-content-end bns-flex">
                        <img
                            alt="content"
                            src="/asset/image/roadmap/content-img.png"
                        />
                    </div>
                </Col>
                <Col span={2} />
                <Col span={10}>
                    <div>
                        <div className="bns-flex bns-flex-column bns-pb-2 bns-align-items-start case">
                            <ButtonSwitchIcon className="btn-switch" />
                            <span className="bns-pb-2 vision">Thành tựu</span>
                            <span className="case-study">Case Study</span>
                        </div>
                        <div className="bns-flex bns-flex-column common">
                            <span className="bns-mb-5 Q1 common-quanlity">
                                Q1
                            </span>
                            <span className="bns-pb-2 common-title">
                                Tiết kiệm • 25.9%
                            </span>
                            <span className="common-content">
                                Nguồn lực tài chính
                            </span>
                        </div>
                        <div className="bns-flex bns-flex-column common">
                            <span className="bns-mb-5 Q2 common-quanlity">
                                Q2
                            </span>
                            <span className="bns-pb-2 common-title">
                                Tinh & gọn • 25.9%
                            </span>
                            <span className="common-content">
                                Nguồn lực tài chính
                            </span>
                        </div>
                        <div className="bns-flex bns-flex-column common">
                            <span className="bns-mb-5 Q3 common-quanlity">
                                Q3
                            </span>
                            <span className="bns-pb-2 common-title">
                                Giảm thiểu • 63.5%
                            </span>
                            <span className="common-content">
                                Thời gian chờ đợi
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </SRoadmapContent>
    );
};

export default RoadmapContentIndex;
