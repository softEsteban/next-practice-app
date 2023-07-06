import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../../database/connection';
import { getUsers, postUser } from '../../../database/controller';

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
        case 'PUT':
            res.status(200).json({ method, name: "PUT Request" });
            break;
        case 'DELETE':
            res.status(200).json({ method, name: "DELETE Request" });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method}`);
            break;
    }
}
