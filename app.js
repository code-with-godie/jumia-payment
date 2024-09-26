//imports
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import notFound from './middlewares/notFound.js';
import errorHandlerMiddleware from './middlewares/error-handler.js';
import paymentsRoute from './routes/paymentsRoute.js';
dotenv.config();
const app = express();

//extra security packages
app.use(cors());
app.use(helmet());
app.use(express.json());

//api  routes
app.get('/', (req, res) => {
  return res
    .status(200)
    .json({ success: true, message: 'payment gateway for jumia!!!' });
});
app.use('/api/v1/pay', paymentsRoute);

//not found route
app.use(notFound);

//error handlermindleware
app.use(errorHandlerMiddleware);
const port =  process.env.PORT || 5000 
app.listen(port, () => console.log(`server is listening at port ${port}...`));
