import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/Models/user";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "cartstore-next" });

//Inngest function to store the user data into the database

export const syncUserCreation = inngest.createFunction(
    {
        id:'sync-user-from-clerk'
    },
    {event:'clerk/user.created'},
    async({event})=>{
        const {id,first_name,last_name,email_addresses,image_url} = event.data;
        const userData = {
            _id:id,
            email:email_addresses[0].email_addresses,
            name :first_name + ' ' + last_name,
            image_url:image_url,
        }
        await connectDB();
        await User.create(userData);
    }
)

//Ingest function to update the user data into the database
export const syncUserUpdatation = inngest.createFunction(
    {
        id:'update-user-from-clerk'
    },
    {event:'clerk/user.updated'},
    async({event})=>{
        const {id,first_name,last_name,email_addresses,image_url} = event.data;
        const userData = {
            _id:id,
            email:email_addresses[0].email_addresses,
            name :first_name + ' ' + last_name,
            image_url:image_url,
        }
        await connectDB();
        await User.findByIdAndUpdate(id,userData);
    }
)

//Ingest function to delete the user data into the database

export const syncUserdeletion = inngest.createFunction(
    {
        id:'delete-user-from-clerk'
    },
    {event:'clerk/user.deleted'},
    async({event})=>{
        const {id} = event.data;
        await connectDB();
        await User.findByIdAndDelete(id)
    }
)