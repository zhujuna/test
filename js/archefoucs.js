$(function () {
    var $con = $('#gg'), $box = $con.find('#ggBox'), $btns = $con.find('#ggBtns'), i = 0, autoChange = function () {
        i += 1;
        if (i === 4) { i = 0; }
        $btns.find('li:eq(' + i + ')').addClass('ggOn').siblings().removeClass('ggOn');
        var curr = $box.find('li:eq(' + i + ')'), prev = curr.siblings();
        prev.css('z-index', 2).animate({
            'opacity': 0.1
        }, 0);
        curr.css('z-index', 3).animate({
            'opacity': 1
        }, 500);
    }, loop = setInterval(autoChange, 5000);
    $con.hover(function () {
        clearInterval(loop);
    }, function () {
        loop = setInterval(autoChange, 5000);
    });
    $btns.find('li').mouseover(function () {
        i = $(this).index() - 1;
        autoChange();
    });
});