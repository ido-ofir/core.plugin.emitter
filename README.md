
# core.plugin.emitter

A tiny event emitter.

extends `core` with:

* events - { object } - holding listeners for events.
* on - { function(name, listener) } - listen for an event.
* off - { function(name, listener) } - stop listening for an event.
* emit - { function(name, ...args) } - emit an event by name. listeners will be called with all args.
* Emitter - { function } - create a new emitter.