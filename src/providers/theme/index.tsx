import type React from "react";
import { useThemeStore } from "./store";
import { useMemo } from "react";
import { ConfigProvider, theme, type ThemeConfig } from "antd";
import { ALERT_THEME_COLORS, DARK_THEME_CONFIG, LIGHT_THEME_CONFIG } from "./theme";

type ThemeProviderProps = {
    children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const isDarkMode = useThemeStore((state) => state.darkMode);
    const config = isDarkMode ? DARK_THEME_CONFIG : LIGHT_THEME_CONFIG;

    const customTheme: ThemeConfig = useMemo(
        () => ({
            algorithm: isDarkMode
                ? theme.darkAlgorithm
                : theme.defaultAlgorithm,

            token: {
                fontFamily: "'Segoe UI Symbol', Roboto, sans-serif",
                ...ALERT_THEME_COLORS,
                ...config.token,
            },

            components: config.components
        }),
        [isDarkMode],
    );

    return <ConfigProvider theme={customTheme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
