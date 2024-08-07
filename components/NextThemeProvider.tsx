"use client"
import React from "react"
import { ThemeProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types";
import { THEME_LOCAL_STORAGE_KEY } from "@/constants/localStorageKeys";

type NextThemeProviderProps = React.FC<ThemeProviderProps & React.PropsWithChildren> 
export const NextThemeProvider: NextThemeProviderProps = ({
        children, ...themeProviderProps
}) => {
        React.useEffect(() => {                
                const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) ?? "light"
                if (theme === "light") {
                        document.documentElement.classList.remove("dark");
                        document.documentElement.classList.add("light");
                } 
                else if (theme === "dark") {
                        document.documentElement.classList.add("dark");
                        document.documentElement.classList.remove("light");

                } 
                else {
                        document.documentElement.classList.remove("dark");
                        document.documentElement.classList.add("light");
                }
        }, [])

        return (
                <ThemeProvider  
                        {...themeProviderProps} 
                        disableTransitionOnChange 
                        enableSystem={false} 
                        attribute="class" 
                        themes={["light", "dark"]} 
                        defaultTheme={localStorage.getItem(THEME_LOCAL_STORAGE_KEY) ?? "light"} 
                        storageKey={THEME_LOCAL_STORAGE_KEY} 
                        >
                        {children}
                </ThemeProvider>
   
        )
}