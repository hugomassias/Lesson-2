//Tableaux

const myArray = ['Hello', 2, 3, 4, 5, 6];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray.length);
console.log('last element', myArray[myArray.lenght - 1]);

myArray[0] = 'world';
console.log(myArray[0]);
console.log(myArray);

//map
const myArr = [1, 2, 3];
const result = myArr.map(num => {
	console.log('num', num)
	return num + 1;
})
console.log('result', result);
myArr.push(4);
console.log(myArr);

myArr.splice(2, 2, '12345');
console.log(myArr);


//Objet
const user = {
	name: 'Yoh la récidive',
	status: 1,
	email: 'test@ynov.com',
	pets: ['cat', 'dog'],
	car:{
		color: 'red',
	},
};

console.log(user);
console.log(user.name);
console.log(user['name']);
const key = 'status';
console.log(user[key]);