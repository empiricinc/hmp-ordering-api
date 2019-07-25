import mongoose from 'mongoose';
import {registerEvents} from './driver.events';
const Schema = mongoose.Schema;


var DriverSchema = new mongoose.Schema({
  name: String,
  phone: String,
  delivery_date:String,
  delivery_time:String,
  status:String,
  package_weight:Number,
  custom_weight:Number,
  order: { type: Schema.Types.ObjectId, ref: 'Order' },
  active: Boolean
},{
  timestamps: true
});

registerEvents(DriverSchema);
export default mongoose.model('Driver', DriverSchema);
