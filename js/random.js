$(document).ready(function() {

      // var defaultJSON = {
      //   A: 30,
      //   B: 30,
      //   C: 30
      // };
      //
      // $.ajax({
      //   url: "https://api.myjson.com/bins/135v7c",
      //   type: "PUT",
      //   data: JSON.stringify(defaultJSON),
      //   contentType: "application/json; charset=utf-8",
      //   dataType: "json",
      //   success: function(data, textStatus, jqXHR) {
      //     console.log(textStatus);
      //   }
      // });

    



      $.get("https://api.myjson.com/bins/135v7c", function(data, textStatus, jqXHR) {
        let remaining;
        remaining = data;
        console.log("Before: " + JSON.stringify(remaining));

        //Manipulation
        let remaining_a = remaining.A;
        let remaining_b = remaining.B;
        let remaining_c = remaining.C;
        let remaining_total = remaining_a + remaining_b + remaining_c;
        console.log("Total: " + remaining_total);

        let r = Math.floor((Math.random() * remaining_total) + 1);

        let condition;
        if (r <= remaining_a) {
          condition = 1;
          remaining.A = remaining.A - 1;
        } else if (remaining_a < r && r <= remaining_a + remaining_b) {
          condition = 2;
          remaining.B = remaining.B - 1;
        } else if (remaining_a + remaining_b < r && r <= remaining_a + remaining_b + remaining_c) {
          condition = 3;
          remaining.C = remaining.C - 1;
        } else { //wenn alle Tickets vergeben sind
          condition = Math.floor((Math.random() * 3) + 1);
        }

        console.log("r: " + r + " => Condition: " + condition);

        $.ajax({
          url: "https://api.myjson.com/bins/135v7c",
          type: "PUT",
          data: JSON.stringify(remaining),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function(data, textStatus, jqXHR) {
            $.get("https://api.myjson.com/bins/135v7c", function(data, textStatus, jqXHR) {
              console.log("After: " + JSON.stringify(data));
            });
          }
        });


        // //   $.ajax({
        // //
        // //      type: 'GET',
        // //      url: 'https://api.myjson.com/bins/135v7c',
        // //      success: function(data, textStatus, jqXHR) {
        // //           remaining = data;
        // //      }
        // // });
        //
        //
        // var data = JSON.stringify(remainingUpdated);
        //

        //
        //   $.get("https://api.myjson.com/bins/135v7c", function(data, textStatus, jqXHR) {
        //     remaining = data;
        //     // alert(JSON.stringify(remaining));
        //   });

      });
