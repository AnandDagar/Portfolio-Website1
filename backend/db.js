const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:Helloworld@gofood.v4y5ooy.mongodb.net/GoFood?retryWrites=true&w=majority&appName=GoFood';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        console.log();
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;
