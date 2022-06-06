import { Col, Row } from "antd";
import React from "react";
import { SInfomationBanner } from "./styled";

type Props = {
    title: string;
    contentHeadMain: string;
    contentHeadSub: string;
    image: string;
    contentFooterMain: string;
    contentFooterSub: string;
    contentFooterSubs?: string;
};
const InformationBanner = () => {
    return (
        <SInfomationBanner>
            <Row>
                <Col span={11}>
                    <div>
                        <span className="title">
                            Sẵn sàng làn sóng dịch chuyển chuỗi cung ứng
                        </span>
                    </div>
                </Col>
            </Row>
            <div>
                <span className="content-head">
                    Giữa dòng biến động của thế giới, Việt Nam là điểm đến an
                    toàn trong làn sóng dịch chuyển chuỗi cung ứng hậu COVID-19.
                    Cộng đồng Doanh nghiệp thế giới đã và đang đánh giá cao môi
                    trường kinh doanh và lợi thế cạnh tranh về vị trí chiến lược
                    số 1 khu vực Đông Nam Á của Việt Nam.
                </span>
                <br />
                <span className="content-head">
                    Sẵn sàng trước thời vận đó, BNS đã đầu tư tái tạo nguồn lực
                    và thực hành ứng dụng công nghệ thành công cho các khách
                    hàng, đặc biệt là đối tượng Doanh nghiệp FDI tại Việt Nam
                </span>
            </div>
            <Row>
                <Col>
                    <div>
                        <img />
                    </div>
                </Col>
            </Row>
        </SInfomationBanner>
    );
};

export default InformationBanner;
