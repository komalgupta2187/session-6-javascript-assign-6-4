var employee1 = { 
	name: "komal", 
	age: 29,
	salary: 80000, 
	address: { 
		city: "Pune", 
		state: "Maharashra", 
		pin: 110045 },
	}
	
var employee2 = { 
	name: "Prem", 
	age: 30,
	salary: 80000, 
	address: { 
		city: "Baroda", 
		state: "Gujarat", 
		pin: 200060 },
	}

var employee3 = { 
	name: "Umang", 
	age: 24,
	salary: 50000, 
	address: { 
		city: "banglore", 
		state: "Karnataka", 
		pin: 290019 },
	}

var employee4 = { 
	name: "Shweta", 
	age: 20,
	salary: 40000, 
	address: { 
		city: "Mohali", 
		state: "Punjab", 
		pin: 922110 },
	}

var employee5 = { 
	name: "Monica", 
	age: 24,
	salary: 22000, 
	address: { 
		city: "Shimla", 
		state: "Himachal Pradesh", 
		pin: 112201 },
	}

	
var employees = [employee1, employee2, employee3, employee4, employee5];

for (var emp in employees) {
console.log("Employee " + emp + " Details :-");
console.log("Name : "+ employees[emp]['name'] + ", Age : "+ employees[emp]['age'] +", Salary : " + employees[emp]['salary'] );
console.log("Address:: " );
console.log("City : " + employees[emp].address.city);
console.log("State : " + employees[emp].address.state);
console.log("Pincode : " + employees[emp].address.pin);
console.log("\r");
}