import { useThemeStore } from "@/providers/theme/store";
import { Button, Flex, Layout, type MenuProps } from "antd";
import {
    HomeOutlined,
    HourglassOutlined,
    MoonOutlined,
    SunOutlined,
} from "@ant-design/icons";
import React, { useMemo, useState } from "react";
import "./styles.css";
import { useNavigate } from "@tanstack/react-router";
import MLSidebar from "./components/MLSidebar";
import MLHeader from "./components/MLHeader";

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
    const [openSider, setOpenSider] = useState(false);
    const navigate = useNavigate();

    const MENU_ITEMS: MenuProps["items"] = useMemo(
        () => [
            {
                key: "/",
                icon: <HomeOutlined />,
                label: "Home",
                onClick: () => navigate({ to: "/" }),
                disabled: true,
            },
            {
                key: "/legislaturas",
                icon: <HourglassOutlined />,
                label: "Legislatura",
                onClick: () => navigate({ to: "/legislaturas" }),
            },
        ],
        [],
    );

    return (
        <Layout style={{ minHeight: "100vh", minWidth: "100vw" }}>
            <MLHeader />

            <Layout hasSider>
                <MLSidebar
                    open={openSider}
                    setOpen={setOpenSider}
                    menuItems={MENU_ITEMS}
                />

                <Layout.Content>{children}</Layout.Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
