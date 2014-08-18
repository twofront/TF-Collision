
var objectCollision2D = require('../lib/getcollision/objectcollision2d');
var assert = require('assert');

/* ## pointCollision2D Tests
*/

var square1 = [
	{x: -1, y: 1},
	{x: 1, y: 1},
	{x: 1, y: -1},
	{x: -1, y: -1}
];
var square2 = [
	{x: 0, y: 2},
	{x: 2, y: 2},
	{x: 2, y: 0},
	{x: 0, y: 0}
];
var square3 = [
	{x: 0, y: 4},
	{x: 2, y: 4},
	{x: 2, y: 2},
	{x: 0, y: 2}
];
assert.equal(
	objectCollision2D(square1, square2),
	true,
	'Square on square collision failed.'
);
assert.equal(
	objectCollision2D(square1, square3),
	false,
	'Square on square miss failed.'
);

var big1 = [
	{x: -1, y: 1},
	{x: 1, y: 10},
	{x: 1, y: -1},
	{x: -1, y: -1}
];
assert.equal(
	objectCollision2D(big1, square2),
	true,
	'Big shape on square collision failed.'
);

var square4 = [
	{x: 0, y: 3},
	{x: 2, y: 3},
	{x: 2, y: 1.00001},
	{x: 0, y: 1.00001}
];
var square5 = [
	{x: 0, y: 3},
	{x: 2, y: 3},
	{x: 2, y: 0.99999},
	{x: 0, y: 0.99999}
];
assert.equal(
	objectCollision2D(square1, square4),
	false,
	'Object miss edge case failed.'
);
assert.equal(
	objectCollision2D(square1, square5),
	true,
	'Object collision edge case failed.'
);
