//event handler
$(document).ready(function () {

    //$(function () {

    //global variables 
    var j;

    //array that lists friend's name.
    var friends = ['Erica', 'David', 'Meredith', 'Hernan', 'Ashley'];


    //array that lists locations
    var location = ['Dining room', 'Kitchen', 'Living room', 'Hallway', 'Master bedroom', 'Master bathroom', 'Guest bedroom', 'Guest bathroom', 'Nursery', 'Basement'];

    //array that lists weapons
    var weapons = ['Knife', 'Rope', 'Rolling pin', 'Hammer', 'Pencil', 'Stick', 'Spatula', 'Frying pan', 'Flower pot', 'Scissors', 'Chair', 'Candlestick', 'Fork', 'Screw driver', 'Key', 'Lamp', 'Pitch fork', 'Vase', 'Curtain rod', 'Table leg'];



    for (j = 1; j < 101; j++) {
        // create the h3 element
        var h3 = $('<h3>Accusation</h3>');
        //append h3 to body
        $('body').append(h3)
        $(h3).append(' ' + j)

        var accusations = accuse(j);

        $(h3).click(function (accusations) {
            console.log(j);
            //accuse(j);



        });
    }


    function accuse(number) {
        //  return function () {
        //var f = friends[Math.floor(Math.random() * friends.length)];
        var f = number % friends.length;
        console.log(f);
        //var l = location[Math.floor(Math.random() * location.length)];
        var l = number % location.length;
        console.log(l);
        //var w = weapons[Math.floor(Math.random() * weapons.length)];
        var w = number % weapons.length;
        console.log(w);
        alert('I accuse ' + friends[f] + ' with the ' + weapons[w] + ' in the ' + location[l] + '!');
        // }
    }





    // })


});



