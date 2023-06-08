$(document).ready(function() {
    // $(".flashcard").click(function() {
    //     $(this).find(".back").toggle();
    //     $(this).find(".front").toggle();
    // });

    // Auto increment question number
    $(".question").each(function(index) {
        let questionNumber = index + 1;
        let questionTxt = $(this).text();
        $(this).text("Question " + questionNumber + ":")
    });
    function changeColor() {
      let isColorChanged = false;
      document.getElementById("changeColorBtn").addEventListener("click", function() {
        let pTags = document.getElementsByTagName("p");
        if (!isColorChanged) {
          for (let i=0; i < pTags.length; i++) {
            pTags[i].style.color = "red";
          };
          isColorChanged=true;
        } else {
          for (let i=0; i < pTags.length; i++) {
            pTags[i].style.color = "";
          };
          isColorChanged=false;
        }
      })
    };
    changeColor();
});

function flipFunc() {
    $(".flip").click(function() {
        let flashcard = $(this).closest(".flashcard");
        flashcard.find(".back").toggle();
        flashcard.find(".front").toggle();
    });
};