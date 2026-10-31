/* Daten hier ändern. Achtung: Diese Datei ist auf GitHub Pages öffentlich einsehbar. */
window.INVITATION = {
  date: 'Samstag, 24. April 2027', time: 'Ab 17:00 Uhr',
  place: 'Ort folgt', address: 'Die genaue Adresse folgt',
  rsvpDeadline: '14. März 2027',
  rsvpEmail: '', // Hier deine E-Mail-Adresse eintragen, um den E-Mail-RSVP zu aktivieren.
  hotel: { name: 'Motel One Frankfurt Airport', checkin: '24. April, ab 15:00 Uhr', checkout: '25. April, bis 12:00 Uhr' },
  // Beispielprofile – vor dem Versand durch deine echten Gästecodes ersetzen.
  // Unterkunft: 'hotel', 'home' oder 'none'. 'hotel' für drei reservierte Doppelzimmer.
  guests: {
    alexandra: { name: 'Alexandra', accommodation: 'home', partySize: 1 },
    marina: { name: 'Marina', accommodation: 'hotel', partySize: 2 },
    anna: { name: 'Anna', accommodation: 'none', partySize: 1 }
  },
  // Lokale Illustrationen als Platzhalter. Später eigene/rechtmäßig genutzte Bilder ergänzen.
  gallery: [
    {image:'./assets/moon.svg',alt:'Blutmond über gotischen Dächern',ratio:'portrait'},
    {image:'./assets/candles.svg',alt:'Antiker Kerzenleuchter',ratio:'portrait'},
    {image:'./assets/velvet.svg',alt:'Bordeauxroter Samt',ratio:'square'},
    {image:'./assets/goblet.svg',alt:'Silberner Kelch',ratio:'portrait'},
    {image:'./assets/window.svg',alt:'Gotisches Fenster',ratio:'portrait'},
    {image:'./assets/rose.svg',alt:'Dunkelrote Rose',ratio:'square'}
  ]
};
