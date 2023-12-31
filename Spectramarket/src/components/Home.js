import React, { useState } from "react";
import { Button, Spin, Row, Col } from "antd";
import { APP_DESC } from "../constants";
import { useNavigate } from "react-router";
import { CheckCircleTwoTone } from "@ant-design/icons";

const CHECKLIST_ITEMS = [
  "Create instant hosted dataset sale pages managed by FEVM smart contracts",
  "Payouts delivered after three successful sales",
  "No email accounts or vendor agreements required",
];

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState();

  return (
    <div className="home-section">
      <Row className="home-section">
        <Col span={12}>
          <div className="prompt-section">
            {/* <img src={logo} className='home-logo'/><br/> */}
            {APP_DESC}
          </div>
          {CHECKLIST_ITEMS.map((item, i) => {
            return (
              <p key={i}>
                <CheckCircleTwoTone twoToneColor="#00aa00" />
                &nbsp;
                {item}
              </p>
            );
          })}
          <div></div>
        </Col>
        <Col span={12}>
          <img
            className="hero-image"
            src={
              "https://intellipaat.com/blog/wp-content/uploads/2015/07/Big-Data.gif"
            }
          />
        </Col>
      </Row>
    </div>
  );
};
