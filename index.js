function changeBio() {
  document.getElementById("editBio").style.display = "block";
  let text = document.getElementById("bioText").innerText;
  console.log(text);
}

function newBio(value) {
  document.getElementById("bioText").innerText = value;
}

function logMessage(message) {
  console.log(message + "<br>");
}

// controla si se presiono enter
let textarea = document.getElementById("editBio");
textarea.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
  if (e.key == "Enter") {
    document.getELementById("editBio").style.display = "none";
  }
});

// carga el contenido de un archivo de texto y lo muestra en el parrafo
function showFile(input) {
  let file = input.files[0];
  alert(`File name: ${file.name}`);
  alert(`Last modified: ${file.lastModified}`);

  let reader = new FileReader();
  reader.onload = function () {
    console.log(reader.result);
    document.getElementById("editBio").innerText = reader.result;
  };
  reader.onerror = function () {
    console.log(reader.error);
  };
}
