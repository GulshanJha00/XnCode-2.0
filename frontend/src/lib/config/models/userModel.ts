import mongoose, { Schema, Document, Model } from "mongoose";


interface IUser extends Document {
    username: string;
    name: string;
    email: string;
    password: string;
    date?: Date;
    isAdmin?: boolean;
}


const userSchema: Schema<IUser> = new Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false },
});


const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema)

export default User;
