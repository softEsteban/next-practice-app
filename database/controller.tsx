import { NextApiRequest, NextApiResponse } from 'next';
import Users from '../models/user';

//http://localhost:3000/api/users
export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
    try {
        const users = await Users.find({});
        if (!users) return res.status(404).json({ error: "User not found" });
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: "Error while fetching" })
    }
}

export async function getUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { userId } = req.query;

        if (userId) {
            const user = await Users.findById(userId);
            res.status(200).json(user);
        }
        res.status(404).json({ error: "User not selected" })
    } catch (error) {
        res.status(404).json({ error: "Error while fetching the user" })
    }
}

//http://localhost:3000/api/users/1
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



//http://localhost:3000/api/users/1
export async function updateUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { userId } = req.query;
        const formData = req.body;

        if (userId && formData) {
            await Users.findByIdAndUpdate(userId, formData);
            res.status(200).json(formData);
        }
        res.status(404).json({ error: "User not selected ..." });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error while updating user" });
    }
}

export async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { userId } = req.query;

        if (userId) {
            const user = await Users.findByIdAndDelete(userId);
            res.status(200).json(user);
        }
        res.status(404).json({ error: "User not provided ..." });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error while deleting user" });
    }
}