$(document).ready(function() {
    "use strict";
    /*========== Countdown start ================*/
    // Set the end date and time
    var endTime = new Date('2024-05-23T20:30:00').getTime();

    // Function to update the countdown
    function updateCountdown() {
        var now = new Date().getTime();
        var timeLeft = endTime - now;

        // math
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (timeLeft <= 0) {
            // If time is up, display a message or take appropriate action
            clearInterval(timer);
            $("#timer").html("Countdown expired!");
        } else {
            if (hours < 10) { hours = "0" + hours; }
            if (minutes < 10) { minutes = "0" + minutes; }
            if (seconds < 10) { seconds = "0" + seconds; }

            // display
            $("#timer").html(
                "<div class=\"date-box\"> \
                <div class=\"numbers\">" + days + "</div><div class=\"text\">days</div></div> \
                <div class=\"date-box\"> \
                <div class=\"numbers\">" + hours + "</div><div class=\"text\">hours</div></div> \
                <div class=\"date-box\"> \
                <div class=\"numbers\">" + minutes + "</div><div class=\"text\">minutes</div></div> \
                <div class=\"date-box\"> \
                <div class=\"numbers\">" + seconds + "</div><div class=\"text\">seconds</div></div>");
        }
    }

    // Initial call to update the countdown
    updateCountdown();

    // Update the countdown every second
    let timer = setInterval(updateCountdown, 1000);

    /*========== Countdown end ================*/
});
