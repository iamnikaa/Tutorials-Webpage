function addtut(){
    alert('Working')
}

function remtut(){
    alert('Working')
}

function addRowCount(tableAttr) {
    $(tableAttr).each(function(){
      $('td:first-child', this).each(function(i){
        $(this).before('<td>'+(i+1)+'</td>');
      });
    });
  }
  
  // Call the function with table attr on which you want automatic serial number
  addRowCount('.table_body');