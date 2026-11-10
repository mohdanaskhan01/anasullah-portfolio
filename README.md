# Mohammed Anasullah Khan — Cloud & DevOps Portfolio

A responsive React + Vite portfolio with a dark navy theme, custom CSS, and Lucide icons.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Personalize before publishing

Open `src/main.jsx` and edit the `PROFILE` object near the top:

- `github`: add your GitHub profile URL.
- `linkedin`: add your LinkedIn profile URL.
- `resume`: after adding your actual resume PDF to `public/`, set this to `/resume.pdf`.

The portfolio intentionally does not show a working resume download until a real file is added. Social profile placeholders are non-clickable until you add real URLs. Project repository and live-demo links are also not invented.

Update the email or any profile text if needed.

## Build for production

```bash
npm run build
npm run preview
```

The production website is generated in the `dist/` folder.

## Publish on GitHub Pages

1. Create a public GitHub repository named `YOUR-GITHUB-USERNAME.github.io`.
2. Upload the contents of this project (the files inside this folder, not the ZIP itself).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Create `.github/workflows/deploy.yml` using the workflow below, then commit it.
6. Wait for the Pages deployment to finish. Your site will be at `https://YOUR-GITHUB-USERNAME.github.io`.

### GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy portfolio to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

Note: `npm ci` expects a `package-lock.json`. Run `npm install` once locally and commit the generated lockfile, or change the workflow install command to `npm install`.

## Notes

- The contact section uses a real `mailto:` link; there is no fake contact form.
- Resume download is disabled until a real resume PDF is placed in `public/`.
- GitHub, LinkedIn, project repository and demo URLs remain placeholders until supplied.
