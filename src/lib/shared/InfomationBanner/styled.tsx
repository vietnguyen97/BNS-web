import styled from "styled-components";

const SInfomationBanner = styled.div`
    padding-bottom: 68px;
    padding-top: 144px;
    .wrap-title {
        padding-bottom: 54px;
    }
    .title {
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
        color: #23262f;
        letter-spacing: -0.02em;
    }
    .content-head {
        font-weight: 500;
        font-size: 18px;
        line-height: 152.1%;
        color: #23262f;
    }
    .common {
        margin-bottom: 38px;
    }
    .content-footer {
        padding-top: 54px;
    }
    .wrap-footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media only screen and (max-width: 1300px) {
        .content-footer img {
            width: 100%;
        }
        .content-head {
            font-size: 16px;
        }
        .wrap-footer {
            padding-left: 16px;
        }
    }
`;

export { SInfomationBanner };
