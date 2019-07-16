import mongoose from 'mongoose';
import {registerEvents} from './order.events';
const Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
  date_of_delivery: String,
  product_type: String,
  mode_of_delivery: String,
  type: String,
  mode: String,
  flight_name: String,
  flight_date: String,
  carcase_weight: String,
  isApprove: Boolean,
  isCompleted: Boolean,
  documentation_team: { type: Schema.Types.ObjectId, ref: 'DocumentationDept' },
  production_team: { type: Schema.Types.ObjectId, ref: 'ProductionDept' },
  quarantine_team: { type: Schema.Types.ObjectId, ref: 'QuarantineDept' },
  order_items: [{ type: Schema.Types.ObjectId, ref: 'OrderItems' }]
},{
  timestamps: true
});

registerEvents(OrderSchema);
export default mongoose.model('Order', OrderSchema);
