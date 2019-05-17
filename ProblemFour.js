const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];

function findAverage(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	var average = sum/(array.length - 1);
	return average;
}

console.log(findAverage(array));