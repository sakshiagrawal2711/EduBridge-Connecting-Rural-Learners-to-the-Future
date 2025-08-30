# EduBridge — Connecting Rural Learners to the Future (Frontend)

EduBridge is a digital platform to enhance rural education by providing study materials, mentor access, skill tracking, job opportunities, and information on government schemes. This repository contains the frontend app built with React and Tailwind CSS, designed to work well on low-data connections with a simple, accessible UI.

## Features
- Home with Hero, Features grid, Timeline, Team, FAQs, Contact
- Dedicated Study page with filters (class/subject), search, sorting, bookmarks, and view/download actions
- Mentor feature currently locked via a shared "Coming soon" countdown modal
- In-app language switcher (no external scripts), with English and Hindi fully supported and fallbacks for other Indian languages

## Tech Stack
- React 18, react-router-dom 6
- Tailwind CSS
- Custom LanguageProvider for translations (script-free i18n)

## Local Development
1. Install dependencies: `npm install`
2. Start dev server: `npm start`
3. Open http://localhost:3000

## Production Build
- Build optimized assets: `npm run build`

## Folder Structure
```
edubridge/
	public/
	src/
	package.json
	tailwind.config.js
	postcss.config.js
```

## License
This project’s license and contribution guidelines can be managed in the main repository settings.
