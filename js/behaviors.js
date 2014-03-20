$(function () {
    $("nav ul li a").click(function () {
        var faqId = $(this).attr("href");
        $("body").animate({scrollTop: $(faqId).offset().top}, "slow");
        return false;
    });
});