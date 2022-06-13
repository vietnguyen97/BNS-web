import styled from "styled-components";

const SSubOurTeam = styled.div`
    padding-bottom: 104px;
    .warp-sub-title {
        padding-bottom: 68px;
    }
    .warp-icon {
        display: flex;
        justify-content: center;
    }
    .arrow-right {
        width: 40px;
        height: 40px;
        background: #ffffff;
        border: 2px solid #e6e8ec;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .arrow-left {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wrap-content {
        padding-bottom: 68px;
    }
    .btn-switch svg {
        height: 24px;
        width: 40px;
    }
    .our-team {
        color: #035989;
        font-weight: 500;
        font-size: 28px;
        line-height: 124%;
    }
    .sub-title {
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
        letter-spacing: -0.02em;
        color: #23262f;
    }
    .content {
        font-weight: 400;
        font-size: 20px;
        line-height: 21px;
        color: #000000;
    }
    .energy {
        font-weight: 700;
        font-size: 20px;
        line-height: 21px;
        color: #000000;
    }
    .wrap-sub-card {
        width: 256px;
        border: 2px solid #f4f5f6;
        background: #ffffff;
        border-radius: 24px;
        box-sizing: border-box;
        padding: 40px 32px;
        .build-icon svg {
            height: 40px;
            width: 40px;
        }
        .build-icon {
            text-align: start;
            margin-bottom: 58px;
        }
        .name-team {
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            color: #23262f;
        }
        .link {
            font-weight: 400;
            font-size: 18px;
            line-height: 20px;
            color: #035989;
        }
    }
    @media only screen and (max-width: 1300px) {
        .wrap-sub-card {
            padding: 30px 10px;
            margin-right: unset;
        }
        .slick-slide > div {
            margin-left: 16px;
        }
    }
`;

export { SSubOurTeam };
