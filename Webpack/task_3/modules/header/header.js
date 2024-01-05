import $ from 'jquery';
import './header.css';

// Add logo and <h1> to the <header> of the HTML and console.log 'Init header'
$(document).ready(function() {
    $('header').append('<div id="logo"></div>')
    $('header').append('<h1>Holberton Dashboard</h1>');
    console.log('Init header');
});
