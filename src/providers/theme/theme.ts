import type { ThemeConfig } from "antd";

const DARK_THEME_COLORS = {
    primary: "#197622",
    secondary: "#2045AC",
    tertiary: "#E98C0C",

    bgColor1: "#161924",
    bgColor2: "#1D232E",
    bgColor3: "#131620",

    txtColor1: "#e6f0ea",
    txtColor2: "#9fa8a4",
    txtColor3: "#8a9490",

    brdColor: "#303030"
};

const LIGHT_THEME_COLORS = {
    primary: "#00AC37",
    secondary: "#5143E4",
    tertiary: "#F0E02D",

    bgColor1: "#F7F9F6",
    bgColor2: "#FFF",
    bgColor3: "#EEF1ED",

    txtColor1: "#1F2123",
    txtColor2: "#2c323a",
    txtColor3: "#6b7280",

    brdColor: "#D6DBD2"
};

export const DARK_THEME_CONFIG: ThemeConfig = {
    token: {
        colorPrimary: DARK_THEME_COLORS.primary,

        colorBgContainer: DARK_THEME_COLORS.bgColor1,
        colorBgElevated: DARK_THEME_COLORS.bgColor2,
        colorBgLayout: DARK_THEME_COLORS.bgColor3,
        colorBgSpotlight: DARK_THEME_COLORS.bgColor3,

        colorText: DARK_THEME_COLORS.txtColor1,
        colorTextSecondary: DARK_THEME_COLORS.txtColor2,
        colorTextTertiary: DARK_THEME_COLORS.txtColor3,
        colorTextQuaternary: DARK_THEME_COLORS.txtColor3,

        colorBorder: DARK_THEME_COLORS.brdColor
    },

    components: {
        Layout: {
            headerBg: DARK_THEME_COLORS.bgColor3,
            bodyBg: DARK_THEME_COLORS.bgColor2,
            siderBg: DARK_THEME_COLORS.bgColor1,
            triggerBg: DARK_THEME_COLORS.bgColor3,
            triggerColor: LIGHT_THEME_COLORS.bgColor1,
        },
        Alert: {
            colorError: "#ff3333",
            colorErrorBg: "#641717d0",
        }
    },
};


export const LIGHT_THEME_CONFIG: ThemeConfig = {
    token: {
        colorPrimary: LIGHT_THEME_COLORS.primary,
        
        colorBgContainer: LIGHT_THEME_COLORS.bgColor1,
        colorBgElevated: LIGHT_THEME_COLORS.bgColor2,
        colorBgLayout: LIGHT_THEME_COLORS.bgColor3,
        colorBgSpotlight: LIGHT_THEME_COLORS.bgColor3,
        
        colorText: LIGHT_THEME_COLORS.txtColor1,
        colorTextSecondary: LIGHT_THEME_COLORS.txtColor2,
        colorTextTertiary: LIGHT_THEME_COLORS.txtColor3,
        colorTextQuaternary: LIGHT_THEME_COLORS.txtColor3,
        
        colorBorder: LIGHT_THEME_COLORS.brdColor,
    },
    
    components: {
        Layout: {
            headerBg: LIGHT_THEME_COLORS.bgColor1,
            bodyBg: LIGHT_THEME_COLORS.bgColor2,
            siderBg: LIGHT_THEME_COLORS.bgColor3,
            triggerBg: LIGHT_THEME_COLORS.bgColor1,
            triggerColor: DARK_THEME_COLORS.bgColor2
        },
        Alert: {
            colorErrorBg: "#ff33338c",
            colorError: "#ffffff",
        }
    }
};

export const ALERT_THEME_COLORS = {
    colorSuccess: "#2CC94C",
    colorWarning: "#F0C62D",
    colorError: "#ff3333",
    colorInfo: "#0A7CFF",
};

export const CHART_THEME_COLORS = {
    colorChart1: "#249e45ff",
    colorChart2: "#3660dfff",
    colorChart3: "#f2c94cff",
    colorChart4: "#2bb0a6ff",
    colorChart5: "#9b51e0ff",
    colorChart6: "#eb5757ff",
};
