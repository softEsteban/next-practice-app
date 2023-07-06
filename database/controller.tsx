import { NextApiRequest, NextApiResponse } from 'next';
import Users from '../models/user';


export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
    try {
        const users = await Users.find({});
        if (!users) return res.status(404).json({ error: "User not found" });
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: "Error while fetching" })
    }
}

export async function postUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        const formData = req.body;

        if (!formData) {
            return res.status(400).json({ error: "Form data not provided" });
        }

        const newUser = await Users.create(formData);
        return res.status(200).json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error while creating user" });
    }
}