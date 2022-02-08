const textareaElement = document.getElementById("post-text");

textareaElement.addEventListener("input", updateCharacterAmount);

function updateCharacterAmount() {
  console.log("character amount changed");

  //element mit id"post-text" aus DOM holen
  const postTextElement = document.getElementById("post-text");
  //console.dir(postTextElement)

  //länge der textareas ermitteln
  let text = postTextElement.value;
  let textLength = text.length;

  //Element mit id "character-amonunt" aus DOM holen
  const characterAmountElement = document.getElementById("character-amount");

  //inhalt von Textfeld updaten
  characterAmountElement.innerText = textLength;
}

//button Element aus DOM holen
const buttonElement = document.getElementById("submit-button");
//console.dir(buttonElement);

//eventlistener vom typ "cklick" auf button setzten --> ruft funktion auf
buttonElement.addEventListener("click", addPost);

//function die posts hinzufügt
function addPost(event) {
  event.preventDefault();
  //werte von inputfelden aus DOM holen
  const postTitle = document.getElementById("post-title").value;
  //console.dir(postTitle);
    const postText = document.getElementById("post-text").value;
    const postLink = document.getElementById("post-link").value;
  //console.dir(postText);
  //h2 erstellem
  const titleNode = document.createElement("h2");
  //titel von inputfeld in h2 einfügen
  const titleTextNode = document.createTextNode(postTitle);
  titleNode.appendChild(titleTextNode);
  //console.log(titleNode);
  //p erstellen
  const textNode = document.createElement("p");
  //text von inputfeld einfügen
  const textTextNode = document.createTextNode(postText);
  textNode.appendChild(textTextNode);
  console.log(textNode);
  //aktuelle Zeit holen
  const now = new Date();
  console.log(now);
  const time = now.toLocaleTimeString();
  console.log(time);
  //p Element mit zeit befüllen
  const dateNode = document.createElement("p");
  dateNode.innerText = "Uhrzeit: " + time;
  //link hinzufügen
  const linkNode = document.createElement("a");
  linkNode.innerText = "beitrag anzeigen";
  linkNode.href = postLink;
  linkNode.setAttribute("target", "blank"); //öffnet in neuem Tab
  //div als "wrapper" erstellen
  const wrapperNode = document.createElement("div");
  //TODO: add class "card" to div Element
  wrapperNode.classList.add("card");
  //h1 und p einfügen
  wrapperNode.appendChild(titleNode);
  wrapperNode.appendChild(textNode);
  if (postLink) {
    wrapperNode.appendChild(linkNode);
  }
  wrapperNode.appendChild(dateNode);
  console.log(wrapperNode);
  //element "postfeed" aus DOM
  const postFeed = document.getElementById("postfeed");
  //unser wrapper" div mit beiden Elementen (h1, p) zum Postfeed hinzufügen (oben)
  postFeed.prepend(wrapperNode);
  //
}
