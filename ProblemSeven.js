/*
Imagine that you're wanting to withdraw cash from the bank to cover specific costs. You want to withdraw the exact dollar amount, using the largest bills possible. For example, if the cost you were trying to cover is $1,745, you would need to withdraw 17 $100 bills, 2 $20 bills and 1 $5 bill. We'll leave change (anything less than a dollar) out of it for the sake of the exercise.

To solve this, write a function that takes one argument, cost and returns an object with the bill breakdown. For example, the object returned for $1,744, would like look this:

{
  100: 17,
  20: 2,
  1: 4
}
If you want to take it a step further, enable your function to take a second argument, bills, which is an array of the bills you want your budget broken down in to. For example:

budgetToBills(1754, [20, 10, 5, 1]); // { 20: 87, 10: 1, 1: 4 }
budgetToBills(1754, [100, 20, 50, 10, 5, 1]; // { 100: 17, 50: 1, 4: 1 }

What if you someone passes in the wrong arguments?
*/

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
	console.log(arguments);
	console.log(arguments[1]);

	// make sure bills array passed doesn't contain any unknown denominations:
	let difference = bills.filter(x => !denominations.includes(x));
    
	if (difference.length > 0) {
		console.log("There are unknown denominations.");
		return undefined;
	} else {
		let bills = arguments[1].sort(function(a,b){
			return b - a;
		});
		
		console.log("bills: " + bills);

		for (var x in bills ) {
			console.log(bills[x]);
		}	

		let change = amount;

		for(var x in bills) {
			let denom = bills[x];
			let modulo = change % denom;
			let value = (change - modulo)/denom;

			change = change - denom*value;
			console.log("bills[x]: " + bills[x]);
			console.log("value: " + value);
			console.log("modulo: " + modulo);
			
			if( value > 0 ) {
				withdrawalAmounts[denom] = value;
			}
		}
	}

	return withdrawalAmounts;
}

console.log(budgetToBills(1754, [20, 10, 5, 1]));
console.log(budgetToBills(1754, [100, 20, 50, 10, 5, 1]));