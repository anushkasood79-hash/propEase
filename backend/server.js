const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const maintenanceRoutes = require("./routes/maintenanceRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/bookings", bookingRoutes);
app.get("/", (req, res) => {
    res.send("propEase Backend is Running!");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    dbName: "propEase"
})
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:");
        console.log(error.message);
    });