import React from "react"


export const useIsClient = () => {
        const [isClient, setIsClient] = React.useState(false)

        React.useEffect(() => {
                if (typeof window !== "undefined") setIsClient(true);
        }, [])

        return isClient
}