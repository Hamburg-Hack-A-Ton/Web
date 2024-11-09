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

export const precomputeFlags = [gkMain] as const;
