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
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
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
        var x, y;
        for(y=0; y<2000; y+=10){
          for(x=0; x<2000; x+=10){
            if(x == y){
              ctx.fillRect(x, y, 10, 10);
              ctx.fillRect(500-x, y, 10, 10);
            }

          }
        }
      }
    }

    var n = 20;
    function BlackJack(b){
      document.getElementById('continue').disabled = false;
        dealingCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        firstCard = dealingCard[Math.floor(Math.random() * dealingCard.length)];
        document.getElementById('firstCard').innerHTML = firstCard;
        $('#continue').off('click')
        $('#continue').on('click',function(){
          secondCard = dealingCard[Math.floor(Math.random() * dealingCard.length)];
          document.getElementById('secondCard').innerHTML =secondCard;
          balance =  secondCard - firstCard;
          console.log(secondCard)
          n = n-balance;
          document.getElementById('restPoint').innerHTML = n;
          if(n<=0){
            alert("おめでとうございます");
            $('#new-posts').attr("type", "submit");
            $('#face-picture').attr("type", "hidden");
            $('#face-pictures').attr("type", "hidden");
        }
        });
    }

    function newGame(){
      document.gameform.reset();
      rSecondCard = 0;
      rFirstCard = 0;
    }
