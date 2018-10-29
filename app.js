function quoter() {
  $.ajax({
    url:
      "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
    dataType: "json",
    success: function callback(data) {
   if (!data.quoteAuthor) {
        data.quoteAuthor = "unknown";
      }
$(".message").html(data.quoteText + " - " + data.quoteAuthor);
      $("#tweet").click(function() {
        $("#tweet").attr(
          "href",
          "https://twitter.com/intent/tweet?text= " + data.quoteText + " - " + data.quoteAuthor
        );
      });
    } //success
  }); //ajax
} //function
$(document).ready(function() {
  quoter();
});
$("#getMessage").click(function() {
  quoter();
});
