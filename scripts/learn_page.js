const backButton = document.getElementById('back-button');
const menu = document.getElementById('menu');

function displayMenu() {
    // menu_button.style.display='none'
    // menu.style.visibility = 'visible'
    menu.classList.toggle("hidden");
    menu.classList.toggle("visible");
}

backButton.addEventListener('click', ev => {
    // menu.style.visibility='hidden'
    // menu_button.style.display='block'
    menu.classList.toggle("visible");
    menu.classList.toggle("hidden");
})
function notesLinkOnClickAction(buttonID, shouldToggle, isQuiz) {
    // cover.style.display='none'
    // menu.style.visibility='hidden'
    if (shouldToggle) {
        menu.classList.toggle("visible");
        menu.classList.toggle("hidden");
    }
    localStorage.setItem('unit_id', buttonID);
    localStorage.setItem('is_quiz', isQuiz.toString());
    // menu_button.style.display='block'
    loadDoc(buttonID, isQuiz)
}
function loadDoc(buttonID, isQuiz) {
    mcsTFs = [];
    mcsTFsA = [];
    mas = [];
    masA = [];
    answerCollection = [];

    let xml_http = new XMLHttpRequest();
    xml_http.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            if (!isQuiz) {
                document.getElementById("quiz").innerHTML = "";
                formatNotes(this);
            } else {
                document.getElementById("content").innerHTML = "";
                formatQuiz(this);
            }
        }
    };
    if (!isQuiz) {
        xml_http.open("GET", buttonID+"/notes.xml", true);
        document.getElementById("quiz-button").style.display = 'block';
    } else {
        document.getElementById("quiz-button").style.display = 'none';
        xml_http.open("GET", buttonID+"/questions.xml", true)
    }

    xml_http.send();
}

window.onload = () => {
    if (localStorage.getItem("is_quiz") === 'true') {
        loadDoc(localStorage.getItem("unit_id"), true);
    } else {
        loadDoc(localStorage.getItem("unit_id"), false);
    }
}