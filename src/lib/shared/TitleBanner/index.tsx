import React from "react";
import { STitleBanner } from "./styled";

type Props = {
    title: string;
};
const TitleBannerIndex = ({ title }: Props) => {
    return (
        <STitleBanner>
            <span className="title">{title}</span>
        </STitleBanner>
    );
};

export default TitleBannerIndex;
