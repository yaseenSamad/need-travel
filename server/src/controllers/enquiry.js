const { successResponse, errorResponse } = require('../utils/responsehandler');

const nodemailer = require('nodemailer');
require('dotenv').config()
const axios = require('axios');

console.log(process.env.USER);
console.log(process.env.PASSWORD);

const transporter = nodemailer.createTransport({
    // service: 'gmail',
    // host: 'smtp.gmail.com',
    host:'mail.need.ae',
    port: 465,
    secure: true, 
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

const travelEnquiryRequest = async(req,res) => {
    try{
        const { firstName, lastName, email, contactNo, numberOfPassengers, service, from, destination, departure, return: returnDate, countryCode,remarks } = req.body;

        const missingFields = [];
    
        if (!firstName) missingFields.push("firstName");
        if (!lastName) missingFields.push("lastName");
        if (!email) missingFields.push("email");
        if (!contactNo) missingFields.push("contactNo");
        if (!numberOfPassengers) missingFields.push("numberOfPassengers");
        if (!service) missingFields.push("service");
        if (!from) missingFields.push("from");
        if (!destination) missingFields.push("destination");
        if (!departure) missingFields.push("departure");
        if (!returnDate) missingFields.push("return");
        if (!countryCode) missingFields.push("countryCode");
        if(missingFields.length > 0){
            throw Error(`Missing required fields: ${missingFields.join(", ")}`)
        }

        const mailOptions = {
            from: {
              name: 'Need',
              address: process.env.USER,
            },
            to: ['yasinsamad123@gmail.com'],
            subject: `Recieved a travel enquiry Request`,
            text: `Hello Need travel, You got a request from ${firstName + ' ' + lastName} `,
            html: `
            <h2>Hey Need Travel! You got a request</h2> <br/>
            <br/>
            FirstName : ${firstName} <br/>
            LastName : ${lastName} <br/>
            Email : ${email} <br/>
            Phone : ${countryCode + contactNo} <br/>
            Service : ${service} <br/>
            No of Passengers : ${numberOfPassengers} <br/>
            From : ${from} <br/>
            To : ${destination} <br/>
            Departure : ${departure} <br/>
            Return : ${returnDate} <br/>
            Remarks : ${remarks || ''}
            <br/>
            Best regards, <br/>
            Need travel IT Team
            `,
          };
        console.log('here');
          await mailSend(mailOptions)



        return successResponse(res, "Data fetched successfully", true);
    }catch(error){
        return errorResponse(res, "Failed to fetch data", 500, error.message);
    }
}


  
  const mailSend = async (mailOptions) => {
    try {
      console.log(mailOptions);
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully', mailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };
  

module.exports = travelEnquiryRequest