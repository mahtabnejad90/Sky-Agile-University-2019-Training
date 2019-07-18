function myFunc(){
	console.log("Hi I am mahtab");
}

function calculateTotal() {
	var numbersUpTo = document.getElementById('input_number').value;
	var startingNumber;
	var runningTotal = 0;


	for(startingNumber = 0; startingNumber <= numbersUpTo; startingNumber++) {
		runningTotal += startingNumber;
	}

document.getElementById('output_number').innerHTML = runningTotal;

}
