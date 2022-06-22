import styled from "styled-components";

const SSlick = styled.div`
    margin-top: 68px;
    position: relative;
    .slick-track {
        padding-bottom: 16px;
    }
    .slick-slide {
        display: flex;
        justify-content: center;
    }
    .name-card {
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
    }
    .position-card {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
    }
    .exp-card {
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: #777e90;
        text-align: center;
    }
    .btn-more {
        color: #0e679f;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        background-color: transparent;
        outline: none;
    }
    .ant-card-bordered {
        border: none;
    }
    .warp-icon {
        position: absolute;
        top: 30%;
        left: -20px;
    }
    .left-icon,
    .right-icon {
        position: absolute;
        z-index: 1111111;
        box-shadow: 0px 4px 120px rgba(0, 0, 0, 0.1);
        padding: 12px;
        background: #fff;
        border-radius: 50%;
    }
    .wrap-icon {
        position: absolute;
        top: 30%;
        right: 50px;
    }
`;

export { SSlick };
