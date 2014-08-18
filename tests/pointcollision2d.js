
var pointCollision2D = require('../lib/getcollision/pointcollision2d');
var assert = require('assert');

/* ## pointCollision2D Tests
*/

var square = [
	{x: -1, y: 1},
	{x: 1, y: 1},
	{x: 1, y: -1},
	{x: -1, y: -1}
];
assert.equal(
	pointCollision2D({x: 0, y: 0}, square),
	true,
	'Square collision failed.'
);
assert.equal(
	pointCollision2D({x: 2, y: 2}, square),
	false,
	'Square miss failed.'
);

var concave = [
	{x: -1, y: 1.5},
	{x: 1, y: 1.5},
	{x: 1, y: 3},
	{x: 2, y: 3},
	{x: 2, y: -3},
	{x: -2, y: -3},
	{x: -2, y: 3},
	{x: -1, y: 3}
];
assert.equal(
	pointCollision2D({x: 0, y: 1}, concave),
	true,
	'Concave collision failed.'
);
assert.equal(
	pointCollision2D({x: 0, y: 2}, concave),
	false,
	'Concave miss failed.'
);

// Note that for edge cases where the point is exactly on the edge I
// do not care about the outcome.
assert.equal(
	pointCollision2D({x: 1.5, y: 3.00001}, concave),
	false,
	'Point miss edge case 1 failed.'
);
assert.equal(
	pointCollision2D({x: 1.5, y: 2.99999}, concave),
	true,
	'Point collision edge case 1 failed.'
);
assert.equal(
	pointCollision2D({x: 0.99999, y: 1.50001}, concave),
	false,
	'Point miss edge case 2 failed.'
);
assert.equal(
	pointCollision2D({x: 1.00001, y: 1.50001}, concave),
	true,
	'Point collision edge case 2 failed.'
);
