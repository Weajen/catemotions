// déclaration constantes: boutons
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");

// déclaration constantes: images de chat
const image = document.querySelector("#image")
const img1 = document.querySelector("#image1")
const img2 = document.querySelector("#image2")
const img3 = document.querySelector("#image3")
const img4 = document.querySelector("#image4")
const img5 = document.querySelector("#image5")

let intervalParty;

// chat qui danse
button1.addEventListener("click", () => {
  image,img2,img3,img4,img5.style.display = "none";
  img1.style.visibility = "visible";
  document.getElementById("texte").innerHTML = 
  "Le chat fait la teuf!!!";
  intervalParty = setInterval(() => {
    document.body.style.backgroundColor = `rgb(
        ${Math.floor(Math.random() * 255)}
        ${Math.floor(Math.random() * 255)}
        ${Math.floor(Math.random() * 255)}
    )`;
  }, 100);
});
// chat triste
button2.addEventListener("click", () => {
  image,img1,img3,img4,img5.style.display = "none";
  img2.style.visibility = "visible";
  clearInterval(intervalParty);
  document.getElementById("texte").innerHTML = 
  "Le chat est tout tristou :(";
  document.body.style.backgroundColor = `rgb(75, 97, 179)`;
});

// chat content
button3.addEventListener("click", () => {
  image,img1,img2,img4,img5.style.display = "none";
  img3.style.visibility = "visible";
  clearInterval(intervalParty);
  document.getElementById("texte").innerHTML = 
  "Le chat est trop content!!";
  document.body.style.backgroundColor = `rgb(250, 230, 140)`;
});

// chat faché
button4.addEventListener("click", () => {
  image,img1,img2,img3,img5.style.display = "none";
  img4.style.visibility = "visible";
  clearInterval(intervalParty);
  document.getElementById("texte").innerHTML =
    "Le chat est pas content du tout >:( il fait la baston!!";
  document.body.style.backgroundColor = `rgb(224, 56, 47)`;
});

// chat fatigué
button5.addEventListener("click", () => {
  image,img1,img2,img3,img4.style.display = "none";
  img5.style.visibility = "visible";
  clearInterval(intervalParty);
  document.getElementById("texte").innerHTML =
    "Le chat est fatigué. On le laisse faire dodo :)";
  document.body.style.backgroundColor = `rgb(84, 40, 150)`;
});

