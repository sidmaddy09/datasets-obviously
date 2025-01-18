
# Project Features

## Login Component
The Login component provides a user-friendly interface for signing into the application, with the following features:

- **Email and Password Authentication**:
  - Users can input their email and password to log in.
  - Form validation ensures both fields are completed before submission.

- **OAuth Login**:
  - Users can log in using external providers like Google and LinkedIn.

- **Sign-Up Option**:
  - A fallback link allows users to sign up if they don't already have an account.

- **Responsive Design**:
  - Fully styled using SCSS modules for a clean and modern look.
  - Optimized for various screen sizes and devices.

- **Error Handling**:
  - Alerts are displayed for missing inputs or invalid data during login or sign-up.

- **Copyright Information**:
  - Footer includes copyright details for branding and compliance.

---

## Library Screen Component
The Library Screen component is designed to display and manage datasets effectively:

- **Dataset Management**:
  - Displays a list of datasets with information such as name, type, status, creation date, and creator details.
  - Icons for different file types (PDF, JPG, MP4, etc.) for intuitive file identification.

- **Search Functionality**:
  - Real-time search to filter datasets by name, type, status, or creator information.

- **Pagination**:
  - Custom pagination controls to navigate through large datasets.
  - Alerts users when no more records are available.

- **Customizable Status Indicators**:
  - Status (e.g., "Uploaded", "Connected", "Error") displayed with distinct styles and colors for quick identification.

- **Delete Action**:
  - Provides an option to delete datasets with a single click.
  - Immediate UI updates after deletion.

- **Creator Details**:
  - Displays creator email and name with a clean, multi-line layout.

- **Responsive Design**:
  - Optimized for desktop use with scalable layout and accessible components.

- **Scalability**:
  - Supports large datasets with efficient rendering and performance optimizations.

### Note:
Both components utilize reusable styles and React best practices for maintainability and performance.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
