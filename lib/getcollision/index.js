
var pointCollision2D = require('./pointcollision2d');
var objectCollision2D = require('./objectcollision2d');

/*	## getCollision Function
	This takes any 2 things and passes them to the correct collision
	checking function based on their types. This saves the user from
	having to know the names for all our collision detection functions.
*/
module.exports = function(object1, object2) {
	if (object1.type === 'Point2D' && object2.type === 'Object2D') {
		return pointCollision2D(object1.getWorldPoint(), object2.getWorldPoints());
	} else if (object2.type === 'Point2D' && object1.type === 'Object2D') {
		return pointCollision2D(object2.getWorldPoint(), object1.getWorldPoints());
	} else if (object1.type === 'Object2D' && object1.type === 'Object2D') {
		return objectCollision2D(object2.getWorldPoint(), object1.getWorldPoints());
	}
	return new Error('Unsupported collision check!');
}
