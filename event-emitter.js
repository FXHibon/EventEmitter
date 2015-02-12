/**
 * Created by fx on 12/02/2015.
 */

var EventEmitter = function() {

    /**
     * Private events array
     * @type {Array}
     */
    this.events = [];
};

/**
 * Add event listener
 * @param {String} eventName Event name
 * @param {Function} listener Function to call when event is triggered
 */
EventEmitter.prototype.on = function(eventName, listener) {
    if (!this.events[eventName]) {
        this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
};

/**
 * Remove a listener from a given event
 * @param {String} eventName Event to remove the event from
 * @param {Function} listener (optional) listener Listener to remove.
 * If listener param not provided, then all functions are removed
 */
EventEmitter.prototype.off = function(eventName, listener) {
    if (eventName && this.events[eventName]) {
        var indexToDelete;
        if (listener && this.events[eventName].indexOf(listener) >= 0) {
            indexToDelete = this.events[eventName].indexOf(listener);
            this.events[eventName].splice(indexToDelete, 1);
        } else {
            this.events[eventName] = undefined;
        }
    }
};

/**
 * Emit a simple event
 * @param {String} eventName Event name
 * @param {Object} data Args
 */
EventEmitter.prototype.emit = function(eventName, data) {
    if (this.events[eventName]) {
        this.events[eventName].forEach(function(callback) {
            callback(data);
        });
    }
};