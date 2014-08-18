/*	# 2D Object Collision Detection.
	Uses the [separating axis theorem](http://www.codeproject.com/Articles/15573/D-Polygon-Collision-Detection).
*/

var helpers = require('../helpers');

function project(axis, object) {
	var result = null;
	for (var i=0; i<object.length; i++) {
		var dot = helpers.dot(axis, object[i]);
		if (i !== 0) {
			if (dot < result.min) result.min = dot;
			else if (dot > result.max) result.max = dot;
		} else {
			result = {min: dot, max: dot}
		}
	}
	return result;
}

module.exports = function(object1, object2) {
	// Get the normal for every edge and project our objects on it.
	for (var i=0; i<object1.length+object2.length; i++) {
		var j = i;
		var object = null;
		if (j < object1.length) {
			object = object1;
		} else {
			object = object2;
			j -= object1.length;
		}
		var pointa = object[j];
		var pointb = j<object.length-1 ? object[j+1] : object[0];
		var normal = {x: -(pointa.y-pointb.y), y: pointa.x-pointb.x};
		// If we want to find out how much the objects are intersecting we would normalize our normal here.
		var a = project(normal, object1);
		var b = project(normal, object2);
		if (a.min > b.max || b.min > a.max) {
			return false;
		}
	}
	return true;
}
