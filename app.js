//event handler
$(document).ready(function () {

    $(function () {

        //global variables 
        var i = 0;
        var j;
        // create the h3 element
        var h3 = $('<h3>Accusation</h3>');

        for (j = 0; j < 100; j++) {
            //append h3 to body
            $('body').append(h3);
  
        }
        
        $(h3).click(function () {
            console.log('true');
        });
    })

})



