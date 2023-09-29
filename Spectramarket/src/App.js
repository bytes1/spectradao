import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";

import { Home } from "./components/Home";
import { QuestionCircleOutlined, FormOutlined } from "@ant-design/icons";
import { About } from "./components/About";
import { ACTIVE_CHAIN, APP_DESC, APP_NAME, COVALENT_KEY } from "./constants";
import Lookup from "./components/PurchaseListing";
import History from "./components/History";

import UploadListing from "./components/UploadListing";
import { Web3Button } from "@web3modal/react";
import { useAccount, useNetwork } from "wagmi";
import logo from "./assets/logo_trans.png";
import { abbreviate } from "./util";

import "./App.css";
import "antd/dist/antd.css";
import PurchaseListing from "./components/PurchaseListing";

const { Header, Footer, Content } = Layout;

function App() {
  const navigate = useNavigate();
  const { account, isReady } = useAccount(); // https://web3modal.com/hooks/use-account
  const { network } = useNetwork();

  // const height = window.innerHeight - 120;

  const pathname = window.location.pathname;

  const isListingPage = pathname.indexOf("/listing/") !== -1;

  return (
    <div>
      <Layout className="custom-background">
        <Header>
          <Menu theme="light" mode="horizontal" selectedKeys={[pathname]}>
            <Menu.Item key={0}>
              <img
                src={logo}
                className="header-logo pointer"
                onClick={() => navigate("/")}
              />
            </Menu.Item>

            {!isListingPage && (
              <>
                <Menu.Item key={"/upload"} onClick={() => navigate("/upload")}>
                  Upload Dataset
                </Menu.Item>

                {COVALENT_KEY && (
                  <Menu.Item
                    key={"/history"}
                    onClick={() => navigate("/history")}
                  >
                    DataMarket logs
                  </Menu.Item>
                )}

                <span className="web3-button">
                  <Web3Button />
                </span>
              </>
            )}
          </Menu>
        </Header>
        <Content className="custom-background">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/carbon-map" element={<Home/>}/> */}
              <Route path="/about" element={<About />} />
              <Route path="/history" element={<History />} />
              <Route
                path="/upload"
                element={<UploadListing account={account} network={network} />}
              />
              <Route
                path="/listing/:contractAddress"
                element={
                  <PurchaseListing account={account} network={network} />
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
