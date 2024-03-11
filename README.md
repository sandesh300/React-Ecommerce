# MERN E-Commerce 
MERN E-Commerce is an innovative online shopping platform built using the MERN stack, 
which stands for MongoDB, Express.js, React, and Node.js. It's a comprehensive solution 
that enables businesses to set up and manage their online stores with ease while providing 
customers with a seamless shopping experience. 

## Features -
**1. Basic E-Commerce Features:**  
Product lists, sorting, product details, cart, and checkout.   
   
**2. Secure Card Payments:**   
Implemented using Stripe for secure transactions.   

**3. Admin Panel:**    
Enables efficient management of orders and products.   

**4. Data Management:**      
Sorting, filtering, and pagination queries facilitated using Mongoose.   

**5. Authentication:**      
Utilizes Passport JS strategies for user authentication.   

**6. Email Communication:**      
Sends order and reset password emails using Nodemailer with GMail SMTP.   

**7. User Profile:**       
Allows users to create profiles and view their order history.   

## Technical Details -

**1. Frontend Stack:**   
React 18 with Tailwind CSS.   

**2. State Management:**   
Redux Toolkit with Async Thunk.   

**3. Routing:**    
React Router v6.   

**4. Frontend Testing:**  
Utilizes JSON-server for front-end testing.   

**5. Backend Stack:**    
MongoDB for the database.   
REST API using Express.   
Authentication with Passport JS and Passport JWT strategies.    
MongoDB Atlas for cloud database hosting.

**6. Deployment:**   
Vercel server deployment with straightforward instructions.

**7. Email Configuration:**      
Configurable environment variables for SMTP and other settings.

**8. Payments:**   
Secure payments integrated using Stripe's PaymentIntent-based custom flow.


## MongoDB Collections -
1. Brands
2. Carts
3. Categories
4. Orders
5. Products
6. Users


## Getting Started   
## Installation

1. Install Node.js and npm
2. Clone the repository
3. Install dependencies using npm install.

npm install
Configuration instructions

## Configuration
You need to configure the following environment variables:

* STRIPE_SECRET_KEY
* MONGODB_URI
* EMAIL_HOST
* EMAIL_PORT
* EMAIL_USER
* EMAIL_PASSWORD

## Usage

To start the fronted, run the following command:

npm start
The fronted will be available at http://localhost:3000.


## Testing

To run the tests, run the following command:   
npm test
## Deployment

The backend can be deployed to Vercel by following these instructions:

1. Create a Vercel account
2. Create a new project
3. Select the "Github" integration
4. Enter the repository URL
5. Click the "Deploy" button
