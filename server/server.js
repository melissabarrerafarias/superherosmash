const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const DOMAIN = 'http://localhost:3000/checkout'

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

<<<<<<< HEAD
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
=======
app.use(express.static("."));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

>>>>>>> 0f1d9b94665f4f5b1fdb6b2be41e03c8d989bd3a
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

<<<<<<< HEAD
=======
app.post("/api/payment-intent", async (req, res, next) => {
  try {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: "usd"
    });
    res.status(201).json({
      clientSecret: paymentIntent.client_secret
    });
  } catch(err) {
    next(err);
  }
});

app.post('/api/checkout-session', async (req, res, next) => {
  try {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 500,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  res.status(201).json({ id: session.id });
} catch(err) {
  next(err);
}
});

>>>>>>> 0f1d9b94665f4f5b1fdb6b2be41e03c8d989bd3a

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
