function askQuestions(){


var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

var fullName = firstName + ' ' + lastName;
console.log('User\'s name is: ' + fullName);

$('h1').text('Hello' + ' ' + fullName);

var age = prompt('How old are you?');

age = parseInt(age);

if(age>= 18) {

		console.log('User is an adult');
		alert ('Welcome, adult!');

} else if(age>= 13) {

		console.log('User is a teenager');
		alert ('Come back in a few years');
} else {

		console.log('User is a child');
		alert ('Go away, child!');

}
if(firstName == 'General' && lastName != 'Assembly') {;
		
		console.log('Eureka');
		alert ('Hello General');

} 


var faveColour = prompt('What is your favourite colour?'). toLowerCase();

if (faveColour == 'red' || faveColour == 'green'|| faveColour == 'blue' || faveColour == 'yellow') {

	$('h1').css('color', faveColour);
}
		

}

// when the page has loaded
$ (function () {


	$('img').on('click', askQuestions);

	//hide all but the first think
	$('h3').not(':first-of-type').next().hide();


	// when the user clicks on an h3

	$('h3').on ('click', function (){

		//close all the sections
		$ ('h3').not(this).next().slideUp();

		//toggle the next element
		$(this).next().slideToggle();

		//	


	});


});