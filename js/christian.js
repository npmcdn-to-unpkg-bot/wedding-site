


$(document).ready(function() {



    var hamburger = $('#hamburger');
    var overlayNav = $('#overlay-nav');
    var closeBtn= $('.closebtn');
    var overlayLinks = $('.overlay-link');
    var scrollCollage = $('.scroll-collage');
    var collage = $('.collage');

    scrollCollage.on('click', function() {
        collage.removeClass('overflow-hidden');
        collage.addClass('overflow-scroll');
        console.log('clicked')
    });

    $('#fullpage').fullpage({
        anchors: ['index', 'our-story', 'proposal', 'event-info', 'rsvp-registry', 'atlanta'],
        menu: '#menu',
        autoScrolling: false,
        fitToSection: false,
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            if(!nextIndex === 3) {
                collage.removeClass('overflow-hidden');
                collage.addClass('overflow-scroll');
            }

            if(nextIndex === 4 && direction === 'down') {
                var $items = getItems();
                $container.masonryImagesReveal( $items );
                console.log('loading images')
            } else if(nextIndex === 4 && direction === 'up') {
                console.log('not loading');
                return;
            }

        }

    });
    //init foundation js

    //init the countdown
    $("#countdown").countdown("2016/09/10", function(event) {
        $(this).text(
            event.strftime('%D days %H:%M:%S')
        );
    });

    //init the masonry js



        var $container = $('#masonry').masonry({
            itemSelector: '.item',
            columnWidth: 200,
            gutter:10,
            originLeft: false
        });


    $.fn.masonryImagesReveal = function( $items ) {
        var msnry = this.data('masonry');
        var itemSelector = msnry.options.itemSelector;
        // hide by default
        $items.hide();
        // append to container
        this.append( $items );
        $items.imagesLoaded().progress( function( imgLoad, image ) {
            // get item
            // image is imagesLoaded class, not <img>, <img> is image.img
            var $item = $( image.img ).parents( itemSelector );
            // un-hide item
            $item.show();
            // masonry does its thing
            msnry.appended( $item );
        });

        return this;
    };


    function randomInt( min, max ) {
        return Math.floor( Math.random() * max + min );
    }

    function getItems() {
        var items = '';

        for ( var i=1; i < 37; i++ ) {

            var item = '<div class="item">'+
                '<img src="img/collage' + i + '.jpg" /></div>';
            items += item;
        }
        // return jQuery object
        return $( items );
    }


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


