$.getJSON("data.json", function(data) {
    var movies = data.movies;//.sort(function (a, b) { return a.order - b.order });
    var template = $("#movie-template").html();
    var inverted = $("#movie-template-inverted").html();

    $.each(movies, function(i, movie) {
        var rendered;
        if (i % 2 === 0) {
            rendered = Mustache.render(template, movie);
        } else {
            rendered = Mustache.render(inverted, movie);
        }

        $("#movies").append(rendered);
    });
}).fail(function(error) {
    console.log(error);
});

(function ($) {
    $.fn.goTo = function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);