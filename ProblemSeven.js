function withdraw(cost) {
	let withdrawalAmounts = {};
	let denominations = [100, 50, 20, 10, 5, 1];
	let change = cost;

	for(var i = 0; i < denominations.length; i++) {
		let denom = denominations[i];
		let modulo = change % denom;
		let value = (change - modulo)/denom;

		change = change - denom*value;
		
		if( value > 0 ) {
			withdrawalAmounts[denom] = value;
		}
	}
	return withdrawalAmounts;
}

console.log(withdraw(1744));
console.log(withdraw(426));

function budgetToBills(amount, bills) {
	let denominations = [100, 50, 20, 10, 5, 1];
	let withdrawalAmounts = {};

	// make sure bills array passed as a parameter doesn't contain any unknown denominations:
	let difference = bills.filter(x => !denominations.includes(x));
    
	if (difference.length > 0) {
		console.log("There are unknown denominations.");
		return undefined;
	} else if (amount <= 0) {
		console.log("No withdrawal, amount less than zero.");
		return undefined;
	} else {
		let bills = arguments[1].sort(function(a,b){
			return b - a;
		});
		
		//console.log("bills: " + bills);

		let change = amount;

		for(var x in bills) {
			let denom = bills[x];
			let modulo = change % denom;
			let value = (change - modulo)/denom;

			change = change - denom*value;
			// console.log("bills[x]: " + bills[x]);
			// console.log("value: " + value);
			// console.log("modulo: " + modulo);
			
			if( value > 0 ) {
				withdrawalAmounts[denom] = value;
			}
		}
	}

	return withdrawalAmounts;
}

console.log(budgetToBills(1754, [20, 10, 5, 1]));
console.log(budgetToBills(1754, [100, 20, 50, 10, 5, 1]));
console.log(budgetToBills(1200, [200, 100, 50, 20]));
console.log(budgetToBills(0, [20, 5, 1]));
console.log(budgetToBills(-350, [100, 20, 50, 10]));