/**
 * Created by fx on 12/02/2015.
 */

var emitter = new EventEmitter();

var callback = function() {
    console.log("callback called");
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(item) {
        console.log(item);
    });
};

var trigger = function() {
    emitter.emit("customEvent", "hey");
};

var addOne = function() {
    emitter.on("customEvent", callback);
};

var removeOne = function() {
    emitter.off("customEvent", callback);
};

var removeAll = function() {
    emitter.off("customEvent");
};