import { useTheme } from "next-themes";

export const useNextTheme = () => {
        const { theme, setTheme} = useTheme();

        const getToggleTheme = (theme: string) => {
                switch (theme) {
                        case "light": return "dark";
                        case "dark": return "light";
                        default: return "light"
                }
        }

        const updateDocumentElement = () => {
                if (theme === "light") document.documentElement.classList.add("dark")
                else if (theme === "dark") document.documentElement.classList.remove("dark")
                else document.documentElement.classList.remove("dark")
        }
        
        const updateTheme = () => {
                setTheme(getToggleTheme(theme!))
                updateDocumentElement()
        }

        return {
                updateTheme,
                theme: theme ?? "light",
        }
}