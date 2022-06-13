import styled from "styled-components";

const SServiceAccount = styled.div`
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
    .wrap-service {
        padding: 32px;
        border: 2px solid #e6e8ec;
        border-radius: 16px;
        background: #ffffff;
    }
    .service-name {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #141416;
    }
    .hight-label-most {
        background: #58c27d;
        border-radius: 4px;
        width: 70px;
        padding: 8px;
    }
    .label {
        font-weight: 700;
        font-size: 12px;
        line-height: 12px;
        color: #fcfcfd;
    }
    .content {
        height: 64px;
    }
    .see-more {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #0e679f;
    }
    .hight-label-new {
        padding: 6px 8px 8px 8px;
        width: 39px;
        height: 32px;
        background: #19a6e8;
        border-radius: 4px;
    }
    .warp-hot {
        padding-top: 30px;
    }
    @media only screen and (max-width: 1400px) {
        .service-name {
            font-size: 20px;
            line-height: 30px;
            color: #141416;
        }
    }
`;

export { SServiceAccount };
