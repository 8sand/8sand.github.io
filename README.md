# Sukhdeep Sandhu — Portfolio

A sleek, black-themed cybersecurity portfolio website with animated typewriter effect, particle network background, and a contact form.

---

## 🚀 Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `username.github.io` for a root site, or any name for a project site)
2. Upload the three files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save** — your site will be live at `https://username.github.io`

---

## 📧 Setting Up the Contact Form (EmailJS — Free)

The form currently falls back to `mailto:` if EmailJS is not configured. To enable real email sending:

1. Go to [https://emailjs.com](https://emailjs.com) and create a free account
2. Create an **Email Service** (connect your Gmail `ssandhu1999@gmail.com`)
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — subject
   - `{{message}}` — message body
4. Copy your **Public Key**, **Service ID**, and **Template ID**
5. In `index.html`, add this inside `<head>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
   ```
6. In `script.js`, replace:
   ```js
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   ```

---

## 🎨 Customizing Your Portfolio

### Replace Placeholder Photo
In `index.html`, find the `about-image-block` section and replace:
```html
<div class="image-placeholder"> ... </div>
```
with:
```html
<img src="your-photo.jpg" alt="Sukhdeep Sandhu" style="width:100%; display:block;" />
```

### Update Projects
Each `.project-card` in `index.html` contains:
- **Category tag** — change the `card-tag` span
- **Title** — the `<h3>` tag
- **Description** — the `<p>` tag
- **Tech stack** — the `.card-stack` spans
- **GitHub/Live links** — the `href="#"` anchors

### Update Social Links
In the Contact section, update:
```html
<a href="https://github.com/YOURUSERNAME" class="social-btn">GitHub</a>
<a href="https://linkedin.com/in/YOURPROFILE" class="social-btn">LinkedIn</a>
```

### Typewriter Phrases
In `script.js`, edit the `phrases` array to customize what gets typed.

---

## 🛠 Tech Stack

- Vanilla HTML / CSS / JavaScript — no frameworks, no build tools
- Fonts: [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono) + [Syne](https://fonts.google.com/specimen/Syne) (Google Fonts)
- Email: [EmailJS](https://emailjs.com) (optional, free tier)

---

Built with intention. © 2025 Sukhdeep Sandhu
