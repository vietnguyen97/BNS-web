import React from "react";
import { MissionIcon } from "../icon/components/MissionIcon";
import { VisionIcon } from "../icon/components/VisionIcon";
import { SValueTeam } from "./styled";

const ValueTeamIndex = () => {
    return (
        <SValueTeam>
            <div className="bns-pb-3 value-vision">
                <span>Giá trị cốt lõi</span>
            </div>
            <div className="see-vision">
                <span>Tầm nhìn chiến lược</span>
            </div>
            <div className="bns-flex">
                <div className="value-one bns-flex bns-align-items-center">
                    <div className="icon">
                        <VisionIcon className="icon-value" />
                    </div>
                    <div className="content bns-flex bns-flex-column">
                        <span className="title">Tầm nhìn</span>
                        <span className="content-value">
                            Trở thành đối tác đáng tin cậy nhất đối với khách
                            hàng bằng việc cung cấp dịch vụ/sản phẩm có chất
                            lượng cao.
                        </span>
                    </div>
                </div>
                <div className="bns-flex bns-align-items-center">
                    <div className="icon">
                        <MissionIcon className="icon-value" />
                    </div>
                    <div className="bns-flex bns-flex-column">
                        <span className="title">Sứ mệnh</span>
                        <ul>
                            <li className="content-value">
                                Đem lại dịch vụ/sản phẩm với chất lượng tốt nhất
                            </li>
                            <li className="content-value">
                                Thực hiện đầy đủ các nghĩa vụ với Nhà nước trên
                                cơ sở minh bạch trong kinh doanh
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </SValueTeam>
    );
};

export default ValueTeamIndex;
