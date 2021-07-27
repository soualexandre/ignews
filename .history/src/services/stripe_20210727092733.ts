import Stripe from 'stripe'
import {version} from '../../package.json'

export const stripe = new Stripe(
    process.env.NEXT_PUBLIC_STRIPE_API_KEY,
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name: 'rocketignews',
            version
        }
    }

)