# darrynpasqua.com

Personal site built with [Zola](https://www.getzola.org/) and the [Duckquill](https://codeberg.org/daudix/duckquill) theme.

## Local setup

```bash
# 1. Clone your repo after it exists on GitHub
git clone https://github.com/darrynpasqua/darrynpasqua.com.git
cd darrynpasqua.com

# 2. Add Duckquill as a git submodule if themes/duckquill is not present yet
git submodule add https://codeberg.org/daudix/duckquill themes/duckquill

# 3. Preview locally (requires Zola installed)
zola serve
```

## Deploy

Push to `main`. The GitHub Actions workflow in [deploy.yml](/home/dp/Developer/darrynpasqua-site/darrynpasqua/.github/workflows/deploy.yml) builds the site and deploys it to GitHub Pages.

## GitHub Pages + custom domain

1. Create a public GitHub repository, preferably named `darrynpasqua.com`.
2. Initialize git locally in this folder if needed:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin git@github.com:darrynpasqua/darrynpasqua.com.git
git push -u origin main
```

3. In GitHub, open `Settings -> Pages`.
4. Under `Build and deployment`, ensure `Source` is `GitHub Actions`.
5. Under `Custom domain`, set `darrynpasqua.com`.
6. In your GitHub account `Settings -> Pages`, verify `darrynpasqua.com` and keep the TXT record GitHub gives you in DNS.
7. In Porkbun DNS, point the apex domain at GitHub Pages with `A` records for:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
8. In Porkbun DNS, add `CNAME` record `www -> darrynpasqua.github.io`.
9. Optionally add GitHub Pages IPv6 `AAAA` records for:
   - `2606:50c0:8000::153`
   - `2606:50c0:8001::153`
   - `2606:50c0:8002::153`
   - `2606:50c0:8003::153`
10. After DNS propagates, enable `Enforce HTTPS` in GitHub Pages.

## Adding a blog post

```bash
# Create new post
zola new content/blog/my-first-post.md
```

Then edit the file and push.
