import { NextPage } from "next";
import React from "react";
import { Button, Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { SBreadcrumb } from "./styled";
import { useRouter } from "next/router";

const BreadcrumbIndex: NextPage = () => {
    const router = useRouter();
    const handleRoute = () => {
        router.push("/");
    };
    return (
        <SBreadcrumb className="bns-flex bns-justify-content-between bns-align-items-center">
            <Button
                icon={<LeftOutlined />}
                className="btn"
                onClick={handleRoute}
            >
                Quay lại trang chủ
            </Button>
            <Breadcrumb separator=">">
                <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item href="">Dịch vụ</Breadcrumb.Item>
            </Breadcrumb>
        </SBreadcrumb>
    );
};

export default BreadcrumbIndex;
