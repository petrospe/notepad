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
const articleList = document.getElementById("articleList");

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
    titleH2.innerHTML = `<a href="javascript: void(0)" onclick="show(`+key+`)">`+content.articles[key].title+`</a>`;
    divcard.appendChild(titleH2);

    if(key==0)
      var ul = document.createElement('ul');
      ul.classList.add("dropdown");
      articleList.appendChild(ul);

    var li = document.createElement('li');
    li.innerHTML = `<a href="javascript: void(0)" onclick="show(`+key+`)">`+content.articles[key].title+`</a>`;
    ul.appendChild(li);

    var dateDiv = document.createElement('div');
    dateDiv.classList.add("date");
    dateDiv.innerHTML = content.articles[key].date;
    divcard.appendChild(dateDiv);

    if(content.articles[key].image){
      var imageDiv = document.createElement('div');
      imageDiv.classList.add("mainimg");
      imageDiv.innerHTML = "<img src='"+content.articles[key].image+"' alt='image="+key+"' width='150'>";
      divcard.appendChild(imageDiv);
    }

    var teaser = content.articles[key].text.split(' ').slice(0, 39).join(' ');
    var teaserDiv = document.createElement('div');
    teaserDiv.classList.add("text");
    teaserDiv.classList.add("teaser");
    teaserDiv.innerHTML = teaser+" ...";
    divcard.appendChild(teaserDiv);

    var textDiv = document.createElement('div');
    textDiv.classList.add("text");
    textDiv.classList.add("hide");
    textDiv.innerHTML = content.articles[key].text;
    divcard.appendChild(textDiv);

    var buttonShowMore = document.createElement('button');
    buttonShowMore.classList.add("button");
    buttonShowMore.classList.add("button-clear");
    buttonShowMore.setAttribute("onclick", "show("+key+")");
    buttonShowMore.innerHTML = 'Show more';
    divcard.appendChild(buttonShowMore);

    articles.appendChild(divcard);
  }
})

function show(id){
  var article = document.getElementById("article-"+id);
  article.classList.remove("hide");
  article.classList.add("first");

  var teaser = article.getElementsByClassName('teaser');
  if(teaser.length)
    teaser[0].remove();

  var text = article.getElementsByClassName('text');
  text[0].classList.remove("hide");

  var button = article.getElementsByClassName('button');
  if(button.length)
    button[0].remove();

  var buttonClose = document.createElement('button');
  buttonClose.classList.add("button");
  buttonClose.classList.add("button-clear");
  buttonClose.setAttribute("onclick", "location.reload();");
  buttonClose.innerHTML = 'Close';
  article.appendChild(buttonClose);

  var otherArticles = document.querySelectorAll(".card:not(#article-"+id+")");
  for (const [key, otherArticle] of Object.entries(otherArticles)) {
      // otherArticle.remove();
      otherArticle.classList.add("hide");
      otherArticle.classList.remove("first");
  }
}
