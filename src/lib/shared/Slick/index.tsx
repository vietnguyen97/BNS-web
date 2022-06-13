/* eslint-disable @next/next/no-img-element */
import { Card, Col, Row } from "antd";
import React from "react";
import { SSlick } from "./styled";

const SlickIndex = () => {
    return (
        <SSlick>
            <Row>
                {/* <Slider {...SETTING}> */}
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: '92%' }}
                            cover={
                                <img
                                    alt="out-team-one"
                                    src="/asset/image/home/our-team-one.png"
                                />
                            }
                        >
                            <div>
                                <div className="bns-flex bns-flex-column bns-align-items-center">
                                    <span className="name-card">
                                        Bùi Thị Hoa Hậu
                                    </span>
                                    <span className="position-card bns-pt-2">
                                        CEO
                                    </span>
                                    <span className="exp-card bns-pt-2 bns-pl-5 bns-pr-5">
                                        Hơn 12 năm kinh nghiệm chuyên môn CFO
                                        tại các FDI SMEs.
                                    </span>
                                    <button className="btn-more bns-pt-3">
                                        Xem thêm
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: '92%' }}
                            cover={
                                <img
                                    alt="out-team-two"
                                    src="/asset/image/home/our-team-two.png"
                                />
                            }
                        >
                            <div>
                                <div className="bns-flex bns-flex-column bns-align-items-center">
                                    <span className="name-card">
                                        Bùi Thị Hoa Hậu
                                    </span>
                                    <span className="position-card bns-pt-2">
                                        CEO
                                    </span>
                                    <span className="exp-card bns-pt-2 bns-pl-5 bns-pr-5">
                                        Hơn 12 năm kinh nghiệm chuyên môn CFO
                                        tại các FDI SMEs.
                                    </span>
                                    <button className="btn-more bns-pt-3">
                                        Xem thêm
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: '92%' }}
                            cover={
                                <img
                                    alt="out-team-three"
                                    src="/asset/image/home/our-team-three.png"
                                />
                            }
                        >
                            <div>
                                <div className="bns-flex bns-flex-column bns-align-items-center">
                                    <span className="name-card">
                                        Bùi Thị Hoa Hậu
                                    </span>
                                    <span className="position-card bns-pt-2">
                                        CEO
                                    </span>
                                    <span className="exp-card bns-pt-2 bns-pl-5 bns-pr-5">
                                        Hơn 12 năm kinh nghiệm chuyên môn CFO
                                        tại các FDI SMEs.
                                    </span>
                                    <button className="btn-more bns-pt-3">
                                        Xem thêm
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                {/* </Slider> */}
            </Row>
        </SSlick>
    );
};

export default SlickIndex;
