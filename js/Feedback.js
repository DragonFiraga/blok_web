/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var sendFeedback = document.querySelector('fieldset > input:last-of-type');
var commentBox = document.querySelector('form:first-of-type');
var appearNewCommentBox = document.querySelector('form:nth-of-type(2) > fieldset');
var appearAnswer = document.querySelector('section.feedbackForm2 > p:first-of-type');
var otherAnswer = document.querySelector('section.feedbackForm2 > p:last-of-type');

function appear(){
    commentBox.classList.add('hide');
    appearNewCommentBox.classList.add('FADEIN');
    appearNewCommentBox.classList.remove('hide');
    appearNewCommentBox.classList.add('show');
    appearAnswer.classList.remove('hide');
    appearAnswer.classList.add('show');
}

function send(){
    commentBox.classList.add('FADEOUTRIGHT');
    otherAnswer.classList.add('MOVEDOWN');
    setTimeout(appear, 2000);
}

appearNewCommentBox.classList.add('hide');
appearAnswer.classList.add('hide');

sendFeedback.addEventListener('click', send, false);

