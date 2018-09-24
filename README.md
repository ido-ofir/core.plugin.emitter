
# core.plugin.emitter

A tiny event emitter.

extends `core` with:

* events - { object } - holding listeners for events.
* on - { function(name, listener) } - listen for an event.
* off - { function(name, listener) } - stop listening for an event.
* emit - { function(name, ...args) } - emit an event by name. listeners will be called with all args.
* Emitter - { function } - create a new emitter.


```js
let core = new require('core.constructor')();

core.plugin(
  require('core.plugin.emitter')
);

function listener(){ ... }

core.on('eventName', listener);   // listen for 'eventName'

core.off('eventName', listener);  // remove single listener for 'eventName'
core.off('eventName');            // remove all listeners for 'eventName'
core.off();                       // remove all listeners for all events

core.emit('eventName', { any: 'thing' }, 'you', 'want');


// core.Emitter creates a new event emitter or adds events functionality to a given object

let a = {};
core.Emitter(a);  // argument is optional

a.on('eventName', ()=>{  });

a.emit('eventName');

```
