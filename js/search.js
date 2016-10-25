//dynamically add the search box to the DOM
var btn = $(".page-header").children().first().after('<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');
//store student list items
var studentListItems = $('.student-list li')

//make click handler on search button. Hide all students, then store the search value.
//then loop through all student list and check if search value matches any students. If there is a match, then show student. 
$('.student-search').find('button').on("click", function(){
	
	studentListItems.hide()
	
	//store value in search input box
	var searchValue = $(".student-search").find("input").val().toLowerCase();

	//loop through all student list items, store the name and email for each student, then compare name and email to search value
	//if searchValue matches name or email, show student list item
	$('.student-list').children().each(function(i){
		var studentName = $(this).find("h3").text();
		var studentEmail = $(this).find(".email").text();

		if(studentName.indexOf(searchValue) != -1 || studentEmail.indexOf(searchValue) != -1 ){
			$(this).show()
		}
	});
	
})



