import axios from 'axios';
import process from 'process';

const createAxiosInstance = (
    baseURL: string | undefined,
    headers: any = {}
) => {
    return axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
    });
};

export const SupabaseApiClient = createAxiosInstance(process.env.NEXT_PUBLIC_SUPABASE_URL, {
    'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});

export const NextApiClient = createAxiosInstance(`${process.env.NEXT_PUBLIC_BASE_URL}/api`);
