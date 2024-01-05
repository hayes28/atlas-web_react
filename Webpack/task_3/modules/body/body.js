import $ from 'jquery';
import _ from 'lodash';
import './body.css';

// Append <p> and <button> elements to the <body> of the HTML
$(document).ready(function() {
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');

    // Function to track the number of clicks on the button
    let count = 0;
    function updateCounter() {
        count++;
        $('#count').text(`${count} clicks on the button`);
    }
    // Using lodash to debounce the updateCounter function
    $('button').on('click', _.debounce(updateCounter, 500));
});
