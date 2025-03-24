const express = require("express");
const travelEnquiryRequest = require("../controllers/enquiry");


const emailRouter = express.Router()

emailRouter.post('/travel-enquiry-request',travelEnquiryRequest)

module.exports = emailRouter;