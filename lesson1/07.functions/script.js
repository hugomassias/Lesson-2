// Créez une fonction qui log 'Hello World'
function logFunction() {
	console.log('Hello World')
}
console.log(logFunction());

// Créez une fonction qui retourne 'Hello World'
function returnFunction() {
	return 'Hello World 2';
}
console.log(returnFunction());

// Sauvegardez la valeur retournée par la première fonction
function sum(a, b) {
	console.log(a);
	console.log(b);
	return a + b;
}

console.log(sum(5, 6));


// Sauvegardez la valeur retournée par la deuxième fonction
// Comparez ces deux résultat. Est-ce que l'instruction return est obligatoire? Expliquez dans un commentaire.


// Créez une fonction qui tronque la chaîne de caractères. Elle prend la chaîne de caractères, la longeur et la traînée
 // (..., ->, etc) en tant que paramètres. Donnez une valeur par défaut à la traînée. 
function truncate(str, length, train) { 
	return str.substring(0, length);
	}

	console.log(truncate('I will be truncated', 15, '->')); //return 'I will be trunc ->' 
	console.log(truncate('I will be truncated', 5)); //return 'I will be'          


function truncate(str, length, train) { 
	let res= str.substring(0, length);
	if (str.length > length) {
		res += train;
	}
	return res;
}

const sum2 = (a, b) => {
	console.log(a);
	console.log(b);
	return a + b;
};

const sum3 = (a, b) => a + b;
console.log(sum3(2, 4));