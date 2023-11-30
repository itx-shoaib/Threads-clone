"use server"

import {connectDB} from "../mongoose"

export async function updateUser():Promise<void>{
    connectDB()
}