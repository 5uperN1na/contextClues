//event handler
$(document).ready(function () {

    //global variable for loop counter
    var j;

    //array that lists friend's name.
    var friends = ['Erica', 'David', 'Meredith', 'Hernan', 'Ashley'];


    //array that lists locations
    var location = ['Dining room', 'Kitchen', 'Living room', 'Hallway', 'Master bedroom', 'Master bathroom', 'Guest bedroom', 'Guest bathroom', 'Nursery', 'Basement'];

    //array that lists weapons
    var weapons = ['Knife', 'Rope', 'Rolling pin', 'Hammer', 'Pencil', 'Stick', 'Spatula', 'Frying pan', 'Flower pot', 'Scissors', 'Chair', 'Candlestick', 'Fork', 'Screw driver', 'Key', 'Lamp', 'Pitch fork', 'Vase', 'Curtain rod', 'Table leg'];


    //for loop to display 100 H3 tags when the page loads.
    for (j = 0; j < 100; j++) {
        // create the h3 element
        var h3 = $('<h3>Accusation</h3>');
        //append h3 to body
        $('body').append(h3)
        //append loop counter to h3 tag 
        $(h3).append(' ' + j)


        //event handler to each h3 tag and call the accuse function passing the for loop counter.
        $(h3).click(accuse(j));

    }

 
    function accuse(j) {
        //return function
        return function () {
            //testing
            //var f = friends[Math.floor(Math.random() * friends.length)];

            //counter modules length of friends array to get corresponding index to display in sentence stored in a local variable.
            var f = j % friends.length;

            //testing output
            console.log(f);

            //testing
            //var l = location[Math.floor(Math.random() * location.length)];

            //counter modules length of location array to get index to display stored in locale variable.
            var l = j % location.length;

            //testing output
            console.log(l);

            //testing
            //var w = weapons[Math.floor(Math.random() * weapons.length)];

            //counter modules length of weapons array to get index for sentence stored in local variable.
            var w = j % weapons.length;

            //testing output
            console.log(w);

            //sentence displayed in alert
            alert('I accuse ' + friends[f] + ' with the ' + weapons[w] + ' in the ' + location[l] + '!');
        }
    }


});



