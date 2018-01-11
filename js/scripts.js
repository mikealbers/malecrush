$(document).ready(function() {

  var height = "";
  var age = "";
  var hobby = "";

  $("#prefSubmit").click(function(event) {
    event.preventDefault();
    var height = $(".height").val();
    var age = $(".age").val();
    var hobby = $(".hobby").val();
    if (height === "tall" && age === "young" && hobby === "music") {
      $('#displayPainting').html('<p>Will Smith</p><img src="img/will.jpg">');
    }else if (height === 'tall' && age === 'young' && hobby === 'books') {
      $('#displayPainting').html('<p>Dwayne "The Rock" Johnson</p><img src="img/dwayne.jpg">');
    }else if (height === 'tall' && age === 'young' && hobby === 'theater') {
      $('#displayPainting').html('<p>Alan Rickman</p><img src="img/rickman.jpg">');
    }else if (height === 'tall' && age === 'young' && hobby === 'politics') {
      $('#displayPainting').html('<p>Nicholas Cage</p><img src="img/cage.jpg">');
    }else if (height === 'tall' && age === 'old' && hobby === 'music'){
      $('#displayPainting').html('<p>Bill Murray</p><img src="img/bill.jpg">');
    }else if (height === 'tall' && age === 'old' && hobby === 'books'){
      $('#displayPainting').html('<p>Morgan Freeman</p><img src="img/morgan.jpg">');
    }else if (height === 'tall' && age === 'old' && hobby === 'theater'){
      $('#displayPainting').html('<p>Samuel Jackson</p><img src="img/Jackson.jpg">');
    }else if (height === 'tall' && age === 'old' && hobby === 'politics'){
      $('#displayPainting').html('<p>Arnold Schwartz</p><img src="img/arnold.jpg">');
    }else if (height === 'short' && age === 'young' && hobby === 'music'){
      $('#displayPainting').html('<p>Michael Jackson</p><img src="img/mj.jpg">');
    }else if (height === 'short' && age === 'young' && hobby === 'books'){
      $('#displayPainting').html('<p>Elijah Wood</p><img src="img/elijah.jpg">');
    }else if (height === 'short' && age === 'young' && hobby === 'theater'){
      $('#displayPainting').html('<p>Leonardo Di Caprio</p><img src="img/leo.jpg">');
    }else if (height === 'short' && age === 'young' && hobby === 'politics'){
      $('#displayPainting').html('<p>Brad Pitt</p><img src="img/brad.jpg">');
    }else if (height === 'short' && age === 'old' && hobby === 'music'){
      $('#displayPainting').html('<p>David Bowie</p><img src="img/bowie.jpg">');
    }else if (height === 'short' && age === 'old' && hobby === 'books'){
      $('#displayPainting').html('<p>Bruce Willis</p><img src="img/bruce.jpg">');
    }else if (height === 'short' && age === 'old' && hobby === 'theater'){
      $('#displayPainting').html('<p>Christopher Walken</p><img src="img/walken.jpg">');
    }else if (height === 'short' && age === 'old' && hobby === 'politics'){
      $('#displayPainting').html('<p>Mr. T</p><img src="img/mrt.jpg">');
    }
  });
});

  // 'music' 'books'theater 'politics'
  //
  // mf ws ar dj bm sj as nc
  //
  // db bw mt ew ld mj bp cw
