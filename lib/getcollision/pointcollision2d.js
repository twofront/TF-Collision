/*	# 2D Point Collision Detection.
	Uses the [winding number algorithm](http://en.wikipedia.org/wiki/Point_in_polygon#Winding_number_algorithm).
*/
module.exports = function(point, object) {
	var lastAngle = null;
	var totalAngle = 0.0;
	for (var i=0; i<object.length+1; i++) {
		// We have to loop back around to the first point at the end.
		var objectPoint = object.length===i ? object[0] : object[i];
		var angle = Math.atan2(objectPoint.y-point.y, objectPoint.x-point.x);
		// The first loop only gets us a lastAngle value for the next loop.
		if (lastAngle !== null) {
			// Get rotation from last rotation to new rotation.
			var difference = angle - lastAngle;
			// Take the shortest direction.
			if (difference > Math.PI) difference -= Math.PI;
			else if (difference < -Math.PI) difference += Math.PI;
			totalAngle += difference;
		}
		lastAngle = angle;
	}
	// The result should always be 0 or 2*PI. We give room for rounding errors.
	if (totalAngle < 1 && totalAngle > -1) {
		return false;
	} else {
		return true;
	}
}
