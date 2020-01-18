import mongoose from 'mongoose';
import shortid from 'shortid';

const { String, Number } = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  sku: {
    type: String,
    unique: true,
    default: shortid.generate()
  },
  imageURL: {
    type: String,
    required: true
  },
  category: {
    type: String
  }
});

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);