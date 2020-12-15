var quotes = [ 'Live as everything is rigged in your favor', 'Love is the bridge between you and everything', 'Don’t grieve. Anything you lose comes round in another form', 'Stop acting so small. You are the universe in ecstatic motion', 'The wound is the place where the Light enters you', ' You were born with wings why prefer to crawl through life?', ' Who is your beloved?', 'Do you seek pleasure or Truth?'];


$(".quote").click(function() {
    var random = Math.floor(Math.random('.quote') * quotes.length);
    $('.quote-recommend').text(quotes[random]);
});
console.log(quotes);
console.log(length);
   


            


