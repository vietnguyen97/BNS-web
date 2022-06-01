import { NextPage } from "next";
import React from "react";
import { Button, Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { SBreadcrumb } from "./styled";

const BreadcrumbIndex: NextPage = () => {
    return (
        <SBreadcrumb>
            <Button icon={<LeftOutlined />} className="btn">Quay lại trang chủ</Button>
            <Breadcrumb separator=">">
                <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item href="">Dịch vụ</Breadcrumb.Item>
            </Breadcrumb>
        </SBreadcrumb>
    );
};

export default BreadcrumbIndex;
