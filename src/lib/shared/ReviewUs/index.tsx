import React from "react";
import { ButtonSwitchIcon } from "../icon/components/ButtonSwitchIcon";
import ReviewSlickIndex from "./ReviewSlick";
import { SReviewUs } from "./styled";

const ReviewUsIndex = () => {
    return (
        <SReviewUs>
            <div className="bns-flex bns-flex-column bns-align-items-center bns-pb-2">
                <ButtonSwitchIcon className="btn-switch bns-pb-2" />
                <span className="service">Đánh giá</span>
            </div>
            <div className="bns-flex bns-justify-content-center title">
                <span className="service-account">
                    Khách hàng nói gì về chúng tôi
                </span>
            </div>
            <ReviewSlickIndex />
        </SReviewUs>
    );
};

export default ReviewUsIndex;
