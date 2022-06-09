import React from "react";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import SlickIndex from "../Slick";
import { SOurTeam } from "./styled";
import { Button } from "antd";

const OurTeamIndex = () => {
    return (
        <SOurTeam>
            <div className="bns-flex bns-flex-column bns-align-items-center bns-pb-2">
                <ButtonSwitchIcon className="btn-switch bns-pb-2" />
                <span className="our-team">Our team</span>
            </div>
            <div className="bns-flex bns-justify-content-center team">
                <span>Những gương mặt tiêu biểu</span>
            </div>
            <SlickIndex />
            <div className="bns-flex bns-justify-content-center btn-more-footer">
                <Button>Xem thêm</Button>
            </div>
        </SOurTeam>
    );
};

export default OurTeamIndex;
