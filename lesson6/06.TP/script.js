'use strict';


//1. Sélectionner le lien

//2. Attacher un écouteur d'évenement à ce lien

//3. Quand le lien est cliqué, afficher le menu déroulant

//3. Quand le lien est re-cliqué, cacher le menu déroulant

$('#navbarDropdownMenuLink')[0].addEventListener('click', () => {
    	if ($('#navbarDropdownMenu').css('display') === 'none'){
    		$('#navbarDropdownMenu').show()
    	}
    	else ($('#navbarDropdownMenu').hide())
    });

//FOOTER
//Créer une variable pour récupérer la date d'aujourd'hui: new Date().getFullYear()
//Sélectionner l'élément du footer avec l'id js-current-year
//Insérer la valeur d'année en cours dans l'élément sélectionné

const todayDate = new Date().getFullYear()
$('#js-current-year').text(todayDate);


//Calculateur de BMI
// Sélectionner le formulaire et attacher un écouteur d'événement 'submit',
// QUAND ce formulaire est soumi 
//récupérerla valeur du champ saisie 'your weight'
//récupérerla valeur du champ saisie 'your height'

//Calculez le BMI avec la formule : poids / ((hauteur /100) * (hauteur /100))

//Si BMI est un nombre valide, calculer le résultat :'underweight', 'healthy', 'overweight' grace à une construction if:
// if (inférieur à 18) {
	//underweight
	// } else if (égal ou supérieur à 18.5 ET égal ou inférieur à 25) {
		// healthy
	// } else {
		// overweight
	// }

	//Afficher l'indice et le résultat sous le formulaire

$('#js-bmi-form')[0].addEventListener('submit', (event) => {
    event.preventDefault()
    	let weight = $('#js-bmi-weight').val()
		let height = $('#js-bmi-height').val()
    	const bmi = weight / (height / 100 * height / 100)
    	let newDiv = document.createElement('div')
    	newDiv.innerText = bmi + ' ';
    	$(newDiv).append(newDiv)
        if (bmi < 18.5){
            newDiv.append('Underweight')
        }
        else if (bmi >= 18.5 && bmi <= 25){
            newDiv.append('healthy')
        }
        else {
            newDiv.append('Overweight')
        }
	});