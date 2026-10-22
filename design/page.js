// Comparateurs avant / après, variantes, section active, démos. Aucune dépendance.
(() => {
  const reduit = matchMedia('(prefers-reduced-motion: reduce)')

  // ---- comparateurs
  for (const art of document.querySelectorAll('.paire')) {
    const comp = art.querySelector('.comp'), pile = art.querySelector('.pile'), range = art.querySelector('input[type=range]')
    const imgA = art.querySelector('img.avant'), imgB = art.querySelector('img.apres')
    const poser = v => {
      v = Math.max(0, Math.min(100, Math.round(v)))
      comp.style.setProperty('--pos', v + '%')
      range.value = v
      range.setAttribute('aria-valuetext', v === 100 ? 'Avant en entier' : v === 0 ? 'Après en entier' : `Avant à gauche sur ${v} %, après à droite`)
      comp.dataset.fin = v === 100 ? 'avant' : v === 0 ? 'apres' : ''
    }
    range.addEventListener('input', () => poser(+range.value))
    for (const b of art.querySelectorAll('[data-aller]')) b.addEventListener('click', () => poser(+b.dataset.aller))
    const depuis = e => { const r = pile.getBoundingClientRect(); poser((e.clientX - r.left) / r.width * 100) }
    let tire = false
    pile.addEventListener('pointerdown', e => {
      if (e.pointerType === 'touch') return // au doigt : un appui pose le curseur, le glissé vertical fait défiler
      tire = true; pile.setPointerCapture(e.pointerId); depuis(e); e.preventDefault()
    })
    pile.addEventListener('pointermove', e => { if (tire) depuis(e) })
    pile.addEventListener('pointerup', () => { tire = false })
    pile.addEventListener('pointercancel', () => { tire = false })
    pile.addEventListener('click', e => { if (e.pointerType === 'touch' || e.detail === 0) depuis(e) })
    // glisser au doigt de côté : on suit, sans bloquer le défilement vertical
    let x0 = null, y0 = null, horiz = null
    pile.addEventListener('touchstart', e => { const t = e.touches[0]; x0 = t.clientX; y0 = t.clientY; horiz = null }, { passive: true })
    pile.addEventListener('touchmove', e => {
      const t = e.touches[0]
      if (horiz === null && Math.hypot(t.clientX - x0, t.clientY - y0) > 8) horiz = Math.abs(t.clientX - x0) > Math.abs(t.clientY - y0)
      if (horiz) depuis(t)
    }, { passive: true })
    poser(50)

    // variantes (largeur, jour / nuit)
    let donnees = []
    try { donnees = JSON.parse(art.dataset.v || '[]') } catch { donnees = [] }
    const boutons = art.querySelectorAll('.variantes button')
    for (const b of boutons) b.addEventListener('click', () => {
      const d = donnees[+b.dataset.i]; if (!d) return
      for (const x of boutons) x.setAttribute('aria-pressed', String(x === b))
      const poserImg = (img, src, w, h, p) => {
        if (p) img.srcset = `${p} 780w, ${src} ${w}w`; else img.removeAttribute('srcset')
        img.src = src; img.width = w; img.height = h
      }
      poserImg(imgA, d.a, d.aw, d.ah, d.ap); poserImg(imgB, d.b, d.bw, d.bh, d.bp)
      art.querySelector('.cadre').scrollTop = 0
    })
    // sur un téléphone, l'écran le plus étroit se lit mieux qu'une capture de 1440 réduite
    if (matchMedia('(max-width: 719px)').matches) {
      const px = b => +(b.textContent.match(/(\d+) px/) || [])[1] || Infinity
      const etroit = [...boutons].sort((x, y) => px(x) - px(y))[0]
      if (etroit && px(etroit) < Infinity && etroit.getAttribute('aria-pressed') !== 'true') etroit.click()
    }
  }

  // ---- section active dans la barre
  const liens = [...document.querySelectorAll('.sections a')]
  const cibles = liens.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean)
  if ('IntersectionObserver' in window && cibles.length) {
    const vus = new Map()
    const io = new IntersectionObserver(es => {
      for (const e of es) vus.set(e.target.id, e.isIntersecting)
      const actif = cibles.find(c => vus.get(c.id))
      for (const a of liens) {
        const oui = actif && a.getAttribute('href') === '#' + actif.id
        if (oui) { a.setAttribute('aria-current', 'true'); a.scrollIntoView({ block: 'nearest', inline: 'nearest' }) } else a.removeAttribute('aria-current')
      }
    }, { rootMargin: '-45% 0px -50% 0px' })
    cibles.forEach(c => io.observe(c))
  }

  // ---- démo : signature maintenue (800 ms, relâcher annule)
  const signer = document.getElementById('signer')
  if (signer) {
    const etat = signer.parentElement.querySelector('.s-etat'), consigne = signer.querySelector('small'), titre = signer.querySelector('b')
    let minuteur = null
    const remettre = () => setTimeout(() => {
      signer.classList.remove('signe'); titre.textContent = 'Signer le passage'; consigne.textContent = 'Maintenez une seconde'
    }, 1600)
    const signe = () => {
      signer.classList.remove('maintien'); signer.classList.add('signe')
      titre.textContent = 'Signé'; consigne.textContent = 'Le reçu arrive'; etat.textContent = 'Passage signé.'
      if (navigator.vibrate) navigator.vibrate(30)
      remettre()
    }
    const debut = e => {
      if (signer.classList.contains('signe') || minuteur) return
      if (reduit.matches) return // mouvement réduit : un appui puis une confirmation (voir click)
      e.preventDefault(); signer.classList.add('maintien'); etat.textContent = 'Maintenez…'
      minuteur = setTimeout(() => { minuteur = null; signe() }, 800)
    }
    const fin = () => {
      if (!minuteur) return
      clearTimeout(minuteur); minuteur = null; signer.classList.remove('maintien')
      consigne.textContent = 'Maintenez pour signer'; etat.textContent = 'Relâché trop tôt : rien n’est signé.'
    }
    signer.addEventListener('pointerdown', debut)
    signer.addEventListener('pointerup', fin); signer.addEventListener('pointerleave', fin); signer.addEventListener('pointercancel', fin)
    signer.addEventListener('keydown', e => { if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) debut(e) })
    signer.addEventListener('keyup', e => { if (e.key === ' ' || e.key === 'Enter') fin() })
    signer.addEventListener('contextmenu', e => e.preventDefault())
    signer.addEventListener('click', e => {
      if (!reduit.matches || signer.classList.contains('signe')) return
      e.preventDefault()
      if (confirm('Signer le passage ?')) signe()
    })
  }

  // ---- démo : entrée d'une liste
  const rejouer = document.getElementById('rejouer'), cascade = document.getElementById('cascade')
  if (rejouer && cascade) rejouer.addEventListener('click', () => {
    cascade.classList.remove('joue'); void cascade.offsetWidth; cascade.classList.add('joue')
  })
})()
