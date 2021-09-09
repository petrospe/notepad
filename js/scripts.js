// Get the license modal
var modal = document.getElementById("licenseModal");
// Get the button that opens the modal
var btn = document.getElementById("license");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Content

// let url = 'json/content.json';
//
// fetch(url)
// .then(res => res.json())
// .then(out =>
//   console.log('Checkout this JSON! ', out))
// .catch(err => 'throw err');
//


const articles = document.getElementsByClassName("card");

for (const [key, article] of Object.entries(articles)) {

  article.setAttribute("id", "article-"+key);
  if(key==0)
    article.classList.add("first");

  const text = article.getElementsByClassName("text");
  const teaser = text[0].innerHTML.split(' ').slice(0, 39).join(' ');

  text[0].innerHTML = teaser;

  var buttontext = document.createTextNode('Show more');
  var buttonshowmore = document.createElement('button');
  buttonshowmore.classList.add("button");
  buttonshowmore.classList.add("button-clear");
  buttonshowmore.appendChild(buttontext);
  article.appendChild(buttonshowmore);

  //console.log(sentences[0]);
}
