/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import React from "react";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import { SAchievement } from "./styled";

const AchievementIndex = () => {
    return (
        <SAchievement>
            <div className="bns-flex bns-flex-column bns-align-items-center bns-pb-2">
                <ButtonSwitchIcon className="btn-switch bns-pb-2" />
                <span className="achievement">Thành tựu</span>
            </div>
            <div className="bns-flex bns-justify-content-center warp-sub-title">
                <span className="always-bns">Luôn là BNS</span>
            </div>
            <Row>
                <Col span={1} />
                <Col span={7} className="bns-align-items-center wrap">
                    <div>
                        <div className="items bns-flex bns-flex-column bns-align-items-end">
                            <div className="Q1 bns-mb-5 common-quarterly">
                                <span className="quarterly">01</span>
                            </div>
                            <span className="title bns-pb-3">
                                Tiết kiệm • 25.9%
                            </span>
                            <span className="sub-title bns-pb-3">
                                Nguồn lực tài chính
                            </span>
                            <span className="content bns-text-end">
                                Khi chọn BNS làm đơn vị hỗ trợ khởi nghiệp
                                hgloặc đầu tư dài hạn vào thị trường Việt Nam
                            </span>
                        </div>
                        <div className="bns-flex bns-flex-column bns-align-items-end">
                            <div className="Q3 bns-mb-5 common-quarterly">
                                <span className="quarterly">03</span>
                            </div>
                            <span className="title bns-pb-3">
                                Giảm thiểu • 63.5%
                            </span>
                            <span className="sub-title bns-pb-3">
                                Thời gian chờ đợi
                            </span>
                            <span className="content bns-text-end">
                                Chúng tôi thấu hiểu giá trị vĩnh cửu của thời
                                gian để tối ưu từng hạng mục pháp lý đúng hẹn
                            </span>
                        </div>
                    </div>
                </Col>
                <Col span={8} className="content-img">
                    <img
                        alt="BNS-Achievement"
                        src="/asset/image/home/achievement.png"
                    />
                </Col>
                <Col span={7} className="bns-align-items-center wrap">
                    <div>
                        <div className="items bns-flex bns-flex-column">
                            <div className="Q2 bns-mb-5 common-quarterly">
                                <span className="quarterly">02</span>
                            </div>
                            <span className="title bns-pb-3">
                                Tinh & gọn • 25.9%
                            </span>
                            <span className="sub-title bns-pb-3">
                                Nguồn lực tài chính
                            </span>
                            <span className="content">
                                Tái tạo nguồn nhân sự bằng thấu hiểu tập quán
                                văn hoá, công nghệ và tài chính tại Việt Nam
                            </span>
                        </div>
                        <div className="bns-flex bns-flex-column">
                            <div className="Q4 bns-mb-5 common-quarterly">
                                <span className="quarterly">04</span>
                            </div>
                            <span className="title bns-pb-3">
                                Đúng hạn • 100.0%
                            </span>
                            <span className="sub-title bns-pb-3">
                                Thuế và trách nhiệm xã hội
                            </span>
                            <span className="content">
                                Tuân thủ trách nhiệm xã hội và thuế của Doanh
                                nghiệp trong mọi lĩnh vực ngành nghề
                            </span>
                        </div>
                    </div>
                </Col>
                <Col span={1} />
            </Row>
        </SAchievement>
    );
};

export default AchievementIndex;
