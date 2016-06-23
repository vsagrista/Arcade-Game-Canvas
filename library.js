// Decorator 
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = move;
    return obj;
};

// delagates to the decorator, becomes a property of carlike
var move = function() {
    this.loc++;
};