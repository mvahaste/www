# ☕ mvahaste.dev

This is my personal website, hosted at [mvahaste.dev](https://mvahaste.dev). It's designed with a clean, responsive layout and features animations for an engaging user experience.

## ✨ Features

- **Responsive Layout** - The website adapts to different screen sizes.
- **Clean Design** - Simple, elegant design with a cream/coffee pastel color theme. ☕
- **Animations** - Staggered fade and slide-in animations on page load, as well as a wave. 👋
- **Dark/Light Mode** - A pleasant color scheme with light and dark mode options.
- **Contact Form** - Reach out through the contact form.
- **Automatic Favicon Update** - Website favicon updated automatically alongside my GitHub avatar.

## 🧰 Technologies

- [Next.js 15](https://nextjs.org/) - Framework for building the site
- [TailwindCSS](https://tailwindcss.com/) - Styling framework
- [shadcn/ui](https://ui.shadcn.com/) - Base components for the UI
- [Motion](https://motion.dev/) - Library for animations
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) - Render page content from `.md` files
- [form-to-email](https://www.form-to-email.com/) - To send emails via the contact form
- [Vercel](https://vercel.com/) - Hosting platform
- [GitHub Actions](https://github.com/features/actions) - Automatically check the GitHub avatar and update if changed

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

I use my GitHub avatar as the website's favicon and as an image in the header. To keep them in sync, I have a GitHub Action that runs every 12 hours.

The action compares the stored avatar hash from `.avatar_hash` against the image at `https://github.com/$GITHUB_REPOSITORY_OWNER.png`. If the hash is different, it updates the `.avatar_hash`, `app/favicon.ico`, and `public/images/avatar.png` files and commits the changes.

I could also only update the favicon and leave the header image as a remote image, like I did previously, but they will be out of sync due to `next/image` caching.

## 💻 Screenshots

| Light Mode                                     | Dark Mode                                    |
| ---------------------------------------------- | -------------------------------------------- |
| ![Light mode screenshot](screenshot-light.png) | ![Dark mode screenshot](screenshot-dark.png) |

## 📜 License

This project is licensed under the MIT License.
