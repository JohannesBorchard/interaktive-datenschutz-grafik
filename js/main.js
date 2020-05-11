$(document).ready(function() {

  $(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

  $(function() {
    var ua = navigator.userAgent,
      moreCss = ' js no-touch',
      isTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
      document.body.className += moreCss
  });

  // Registrierungscode

  function getRegistrationCode() {
    let code = Math.floor(100000 + Math.random() * 900000);
    $("#registrationCode").text("SRA-" + code);
  }

  $(".submit-registration").click(function(){
        $("#registration-form").hide();
        $("#registration-privacy-policy").show();//.css('display', 'flex');
        $("#policy-banner").show();
        $("html, body").animate({ scrollTop: 0 }, "slow");
      });

  // $("#registration-form").submit(function(){
  //   $(this).hide();
  //   $("#registration-privacy-policy").show();//.css('display', 'flex');
  //   $("#policy-banner").show();
  //   $("html, body").animate({ scrollTop: 0 }, "slow");
  //   return false;
  // });

  $("#accept-policy").click(function() {
    $("#registration-privacy-policy").hide();
    $("#policy-banner").hide();
    getRegistrationCode();
    $("#registration-success").show();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});
