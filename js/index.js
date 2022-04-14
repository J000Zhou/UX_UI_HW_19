console.log("your index.js file is loaded correctly");

$('abt').click(function() {
  $(this).toggleClass('clicked');
  $('button p').text(function(i, text) {
    return text === "SENT!" ? "SEND MSG" : "SENT!";
  });
});
