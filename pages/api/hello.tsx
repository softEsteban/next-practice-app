import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../database/connection';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    connectMongo();
    res.status(200).json({ name: 'John Doe' });
}
