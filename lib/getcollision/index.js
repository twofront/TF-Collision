
var pointCollision2D = require('./pointcollision2d');

/*	## getCollision Function
	This takes any 2 things and passes them to the correct collision
	checking function based on their types. This saves the user from
	having to know the names for all our collision detection functions.
*/
module.exports = function(object1, object2) {
	var point = null;
	var objecta = null;
	if (object1.type === 'Point2D') {
		point = object1;
		objecta = object2;
	}
	if (object2.type === 'Point2D' && point === null) {
		point = object2;
		objecta = object2;
	} else {
		return new Error('Both objects cannot be points!');
	}

	if (point) {
		// Pass the points with world coordinates after all translations,
		// rotations and scaling.
		return pointCollision2D(point.getWorldPoint(), objecta.getWorldPoints());
	} else {
		return new Error('Unsupported collision check!');
	}
}
