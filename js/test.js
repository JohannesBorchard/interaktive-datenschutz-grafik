$(document).ready(function() {

      $.get("https://api.myjson.com/bins/g2ene", function(data, textStatus, jqXHR) {
        console.log(unescape(data.policy));
        $("#registration-privacy-policy").html(unescape(data.policy));

        $(function() {
          $('[data-toggle="tooltip"]').tooltip()
        })

        function getRegistrationCode() {
          let code = Math.floor(100000 + Math.random() * 900000);
          $("#registrationCode").text("SRA-" + code);
        }

        $(".submit-registration").click(function() {
          $("#registration-form").hide();
          $("#registration-privacy-policy").show(); //.css('display', 'flex');
          $("#policy-banner").show();
          $("html, body").animate({
            scrollTop: 0
          }, "slow");
        });


        $("#policy-banner").click(function() {
          $("#registration-privacy-policy").hide();
          $("#policy-banner").hide();
          getRegistrationCode();
          $("#registration-success").show();
          $("html, body").animate({
            scrollTop: 0
          }, "slow");
        });

        let all_row_parents = $(".privacy-table__row--parent");
        let all_row_children = $(".privacy-table__row--child");
        let all_row_toggles = $(".cell__toggle");
        let toggle_analytics = $("#toggle-analytics");
        let toggle_marketing = $("#toggle-marketing");
        let toggle_profiling = $("#toggle-profiling");
        let toggle_disclosure = $("#toggle-disclosure");

        // Interaktion

        //TODO: Button, um alle auszuklappen?
        all_row_parents.click(function() {
          let row_group = $(this).parent();
          let row_parent = $(this);
          let row_children = $(this).parent().children();
          let row_toggle = $(this).find(".cell__toggle");

          onlyToggleThisRow(row_children, row_parent, row_toggle);
        });


        toggle_analytics.change(
          function() {
            if ($(this).is(':checked')) {
              toggleUsage("analytics", true)
            } else {
              toggleUsage("analytics", false)
            }
          });

        toggle_marketing.change(
          function() {
            if ($(this).is(':checked')) {
              toggleUsage("marketing", true)
            } else {
              toggleUsage("marketing", false)
            }
          });

        toggle_profiling.change(
          function() {
            if ($(this).is(':checked')) {
              toggleUsage("profiling", true)
            } else {
              toggleUsage("profiling", false)
            }
          });

        toggle_disclosure.change(
          function() {
            if ($(this).is(':checked')) {
              toggleUsage("disclosure", true)
            } else {
              toggleUsage("disclosure", false)
            }
          });


        //Helpers

        function toggleUsage(category, value) {
          let cells = $(".cell--uses-" + category + ".cell--match, " + ".cell--uses-" + category + ".cell--tracker");
          if (value) {
            cells.removeClass("cell--match--disabled").children().attr("src", "http://www.umfrage.mcm.uni-wuerzburg.de/upload/surveys/424134/files/true.png");
          } else {
            cells.addClass("cell--match--disabled").children().attr("src", "http://www.umfrage.mcm.uni-wuerzburg.de/upload/surveys/424134/files/false.png");
          }
        }

        function toggleFlex(element) {
          if (element.is(":hidden")) {
            displayFlex(element);
          } else {
            element.hide();
          }
        }

        function displayFlex(element) {
          element.css('display', 'flex');
        }

        function onlyToggleThisRow(children, parent, toggle) {

          if (children.is(":hidden")) {
            all_row_parents.addClass("unimportant");
            parent.removeClass("unimportant");

            all_row_children.hide();
            displayFlex(children);

            all_row_toggles.attr("src", "http://www.umfrage.mcm.uni-wuerzburg.de/upload/surveys/424134/files/plus.png");
            toggle.attr("src", "http://www.umfrage.mcm.uni-wuerzburg.de/upload/surveys/424134/files/minus.png");

          } else {
            all_row_parents.removeClass("unimportant");
            all_row_children.hide();
            children.hide();
            all_row_toggles.attr("src", "http://www.umfrage.mcm.uni-wuerzburg.de/upload/surveys/424134/files/plus.png");
          }

          displayFlex(all_row_parents);
        }

      });
