# Adslath — Self-Hosted Modular Advertising Network

## 1. Project Identity
* **Project Name:** Adslath
* **Project Type:** Self-Hosted Modular Advertising Network (Phase 1 of 4)
* **Objective:** Establish a robust, scalable, and independently maintainable data and architectural foundation.

---

## 2. Technology Stack
* **Languages:** HTML5, CSS3, Vanilla JavaScript (ES6+ Modules)
* **Storage:** LocalStorage-compatible immutable JavaScript data structures & objects
* **APIs:** Native Browser APIs (`URL`, `structuredClone`, `Set`)
* **Constraints:** Strictly zero external frameworks (React, Vue, Angular, Node.js, PHP, MySQL, Firebase, Supabase, AI APIs). Fully compatible with static hosting.

---

## 3. Directory Structure
```text
/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── main.css
    │   ├── components.css
    │   └── responsive.css
    └── js/
        ├── core/
        │   ├── adslath-config.js
        │   ├── constants.js
        │   └── namespace.js
        ├── data/
        │   ├── ads-data.js
        │   ├── domains-data.js
        │   ├── categories-data.js
        │   ├── card-styles.js
        │   ├── placement-data.js
        │   ├── schedule-data.js
        │   └── settings-data.js
        └── utils/
            ├── validation.js
            ├── url-utils.js
            ├── data-utils.js
            └── logger.js
