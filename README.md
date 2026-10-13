# 🧪 Crazy Science · हाथ हिलाओ, विज्ञान समझो

Camera ke saamne haath hilakar science seekhne wale labs. Hindi aur English me, free, seedha browser me.

| Lab | Folder | Subject |
|---|---|---|
| ⚛️ Atom AR | `atom-ar/` | Physics |
| 🪐 Solar System AR | `solar-ar/` | Physics / Space |
| 🌗 चाँद की कलाएँ (Moon Phases) | `moon-phases/` | Science |
| 📐 Finger Trigonometry | `finger-trig/` | Maths |
| 🌀 फूरियर ड्रॉइंग (Fourier Drawing) | `fourier-draw/` | Maths |
| 💧 Molecule Builder | `molecule-ar/` | Chemistry |
| 🫀 दिल की धड़कन (Heartbeat AR) | `heart-ar/` | Biology |
| 🩻 बॉडी एक्स-रे (Body X-ray) | `body-xray/` | Biology |
| 🤖 Jarvis Hologram | `jarvis-hologram/` | Fun / AI |
| ⌨️ Air Keyboard | `air-keyboard/` | Fun / Tech |

Sab sirf HTML files hain. Koi server, database ya install nahi chahiye.

**Home page:** sci-fi "Crazy Science OS". Boot screen par **हिंदी / ENGLISH** chuno (wahi power button hai), upar 🌐 se kabhi bhi bhasha badlo, 🔊 se awaaz on/off. Har click par robotic awaaz aati hai. Home page ki saari lines `index.html` ke `T` (hi / en) aur `LABS` me hain.

**Labs bhi dono bhasha me:** home page par chuni bhasha har lab me apne aap aati hai (screen ka text, subtitles aur bolne wali aawaz). Lab ke andar 🌐 button ya start screen ke **हिंदी / English** se kabhi bhi badlo. Ye shared code `lang.js` me hai.

## GitHub Pages par daalna (free website)

1. **github.com** par login karo (account na ho to free bana lo).
2. Upar right **➕ → New repository** par jao:
   - Repository name: `crazy-science`
   - **Public** chuno (free Pages ke liye zaroori)
   - **Create repository** dabao
3. Naye repo me **"uploading an existing file"** link (ya **Add file → Upload files**) par click karo.
4. Finder me `crazy-science` folder kholo, aur **andar ki saari cheezein** select karke browser me drag-drop karo:
   `index.html`, `README.md` aur saare lab folders.
5. Neeche **Commit changes** dabao.
6. Repo me **Settings → Pages** par jao:
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)** → **Save**
7. 1–2 minute baad site yahan live hogi:
   `https://<tumhara-username>.github.io/crazy-science/`

> ⚠️ Sirf **is folder** ki files upload karna. Desktop ke dusre folders (jaise "New folder clean") mat daalna, unme dusri private files hain.

## Badlaav karna

- **Jarvis ke sawaal-jawab:** `jarvis-hologram/script.js` me likho (`answer` = Hindi, `answerEn` = English).
- **Labs ki bolne wali lines:** har lab ki `index.html` ke upar `LINES` (`hi` / `en`) me hain. Chaand, molecule aur trig ki har kala / molecule / angle ki English line `lineEn` me hai.
- Badlaav ke baad GitHub repo me wahi file dobara upload karo (Add file → Upload files). Same naam wali file replace ho jayegi.

## Apne computer par chalana

```bash
cd ~/Desktop/crazy-science && python3 -m http.server 8770
```
Phir Chrome me `http://localhost:8770` kholo. Camera ke liye `localhost` ya `https` zaroori hai, isliye seedha file double-click karke nahi chalega.

## Privacy

Camera ki video student ke device par hi process hoti hai, kahin upload nahi hoti. Sirf Jarvis lab me bolne ka text (speech-to-text) Chrome ki Google service banati hai. Recording (⏺ REC) seedha apne computer ke Downloads me save hoti hai.

---
Made with ❤️ by Shivam
