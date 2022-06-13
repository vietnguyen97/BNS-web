import styled from "styled-components";

const SAchievement = styled.div`
    .btn-switch svg {
        width: 40px;
        height: 24px;
    }
    .achievement {
        font-weight: 500;
        font-size: 28px;
        line-height: 124%;
        color: #074586;
    }
    .always-bns {
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
        letter-spacing: -0.02em;
        color: #23262f;
    }
    .warp-sub-title {
        padding-bottom: 68px;
    }
    .wrap {
        display: flex !important;
        display: -webkit-box !important;
        display: -webkit-flex !important;
        display: -ms-flexbox !important;
    }
    .items {
        padding-bottom: 48px;
    }
    .title {
        font-weight: 700;
        font-size: 32px;
        line-height: 32px;
    }
    .sub-title {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
    }
    .content {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #777e91;
    }
    .quarterly {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #fcfcfd;
    }
    .content-img {
        display: flex !important;
        justify-content: center;
    }
    .common-quarterly {
        padding: 2px 12px;
        border-radius: 100px;
        width: 38px;
        height: 24px;
    }
    .Q1 {
        background: #19a6e8;
    }
    .Q2 {
        background: #45d87b;
    }
    .Q3 {
        background: #db6535;
    }
    .Q4 {
        background: #bdcc1e;
    }
    @media (max-width: 1300px) {
        .content-img img {
            width: 100%;
            padding: 0px 16px;
        }
    }
`;

export { SAchievement };
