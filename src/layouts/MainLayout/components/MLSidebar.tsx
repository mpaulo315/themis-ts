import { VerticalLeftOutlined, VerticalRightOutlined } from "@ant-design/icons";
import { Layout, Menu, type MenuProps } from "antd";

type MLSidebarProps = {
    open: boolean,
    setOpen: (value: boolean) => void,
    menuItems: MenuProps["items"]
}

const MLSidebar = ({open, setOpen, menuItems}: MLSidebarProps) => {
    return (
        <Layout.Sider
            collapsible
            collapsedWidth={50}
            collapsed={open}
            onCollapse={(value) => setOpen(value)}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                insetInlineStart: 0,
                top: 0,
                scrollbarWidth: "thin",
                scrollbarGutter: "stable",
            }}
            trigger={
                <div
                    style={{
                        paddingRight: 15,
                    }}
                >
                    {open ? (
                        <VerticalLeftOutlined />
                    ) : (
                        <VerticalRightOutlined />
                    )}
                </div>
            }
        >
            <Menu
                mode="vertical"
                selectedKeys={[location.href]}
                items={menuItems}
            />
        </Layout.Sider>
    );
};

export default MLSidebar