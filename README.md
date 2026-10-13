# Adib M. Rohani — Portfolio

Personal portfolio (EN / FA). Live at [adibmr.ir](https://adibmr.ir).

## Scripts

```bash
npm install
npm run dev      # local development
npm run build    # static production build
npm run preview  # preview production build
```

## Deploy

Push to `master`. GitHub Actions publishes to GitHub Pages.

### One-time GitHub setup

1. Repo **Settings → Pages**
2. **Source** = `GitHub Actions`
3. **Custom domain** = `adibmr.ir`
4. After DNS verifies, enable **Enforce HTTPS**

### DNS (at your domain registrar)

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `adibte.github.io` |
