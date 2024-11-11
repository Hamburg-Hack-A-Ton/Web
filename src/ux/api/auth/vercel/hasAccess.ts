// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { hasDevMode } from "@/ux/components/Toolbar";
import { useEffect, useState } from "react";


export async function hasAccess() {
    const response = await fetch("/.well-known/vercel/hasAccess");
    if (!response.ok) {
        return false;
    } else {
        return true;
    }
}

const useIsDeveloper = () => {
    const [isDeveloper, setIsDeveloper] = useState(false);

    useEffect(() => {
        setIsDeveloper(hasDevMode());
    }, []);

    return [isDeveloper, setIsDeveloper];
};

export default useIsDeveloper;