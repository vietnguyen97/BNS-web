import styled from "styled-components";

const SAchievement = styled.div`
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
    .Q1 {
        padding: 2px 12px;
        background: #19a6e8;
        border-radius: 100px;
        width: 38px;
        height: 24px;
    }
    .Q2 {
        padding: 2px 12px;
        background: #45d87b;
        border-radius: 100px;
        width: 38px;
        height: 24px;
    }
    .Q3 {
        padding: 2px 12px;
        background: #db6535;
        border-radius: 100px;
        width: 38px;
        height: 24px;
    }
    .Q4 {
        padding: 2px 12px;
        background: #bdcc1e;
        border-radius: 100px;
        width: 38px;
        height: 24px;
    }
`;

export { SAchievement };
