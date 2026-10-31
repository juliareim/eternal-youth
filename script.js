(() => {
 const c=window.INVITATION||{}, byId=id=>document.getElementById(id);
 const key=new URLSearchParams(location.search).get('guest')?.toLowerCase().trim()||'';
 const raw=Object.prototype.hasOwnProperty.call(c.guests||{},key)?c.guests[key]:null;
 const guest=typeof raw==='string'?{name:raw,accommodation:'none',partySize:1}:raw;
 byId('guest-name').textContent=guest?.name||'du';
 byId('guest-callout').textContent='Du gehörst dazu.';
 byId('event-date').textContent=c.date||'Datum folgt';byId('event-time').textContent=c.time||'Uhrzeit folgt';
 byId('event-place').textContent=c.place||'Ort folgt';byId('event-address').textContent=c.address||'';

async function loadMoodboard() {
  try {
    const response = await fetch('./moodboard.json');

    if (!response.ok) {
      throw new Error('Moodboard konnte nicht geladen werden');
    }

    const images = await response.json();
    const gallery = byId('gallery');

    gallery.replaceChildren();

    images.forEach((image, index) => {
      const figure = document.createElement('figure');

      figure.className =
        'gallery-item ' + (index % 4 === 0 ? 'square' : 'portrait');

      const img = document.createElement('img');
      img.src = new URL(image, document.baseURI).href;
      img.alt = 'Vampirische Inspiration';
      img.loading = 'lazy';

      figure.append(img);
      gallery.append(figure);

      // Damit neue Bilder ebenfalls animiert erscheinen
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        figure.classList.add('reveal');

        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('appeared');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08 });

        observer.observe(figure);
      }
    });

  } catch (error) {
    console.error('Fehler beim Laden des Moodboards:', error);
  }
}

loadMoodboard();

 const stay=guest?.accommodation||'none';
 if(stay==='hotel') {byId('stay-info').hidden=false;byId('stay-title').textContent='Dein Nachtquartier';byId('stay-text').textContent='Für dich und deine Begleitung habe ich bereits ein Zimmer im '+c.hotel.name+' reserviert. Damit ihr nach den Feierlichkeiten nicht noch im Morgengrauen den Heimweg antreten müsst, ist für eine Übernachtung gesorgt. Sollten sich eure Pläne ändern, gib mir bitte frühzeitig Bescheid.';byId('stay-meta').textContent='Check-in: '+c.hotel.checkin+' · Check-out: '+c.hotel.checkout;}
 else if(stay==='home'){byId('stay-info').hidden=false;byId('stay-title').textContent='Dein Nachtquartier';byId('stay-text').textContent='Für dich ist ein Schlafplatz bei mir eingeplant. Wenn sich deine Pläne ändern, sag mir bitte Bescheid.';}
 if(guest?.partySize>1)byId('couple-food-note').hidden=false;
 const form=byId('rsvp-form');form.addEventListener('change',()=>{byId('food-fields').hidden=form.elements.attendance.value!=='yes'});
 form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;
 const attending=form.elements.attendance.value==='yes';const name=guest?.name||'Ein Gast';const subject='Rückmeldung zu Eternal Youth – '+name;
 const rows=['Hallo Julia,','',name+' meldet sich: '+(attending?'Auf die Unsterblichkeit! (Zusage)':'Ich bleibe sterblich. (Absage)')];
 if(attending){rows.push('Ernährungsweise: '+byId('diet').value,'Allergien/Wünsche: '+(byId('allergies').value.trim()||'Keine Angabe'));}
 if(byId('note').value.trim())rows.push('Nachricht: '+byId('note').value.trim());
 rows.push('','Liebe Grüße',name);
 const email=c.rsvpEmail||'';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){byId('rsvp-feedback').textContent='Noch keine Empfängeradresse hinterlegt: Bitte zuerst rsvpEmail in config.js eintragen. Die Antwort wurde nicht versendet.';return;}
 location.href='mailto:'+encodeURIComponent(email)+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(rows.join('\n'));
 byId('rsvp-feedback').textContent='Dein E-Mail-Programm wurde geöffnet. Bitte die Nachricht dort absenden – erst dann erhält Julia deine Antwort.';
 });

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appeared');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.letter,.details,.quote-section,.dress,.mood,.rsvp'
).forEach(el => {
  el.classList.add('reveal');
  obs.observe(el);
});

})();
