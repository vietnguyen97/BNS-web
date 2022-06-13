import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useState } from "react";
import Slider from "react-slick";
import { BuildingIcon } from "../icon/components/BuildingIcon";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import { SETTING } from "./contant";
import { SSubOurTeam } from "./styled";

const SubOurTeamIndex = () => {
    const [items] = useState([1, 2, 3, 4]);
    return (
        <SSubOurTeam>
            <div className="bns-flex bns-flex-column bns-align-items-start bns-pb-2">
                <ButtonSwitchIcon className="btn-switch bns-pb-2" />
                <span className="our-team">Our team</span>
            </div>
            <div className="bns-flex bns-justify-content-start warp-sub-title">
                <span className="sub-title">Lĩnh vực thành công</span>
            </div>
            <Row className="bns-align-items-center wrap-content">
                <Col span={4}>
                    <div className="bns-flex bns-flex-column">
                        <span className="energy bns-pb-5">
                            Năng lượng tái tạo
                        </span>
                        <span className="content bns-pb-5">Dược phẩm</span>
                        <span className="content bns-pb-5">
                            Kiến trúc & Xây dựng
                        </span>
                        <span className="content">Sản xuất công nghiệp</span>
                    </div>
                </Col>
                {/* <Col span={20}>
                    <div className="bns-flex">
                        {items.map(el => (
                            <div className="wrap-sub-card" key={el}>
                                <div className="bns-flex bns-flex-column">
                                    <BuildingIcon className="build-icon" />
                                    <span className="name-team">
                                        ATHENA GROUP VIETNAM
                                    </span>
                                    <span className="link bns-pt-3">
                                        Athenagroup.com.vn
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col> */}
                <Col span={20}>
                    <Slider {...SETTING}>
                        <div className="wrap-sub-card">
                            <div className="bns-flex bns-flex-column wrap">
                                <BuildingIcon className="build-icon" />
                                <span className="name-team">
                                    ATHENA GROUP VIETNAM
                                </span>
                                <span className="link bns-pt-3">
                                    Athenagroup.com.vn
                                </span>
                            </div>
                        </div>
                        <div className="wrap-sub-card">
                            <div className="bns-flex bns-flex-column wrap">
                                <BuildingIcon className="build-icon" />
                                <span className="name-team">
                                    ATHENA GROUP VIETNAM
                                </span>
                                <span className="link bns-pt-3">
                                    Athenagroup.com.vn
                                </span>
                            </div>
                        </div>
                        <div className="wrap-sub-card">
                            <div className="bns-flex bns-flex-column wrap">
                                <BuildingIcon className="build-icon" />
                                <span className="name-team">
                                    ATHENA GROUP VIETNAM
                                </span>
                                <span className="link bns-pt-3">
                                    Athenagroup.com.vn
                                </span>
                            </div>
                        </div>
                        <div className="wrap-sub-card">
                            <div className="bns-flex bns-flex-column wrap">
                                <BuildingIcon className="build-icon" />
                                <span className="name-team">
                                    ATHENA GROUP VIETNAM
                                </span>
                                <span className="link bns-pt-3">
                                    Athenagroup.com.vn
                                </span>
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>
            <Row>
                <Col span={24} className="warp-icon">
                    <div className="arrow-left">
                        <ArrowLeftOutlined />
                    </div>
                    <div className="arrow-right bns-ml-2">
                        <ArrowRightOutlined />
                    </div>
                </Col>
            </Row>
        </SSubOurTeam>
    );
};

export default SubOurTeamIndex;
