// All scripts

$(document).ready(function(e) {

    //Portfolio Filter
    $('#filterOptions a.category').click(function(e) {

        $('#filterOptions a.category').removeClass('active');

        $(this).addClass('active');

        var filterType = $(this).attr('data-target');

        if (filterType == 'all') {
            $('.item-p').animate({
                height: '0',
                width: '0',
                margin: '0'
            }, 500);
            $('.item-p').animate({
                width: '298'
            }, 0);
            $('.item-p').animate({
                height: '284',
                margin: '15px 0 30px 25px'
            }, 500);
        } else {
            var items = {};
            $('.item-p').each(function() {
                if ($(this).attr('data-type').search(filterType) !== -1) {
                    $(this).addClass('selected');
                }
            });
            $('.item-p').animate({
                height: '0',
                width: '0',
                margin: '0'
            }, 500);
            $('.selected').animate({
                width: '298'
            }, 0);
            $('.selected').animate({
                height: '284',
                width: '298',
                margin: '15px 0 30px 25px'
            }, 500);
            $('.item-p').removeClass('selected');
        }
        e.preventDefault();
        return false;
    });

    //Prevent Fake Browser Navigation
    var naviLink = $('.page-transition');
    naviLink.click(function(event) {
        event.preventDefault();
    });

    //Team previews expand
    var $teammate = $('.team-mate');
    var clickable = $('.prev-page, .home-page, .submenu li a');
    $teammate.click(function() {
        $teammate.removeClass('expanded').find('a').css({
            'outline': 'none',
            'text-decoration': 'none'
        });
        if ($(this).hasClass('frst')) {
            $teammate.removeClass('frst');
        } else {
            $teammate.removeClass('frst');
            $(this).addClass('frst');
            $(this).addClass('expanded');
        }
    });

    clickable.click(function() {
        $teammate.removeClass('expanded');
    });


    //Thumbs grid init
    Grid.init();


    //Ajax Form
    $('#submit').click(function() {
        sprytextfield1.validate();
        sprytextfield2.validate();
        sprytextarea1.validate();
        $.post("form.php", $("#feedback-form").serialize(), function(data) {
            $('#success').html(data).animate({
                opacity: 1
            }, 500, function() {
                $("#feedback-form").trigger('reset');
            });
        });
        return false;
    });

});