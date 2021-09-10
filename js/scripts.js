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
let content;

let contentURL = 'json/content.json';

const articles = document.getElementById("articles");

fetch(contentURL)
.then(response => response.json())
.then(data => content = data)
.then(() => {
  for (var key in content.articles) {

    var divcard = document.createElement('div');
    divcard.classList.add("card");
    divcard.setAttribute("id", "article-"+key);
    if(key==0)
      divcard.classList.add("first");

    var titleH2 = document.createElement('h2');
    var titleA = document.createElement('a');
    titleA.setAttribute("href", "javascript: void(0)");
    var titleH2Text = document.createTextNode(content.articles[key].title);
    titleA.appendChild(titleH2Text);
    titleH2.appendChild(titleA);
    divcard.appendChild(titleH2);

    var dateP = document.createElement('p');
    dateP.classList.add("date");
    var datePText = document.createTextNode(content.articles[key].date);
    dateP.appendChild(datePText);
    divcard.appendChild(dateP);

    var teaser = content.articles[key].text.split(' ').slice(0, 39).join(' ');
    var textP = document.createElement('p');
    textP.classList.add("text");
    var textPText = document.createTextNode(teaser);
    textP.appendChild(textPText);
    divcard.appendChild(textP);

    var buttonText = document.createTextNode('Show more');
    var buttonShowMore = document.createElement('button');
    buttonShowMore.classList.add("button");
    buttonShowMore.classList.add("button-clear");
    buttonShowMore.appendChild(buttonText);
    divcard.appendChild(buttonShowMore);

    articles.appendChild(divcard);
    
  }
})