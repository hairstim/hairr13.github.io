jQuery(document).ready(function() {
    // This is used in the toggleLocationSubmenu function. For some reason, the first time the menu is selected, the default display is block instead of none.
    var firstTime = null;
    
    jQuery('ul.view-more')
        .on('touchstart', function() {
            toggleLocationSubmenu();
        })
        .on('touchstart', 'li ul', function (e) {
            e.stopPropagation();
        });

    function toggleLocationSubmenu() {
        var locationSubmenu = jQuery('ul.view-more li ul');
        if (locationSubmenu.css('display') === "block" && firstTime !== null) {
            locationSubmenu.css('display', 'none');
        } else {
            // firstTime is here to offset an abnormality in the code. When touchstart is fired the first time, the display is automatically set to block instead of none. This helps check for that issue.
            firstTime = "no";
            locationSubmenu.css('display', 'block');
        }
    }

    jQuery(window).resize(function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            jQuery(this).trigger('resizeEnd');
        }, 500);
    });

    jQuery(window).bind('resizeEnd', function () {
        if (document.querySelector('.locations .view-more') !== null) {
            var footerLocationMenu = document.querySelector('.locations ul.view-more');
            var footerLocationMenuHeight = footerLocationMenu.offsetHeight;
            var locationSubmenu = footerLocationMenu.querySelector('ul');
            locationSubmenu.style.top = footerLocationMenuHeight + "px";
        }
    });
})
