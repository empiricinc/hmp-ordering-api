/**
 * Driver model events
 */

import {EventEmitter} from 'events';
var DriverEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DriverEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Driver) {
  for(var e in events) {
    let event = events[e];
    Driver.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    DriverEvents.emit(event + ':' + doc._id, doc);
    DriverEvents.emit(event, doc);
  };
}

export {registerEvents};
export default DriverEvents;
