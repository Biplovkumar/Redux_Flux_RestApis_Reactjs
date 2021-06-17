import  AppDispatcher  from '../Dispatcher';


var Store = {
    value: 0,
    bip:[],
    listeners: [], // list of listening objects
    callbacks: [], // list of methods that should be called on those objects (as strings)

    incrementValue: function () {
        this.value++;
    },

    getValue: function () {
        return this.value;
    },

    getData: function () {
         return this.bip;
     },
    bind: function (listener, callback) {
        this.listeners.push(listener);
        this.callbacks.push(callback);
    },

    unbind: function (listener, callback) {
        var indexListener = this.listeners.indexOf(listener);
        var indexCallback = this.callbacks.indexOf(callback);
        // check if listener and callback exists
        if (indexListener == indexCallback && indexListener > -1) {
            // remove if exists
            this.listeners.splice(indexListener, 1);
            this.callbacks.splice(indexCallback, 1);
        }
    },

    trigger: function () {
        // notify all listeners
        for (var i in this.listeners) {
            this.listeners[i][this.callbacks[i]]();
        }
    }
};

// register increment action
AppDispatcher.register(function (payload) {
    console.log("sdjhjsdhfkjsdf",payload)
    switch (payload.eventName) {
        case 'increment':
            Store.incrementValue();
            Store.trigger();
            break;
        case 'SaveVal':
                Store.bip = payload.data;
                break;
    }

    return true; // needed for Flux promise resolution

});

export default Store;