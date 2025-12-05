# Front-End Test Case 🚀

This project is a technical test case prepared for the Front-End Developer position at **The TaaS Company**. It has been developed using **Vue.js** and **Nuxt** with a **mobile-first** approach.

🔗 **Live Demo:** [https://frontend-test-case.netlify.app/](https://frontend-test-case.netlify.app/)

## 🎯 Project Summary

An e-commerce homepage has been built, strictly adhering to the requested design and functionality. The project was developed with a focus on performance, accessibility, and code quality standards.

### ✨ Features

- **Mobile-First Design:** Responsive structure for a seamless experience on all devices.
- **API Integration:** Dynamic fetching of "Featured Products" data using the [DummyJSON](https://dummyjson.com/) API.
- **Slider Structure:** `Swiper` integration for product display.
- **Bonus Feature (Checkout):** The optional checkout page has been designed and implemented with form validations using `@vuelidate`.
- **SCSS & BEM:** Modular CSS architecture and BEM naming conventions.

## 🛠 Tech Stack

- **Core:** [Nuxt](https://nuxt.com/) (SSR), [Vue 3](https://vuejs.org/) (Composition API)
- **Styling:** SCSS (Sass), BEM Methodology
- **State & Logic:** Composition API, TypeScript/JavaScript
- **Validation:** Vuelidate
- **Slider:** Swiper.js

## 📂 Project Structure

The project is structured under the `app/` directory:

```
app/
├── assets/        # SCSS, Fonts, and Images
├── components/    # Vue Components (Modular structure)
├── composables/   # Reusable logic (Hooks)
├── constants/     # Static data and configuration constants
├── layouts/       # Page layouts (Default, Checkout, etc.)
├── pages/         # Page routes
├── services/      # API service calls
├── validations/   # Form validation rules (Vuelidate schemas)
├── public/        # Static files
└── app.vue        # Main entry point
```

## 🚀 Setup & Run

You can follow the steps below to run the project locally:

### Install Dependencies

```bash
# npm
npm install

# pnpm
pnpm install
```

### Development Server

```bash
npm run dev
```

You can view the project by navigating to `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## 📬 Communication & Process

The project process was tracked via Jira. An invitation to the relevant Jira board has been sent for the tasks and roadmap.

---
*Developed by Yunus Emre Gürgül.*
