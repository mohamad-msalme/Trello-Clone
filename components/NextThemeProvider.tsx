"use client";
import React from "react";
import { useIsClient } from "@/hooks/useIsClient";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { THEME_LOCAL_STORAGE_KEY } from "@/constants/localStorageKeys";

type NextThemeProviderProps = React.FC<
  ThemeProviderProps & React.PropsWithChildren
>;
export const NextThemeProvider: NextThemeProviderProps = ({
  children,
  ...themeProviderProps
}) => {
  const isClient = useIsClient();

  React.useEffect(() => {
    if (isClient) {
      const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) ?? "light";
      if (theme === "light") {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      } else if (theme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
    }
  }, [isClient]);

  return (
    <ThemeProvider
      {...themeProviderProps}
      disableTransitionOnChange
      enableSystem={false}
      attribute="class"
      themes={["light", "dark"]}
      defaultTheme={
        isClient
          ? (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) ?? "light")
          : "light"
      }
      storageKey={THEME_LOCAL_STORAGE_KEY}
    >
      {children}
    </ThemeProvider>
  );
};
