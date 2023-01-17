import mongoose from 'mongoose';

const Schema = mongoose.Schema()

const itemSchema = new Schema({
    name: {type: String, require},
    price: {type: Number},
    category: {type: String, require},
    image: {type: String, require},

}, {
    timestamps: true
});

const itemModel = mongoose.model('items', itemSchema);
export default itemModel;