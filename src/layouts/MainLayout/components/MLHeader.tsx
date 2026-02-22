import { useThemeStore } from "@/providers/theme/store";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Flex, Layout } from "antd";

const MLHeader = () => {
    const { darkMode, setDarkMode } = useThemeStore();

    return (
        <Layout.Header
            style={{
                height: 45,
                padding: 0,
                position: "sticky",
                top: 0,
                zIndex: 100,
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
    );
};

export default MLHeader;
