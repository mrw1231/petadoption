const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    lineItems: [lineItemSchema],
    isPaid: {type: Boolean, default: false}
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});