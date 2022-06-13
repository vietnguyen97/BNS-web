/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import React from "react";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import { SService } from "./styled";
import { useRouter } from "next/router";

const ServiceIndex = () => {
    const router = useRouter();
    const handleRoute = (link: string) => {
        router.push(link);
    };
    return (
        <SService>
            <div className="bns-flex bns-flex-column bns-align-items-center bns-pb-2">
                <ButtonSwitchIcon className="btn-switch bns-pb-2" />
                <span className="service">Dịch vụ</span>
            </div>
            <div className="bns-flex bns-justify-content-center wrap-title">
                <span className="service-us">Dịch vụ của chúng tôi</span>
            </div>
            <Row>
                <Col span={6}>
                    <div className="bns-flex bns-flex-column">
                        <div className="bns-flex bns-justify-content-center">
                            <img
                                src="/asset/image/home/service-account.png"
                                alt="service-account"
                            />
                        </div>
                        <div
                            className="bns-flex bns-flex-column bns-align-items-center is_point"
                            onClick={() => handleRoute("/service")}
                        >
                            <span className="name-service bns-pb-1">
                                Accounting & Tax
                            </span>
                            <span className="count-service bns-pb-3">
                                13 Dịch vụ
                            </span>
                            <span className="see-more">Xem thêm</span>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="bns-flex bns-flex-column">
                        <div className="bns-flex bns-justify-content-center">
                            <img
                                src="/asset/image/home/service-hr.png"
                                alt="service-hr"
                            />
                        </div>
                        <div
                            className="bns-flex bns-flex-column bns-align-items-center is_point"
                            onClick={() => handleRoute("/hr-strategy")}
                        >
                            <span className="name-service bns-pb-1">
                                HR Services
                            </span>
                            <span className="count-service bns-pb-3">
                                13 Dịch vụ
                            </span>
                            <span className="see-more is_point">Xem thêm</span>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="bns-flex bns-flex-column">
                        <div className="bns-flex bns-justify-content-center">
                            <img
                                src="/asset/image/home/service-it.png"
                                alt="service-it"
                            />
                        </div>
                        <div
                            className="bns-flex bns-flex-column bns-align-items-center is_point"
                            onClick={() => handleRoute("/technical-roadmap")}
                        >
                            <span className="name-service bns-pb-1">
                                IT System Consulting
                            </span>
                            <span className="count-service bns-pb-3">
                                13 Dịch vụ
                            </span>
                            <span className="see-more is_point">Xem thêm</span>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="bns-flex bns-flex-column">
                        <div className="bns-flex bns-justify-content-center">
                            <img
                                src="/asset/image/home/service-sub-hr.png"
                                alt="service-sub-hr"
                            />
                        </div>
                        <div
                            className="bns-flex bns-flex-column bns-align-items-center is_point"
                            onClick={() => handleRoute("/hr-strategy")}
                        >
                            <span className="name-service bns-pb-1">
                                HR Services
                            </span>
                            <span className="count-service bns-pb-3">
                                13 Dịch vụ
                            </span>
                            <span className="see-more is_point">Xem thêm</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </SService>
    );
};

export default ServiceIndex;
