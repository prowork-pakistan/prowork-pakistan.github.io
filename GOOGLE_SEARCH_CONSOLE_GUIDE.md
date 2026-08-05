# 🔍 Google Search Console Setup Guide for ProWork

## Quick Start (5 minutes)

### Step 1: Add Your Property to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/about)
2. Click **"Start now"** or **"Add property"**
3. Choose **"URL prefix"** option (not domain)
4. Enter: `https://prowork.com.pk`
5. Click **"Continue"**

### Step 2: Verify Your Site

You'll need to verify that you own the site. Choose ONE method:

#### **Option A: DNS Record (Recommended for GitHub Pages)**
1. Click **"DNS"** verification method
2. Copy the TXT record shown
3. Go to your domain registrar (likely GoDaddy or similar)
4. Add the DNS TXT record to your domain settings
5. Wait 5-10 minutes for DNS to propagate
6. Return to GSC and click **"Verify"**

#### **Option B: HTML File (Alternative)**
1. Click **"HTML file"** verification method
2. Download the HTML file provided
3. Place it in your project root:
   ```
   /prowork-pakistan.github.io/[verification-file.html]
   ```
4. Commit and push to GitHub
5. Return to GSC and click **"Verify"**

#### **Option C: HTML Tag (Quick Method)**
1. Click **"HTML tag"** verification method
2. Copy the meta tag shown
3. Already in `/src/partials/header.htm` (if you want to add it)
4. Return to GSC and click **"Verify"**

---

## Step 3: Submit Your Sitemap

1. Once verified, go to **"Sitemaps"** in left menu
2. Enter: `sitemap.xml`
3. Click **"Submit"**
4. You should see: **"Success!"**

### Verify Sitemap Status
- Go to **"Sitemaps"** section
- Check the entry for `sitemap.xml`
- Should show:
  - ✅ Submitted status: Success
  - ✅ Index status: Sitemaps found
  - ✅ Discovered URLs: ~8 pages

---

## Step 4: Request Indexing for Homepage

1. Click **"URL inspection"** at the top
2. Enter: `https://prowork.com.pk`
3. Click the **"Request indexing"** button
4. Wait for completion

**Note:** You may see "URL is not on Google" initially - this is normal for new sites.

---

## Step 5: Test Your Structured Data

1. Go to **"Enhancements"** in left menu
2. Look for **"Rich results"** section
3. You should see:
   - ✅ FAQs (from your FAQ section)
   - ✅ Local Business (your business info)
   - ✅ Organization (your company details)

### If Not Showing:
1. Click on each enhancement
2. Review any errors shown
3. Check [Rich Results Test](https://search.google.com/test/rich-results)

---

## Step 6: Monitor Performance

### What to Check Weekly:
1. **Coverage** - Page indexing status
2. **Performance** - Click-through rates and impressions
3. **Enhancements** - Rich results status
4. **Core Web Vitals** - Page speed metrics
5. **Mobile Usability** - Mobile-friendly issues

### Expected Timeline:
- **Immediately:** Crawl requests increase
- **1-3 days:** Some pages get indexed
- **1-2 weeks:** FAQ rich snippets may appear
- **4-8 weeks:** Significant ranking improvements
- **8-12 weeks:** Full indexing and optimization effects

---

## Step 7: Additional Actions (Optional but Recommended)

### A. Submit Other Key Pages
Repeat "Request indexing" for:
- `/about.html`
- `/contact.html`
- `/blog.html`

### B. Set Preferred Domain
1. Go to **"Settings"** (gear icon)
2. Under **"Primary domain"**
3. Choose: `https://www.prowork.com.pk/` or `https://prowork.com.pk/`
4. Click **"Save"**

### C. Enable Email Notifications
1. Go to **"Settings"** 
2. Enable notifications for:
   - ✅ Critical issues
   - ✅ New coverage issues
   - ✅ Enhancements

---

## Troubleshooting Common Issues

### Issue: "Can't verify ownership"

**Solution:**
- Wait 24-48 hours for DNS propagation
- Try the HTML file method instead
- Check DNS records were added correctly

### Issue: "Sitemap found but 0 URLs"

**Solution:**
- Check sitemap.xml is publicly accessible: `https://prowork.com.pk/sitemap.xml`
- Verify URLs in sitemap are absolute (full URLs, not relative)
- Ensure robots.txt allows access to sitemap

### Issue: "URL is not on Google" (After 2 weeks)

**Possible causes:**
- Site is very new (normal, wait 1-4 weeks)
- robots.txt is blocking crawlers
- No backlinks pointing to your site yet
- Server errors preventing crawling

**Solutions:**
1. Check robots.txt allows indexing
2. Review "Coverage" tab for crawl errors
3. Build backlinks from other websites
4. Ensure site is publicly accessible

### Issue: "Mobile usability issues"

**Solutions:**
1. Test on mobile in Chrome DevTools
2. Check viewport meta tag (should be present)
3. Ensure buttons are touch-friendly (48px+ size)
4. Check for mobile-specific errors in GSC

---

## Important Files for Google

Make sure these are publicly accessible:

✅ **robots.txt**
```
URL: https://prowork.com.pk/robots.txt
Status: Should be 200 OK
```

✅ **sitemap.xml**
```
URL: https://prowork.com.pk/sitemap.xml
Status: Should be 200 OK
Contains: 8 pages
```

✅ **favicon.ico**
```
URL: https://prowork.com.pk/favicon.ico
Status: Should be 200 OK
```

✅ **All pages must be**
```
- Publicly accessible (no login required)
- Load successfully (200 status code)
- Have unique titles and descriptions
- Mobile responsive
```

---

## After Initial Setup

### Weekly Tasks
- [ ] Check GSC for new errors
- [ ] Monitor performance metrics
- [ ] Check mobile usability

### Monthly Tasks
- [ ] Review top performing pages
- [ ] Check ranking improvements
- [ ] Update sitemap if new pages added
- [ ] Validate structured data

### Quarterly Tasks
- [ ] Analyze organic traffic trends
- [ ] Review competitor rankings
- [ ] Optimize underperforming pages
- [ ] Plan new content based on search data

---

## Useful Links

| Tool | URL | Purpose |
|------|-----|---------|
| Google Search Console | https://search.google.com/search-console | Main SEO dashboard |
| Rich Results Test | https://search.google.com/test/rich-results | Validate structured data |
| Mobile-Friendly Test | https://search.google.com/mobile-friendly | Check mobile compatibility |
| PageSpeed Insights | https://pagespeed.web.dev/ | Check performance |
| Google Analytics | https://analytics.google.com/ | Traffic analysis |

---

## Success Metrics to Track

After 4 weeks:
- [ ] 100+ pages indexed
- [ ] 50+ impressions in search results
- [ ] 5+ clicks from search
- [ ] 0 mobile usability issues
- [ ] FAQ rich results showing

After 12 weeks:
- [ ] 500+ impressions
- [ ] 50+ clicks from organic
- [ ] Improved rankings for target keywords
- [ ] Consistent weekly organic traffic

---

## Questions?

If you encounter issues:
1. Check [Google Search Central Blog](https://developers.google.com/search/blog)
2. Review [Google Search documentation](https://developers.google.com/search/docs)
3. Use [Google Search Central Help Community](https://support.google.com/webmasters)

---

**Last Updated:** August 5, 2026  
**Status:** Ready for Setup ✅
