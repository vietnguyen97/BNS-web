import { Avatar, Divider } from "antd";
import React, { useState } from "react";
import Slider from "react-slick";
import { SETTING } from "./contant";

const ReviewSlickIndex = () => {
    const [data] = useState([1, 2, 3, 4, 5, 6]);
    return (
        <div style={{backgroundColor: "transparent"}}>
            <Slider {...SETTING}>
                {data.map(el => (
                    <div
                        className="bns-flex bns-flex-column wrap-card"
                        key={el}
                    >
                        <div className="content bns-pb-5">
                            <span>
                                “They say something about us that make our
                                customer feel happy and belive in us
                            </span>
                        </div>
                        <Divider />
                        <div className="bns-flex bns-align-items-center">
                            <div className="avarta">
                                <Avatar
                                    style={{
                                        color: "#f56a00",
                                        backgroundColor: "#fde3cf",
                                    }}
                                >
                                    U
                                </Avatar>
                            </div>
                            <div className="bns-flex bns-flex-column">
                                <span className="name">Bùi Thị Hoa Hậu</span>
                                <span className="mission">
                                    CEO • Công ty ABC
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReviewSlickIndex;
