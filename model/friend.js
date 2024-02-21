const { Schema, Types } = require('mongoose');

const FriendSchema = new Schema(
{
    FriendId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    },
    FriendName: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 4,
    default: 'Imaginary Person',
    },
    createdAt: {
    type: Date,
    default: Date.now,
},
},
{
    toJSON: {
        getters: true,
    },
    id: false,
}
);

module.exports = FriendSchema;