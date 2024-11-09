// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
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
        hasAccess().then((access) => {
            setIsDeveloper(access);
        });
    }, []);

    return [isDeveloper, setIsDeveloper];
};

export default useIsDeveloper;