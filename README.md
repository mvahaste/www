# ☕ mvahaste.dev

This is my personal website, hosted at [mvahaste.dev](https://mvahaste.dev). It's designed with a clean, responsive layout and features simple animations for a bit of character.

## ✨ Features

- **Responsive Layout** - The website adapts to different screen sizes.
- **Clean Design** - Simple, elegant design with a cream/coffee pastel color theme. ☕
- **Animations** - Staggered fade and slide-in animations on page load, as well as a wave. 👋
- **Dark/Light Mode** - A pleasant color scheme with light and dark mode options.
- **Contact Form** - Reach out through the contact form.
- **Automatic Favicon Updates** - Website favicon updated automatically alongside my GitHub avatar.

## 🧰 Technologies

- [Next.js 15](https://nextjs.org/) - Framework for building the site
- [TailwindCSS](https://tailwindcss.com/) - Styling framework
- [shadcn/ui](https://ui.shadcn.com/) - Base components for the UI
- [Motion](https://motion.dev/) - Library for animations
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) - Render page content from `.md` files
- [form-to-email](https://www.form-to-email.com/) - To send emails via the contact form
- [Vercel](https://vercel.com/) - Hosting platform
- [GitHub Actions](https://github.com/features/actions) - Automate favicon and header image updates

## ⚙️ Installation

_I don't know why anyone would want to do this, but I'll include it anyway._

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/mvahaste/www.git
   ```
2. Navigate into the project folder:
   ```bash
   cd www
   ```
3. Install dependencies (using `--legacy-peer-deps` due to React 19):
   ```bash
   npm install --legacy-peer-deps
   ```
4. Set up environment variables:
   Create a `.env` file in the root directory and add your `FORM_ENDPOINT`:

   ```env
   FORM_ENDPOINT=<form-to-email endpoint>
   ```

5. For development:

   ```bash
   npm run dev
   ```

6. For production:
   - Build the project:
     ```bash
     npm run build
     ```
   - Run the project:
     ```bash
     npm run start
     ```

## 🤖 GitHub Actions

This repository includes a GitHub Actions that automatically updates the favicon and header image based on my GitHub avatar.

### 🤔 How It Works

1. **Runs every hour** via a scheduled cron job (`0 * * * *`), or can be triggered manually.
2. Fetches the latest avatar from my GitHub profile.
3. Compares the new avatar with the stored hash to detect changes.
4. If the avatar has changed, the following files are updated:
   - `.avatar_hash` – stores the hash of the current avatar.
   - `app/favicon.ico` – used for the site's favicon.
   - `public/images/avatar.png` – used for the site's header image.
5. Commits and pushes the changes automatically.

### 🗃️ Related Files

- **Action**: `.github/workflows/update-favicon.yml`
- **Script**: `scripts/check_avatar.py`
- **Cache**: `.avatar_hash`

This ensures the site's favicon and header image are always up-to-date with my GitHub avatar.

## 💻 Screenshots

| Light Mode                                     | Dark Mode                                    |
| ---------------------------------------------- | -------------------------------------------- |
| ![Light mode screenshot](screenshot-light.png) | ![Dark mode screenshot](screenshot-dark.png) |

## 📜 License

This project is licensed under the MIT License.
