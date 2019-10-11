function viewStudentStats(id, toggle){
    if(id == 'student_status'){
        if(toggle == 0){
            document.getElementById(id).style.height = "0px";
            document.getElementById(id).style.visibility = "hidden";
            document.getElementById('undergrad_select').style.visibility = "hidden";
            document.getElementById('grad_select').style.visibility = "hidden";
        }
        else {
            document.getElementById(id).style.height = "100px";
            document.getElementById(id).style.visibility = "visible";
        }
    }
    else if(id == 'undergrad_select') {
        document.getElementById(id).style.visibility = "visible";
        document.getElementById('grad_select').style.visibility = "hidden";
    }
    else {
        document.getElementById(id).style.visibility = "visible";
        document.getElementById('undergrad_select').style.visibility = "hidden";
    }
    
    
}
	/* parameters:
		id - The css id of the html tag being updated.
		toggle - 0 - hide the html tag
				 1 - make the html tag visible

	purpose: This method will accept the id of an html tag and a toggle value.
			 The method will then set the html tag's css visibility and height.
			 To hide the html tag (toggle - 0), the visibility will be set to hidden and
			 the height will be set to 0.
			 To reveal the html tag (toggle - 1), the visibility will be set to visible
             and the height will be set to auto. */
             

function changeColor(color) {
    document.getElementById("bod").style.backgroundColor = color;
}
/* parameter:
    color- A css color

purpose: This method will set the html body's background color to the
        provided parameter. */


function loadStatsPage() {
    var table = document.getElementById("stats_table");
    var row_counter;//Keeps track of our row index
    var col_counter;//Keeps track of our column index
    var home_score;
    var away_score;
    var winner;
    var wins = 0;
    var losses = 0;
    var w_table = document.getElementById("win_table");

    for(row_counter = 2; row_counter < table.rows.length; row_counter++)
		{//Outer for loop iterates over each row
			for(col_counter = 0; col_counter < table.rows[row_counter].cells.length; col_counter++)
			{
                
                if(col_counter == 2)
                    home_score = table.rows[row_counter].cells[col_counter].innerHTML;
                else if(col_counter == 3)
                    away_score = table.rows[row_counter].cells[col_counter].innerHTML;
                else if(col_counter == 4){
                    if(home_score > away_score) {
                        winner = "CU Boulder";
                        wins = wins + 1;
                    }
                    else{
                        winner = table.rows[row_counter].cells[1].innerHTML;
                        losses = losses + 1;
                    }
                    table.rows[row_counter].cells[col_counter].innerHTML = winner;//Update the actual html of the cell
                }
			}
        }
    w_table.rows[1].cells[0].innerHTML = wins;
    w_table.rows[1].cells[1].innerHTML = wins;
} 
/* method:
    parameters: none

    purpose: This method will iterate through the stats table and
                do the following:
                1. Read through each row of the table & determine which team won
                    the game.

                2. Update the winner column to the name of the winning team.

                3. Keep track of the number of wins/losses for the Buffs.

                4. Update the second table to show the total number of wins/losses for the Buffs. */


function loadPlayersPage() {

}

/* method:
parameters: none

purpose: This method will populate the dropdown menu to allow the
        user to select which player's information to view.

        To handle this, you will need to iterate through the players array
        and do the following for each player:
        1. Create an anchor tag
        2. Set the href to "#", this will make sure the
                anchor tag doesn't change pages
        3. Set the onclick to call switchPlayers method
                (this will need to pass in the index inside the players array)
        4. Set the anchor tag's text to the player's name.

        After setting all of the anchor tags, update the innerHTML of the dropdown menu.
        As a note, the id for the dropdown menu is player_selector.
 */

function switchPlayers(playerNum) {

}

/* method:
parameters:
    playerNum - The index of the football player in the players array.

purpose:
    This method will update the the spans on the player's information pageX
    and calculate the average passing, rushing, and receiving yards.

    Span ids:
        p_year     - the player's year in college
        p_major    - the player's major in college
        g_played   - the number of games played for Buffs
        player_img - the player's photo (must set src and alt)
        p_yards    - the number of passing yards
        r_yards    - the number of rushing yards
        rec_yards  - the number of receiving yards

    Calculated values:
        avg_p_yards   - the average number of passing yards for the player's Buff career
        avg_r_yards   - the average number of rushing yards for the player's Buff career
        avg_rec_yards - the average number of receiving yards for the player's Buff career */