const { Schema, model } = require('mongoose');
const Friend = require('./Friend');

const OutputSchema = new Schema(
{
    OutputText: {
    type: String,
    required: true,
    },
    username: {
    type: String,
    required: true,
    max_length: 50,
    default: () => User.username
    },
    createdAt: {
    type: Date,
    default: Date.now,
    },
    Output: {
    type: Array,
    required: true
    },
    OutputCount: {
    type: Number,
    required: true,
    default: () => reactions.length
    }

},
{
    toJSON: {
    virtuals: true,
    },
}
);

const Output = model('Output', OutputSchema);

module.exports = Output;