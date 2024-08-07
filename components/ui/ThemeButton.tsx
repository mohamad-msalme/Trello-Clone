"use client"
import { useNextTheme } from "@/hooks/useNextTheme";
import { Button, ButtonProps } from "./button";



export const ThemeButton: React.FC<ButtonProps> = (btnProps) => {
        const { updateTheme, theme} = useNextTheme();
        return (
                <Button onClick={(e) => {
                        btnProps?.onClick?.(e);
                        updateTheme()
                }}>
                        {theme}
                </Button>
        )
}