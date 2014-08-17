
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
	'Collision for square failed.'
);
assert.equal(
	pointCollision2D({x: 2, y: 2}, square),
	false,
	'Collision miss for square failed.'
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
	'Collision for concave shape failed.'
);
assert.equal(
	pointCollision2D({x: 0, y: 2}, concave),
	false,
	'Collision miss for concave shape failed.'
);

// Note that for edge cases where the point is exactly on the edge I
// do not care about the outcome.
assert.equal(
	pointCollision2D({x: 1.5, y: 3.00001}, concave),
	false,
	'Edge case 1 failed.'
);
assert.equal(
	pointCollision2D({x: 1.5, y: 2.99999}, concave),
	true,
	'Edge case 2 failed.'
);
assert.equal(
	pointCollision2D({x: 0.99999, y: 1.50001}, concave),
	false,
	'Edge case 3 failed.'
);
assert.equal(
	pointCollision2D({x: 1.00001, y: 1.50001}, concave),
	true,
	'Edge case 4 failed.'
);

console.log('Success');
