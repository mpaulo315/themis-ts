import { Layout } from "antd";
import React, { useState } from "react";
import { LoremIpsum } from "lorem-ipsum";

type MainLayoutProps = {
    children: React.ReactNode;
};

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});

const MainLayout = ({ children }: MainLayoutProps) => {
    const [openSider, setOpenSider] = useState(false);

    return (
        <Layout style={{ minHeight: "100vh", minWidth: "100vw" }}>
            <Layout.Header
                style={{
                    height: 50,
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/** Header */}
            </Layout.Header>
            <Layout hasSider>
                <Layout.Sider
                    collapsible
                    collapsedWidth={50}
                    collapsed={openSider}
                    onCollapse={(value) => setOpenSider(value)}
                ></Layout.Sider>
                <Layout>
                    <Layout.Content style={{ margin: "0 16px" }}>
                        {children}
                    </Layout.Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
