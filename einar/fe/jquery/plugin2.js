$.fn.greenify = function() {
    this.css( "color", "green" );
    return this;
};

//Making our plugin method chainable
$("a").greenify().addClass("greenified");

//iife - private var
(function ( $ ) {

    var shade = "#556b2f";

    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };

}( jQuery ));
