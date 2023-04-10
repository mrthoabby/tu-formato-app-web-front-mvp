import { NextApiRequest, NextApiResponse } from "next"
import user from "../user/user.json"
import { User } from "@/domain/api"
export default async function handler(req: NextApiRequest, res: NextApiResponse<User>) {
    res.status(200).json(user)
}