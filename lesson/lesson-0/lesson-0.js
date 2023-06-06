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
    })
});

function flipFunc() {
    $(".flip").click(function() {
        let flashcard = $(this).closest(".flashcard");
        flashcard.find(".back").toggle();
        flashcard.find(".front").toggle();
    });
};