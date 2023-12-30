## MERN E-Commerce 
with Redux Toolkit, Node js, MongoDB, Express js, Admin Panel, Stripe Payment, Cloud Deployment, Email Invoice, and many features...

## Features

**1. Basic E-Commerce Features:**  
Product lists, details, cart, and checkout.   
   
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

## Technical Details

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
