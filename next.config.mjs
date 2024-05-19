import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'blogapplication.oneentry.cloud'
            }
        ]
    }
};

export default nextConfig;
