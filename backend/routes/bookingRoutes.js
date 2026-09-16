const express = require("express");
const AmenityBooking = require("../models/AmenityBooking");

const router = express.Router();

// Create a new amenity booking
router.post("/", async (req, res) => {
    try {
        const {
            amenity,
            icon,
            tenant,
            apartment,
            date,
            checkIn,
            checkOut
        } = req.body;

        const booking = new AmenityBooking({
            amenity,
            icon,
            tenant,
            apartment,
            date,
            checkIn,
            checkOut
        });

        await booking.save();

        res.status(201).json({
            message: "Booking created successfully",
            booking
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create booking",
            error: error.message
        });
    }
});

// Get all bookings
router.get("/", async (req, res) => {
    try {
        const bookings = await AmenityBooking.find()
            .sort({ createdAt: -1 });

        res.status(200).json(bookings);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch bookings",
            error: error.message
        });
    }
});
// Update booking status
router.patch("/:id/status", async (req, res) => {
    try {
        const { status } = req.body;

        const booking = await AmenityBooking.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!booking) {
            return res.status(404).json({
                message: "Booking not found"
            });
        }

        res.status(200).json({
            message: "Booking status updated successfully",
            booking
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update booking status",
            error: error.message
        });
    }
});
module.exports = router;