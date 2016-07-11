// Decorator 
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function(){ // even better
    	obj.loc++;
    }
    return obj;
};

var john = new carlike({},1);
john.move();

// delagates to the decorator, becomes a property of carlike
// var move = function() {
//     this.loc++; 
// };

// this refers to the object on the left of the dot at the time of running
//    var john = carlike({},1);
//    john.move();   <-- as in here, binded to John