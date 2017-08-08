var Card = function(name, bio, img, vid) {
  var container = document.getElementById('#page__block--right');
  var card = document.createElement('div');
  this.name = "<h2 class-'card__header'>" + name + "</h2>";
  this.bio = "<div class='card__bio'>" + bio + "</div>"
  this.img = "<div class='card__img'><img src='" + img + "' /></div>";
  this.vid = "<div class='card__vid'>" + vid + "</div>";

  card.className = "card";

  // this.create = function() {
  //   container.appendChild(card);
  // }
}
