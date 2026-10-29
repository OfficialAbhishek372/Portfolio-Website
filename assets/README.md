# Abhishek Thakur — Portfolio (v2)

Static single-page portfolio (HTML/CSS/JS, no build step). Warm, editorial design: serif headlines, typed green keyword, circular portrait with floating icons, marquees, numbered work cards, timeline, polaroids.

## Files
```
Portfolio_Website_v2/
├── index.html      # all content
├── styles.css      # design (colours in :root at the top)
├── script.js       # typing effect, nav on scroll, scroll reveals
└── assets/
    ├── profile.png
    ├── hdbw-logo.svg, hptu-logo.svg
    └── Abhishek_Thakur_Resume.pdf   # linked from "Resume" in the nav and contact
```

## Preview
Open `index.html` in a browser.

## Update
- Typed words in the hero: `words` array in `script.js`
- Resume: replace `assets/Abhishek_Thakur_Resume.pdf` (keep the file name)
- Colours: `:root` variables in `styles.css`

## Deploy on AWS (S3 + CloudFront)
```bash
aws s3 sync . s3://<your-bucket> --exclude "README.md" --delete
aws cloudfront create-invalidation --distribution-id <ID> --paths "/*"
```
Keep the bucket private and serve through CloudFront with Origin Access Control; ACM certificate in us-east-1, Route 53 alias to the distribution.
