import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import {registerEvents} from './order.events';

var StockSchema = new mongoose.Schema({
  order_id: { type: Schema.Types.ObjectId, ref: 'Order' },
  item: String,
  carcass_weight: String
},{
  timestamps: true
});

registerEvents(StockSchema);
export default mongoose.model('OrderItems', StockSchema);
