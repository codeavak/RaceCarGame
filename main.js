$(function() {

    $('#race').click(function() {

        var trackWidth = $('#gameArea').width();
        var lamboWidth = $('#lambo').width();
        var ferrariWidth = $('#ferrari').width();

        var trackWidthLambo = trackWidth - lamboWidth;
        var trackWidthFerrari = trackWidth - ferrariWidth;
        console.log(trackWidthLambo);

        var raceTimeLambo = (Math.random() * 5000) + 500;
        var raceTimeFerrari = (Math.random() * 5000) + 500;
        var isComplete = false;
        var place = 'first';

        function checkComplete() {
            if (!isComplete) {
                isComplete = true;
            } else {
                place = 'second'
            }
        }

        $('#lambo').animate({
            left: trackWidthLambo
        }, raceTimeLambo, function() {
            checkComplete();
            console.log('Lambo finished in ' + place + ' place racing for ' + raceTimeLambo + ' milliseconds!');
            $('#lamboPlace').text(place);
            $('#lamboMs').text(raceTimeLambo.toFixed(2));
            if (place == 'second') {
                $('#results').show();
                $('#resultH1').show();
            }
        });
        $('#ferrari').animate({
            left: trackWidthFerrari
        }, raceTimeFerrari, function() {
            checkComplete();
            console.log('Ferrari finished in ' + place + ' place racing for ' + raceTimeFerrari + ' milliseconds!');
            $('#ferrariPlace').text(place);
            $('#ferrariMs').text(raceTimeFerrari.toFixed(2));
            if (place == 'second') {
                $('#results').show();
                $('#resultH1').show();
            }
        });
    })

    $('#reset').click(function() {
        $('#results').hide();
        $('#resultH1').hide();
        $('#lambo').css('left', '0px');
        $('#ferrari').css('left', '-15px');
    })

});
