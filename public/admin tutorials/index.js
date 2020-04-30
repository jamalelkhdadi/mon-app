// Define a new module for our app
var app = angular.module("instantSearch", []);
// Create the instant search filter
app.filter('searchFor', function () {
	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)
	return function (arr, searchString) {
		if (!searchString) {
			return arr;
		}
		var result = [];
		searchString = searchString.toLowerCase();
		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function (item) {
			if (item.title.toLowerCase().indexOf(searchString) !== -1) {
				result.push(item);
			}
		});
		return result;
	};
});
// The controller
function InstantSearchController($scope) {
	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.
	$scope.items = [
		{
			url: 'python/index.html',
			title: '01 : Home',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_overview.html',
			title: '02 : Overview',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_environment.html',
			title: '03 : Environment Setup',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_basic_syntax.html',
			title: '04 : Basic Syntax',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_variable_types.html',
			title: '05 : Variable Types',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_basic_operators.html',
			title: '06 : Basic Operators',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_decision_making.html',
			title: '07 : Decision Making',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_loops.html',
			title: '08 : Loops',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_numbers.html',
			title: '09 : Numbers',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_strings.html',
			title: '10 : Strings',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_lists.html',
			title: '11 : Lists',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_tuples.html',
			title: '12 : Tuples',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_dictionary.html',
			title: '13 : Dictionary',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_date_time.html',
			title: '14 : Date &amp; Time',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_functions.html',
			title: '15 : Functions',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_modules.html',
			title: '16 : Modules',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_files_io.html',
			title: '17 : Files I/O',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_exceptions.html',
			title: '18 : Exceptions',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_classes_objects.html',
			title: '19 : Classes/Objects',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_reg_expressions.html',
			title: '20 : Reg Expressions',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_cgi_programming.html',
			title: '21 : CGI Programming',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_database_access.html',
			title: '22 : Database Access',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_networking.html',
			title: '23 : Networking',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_sending_email.html',
			title: '24 : Sending Email',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_multithreading.html',
			title: '25 : Multithreading',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_xml_processing.html',
			title: '26 : XML Processing',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_gui_programming.html',
			title: '27 : GUI Programming',
			lang: 'PYTHON',
			image: 'img/python.svg'
		},
		{
			url: 'python/python_further_extensions.html',
			title: '28 : Further Extension',
			lang: 'PYTHON',
			image: 'img/html.svg'
		}
	];
}



