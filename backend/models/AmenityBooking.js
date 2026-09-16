const mongoose = require("mongoose");

const amenityBookingSchema = new mongoose.Schema(
    {
        amenity: {
            type: String,
            required: true
        },

        icon: {
            type: String,
            default: ""
        },

        tenant: {
            type: String,
            required: true
        },

        apartment: {
            type: String,
            default: "Current Apartment"
        },

        date: {
            type: String,
            required: true
        },

        checkIn: {
            type: String,
            required: true
        },

        checkOut: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["Pending", "Approved", "Rejected", "Completed", "Cancelled"],
            default: "Pending"
        },

        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model(
    "AmenityBooking",
    amenityBookingSchema
);