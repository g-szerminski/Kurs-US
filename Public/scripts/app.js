console.log('app.js is running');

//var template = <div>Czt to widać</div>;
//var template = React.createElement ('div', {}, 'Grześ');

/*var usersList = 'Dupa Jasiu';	
var templateTwo = React.createElement ('div', {},
	React.createElement ('h1', {}, usersList.toUpperCase()),
	React.createElement ('ol', {},
		React.createElement ('li', {}, 'Jestem Szermindre'),
		React.createElement ('li', {}, 'Super gość') 
	),
);

var titleList = {
	title: 'Star Wars',
	subtitle: 'odcinek 2'
};
var templateThree = React.createElement ('div', {},
	React.createElement ('h2', {}, titleList.title),
	React.createElement ('p', {}, titleList.subtitle)
); 
*/

var user = {
	name: 'Grześ',
	age: '37',
	location: 'Wrocław'
};

function getLocation (location) {
	if (location) {
		return 'location: ' + location;
	} 
};

var templateTwo = React.createElement ('div', {},
	React.createElement ('h1', {}, user.name ? user.name : 'Anonymus'),
	React.createElement ('p', {}, 'age: ', user.age),
	React.createElement ('p', {}, getLocation(user.location)),
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
//ReactDOM.render(template, appRoot);