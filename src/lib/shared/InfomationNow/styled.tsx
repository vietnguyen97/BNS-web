import styled from "styled-components";

const SInfomationNow = styled.div`
    margin-bottom: 150px;
    background: #f4f6fa;
    border-radius: 16px;
    padding: 48px;
    .common {
        font-weight: 700;
        font-size: 42px;
        line-height: 56px;
        letter-spacing: -0.02em;
    }
    .service {
        background: -webkit-linear-gradient(
            264.48deg,
            #79f1a4 -45.37%,
            #0e5cad 88.97%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .btn-now button {
        background: linear-gradient(264.48deg, #79f1a4 -45.37%, #0e5cad 88.97%);
        box-shadow: 0px 13.7981px 60px rgba(50, 174, 137, 0.2);
        border-radius: 8px;
        color: #ffffff;
        height: 54px;
        font-weight: 700;
        font-size: 18px;
        line-height: 19px;
        padding: 4px 24px;
    }
`;

export { SInfomationNow };
