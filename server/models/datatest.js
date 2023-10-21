const mongoose = require('mongoose');

const datatestSchema = new mongoose.Schema(
    {
        TIMESTAMP: {
            type: String,
            required: true,
        },
        RECORD: {
            type: Number,
        },
        PZ1_Digit: Number,
        PZ2_Digit: Number,

        CR1_Digit: String,
        CR2_Digit: String,
        CR3_Digit: String,
        PZ1_Temp: Number,
        PZ2_Temp: Number,
        CR1_Temp: Number,
        CR2_Temp: Number,
        CR3_Temp: Number,
        TiltB_B: Number,
        TempB: Number,
    },
    { timestamps: true },
);

module.exports = mongoose.model('Datatest', datatestSchema);
