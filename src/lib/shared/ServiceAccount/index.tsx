import { Col, Row } from "antd";
import React from "react";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import { SServiceAccount } from "./styled";

const ServiceAccountIndex = () => {
    return (
        <SServiceAccount>
            <div className="bns-flex bns-flex-column bns-align-items-center bns-pb-2">
                <ButtonSwitchIcon className="btn-switch bns-pb-2" />
                <span className="service">Dịch vụ</span>
            </div>
            <div className="bns-flex bns-justify-content-center title">
                <span className="service-account">
                    Dịch vụ kế Kế toán & Thuế
                </span>
            </div>
            <Row>
                <Col span={7}>
                    <div className="wrap-service bns-flex bns-flex-column">
                        <div className="bns-mb-3 hight-label-most">
                            <span className="label">Phổ biến</span>
                        </div>
                        <div className="bns-mb-3 content">
                            <span className="service-name">
                                Kế toán quốc tế IFRS
                            </span>
                        </div>
                        <div className="see-more">
                            <span>Xem thêm</span>
                        </div>
                    </div>
                </Col>
                <Col span={1} />
                <Col span={7}>
                    <div className="wrap-service bns-flex bns-flex-column">
                        <div className="bns-mb-3 hight-label-most">
                            <span className="label">Phổ biến</span>
                        </div>
                        <div className="bns-mb-3 content">
                            <span className="service-name">
                                Dịch vụ ghi sổ kế toán
                            </span>
                        </div>
                        <div className="see-more">
                            <span>Xem thêm</span>
                        </div>
                    </div>
                </Col>
                <Col span={1} />
                <Col span={7}>
                    <div className="wrap-service bns-flex bns-flex-column">
                        <div className="bns-mb-3 hight-label-most">
                            <span className="label">Phổ biến</span>
                        </div>
                        <div className="bns-mb-3 content">
                            <span className="service-name">
                                Đánh giá quy trình và đào tạo yêu cầu
                            </span>
                        </div>
                        <div className="see-more">
                            <span>Xem thêm</span>
                        </div>
                    </div>
                </Col>
                <Col span={1} />
            </Row>
            <Row>
                <Col span={7} className="warp-hot">
                    <div className="wrap-service bns-flex bns-flex-column">
                        <div className="bns-mb-3 hight-label-new">
                            <span className="label">Mới</span>
                        </div>
                        <div className="bns-mb-3 content">
                            <span className="service-name">
                                Dịch vụ báo cáo tài chính
                            </span>
                        </div>
                        <div className="see-more">
                            <span>Xem thêm</span>
                        </div>
                    </div>
                </Col>
                <Col span={1} />
                <Col span={7} className="warp-hot">
                    <div className="wrap-service bns-flex bns-flex-column">
                        <div className="bns-mb-3 hight-label-new">
                            <span className="label">Mới</span>
                        </div>
                        <div className="bns-mb-3 content">
                            <span className="service-name">
                                Dịch vụ báo cáo hợp nhất
                            </span>
                        </div>
                        <div className="see-more">
                            <span>Xem thêm</span>
                        </div>
                    </div>
                </Col>
                <Col span={1} />
                <Col span={7} className="warp-hot">
                    <div className="wrap-service bns-flex bns-flex-column">
                        <div className="bns-mb-3 hight-label-new">
                            <span className="label">Mới</span>
                        </div>
                        <div className="bns-mb-3 content">
                            <span className="service-name">
                                Soát xét thuế và nộp hồ sơ tuân thủ
                            </span>
                        </div>
                        <div className="see-more">
                            <span>Xem thêm</span>
                        </div>
                    </div>
                </Col>
                <Col span={1} />
                {/* ----------- */}
                <Col span={7} className="warp-hot">
                    <div className="wrap-service bns-flex bns-flex-column">
                        <div className="bns-mb-3 hight-label-new">
                            <span className="label">Mới</span>
                        </div>
                        <div className="bns-mb-3 content">
                            <span className="service-name">
                                Xây dựng cấu trúc thuế & DV thuế Trọn gói cho
                                FDI
                            </span>
                        </div>
                        <div className="see-more">
                            <span>Xem thêm</span>
                        </div>
                    </div>
                </Col>
                <Col span={1} />
                <Col span={7} className="warp-hot">
                    <div className="wrap-service bns-flex bns-flex-column">
                        <div className="bns-mb-3 hight-label-new">
                            <span className="label">Mới</span>
                        </div>
                        <div className="bns-mb-3 content">
                            <span className="service-name">
                                Quyết toán và hoàn thuế
                            </span>
                        </div>
                        <div className="see-more">
                            <span>Xem thêm</span>
                        </div>
                    </div>
                </Col>
                <Col span={1} />
                <Col span={7} className="warp-hot">
                    <div className="wrap-service bns-flex bns-flex-column">
                        <div className="bns-mb-3 hight-label-new">
                            <span className="label">Mới</span>
                        </div>
                        <div className="bns-mb-3 content">
                            <span className="service-name">
                                Lập kế hoạch dài hạn và Quản trị rủi ro thuế
                            </span>
                        </div>
                        <div className="see-more">
                            <span>Xem thêm</span>
                        </div>
                    </div>
                </Col>
                <Col span={1} />
            </Row>
        </SServiceAccount>
    );
};

export default ServiceAccountIndex;
