



module.exports = {
    name: 'core.plugin.emitter',
    init(plugin, done) {

        var core = this;

        var emitter = {
            _events: {},
            on(eventName, listener) { // return false in listener to stop the event
                var event = this._events[eventName];
                if (!event) {
                    event = this._events[eventName] = [];
                }
                event.push(listener);
                return this;
            },
            off(eventName, listener) {
                if (!eventName) {
                    this._events = {};
                    return this;
                }
                if (!listener) {
                    delete this._events[eventName];
                    return this;
                }
                var event = this._events[eventName];
                if (event) {
                    event = this._events[eventName] = event.filter((l) => {
                        return (l !== listener);
                    });
                    if (!event.length) delete this._events[eventName];
                }
                return this;
            },
            emit(eventName) {
                var cont, event = this._events[eventName];
                if (!event) return;
                var args = [].slice.call(arguments, 1);
                for (var i = 0; i < event.length; i++) {
                    cont = event[i].apply(null, args);
                    if (cont === false) break;
                }
                return this;
            },
            once(eventName, listener){
                var t = this;
                var l = function(a,b,c,d,e){
                    t.off(eventName, l)
                    listener(a,b,c,d,e);
                }
                t.on(eventName, l)
            }
        };

        function Emitter(target){
            target = target || {};
            Object.assign(target, emitter);//
            target._events = {};
            return target;
        }

        this.extend({ Emitter: Emitter });
        this.extend(emitter);
        
        done(emitter);

    }
};