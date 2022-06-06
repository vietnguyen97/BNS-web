import { Col, Row } from "antd";
import React, { useState } from "react";
import { BuildingIcon } from "../icon/components/BuildingIcon";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import { SSubOurTeam } from "./styled";

const SubOurTeamIndex = () => {
    const [items] = useState([1, 2, 3,]);
    return (
        <SSubOurTeam>
            <div className="bns-flex bns-flex-column bns-align-items-start">
                <ButtonSwitchIcon className="btn-switch" />
                <span className="our-team">Our team</span>
            </div>
            <div className="bns-flex bns-justify-content-start">
                <span className="sub-title">Lĩnh vực thành công</span>
            </div>
            <Row>
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
                <Col span={20}>
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
                </Col>
            </Row>
        </SSubOurTeam>
    );
};

export default SubOurTeamIndex;
