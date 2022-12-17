//Please put your answer here

var ButtonSignup = $(".signup-show");

var modal = $('#signup-modal');
var ButtonClose = $('#close-modal');

ButtonClose.click(function() {
    modal.fadeOut(100);
});

ButtonSignup.click(function() {
    modal.fadeIn(100);
});
