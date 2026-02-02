import { useThemeStore } from "@/providers/theme/store";
import { Button, Flex, Layout } from "antd";
import { MoonOutlined, SunOutlined, VerticalLeftOutlined, VerticalRightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./styles.css";

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
    const [ openSider, setOpenSider ] = useState(false);
    const { darkMode, setDarkMode } = useThemeStore();

    return (
        <Layout style={{ minHeight: "100vh", minWidth: "100vw" }}>
            <Layout.Header
                style={{
                    height: 45,
                    padding: 0,
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/** Header */}
                <Flex
                    style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                        width: "100%",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button
                        type="default"
                        shape="square"
                        onClick={() => setDarkMode(!darkMode)}
                        icon={darkMode ? <MoonOutlined /> : <SunOutlined />}
                    />
                </Flex>
            </Layout.Header>
            <Layout hasSider>
                <Layout.Sider
                    collapsible
                    collapsedWidth={50}
                    collapsed={openSider}
                    onCollapse={(value) => setOpenSider(value)}
                    trigger={
                        <div style={{
                            paddingRight:15
                        }}>
                            {openSider ? <VerticalLeftOutlined /> : <VerticalRightOutlined />}
                        </div>
                    }
                ></Layout.Sider>
                <Layout>
                    <Layout.Content>{children}</Layout.Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
