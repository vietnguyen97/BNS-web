import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { Row, Col } from "antd";
import { SHeadMain } from "./styled";
import { DownOutlined } from "@ant-design/icons";

const HeadMainIndex: NextPage = () => {
    return (
        <SHeadMain>
            <Row className="bns-flex bns-align-items-center bns-justify-content-between">
                <Col span={12}>
                    <Image
                        alt="logo"
                        src="/asset/image/home/logo.png"
                        height={90}
                        width={100}
                    />
                </Col>
                <Col span={12}>
                    <div className="bns-flex bns-justify-content-end ">
                        <span className="content">HỒ SƠ</span>
                        <span className="content bns-pl">DỊCH VỤ</span>
                        <span className="content bns-pl">ĐỘI NGŨ</span>
                        <span className="content bns-pl">LĨNH VỰC</span>
                        <DownOutlined className="icon-line" />
                    </div>
                </Col>
            </Row>
        </SHeadMain>
    );
};

export default HeadMainIndex;
