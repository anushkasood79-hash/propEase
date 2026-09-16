const express = require("express");
const MaintenanceRequest = require("../models/MaintenanceRequest");

const router = express.Router();

// Create a new maintenance request
router.post("/", async (req, res) => {
    try {
        const { title, category, priority, description, image } = req.body;

        const request = new MaintenanceRequest({
            title,
            category,
            priority,
            description,
            image: image || ""
        });

        await request.save();

        res.status(201).json({
            message: "Maintenance request created successfully",
            request
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create maintenance request",
            error: error.message
        });
    }
});

// Get all maintenance requests
router.get("/", async (req, res) => {
    try {
        const requests = await MaintenanceRequest.find()
            .sort({ createdAt: -1 });

        res.status(200).json(requests);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch maintenance requests",
            error: error.message
        });
    }
});

// Update maintenance request status
router.patch("/:id/status", async (req, res) => {
    try {
        const { status } = req.body;

        const request = await MaintenanceRequest.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!request) {
            return res.status(404).json({
                message: "Maintenance request not found"
            });
        }

        res.status(200).json({
            message: "Status updated successfully",
            request
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update status",
            error: error.message
        });
    }
});

module.exports = router;