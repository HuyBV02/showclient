const Datatest = require('../models/datatest');
const asyncHandler = require('express-async-handler');

const getDataTest = asyncHandler(async (req, res) => {
    const response = await Datatest.find();

    return res.status(200).json({
        data: response,
        success: response ? true : false,
    });
});

const getLastDataTest = asyncHandler(async (req, res) => {
    const response = await Datatest.findOne().sort({ RECORD: -1 });

    return res.status(200).json({
        data: response,
        success: response ? true : false,
    });
});

const getDatasPz = asyncHandler(async (req, res) => {
    const response = await Datatest.find().select(
        '-CR1_Digit -CR2_Digit -CR3_Digit -CR1_Temp -CR2_Temp -CR3_Temp -TiltB_B -TempB',
    );
    return res.status(200).json({
        data: response,
        success: response ? true : false,
    });
});

const getDatasCr = asyncHandler(async (req, res) => {
    const response = await Datatest.find().select(
        '-PZ1_Digit -PZ2_Digit -PZ1_Temp -PZ2_Temp -TiltB_B -TempB',
    );
    return res.status(200).json({
        data: response,
        success: response ? true : false,
    });
});

const getDatasTilt = asyncHandler(async (req, res) => {
    const response = await Datatest.find().select(
        '-PZ1_Digit -PZ2_Digit -CR1_Digit -CR2_Digit -CR3_Digit -PZ1_Temp -PZ2_Temp -CR1_Temp -CR2_Temp -CR3_Temp',
    );
    return res.status(200).json({
        data: response,
        success: response ? true : false,
    });
});

module.exports = {
    getDatasPz,
    getDatasCr,
    getDatasTilt,
    getDataTest,
    getLastDataTest,
};
