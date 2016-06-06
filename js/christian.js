


$(document).ready(function() {
    //init foundation js

    //init the countdown
    $("#countdown").countdown("2016/09/10", function(event) {
        $(this).text(
            event.strftime('%D days %H:%M:%S')
        );
    });

    //init the masonry js
    $('.grid').masonry({
        // options...
        itemSelector: '.grid-item',
        columnWidth: 210
    });


    var hamburger = $('#hamburger');
    var overlayNav = $('#overlay-nav');
    var closeBtn= $('.closebtn');
    var overlayLinks = $('.overlay-link');
    var scrollCollage = $('.scroll-collage');
    var collage = $('.collage');



    $('#fullpage').fullpage({
        anchors: ['index', 'our-story', 'proposal', 'event-info', 'rsvp-registry', 'atlanta'],
        menu: '#menu',
        autoScrolling: false,
        fitToSection: false,
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);


        }

    });

    hamburger.click(function(){
        overlayNav.show();
        hamburger.hide();
        overlayNav.velocity({
            height: '100%'

        }, 500, function() {
            overlayLinks.show();
        })

    });

    closeBtn.click(function() {
        overlayLinks.hide();
        overlayNav.velocity({
            height: '0%'

        }, 500, function() {
            hamburger.show();
            overlayNav.hide();
        })
    });


    overlayLinks.click(function() {
        overlayLinks.hide();
        overlayNav.velocity({
            height: '0%'

        }, 500, function() {
            hamburger.show();
            overlayNav.hide();
        })
    });

});


