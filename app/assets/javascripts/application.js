// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree
  function detectFace() {
      var subscriptionKey = "9428b416c6024673b132a90d379e6a10"
      var uriBase =
          "https://japaneast.api.cognitive.microsoft.com/face/v1.0/detect";
      var params = {
          // "returnFaceId": "false",
          // "returnFaceLandmarks": "false",
          "returnFaceAttributes":"age"
      };

      var sourceImageUrl = document.getElementById("face-picture").value;
      document.querySelector("#sourceImage").src = sourceImageUrl;


      $.ajax({
          url: uriBase + "?" + $.param(params),


          beforeSend: function(xhrObj){
              xhrObj.setRequestHeader("Content-Type","application/json");
              xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
          },

          type: "POST",


          data: '{"url": ' + '"' + sourceImageUrl + '"}',
      })
      .done(function(data) {
        alert(data instanceof Array);
        age = data[0]["faceAttributes"]["age"];
        if(age >= 24){
          $('#new-posts').attr("type", "submit");
          $('#face-picture').attr("type", "hidden");
          $('#face-pictures').attr("type", "hidden");
          alert(age + '歳と判断されました')
        }else {
          alert(age + '歳ですよね！入れません！')
        }

      });
    };

    function ImageClick() {
      var answer1 = prompt("1990年のオリコンシングルチャートの第1位は？")
      if(answer1 == "おどるポンポコリン"){
        alert("あと2問！");
        var answer2 = prompt("1985年に公開されたアメリカのSF映画でタイムマシンの車種がデロリアンDMC-12の映画の名前を英語で？")
        if(answer2 ==　"Back to the Future"){
            alert("あと1問!?");
            var answer3 = prompt("1987年11月6日に第74代内閣総理大臣に任命されたのは？")
            if(answer3 == "竹下登"){
              alert("おじさんだったんですね！")
              $('#new-posts').attr("type", "submit");
              $('#face-picture').attr("type", "hidden");
              $('#face-pictures').attr("type", "hidden");
          }
          else{
            alert("違います")
          }
        }
        else{
          alert("違います")
        }
      }
      else{
        alert("違います")
      }
    }
