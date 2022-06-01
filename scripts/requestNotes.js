function load_doc(button_id) {
    let xml_http = new XMLHttpRequest();
    xml_http.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            format_notes(this);
        }
    };
    xml_http.open("GET", button_id+"/notes.xml", true);
    xml_http.send();
}

function format_notes(xml) {
    let xmlDoc = xml.responseXML;
    let subject = xmlDoc.getElementsByTagName("subject").item(0).innerHTML
    let overview = xmlDoc.getElementsByTagName("overview").item(0).innerHTML
    let notes="<br/><h1 id=\"heading\">"+ subject +"</h1><br/>";
    notes += "<h2>"+ overview +"</h2><hr/>";
    let topics = xmlDoc.getElementsByTagName("topic");
    for (let i = 0; i <topics.length; i++) {
        notes += "<h2>"+topics[i].getElementsByTagName("title").item(0).innerHTML+"</h2>";
        let entries = topics[i].getElementsByTagName("content").item(0).getElementsByTagName("entry");
        for (let j = 0; j<entries.length; j++) {
            notes += "<p>"+ entries[j].innerHTML +"</p>"
        }
        if (i !== topics.length-1) {
            notes += "<br/>"
        }
    }
    notes += "<hr/>"
    document.getElementById("content").innerHTML = notes;
}