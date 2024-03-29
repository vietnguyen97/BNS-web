import styled from "styled-components";

const SHeadMain = styled.div`
    .content {
        font-weight: 600;
        font-size: 18px;
    }
    .bns-pl {
        padding-left: 48px;
    }
    .icon-line {
        display: flex;
        align-items: center;
        padding-left: 72px;
        svg {
            width: 20px;
            height: 20px;
        }
    }
    @media only screen and (max-width: 1300px) {
        .bns-pl {
            padding-left: 35px;
        }
    }
`;

export { SHeadMain };
