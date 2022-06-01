import React from "react";
import { SPageLayout } from "./styled";

type Props = {
    children: JSX.Element;
};
const PageLayoutIndex = ({ children }: Props) => {
    return <SPageLayout>{children}</SPageLayout>;
};

export default PageLayoutIndex;
