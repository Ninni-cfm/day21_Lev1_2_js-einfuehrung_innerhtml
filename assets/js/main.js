/*
    Lev1_2_js-einführung_innerhtml Teil 1:
    Es gibt auch noch eine andere Variante um Inhalte mit JS in unser HTML-Dokument zu schreiben.
    Mit innerHTML fügen wir Inhalt in einem HTML-Element hinzu oder wir fügen ein komplett neues HTML-Element hinzu.
    Verwende folgenden HTML-Code aus dem Kommentarbereich.
    * Erstelle mit document.getElementById(“info”).innerHTML eine h1 mit dem Text “Hello World”.
    * Füge noch eine h2 hinzu mit dem Text “How are you?”.
*/
document.getElementById("info").innerHTML = "<h1>Hello World</h1>";
document.getElementById("info").innerHTML += "<h2>How are you?</h2>";

/*
    Lev1_2_js-einführung_innerhtml Teil 2:
    Jetzt arbeiten wir weiter mit dem Code und fügen dem noch ein <div> mit der ID “container” hinzu. Siehe unten im Kommentar.
    Nun nutzen wir document.write() und innerHTML um jeweils Inhalte in HTML zu schreiben.
    Nutze document.getElementById('container').innerHTML um einen <p>-Tag mit dem Text “start of the element” zu kreieren
    Schreiben nun document.write("end of the element")
    Analysiere nun das Ergebnis im Live Server.
    Mit document.write() fügt man immer am Ende des HTML Dokuments die Inhalte hinzu.
*/
document.getElementById('container').innerHTML = "<p>start of the element</p>";
document.write("<p>end of the element</p>");

