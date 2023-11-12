const mongoose = require('mongoose');

const datasensorSchema = new mongoose.Schema(
    {
        TIMESTAMP: {
            type: String,
            required: true,
        },
        RECORD: {
            type: Number,
        },
        Batt_Volt: Number,
        Temp: Number,

        CR1_Digit: String,
        CR2_Digit: String,
        CR3_Digit: String,
        'Tilt_A_Or(1)': Number,
        'Tilt_B_Or(1)': Number,
        'Tilt_A_Or(2)': Number,
        'Tilt_B_Or(2)': Number,
        'Tilt_A_Or(3)': Number,
        'Tilt_B_Or(3)': Number,
        PZ1_Digit: Number,
        PZ2_Digit: Number,
        CR1: Number,
        CR2: Number,
        CR3: Number,
        'Tilt_A(1)': Number,
        'Tilt_B(1)': Number,
        'Tilt_A(2)': Number,
        'Tilt_B(2)': Number,
        'Tilt_A(3)': Number,
        'Tilt_B(3)': Number,
        PZ1: Number,
        PZ2: Number,
        CR1_Temp: Number,
        CR2_Temp: Number,
        CR3_Temp: Number,
        'Temp_Tilt(1)': Number,
        'Temp_Tilt(2)': Number,
        'Temp_Tilt(3)': Number,
        PZ1_Temp: Number,
        PZ2_Temp: Number,
    },
    { timestamps: true },
);

module.exports = mongoose.model('Datasensor', datasensorSchema);
