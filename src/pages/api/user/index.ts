import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../domain"
import user from "../user/user.json"
export default function handler(req: NextApiRequest, res: NextApiResponse<User>) {
    res.status(200).json(user)
}