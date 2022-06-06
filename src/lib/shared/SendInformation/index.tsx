import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { SSendInfomation } from "./styled";

const SendInfomationIndex: NextPage = () => {
    return (
        <SSendInfomation>
            <Row>
                <Col span={11} className="">
                    <div className="bns-pr-5">
                        <span className="title">
                            Ưu đãi dành riêng cho FDI lần đầu gia nhập thị
                            trường và Startup
                        </span>
                    </div>
                    <div className="bns-pt-5">
                        <span className="email">
                            Nhập email để nhận tư vấn miễn phí
                        </span>
                    </div>
                    <Input
                        className="inp-email"
                        placeholder="Your work email"
                        suffix={
                            <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} />
                        }
                    />
                </Col>
                <Col span={13}>
                    <div style={{ width: "100%", height: "100%" }}>
                        <Image
                            src="/asset/image/home/send-image.png"
                            alt="send-image"
                            width={640}
                            height={676}
                            layout="intrinsic"
                        />
                    </div>
                </Col>
            </Row>
        </SSendInfomation>
    );
};

export default SendInfomationIndex;
