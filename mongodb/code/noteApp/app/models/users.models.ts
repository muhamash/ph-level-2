import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";


const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: [true, "Must require the first name"],
        trim: true

    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        min: [18, "Age should not below than {VALUE}"]
    },
    password: {
        type: String,
        required: [ true, "Password is required" ],
        min: [8, "Password should longer than 7 character"]
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

export const User = model("User", userSchema)