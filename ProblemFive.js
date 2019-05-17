const array = ['a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'];

function findFrequency(array) {
	var a = [], b = [], prev;
	array.sort();
	for (var i = 0; i < array.length; i++ ) {
		if ( array[i] !== prev ) {
			a.push(array[i]);
			b.push(1);
		} else {
			b[b.length -1]++;
		}
		prev = array[i];
	}

	var max = b.reduce(function(a,b) {
		return Math.max(a,b);
	});
	var maxValueIndex = (b.indexOf(max));
	var maxValue = a[maxValueIndex];
	var stringMax = "The most frequent item is: " + maxValue + ".";

	var min = b.reduce(function(a,b) {
		return Math.min(a,b);
	});
	var minValueIndex = (b.indexOf(min));
	var minValue = a[minValueIndex];
	var stringMin = " The least frequent item is : " + minValue;

	var finalString = stringMax + stringMin;
	return finalString;
}

console.log(findFrequency(array));