// Crazy Science: shared Hindi / English switch for the labs.
// The choice is shared with the home page (localStorage 'cs.lang'); ?lang=en or ?lang=hi overrides it.
//
// Static text:  <span data-en="English text">Hindi text</span>  (data-en-title / data-en-ph for title / placeholder)
// In code:      CS.t('हिंदी', 'English'), CS.lang, CS.onChange(fn), CS.voice(), CS.speechLang
// Buttons:      [data-lang-toggle] flips the language, [data-setlang="hi|en"] picks one.
(function () {
  const KEY = 'cs.lang';
  const valid = (l) => l === 'hi' || l === 'en';
  let lang = 'hi';
  try {
    const q = new URLSearchParams(location.search).get('lang'), s = localStorage.getItem(KEY);
    if (valid(q)) { lang = q; localStorage.setItem(KEY, q); } else if (valid(s)) lang = s;
  } catch {}
  const subs = [];

  function applyDom(root = document) {
    for (const el of root.querySelectorAll('[data-en]')) {
      if (el._hi === undefined) el._hi = el.innerHTML;
      el.innerHTML = lang === 'en' ? el.dataset.en : el._hi;
    }
    for (const [attr, sel, key] of [['title', '[data-en-title]', 'enTitle'], ['placeholder', '[data-en-ph]', 'enPh']]) {
      for (const el of root.querySelectorAll(sel)) {
        const store = '_hi_' + attr;
        if (el[store] === undefined) el[store] = el.getAttribute(attr) || '';
        el.setAttribute(attr, lang === 'en' ? el.dataset[key] : el[store]);
      }
    }
    for (const b of root.querySelectorAll('[data-setlang]')) b.classList.toggle('on', b.dataset.setlang === lang);
    for (const b of root.querySelectorAll('[data-lang-toggle]')) {
      b.textContent = lang === 'en' ? '🌐 हिं' : '🌐 EN';
      b.title = lang === 'en' ? 'हिंदी में बदलें' : 'Switch to English';
    }
    document.documentElement.lang = lang;
  }

  function set(l) {
    if (!valid(l) || l === lang) return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch {}
    applyDom();
    for (const f of subs) { try { f(l); } catch (e) { console.error(e); } }
  }

  // Best speech voice for the current language: Hindi → hi-IN, English → Indian English, then any English.
  function voice() {
    if (!('speechSynthesis' in window)) return null;
    const vs = speechSynthesis.getVoices(), g = (v) => /google/i.test(v.name);
    const by = (re, pref) => vs.find((v) => re.test(v.lang) && (!pref || pref(v)));
    if (lang === 'hi') return by(/hi[-_]IN/i, g) || by(/hi[-_]IN/i) || by(/^hi/i) || null;
    return by(/en[-_]IN/i, g) || by(/en[-_]IN/i) || by(/en[-_](GB|US)/i, g) || by(/en[-_](GB|US)/i) || by(/^en/i) || null;
  }

  const css = document.createElement('style');
  css.textContent = `
    .cs-lang { display: inline-flex; margin-top: 16px; border: 1px solid var(--c, var(--holo, #46dcff)); border-radius: 999px; overflow: hidden; }
    .cs-lang button { border: 0; background: transparent; color: var(--c, var(--holo, #46dcff)); padding: 7px 16px; font: 700 14px 'Rajdhani', system-ui, sans-serif; letter-spacing: .05em; cursor: pointer; }
    .cs-lang button.on { background: var(--c, var(--holo, #46dcff)); color: #001018; }`;
  document.head.append(css);

  document.addEventListener('click', (e) => {
    const t = e.target.closest?.('[data-lang-toggle], [data-setlang]');
    if (!t) return;
    set(t.dataset.setlang || (lang === 'hi' ? 'en' : 'hi'));
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => applyDom());
  else applyDom();

  window.CS = {
    get lang() { return lang; },
    get en() { return lang === 'en'; },
    get speechLang() { return lang === 'en' ? 'en-IN' : 'hi-IN'; },
    t: (hi, en) => (lang === 'en' ? en : hi),
    set, toggle: () => set(lang === 'hi' ? 'en' : 'hi'),
    onChange: (f) => subs.push(f),
    applyDom, voice,
  };
})();
