import mongoose from "mongoose";

const mongoURI = "mongodb+srv://sanikadeshpande46:fetwrX3pbE1R3lbJ@cluster0.izoql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  }
};
