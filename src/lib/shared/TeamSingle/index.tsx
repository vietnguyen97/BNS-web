import Image from "next/image";
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
            <div className="bns-flex bns-flex-column bns-align-items-center">
                <div className="img-avarta">
                    <Image
                        alt="avarta"
                        src="/asset/image/team/avarta.png"
                        width={450}
                        height={600}
                    />
                </div>
                <div className="bns-flex bns-flex-column content-story common bns-text-center">
                    <span>
                        While CryptoKitties felt like a toy to many, it
                        represented a dramatic shift in how we interact with
                        items in the digital world. While previous digital items
                        lived on company servers, blockchain-native items lived
                        on shared, public blockchains owned by no single party.
                        They could be viewed anywhere, exchanged openly, and
                        truly owned in a way that was never before possible in
                        the digital world.
                    </span>
                </div>
                <div className="common">
                    <span>
                        Today, we’re proud to remain the largest general
                        marketplace for user-owned digital items, supporting
                        multiple blockchains, with the broadest set of
                        categories and the best prices for new emerging asset
                        classes.
                    </span>
                </div>
            </div>
        </STeamSingle>
    );
};

export default TeamSingleIndex;
