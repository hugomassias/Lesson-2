'use strict';


// Ecrivez en ligne de code un moyen de vérifier si 2 est supérieur à 1
console.log('2 > 1', 2 > 1);

// Ecrivez en ligne de code un moyen de vérifier si 20 est supérieur ou égal à 10.
console.log('20 >= 10', 20 >= 10);

// Ecrivez en ligne de code un moyen de vérifier si 4 n'est pas égal à 6.
console.log('4 !==6', 4 !== 6);

// Ecrivez en ligne de code un moyen de vérifier si 0 n'est pas égal à '0'.
console.log(`0 !== '0'`, 0 !== '0');

// Ecrivez en ligne de code un moyen de vérifier si 'hello' est égal à 'hello'.
console.log(`'Hello' === 'Hello'`);

// Ecrivez en ligne de code un moyen de vérifier si 'hello' est égal à 'Hello'.
console.log()




// IF .. ELSE 
// Ecrivez en ligne de code un moyen de vérifier si 5 est supérieur à 0 ET inférieur à 10 dans la même expression if.
if (5 > 0 && 5 < 10) {
	console.log('First');
} 
else {
	console.log('Second');
}

// Ecrivez en ligne de code un moyen de vérifier si 20 divisé par 2 est supérieur ou égal à 10 OU inférieur à 15 dans la même expression. 
// Si vrai, loggez 'Yes', sinon loggez 'No'.
// if ('20 / 2' >= '10', '20/2' <15) {
// 	console.log('Yes');
// }
// }
// else{
// 	console.log('No');
// }


// Demandez à l’utilisateur de se présenter avec la méthode prompt. Si le prénom est saisi, alert 'Nice to meet you $username ($username est le prénon saisi)!', sinon alert 'Don't be shy!'
const username = prompt ('Comment vous vous appelez ?');
// console.log('username', username.length);
if (username) {
	alert(`Bienvenue ${username}`);
}
else {
	alert('Quel est votre prénom ?');
}



const isConnected = true;
const userStatus = 2;

if (isConnected === true) {
	if (userStatus === 0) {
		console.log('Hello %username');
	} else if (userStatus === 1 ) {
		console.log('Hello powerful');
	} else { //else if (userStatus === 2)
		console.log('Hello owner');
}
 } else {
    consolde.log('Please, connect');
}






