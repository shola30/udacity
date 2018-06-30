// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(makeGrid){
makeGrid.preventDefault();                   //prevent default submission of the form
  var height, weight,n,m                    // variables declaration
  
 //assigning the values to the variables
  height= $('#inputHeight');                
  weight= $('#inputWeight');
  var  table=$('#pixelCanvas');
 
 //creating of nested loop based on the grid size  
    for(n=1;n<=height.val();n++){
    	var tr=$('<tr>');                         // creating the row element based on the grid height
    	for(m=1;m<=weight.val();m++){
         $('<td>cell</td>').appendTo(tr);          // adding cells to the row based on grid weight
    	tr.appendTo(table);                        // adding the above appending to the table
    	

        }
    }

// after the table has been created then if the user click any cell paint it with the selected color
$("td").click(function(){
var	color=$('#colorPicker');                            
	$(this).css("background-color",color.val());


});
  

 $(this).find(":submit").prop("disabled", true);       // diable the submit button after click 
   


});

