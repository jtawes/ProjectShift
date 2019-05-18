const firstArray = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
const secondArray = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];



function overlap(arr1, arr2) {
	let longerArray;
	let shortArray;
	let arrayOfOverlaps = [];

	if(arr1.length >= arr2.length) {
		longerArray = arr1;
		shortArray = arr2;
	} else {
		longerArray = arr2;
		shortArray = arr1;
	};	

	var countedItemsShort = shortArray.reduce(function (allValues, value) {
		if( value in allValues ) {
			allValues[value]++;
		} else {
			allValues[value] = 1;
		}
		return allValues;
	}, {});

	var countedItemsLonger = longerArray.reduce(function (allValues, value) {
		if( value in allValues ) {
			allValues[value]++;
		} else {
			allValues[value] = 1;
		}
		return allValues;
	}, {});


	for (const key in countedItemsLonger) {
		let longKey = key;
		
		for (const key in countedItemsShort) {
			let shortKey = key;
			if (longKey == shortKey) {
				
				let a = countedItemsShort[shortKey];
				let b = countedItemsLonger[shortKey];
				let overlaps = Math.min(a,b);

				for(var i = 0; i < overlaps; i++) {
					arrayOfOverlaps.push(longKey);
				}				
			}			
		}
	};

	
	return arrayOfOverlaps;
}

console.log(overlap(firstArray, secondArray));

