import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import {registerEvents} from './documentation_dept.events';

var DocumentationDeptSchema = new mongoose.Schema({
  booking_airline: String,
  booking_time: String,
  booking_location: String,
  halal_certificate: String,
  doc_creation_date: String,
  invoice_generation: String,
  certificate_of_origin:String,
  form_e:String,
  driver_name:String,
  status: String,
  flight_booked: String,
  order: { type: Schema.Types.ObjectId, ref: 'Order' },
},{
  timestamps: true
});

registerEvents(DocumentationDeptSchema);
export default mongoose.model('DocumentationDept', DocumentationDeptSchema);
