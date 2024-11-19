import { unstable_flag as flag } from '@vercel/flags/next';
import { createClient } from '@vercel/edge-config'


const client = createClient(process.env.WEBFLAG_TOKEN);

export const gkMain = flag({
    key: 'Gatekeeper Main',
    description: 'Controls whether user is alowed to enter the site',
    decide: async () => {
        const result = await client.get('gkMain');
        return result === 'true';
    },
    defaultValue: false,
    origin: "/"
});

export const applicationPhase = flag({
    key: 'Applications Allowed',
    description: 'Controlls whether any applications are allowed',
    decide: async () => {
        const result = await client.get('applicationPhase');
        return result === 'true';
    },
    defaultValue: false,
    origin: "/register"
});

export const registerApplication = flag({
    key: 'Register Application',
    description: 'Controlls whether the user can register for the hackathon // Else fill out Interested Application',
    decide: async () => {
        const result = await client.get('registerApplication');
        return result === 'true';
    },
    defaultValue: false,
    origin: "/register"
});

export const precomputeFlags = [gkMain, applicationPhase, registerApplication] as const;
