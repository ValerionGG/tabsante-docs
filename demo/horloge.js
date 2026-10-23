// Démonstration statique : l'horloge du navigateur part de 8 h 40, heure de Paris, le jour de la visite, puis court
// normalement. L'enregistrement a été fait à 8 h 40 (TABSANTE_HORLOGE) : à toute heure de visite, la démonstration
// reste une matinée cohérente — « Bonjour », passages du matin à venir, rien de signé avant l'heure. Chargé avant le
// poste fixe et le terminal (Flutter lit lui aussi Date.now()). « ?heure=HH:MM » dans l'adresse pour essayer
// une autre heure.
(() => {
  const Reel = Date
  const heure = (/[?&]heure=(\d{2}):?(\d{2})/.exec(location.search) ?? [null, '08', '40']).slice(1).map(Number)
  const ici = Reel.now()
  // décalage de Paris à cet instant (heure d'été comprise), puis 8 h 40 de ce jour-là à Paris en temps universel
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23',
  }).formatToParts(ici).map((x) => [x.type, x.value]))
  const parisCommeUtc = Reel.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second)
  const ecart = parisCommeUtc - Math.floor(ici / 1000) * 1000
  const cible = Reel.UTC(+p.year, +p.month - 1, +p.day, heure[0], heure[1]) - ecart
  const decalage = cible - ici
  function DateDemo(...a) {
    if (!new.target) return new Reel(Reel.now() + decalage).toString()
    return a.length ? new Reel(...a) : new Reel(Reel.now() + decalage)
  }
  DateDemo.prototype = Reel.prototype
  DateDemo.now = () => Reel.now() + decalage
  DateDemo.parse = Reel.parse
  DateDemo.UTC = Reel.UTC
  globalThis.Date = DateDemo
})()
