import styled from "styled-components";

const SReviewUs = styled.div`
    padding-bottom: 200px;
    .btn-switch svg {
        width: 40px;
        height: 24px;
    }
    .service {
        font-weight: 500;
        font-size: 28px;
        line-height: 124%;
        color: #035989;
    }
    .title {
        padding-bottom: 68px;
    }
    .service-account {
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
        letter-spacing: -0.02em;
        color: #23262f;
    }
    .wrap-card {
        background: #ffffff;
        box-shadow: 0px 4px 120px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        padding: 32px;
    }
    .content {
        font-weight: 500;
        font-size: 22px;
        line-height: 124%;
        color: #000000;
    }
    .name {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #23262f;
    }
    .mission {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #777e90;
    }
    .avarta {
        width: 56px;
        height: 56px;
        margin-right: 20px;
    }
    .avarta .ant-avatar {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .wrap-card {
        color: #fff;
        margin: 10px;
        position: relative;
    }
    @media (max-width: 1900px) {
        .wrap-card {
            font-size: 24px;
        }
        .center {
            margin-left: -40px;
            margin-right: -40px;
        }
        .center .slick-center .wrap-card {
            color: #e67e22;
            opacity: 1;
            transform: scale(1);
        }
        .center .wrap-card {
            opacity: 0.8;
            transform: scale(0.85);
            transition: all 300ms ease;
        }
    }
`;

export { SReviewUs };
