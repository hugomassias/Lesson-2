'use strict'
// Trouvez toutes les balises div du document. Loggez le deuxième élément s'il est présent
const myDivs = document.getelementsbytag('div');
console.log('mydiv , mydiv');

const myDivs = document.queryselectorall('div');
console.log('mydiv2 , mydiv2');

const myParagraphs = document.getelementsbyclassname('secondary-paragraph');
consol.log('myParagraphs, myParagraphs');

const myParagraphs2 = document.queryselectorall('.secondary-paragraph');
console.log('myParagraphs2, myParagraphs2');

const myuniqueel = document.getelementbyid('js-unique-el');
console.log('myuniqueel, myuniqueel');

const myuniqueel2 = document.queryselector('#js-unique-el');
console.log('myuniqueel2, myuniqueel2');