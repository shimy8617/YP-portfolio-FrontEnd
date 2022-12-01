function changeBio() {
    document.getElementById("editBio").style.display="block";
    let text = document.getElementById("bioText").innerText;
    console.log(text);
};

function newBio(value) {
    document.getElementById("bioText").innerText=value;
};