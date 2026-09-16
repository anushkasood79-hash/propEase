const mongoose = require("mongoose");

const maintenanceRequestSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        priority: {
            type: String,
            enum: ["low", "medium", "high", "urgent"],
            default: "medium"
        },

        description: {
            type: String,
            required: true
        },

        image: {
            type: String,
            default: ""
        },

        status: {
            type: String,
            enum: ["Pending", "In Progress", "Completed", "Cancelled"],
            default: "Pending"
        },

        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model(
    "MaintenanceRequest",
    maintenanceRequestSchema
);