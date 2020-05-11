/******************
   HOTJAR


(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1615954,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

    */

/******************
    User custom JS
    ---------------
*/




$(document).ready(function() {

    /*
    $(function() {
  $('[data-toggle="tooltip"]').tooltip()
})*/

    $(function() {
    var ua = navigator.userAgent,
      moreCss = ' js no-touch',
      isTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
      document.body.className += moreCss
  });


});


/******************
    War schon hier
    ---------------
*/


$(document).on('ready pjax:scriptcomplete',function(){
    /**
     * Code included inside this will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
     * @see https://learn.jquery.com/using-jquery-core/document-ready/
     */

});


$(document).ready(function(){
    // Apply the responsiveArray plugin with default settings
    //$('.array-10-pt, .array-flexible-row, .array-5-pt, .array-increase-same-decrease, .array-yes-uncertain-no').responsiveArray();
});

/*****
    A plugin to insert drop-downs into arrays for small screens
    Copyright (C) 2015 - Tony Partner (http://partnersurveys.com)
    Licensed MIT, GPL
    Version - 2.0
    Create date - 09/04/15
*****/
(function( $ ){
    $.fn.responsiveArray = function(options) {

        var opts = $.extend( {
            chooseText: 'Bitte auswÃ¤hlen...'
        }, options);

        return this.each(function() {

            var thisQuestion = $(this);
            var thisQID = $(thisQuestion).attr('id').split('question')[1];

            // Some classes
            $(thisQuestion).addClass('responsive-array');
            $('table.questions-list tr', thisQuestion).each(function(i){
                $('> *', this).each(function(i){
                    $(this).addClass('col-'+i);
                    if(i !== 0) {
                        $(this).addClass('expanded');
                    }
                });
            });

            // Insert a column
            $('.col-0', thisQuestion).after('<td class="dropdown-cell" />');

            // Insert dropdowns
            $('body').append('<select style="display:none;" class="responsive-select responsive-select-'+thisQID+'" />');
            $('table.questions-list thead th.expanded', thisQuestion).each(function(i){
                $('.responsive-select-'+thisQID).append('<option value="">'+$(this).text()+'</option>');
            });
            $('table.questions-list tbody .dropdown-cell', thisQuestion).append($('.responsive-select-'+thisQID+'').clone());
            $('tr.radio-list', thisQuestion).each(function(i){
                var thisRow = $(this);
                $('input.radio', this).each(function(i){
                    $('.responsive-select-'+thisQID+' option:eq('+i+')', thisRow).attr('value', $(this).attr('id'));
                });
                if($('input.radio:checked', thisRow).length > 0) {
                    $('.responsive-select-'+thisQID+'', thisRow).val($('input.radio:checked', thisRow).attr('id'));
                }
                else {
                    $('.responsive-select-'+thisQID+'', thisRow).prepend('<option value="" selected="selected">'+opts.chooseText+'</option>');
                }
            });
            $('.responsive-select-'+thisQID+'', thisQuestion).show();

            // Listeners on radios
            $('input.radio', thisQuestion).click(function(event) {
                var thisRow = $(this).closest('tr');
                var thisID = $(this).attr('id');
                //$('option[value="'+thisID+'"]').attr('selected', 'selected');
                $('.responsive-select', thisRow).val(thisID);
                $('.responsive-select option[value=""]', thisRow).remove();
            });

            // Listeners on dropdowns
            $('.responsive-select-'+thisQID+'').change(function() {
                $('#'+$(this).val()+'').click();
            });

        });
    };
})( jQuery );
