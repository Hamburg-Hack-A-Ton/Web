import { unstable_flag as flag } from '@vercel/flags/next';

export const gkMain = flag({
    key: 'Gatekeeper Main',
    description: 'Controls whether user is alowed to enter the site',
    decide: async () => {
        return false;
    },
    defaultValue: false,
    origin: "/"
});

export const precomputeFlags = [gkMain] as const;
