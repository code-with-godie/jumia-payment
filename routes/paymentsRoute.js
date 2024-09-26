import express from 'express';
import { payWithStripe } from '../controllers/stripePayment.js';
import { createOrder } from '../controllers/stripeSuceess.js';

const Router = express.Router();
Router.route('/create-stripe-intent').post(payWithStripe);
Router.route('/stripe/success').post(createOrder);

export default Router;
