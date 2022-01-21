let data;
let value;
$(document).ready(function() {
    //fetching the products.json file 
    $.getJSON('products.json',function(data){
        //going through each index of the array of objects
        $.each(data, function(index, e){
            //adding each object value to a table division
            $("table tbody").append(`<tr id="tableR"><td>${e.id}</td><td>${e.name}</td><td>${e.price}MAD</td><td>${e.category}</td><td>${e.availability}</td><td>${e.provider.address}</td><td>${e.provider['company name']}</td></tr>`);
        });
    });

    //a function that executes every time the user types in the text input 
    $("input").on("keyup", function(){
        //user's input in real time
        value = $(this).val().toLowerCase();
        console.log(value);
            //
        $("tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
    });
       
 });

 $(document).ready(function() {
      $('th').each(function(col) {
        $(this).hover(
        function() { $(this).addClass('focus'); },
        function() { $(this).removeClass('focus'); }
      );
        $(this).click(function() {
          if ($(this).is('.asc')) {
            $(this).removeClass('asc');
            $(this).addClass('desc selected');
            sortOrder = -1;
          }
          else {
            $(this).addClass('asc selected');
            $(this).removeClass('desc');
            sortOrder = 1;
          }
          $(this).siblings().removeClass('asc selected');
          $(this).siblings().removeClass('desc selected');
          var arrData = $('table').find('tbody >tr:has(td)').get();
          arrData.sort(function(a, b) {
            var val1 = $(a).children('td').eq(col).text().toUpperCase();
            var val2 = $(b).children('td').eq(col).text().toUpperCase();
            if($.isNumeric(val1) && $.isNumeric(val2))
            return sortOrder == 1 ? val1-val2 : val2-val1;
            else
               return (val1 < val2) ? -sortOrder : (val1 > val2) ? sortOrder : 0;
          });
          $.each(arrData, function(index, row) {
            $('tbody').append(row);
          });
        });
      });
    });



