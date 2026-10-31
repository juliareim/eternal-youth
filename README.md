# Eternal Youth – Geburtstagseinladung

Mobile Website (Deutsch), ohne Build-Schritt. Lokal auf dem Mac mit `python3 -m http.server 8000` starten, dann `http://localhost:8000/?guest=alexandra` aufrufen.

## Anpassungen
- `config.js`: Ort, Adresse, Gästecodes, Unterkunft pro Gast (`hotel`, `home`, `none`), `partySize`, Bilder, E-Mail-Adresse für RSVP.
- Hotel bereits vorgesehen: Motel One Frankfurt Airport. Reise-/Buchungsdaten und Check-in-/Check-out-Zeiten vor Versand mit der Buchungsbestätigung abgleichen.
- RSVP-Frist 14.03.2027, Feier Samstag 24.04.2027 ab 17 Uhr.
- Die RSVP-Funktion **versendet noch keine Antwort automatisch**. Wenn `rsvpEmail` eingetragen ist, öffnet sie das E-Mail-Programm des Gastes mit vorausgefüllter Nachricht. Die Person muss dort auf Senden klicken. Für echten serverseitigen RSVP später Formspree, Supabase oder ähnliches anbinden.
- Die Galerie verwendet Platzhalter-SVGs. Kein Pinterest-Live-Sync. Bilder nur mit entsprechenden Nutzungsrechten veröffentlichen.

## Datenschutz
Bei GitHub Pages sind `config.js` und damit die dort gespeicherten Namen/Unterkunftsdaten öffentlich abrufbar. Vor einer öffentlichen Veröffentlichung keine sensiblen Gästedaten dort eintragen. URL-Parameter sind kein Passwortschutz. Für eine produktive Einladung mit persönlichen Unterkunftsdetails ist ein geschützter Datenabruf bzw. ein Backend ratsam.

## Hosting
GitHub Pages: Repo hochladen und Settings → Pages → Deploy from branch → main / (root) auswählen. `.nojekyll` ist enthalten.
