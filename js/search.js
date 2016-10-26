//dynamically add the search box to the DOM
var btn = $(".page-header").children().first().after('<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');

var studentListItems = [];
//make click handler on search button. Hide all students, then store the search value.
//then loop through all student list and check if search value matches any students. If there is a match, then show student. 

$('.student-search').find('input').on("keyup", function(){

	$('.student-list li').each(function(i){
		$(this).hide()
	});

	studentListItems = [];

	//store value in search input box
	var searchValue = $(".student-search").find("input").val().toLowerCase();

	//loop through all student list items, store the name and email for each student, then compare name and email to search value
	//if searchValue matches name or email, show student list item
	$('.student-list').children().each(function(){
		var studentName = $(this).find("h3").text();
		var studentEmail = $(this).find(".email").text();

		if(studentName.indexOf(searchValue) != -1 || studentEmail.indexOf(searchValue) != -1 ){
			studentListItems.push(this);
		}
	});

	$(studentListItems).each(function(){
		$(this).show();
	})
		$(studentListItems).slice(itemsPerPage).hide();
		$('.pagination ul').children().slice(Math.ceil(studentListItems.length / itemsPerPage)).hide();	
		
})




/*
		$(searchResults).each(function(i){
			$(this).show()
			var numPages = Math.ceil(searchResults.length / itemsPerPage);
			$('.pagination ul').children().slice(numPages).hide();			
		})
		*/

		//store # of search results and do magic to hide/show pagination accordingly



