/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import React from "react";
import { SAchievement } from "./styled";

const AchievementIndex = () => {
    return (
        <SAchievement>
            <Row>
                <Col span={1} />
                <Col span={7}>
                    <div>
                        <div className="bns-flex bns-flex-column">
                            <div className="Q1">
                                <span className="quarterly">01</span>
                            </div>
                            <span className="title">Tiết kiệm • 25.9%</span>
                            <span className="sub-title">
                                Nguồn lực tài chính
                            </span>
                            <span className="content">
                                Khi chọn BNS làm đơn vị hỗ trợ khởi nghiệp
                                hgloặc đầu tư dài hạn vào thị trường Việt Nam
                            </span>
                        </div>
                        <div className="bns-flex bns-flex-column">
                            <div className="Q3">
                                <span className="quarterly">03</span>
                            </div>
                            <span className="title">Giảm thiểu • 63.5%</span>
                            <span className="sub-title">Thời gian chờ đợi</span>
                            <span className="content">
                                Chúng tôi thấu hiểu giá trị vĩnh cửu của thời
                                gian để tối ưu từng hạng mục pháp lý đúng hẹn
                            </span>
                        </div>
                    </div>
                </Col>
                <Col span={8} className="bns-flex bns-justify-content-center">
                    <img
                        alt="BNS-Achievement"
                        src="/asset/image/home/achievement.png"
                    />
                </Col>
                <Col span={7}>
                    <div>
                        <div className="bns-flex bns-flex-column">
                            <div className="Q2">
                                <span className="quarterly">02</span>
                            </div>
                            <span className="title">Tinh & gọn • 25.9%</span>
                            <span className="sub-title">
                                Nguồn lực tài chính
                            </span>
                            <span className="content">
                                Tái tạo nguồn nhân sự bằng thấu hiểu tập quán
                                văn hoá, công nghệ và tài chính tại Việt Nam
                            </span>
                        </div>
                        <div className="bns-flex bns-flex-column">
                            <div className="Q4">
                                <span className="quarterly">04</span>
                            </div>
                            <span className="title">Đúng hạn • 100.0%</span>
                            <span className="sub-title">
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
