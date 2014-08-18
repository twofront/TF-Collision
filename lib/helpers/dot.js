
module.exports = function(a, b) {
	var total = 0.0;
	for (var e in a) {
		total += (a[e] * b[e]);
	}
	return total;
}
