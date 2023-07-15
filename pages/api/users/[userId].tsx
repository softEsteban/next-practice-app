import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../../database/connection';
import { getUser, updateUser, deleteUser } from '../../../database/controller';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    connectMongo()
        .catch(() => res.status(405).json({ error: "Error in db connection" }));

    const { method } = req;

    switch (method) {
        case 'GET':
            getUser(req, res);
            break;
        case 'PUT':
            updateUser(req, res);
            break;
        case 'DELETE':
            deleteUser(req, res);
            break;
        default:
            // res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method}`);
            break;
    }
}
