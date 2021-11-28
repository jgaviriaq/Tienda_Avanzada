import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import userRoute from './routes/UserRoutes.js';
import productRoute from './routes/ProductRoute.js';

const app = express()
const port = 3001

app.use(express.json());
app.use(cors({ origin: true }));
app.use(userRoute);
app.use(productRoute);

app.listen(port, async () => {
  try {
    await mongoose.connect('mongodb+srv://jgaviriaq:71294859jgq@cluster0.9brsx.mongodb.net/Tienda?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Error de conexión en la BD")
  }
  console.log(`Server listening at http://localhost:${port}`)
})