# Adib M. Rohani — Portfolio

Personal portfolio (EN / FA).

- GitHub Pages (user site): https://adibte.github.io/
- Custom domain: https://adibmr.ir

## Scripts

```bash
npm install
npm run dev      # local development
npm run build    # static production build
npm run preview  # preview production build
```

## Deploy

Push to `master`. GitHub Actions publishes to GitHub Pages.

### Required: user-site repo name

For the site to live at **https://adibte.github.io/** (root, not a subpath), the GitHub repo must be named exactly:

`AdibTE.github.io`

Rename under **Settings → General → Repository name**, then update the local remote:

```bash
git remote set-url origin https://github.com/AdibTE/AdibTE.github.io.git
```

### One-time GitHub Pages setup

1. **Settings → Pages**
2. **Source** = `GitHub Actions`
3. **Custom domain** = `adibmr.ir` (optional; leave empty if you only want github.io)
4. After DNS verifies, enable **Enforce HTTPS**

### DNS (only if using adibmr.ir)

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `adibte.github.io` |
