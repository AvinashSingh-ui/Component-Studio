export const lightTheme = {
  colors: {
    primary: "#171717",
    primaryHover: "#333333",
    background: "#ffffff",
    surface: "#f7f7f7",
    text: "#171717",
    textMuted: "#737373",
    border: "#e5e5e5",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
};

export const darkTheme = {
  ...lightTheme,

  colors: {
    ...lightTheme.colors,
    primary: "#f5f5f5",
    primaryHover: "#d4d4d4",
    background: "#111111",
    surface: "#1c1c1c",
    text: "#f5f5f5",
    textMuted: "#a3a3a3",
    border: "#333333",
  },
};