# Abhishek Thakur — Portfolio

A fast, responsive single-page portfolio (static HTML/CSS/JS — no build step) designed to be hosted on AWS.

## Files
```
portfolio/
├── index.html      # page structure & content
├── styles.css      # all styling (dark DevOps/security theme)
├── script.js       # nav, typing effect, scroll reveals
├── assets/
│   └── profile.jpg # << ADD YOUR PHOTO HERE (see below)
└── README.md
```

## 1. Add your photo (required)
The site references `assets/profile.jpg`. Save the headshot you provided into the
`assets` folder with **exactly** that name:

```
portfolio/assets/profile.jpg
```

Square-ish images look best. Until you add it, the avatar area shows a broken image.

## 2. Preview locally
Just open `index.html` in a browser, or run a tiny server:
```powershell
cd portfolio
python -m http.server 8080
# then visit http://localhost:8080
```

## 3. Host on AWS — S3 static website (simplest)
```bash
# create a bucket (name must be globally unique)
aws s3 mb s3://abhishek-portfolio-2026

# upload the site
aws s3 sync . s3://abhishek-portfolio-2026 --exclude "README.md"

# enable static website hosting
aws s3 website s3://abhishek-portfolio-2026 --index-document index.html
```
Then set a public-read bucket policy (or, recommended, keep the bucket private and
serve it through CloudFront with Origin Access Control).

### Recommended production setup
- **S3** (private) → **CloudFront** (HTTPS, CDN, caching)
- **ACM** certificate for your custom domain (must be in `us-east-1` for CloudFront)
- **Route 53** alias record pointing your domain at the CloudFront distribution

This mirrors the architecture on your own projects (EC2/Route 53/ALB), but for a
static site S3 + CloudFront is cheaper and effectively zero-maintenance.

## Customize
- Colors: edit the `:root` variables at the top of `styles.css`.
- Typing roles: edit the `roles` array in `script.js`.
- Content: all text lives in `index.html`.
