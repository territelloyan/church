var Card = function(name, bio, img, vid) {
  this.name = name;
  this.bio = bio;
  this.img = img;
  this.vid = vid;

  this.create = function() {
    var container = document.getElementById('page__block--right');
    var card = document.createElement('div');
    card.className = "card";

    var title = document.createElement('h2');
    title.className = "card__header";
    title.innerHTML = this.name

    var bio = document.createElement('div');
    bio.className = "card__bio";
    bio.innerHTML = this.bio;

    var img = document.createElement('img');
    img.className = "card__img";
    img.src = this.img;

    var vid = document.createElement('video');
    vid.className = "card__vid";

    card.name = title;
    card.bio = bio;
    card.img = img;
    card.vid = vid;
    
    container.appendChild(card);
    console.log(card);
  }
}
