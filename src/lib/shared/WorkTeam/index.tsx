/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import React from "react";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import { SWorkTeam } from "./styled";

const WorkTeamIndex = () => {
    return (
        <SWorkTeam>
            <div className="bns-flex bns-flex-column bns-align-items-center bns-pb-2">
                <ButtonSwitchIcon className="btn-switch bns-pb-2" />
                <span className="our-team">Our team</span>
            </div>
            <div className="bns-flex bns-justify-content-center team">
                <span>Hoạt động thường niên</span>
            </div>
            <Row>
                <Col span={12}>
                    <div className="bns-flex bns-flex-column bns-align-items-end">
                        <div className="wrap-img">
                            <img
                                src="/asset/image/team/avarta-1.png"
                                alt="avarta"
                            />
                        </div>
                        <div className="wrap-img">
                            <img
                                src="/asset/image/team/avarta-2.png"
                                alt="avarta"
                            />
                        </div>
                        <div className="wrap-img">
                            <img
                                src="/asset/image/team/avarta-3.png"
                                alt="avarta"
                            />
                        </div>
                        <div className="wrap-img">
                            <img
                                src="/asset/image/team/avarta-4.png"
                                alt="avarta"
                            />
                        </div>
                    </div>
                </Col>
                <Col span={1} />
                <Col span={11}>
                    <div className="bns-flex bns-flex-column">
                        <div className="wrap-img">
                            <img
                                src="/asset/image/team/avarta-2-1.png"
                                alt="avarta"
                            />
                        </div>
                        <div className="wrap-img">
                            <img
                                src="/asset/image/team/avarta-2-2.png"
                                alt="avarta"
                            />
                        </div>
                        <div className="wrap-img">
                            <img
                                src="/asset/image/team/avarta-2-3.png"
                                alt="avarta"
                            />
                        </div>
                        <div className="wrap-img">
                            <img
                                src="/asset/image/team/avarta-2-4.png"
                                alt="avarta"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </SWorkTeam>
    );
};

export default WorkTeamIndex;
