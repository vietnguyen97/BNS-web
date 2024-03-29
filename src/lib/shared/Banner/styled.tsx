import styled from "styled-components";

const SBanner = styled.div`
    padding-top: 124px;
    ::before {
        content: "";
        position: absolute;
        left: 0;
        background-image: url("/asset/image/home/bg-hidden.png");
        background-size: 360px;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
    }
    .wrap-head {
        padding-bottom: 68px;
    }
    .join {
        color: #0c61a7;
        font-weight: 500;
        font-size: 28px;
        font-family: "SVN-Gilroy";
        font-style: normal;
    }
    .sun-icon svg {
        width: 24px;
        height: 24px;
    }
    .title {
        font-weight: 700;
        font-size: 60px;
        line-height: 124%;
    }
    .title-sub {
        font-weight: 600;
        font-size: 24px;
    }
    .btn {
        padding-top: 40px;
        .btn-banner {
            height: 54px;
            border-radius: 8px;
            color: #ffffff;
            font-weight: 700;
            font-size: 18px;
            box-shadow: 0px 13.7981px 60px rgba(50, 174, 137, 0.2);
            background-image: linear-gradient(
                264.48deg,
                #79f1a4 -45.37%,
                #0e5cad 88.97%
            );
        }
    }
    li {
        font-weight: 400;
        font-size: 18px;
        line-height: 19px;
    }
    .follow {
        font-weight: 400;
        font-size: 16px;
        line-height: 151.4%;
        color: #848484;
    }
    .bns-vn {
        font-weight: 500;
        font-size: 20px;
        line-height: 151.4%;
        color: #04316f;
    }
    .linded-icon svg {
        width: 24px;
        height: 24px;
    }
    .footer-banner {
        font-weight: 500;
        font-size: 32px;
        line-height: 148%;
    }
    .company {
        background: -webkit-linear-gradient(
            264.48deg,
            #79f1a4 -45.37%,
            #0e5cad 88.97%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export { SBanner };
