//event handler
$(document).ready(function () {

    $(function () {

        //global variables 
        var i = 0;
        var j;

        //array that lists friend's name.
        var friends = ['Erica', 'David', 'Meredith', 'Hernan', 'Ashley'];


        //array that lists locations
        var locations = ['Dining room', 'Kitchen', 'Living room', 'Hallway', 'Master bedroom', 'Master bathroom', 'Guest bedroom', 'Guest bathroom', 'Nursery', 'Basement'];

        //array that lists weapons
        var weapons = ['Knife', 'Rope', 'Rolling pin', 'Hammer', 'Pencil', 'Stick', 'Spatula', 'Frying pan', 'Flower pot', 'Scissors', 'Chair', 'Candlestick', 'Fork', 'Screw driver', 'Key', 'Lamp', 'Pitch fork', 'Vase', 'Curtain rod', 'Table leg'];



        for (j = 0; j < 100; j++) {
            // create the h3 element
            var h3 = $('<h3>Accusation</h3>');
            //append h3 to body
            $('body').append(h3)
            $(h3).append(' ' + j)
        }

        $(h3).click(function () {
            console.log('true');








        });
    })

})



