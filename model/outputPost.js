const { Schema, model } = require('mongoose');

const outputSchema =  new Schema(
{
outputBody: {
    type: String,
    required: true,
    maxlength: 280
},
username: {
    type: String,
    required: true
},
createdAt: {
    type: Date,
    default: Date.now,
}

},
{
toJSON: {
    getters: true,
},
id: false,
}
);