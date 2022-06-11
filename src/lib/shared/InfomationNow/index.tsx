import { Button } from "antd";
import React from "react";
import { SInfomationNow } from "./styled";

const InfomationNowIndex = () => {
    return (
        <SInfomationNow>
            <div className="bns-flex bns-justify-content-between bns-align-items-center">
                <div className="bns-flex bns-flex-column">
                    <span className="common">Bạn muốn tìm hiểu thêm về</span>
                    <span className="common service">dịch vụ của BNS</span>
                </div>
                <div className="btn-now">
                    <Button>Tìm hiểu ngay</Button>
                </div>
            </div>
        </SInfomationNow>
    );
};

export default InfomationNowIndex;
