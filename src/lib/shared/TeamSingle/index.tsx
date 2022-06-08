import React from "react";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import { STeamSingle } from "./styled";

const TeamSingleIndex = () => {
    return (
        <STeamSingle>
            <div className="bns-flex bns-flex-column bns-align-items-center bns-pb-2">
                <ButtonSwitchIcon className="btn-switch bns-pb-2" />
                <span className="our-team">Our team</span>
            </div>
            <div className="bns-flex bns-justify-content-center team">
                <span>Những gương mặt tiêu biểu</span>
            </div>
        </STeamSingle>
    )
}

export default TeamSingleIndex;
