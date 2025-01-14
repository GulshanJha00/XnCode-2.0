import mongoose from "mongoose";

const connectDB = async () => {
    try {
        
        

        
        await mongoose.connect(
            'mongodb+srv://prasu202324:xncode@cluster0.qo28r.mongodb.net/',
            
            
        );

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};

export default connectDB;