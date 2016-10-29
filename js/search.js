//create paragraph to display if no search results and append it to DOM
$('.student-list').after('<p class="no-results">There are no students by that name</p>');
//Hide noResults
$('.no-results').hide();

/* EVENT HANDLERS */

//make click handler on search button. Hide all students, then store the search value.
//then loop through all student list and check if search value matches any students. If there is a match, then show student. 
$('.student-search').find('input').on("keyup", function(){

	$('.student-list li').each(function(i){
		$(this).hide();
	});

	studentListItems = [];

	//store value in search input box
	var searchValue = $(".student-search").find("input").val().toLowerCase();

	//loop through all student list items, store the name and email for each student, then compare name and email to search value
	//if searchValue matches name or email, push the object to the studentListItems array
	$('.student-list').children().each(function(){
		var studentName = $(this).find("h3").text();
		var studentEmail = $(this).find(".email").text();

		if(studentName.indexOf(searchValue) != -1 || studentEmail.indexOf(searchValue) != -1 ){
			studentListItems.push(this);
		}
	});

	//show list of students
	$(studentListItems).each(function(){
		$(this).show();
	});

	if(studentListItems.length == 0){		
		$('.no-results').show();
	} else {
		$('.no-results').hide();
	};
	
	//hide all elements in array indexed after the itemPerPage value
	$(studentListItems).slice(itemsPerPage).hide();

	//show all pagination list items (page links)
	$('.pagination ul').children().show();
	
	//hide pagination list items (page links)that shouldn't be displayed
	$('.pagination ul').children().slice(Math.ceil(studentListItems.length / itemsPerPage)).hide();
	
	//hide pagination if studentListItems is less than 
	if(studentListItems.length <= itemsPerPage){
		$('.pagination ul').children().hide();
	};
});








