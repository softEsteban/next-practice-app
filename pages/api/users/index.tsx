import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../../database/connection';
import { getUsers, postUser, updateUser, deleteUser } from '../../../database/controller';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    connectMongo()
        .catch(() => res.status(405).json({ error: "Error in db connection" }));

    const { method } = req;

    switch (method) {
        case 'GET':
            getUsers(req, res);
            break;
        case 'POST':
            postUser(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method}`);
            break;
    }
}
