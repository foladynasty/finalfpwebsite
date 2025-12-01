# Plesk Upload Summary - Financial Perspectives Website

## ✅ Files Ready for Upload

I've created a **`plesk-upload`** folder in your project directory with everything you need.

### 📦 What's in the `plesk-upload` folder:

| Item | Type | Size | Required |
|------|------|------|----------|
| `.next/` | Folder | ~297 MB | ✅ YES |
| `public/` | Folder | ~1 MB | ✅ YES |
| `package.json` | File | <1 KB | ✅ YES |
| `package-lock.json` | File | ~1 MB | ✅ YES |
| `next.config.ts` | File | <1 KB | ✅ YES |
| `DEPLOYMENT-INSTRUCTIONS.txt` | File | <1 KB | 📖 Reference |
| `FILES-TO-UPLOAD.txt` | File | <1 KB | 📖 Reference |

**Total Size: ~297 MB**

---

## 🚀 Quick Upload Steps

### Step 1: Locate the Upload Folder
The `plesk-upload` folder is located at:
```
C:\Users\folad\Downloads\fp2026Dec\finalfpwebsite\plesk-upload
```

### Step 2: Check Your Plesk Hosting
**CRITICAL:** Your Plesk hosting MUST support Node.js (version 18 or higher).

To check:
1. Log into Plesk
2. Look for "Node.js" in the sidebar
3. If you see it ✅ proceed
4. If not ❌ contact your hosting provider

### Step 3: Upload Files
**Option A - ZIP Upload (Recommended):**
1. Right-click the `plesk-upload` folder
2. Select "Compress to ZIP file"
3. Upload the ZIP to Plesk File Manager
4. Extract in your domain's root directory (`httpdocs` or `public_html`)

**Option B - Direct Upload:**
1. Open Plesk File Manager
2. Navigate to your domain's root directory
3. Upload all 5 items from the `plesk-upload` folder

### Step 4: Configure Node.js in Plesk
1. Go to **Node.js** section in Plesk
2. Click **"NPM Install"** to install dependencies
3. Configure:
   - **Node.js version:** 18.x or higher
   - **Application mode:** Production
   - **Application startup file:** `node_modules/next/dist/bin/next`
   - **Arguments:** `start`
   - **Environment variable:** `NODE_ENV=production`
4. Click **"Enable Node.js"**
5. Click **"Restart App"**

### Step 5: Test
Visit your domain - your website should be live! 🎉

---

## ⚠️ Important Notes

### If Your Plesk Does NOT Support Node.js:
You have 3 options:

1. **Upgrade your Plesk plan** to include Node.js support
2. **Use a different hosting service:**
   - Vercel (free, optimized for Next.js) - [vercel.com](https://vercel.com)
   - Netlify (free tier) - [netlify.com](https://netlify.com)
   - DigitalOcean, AWS, Heroku
3. **Contact me** to convert to pure static HTML (some features may be lost)

### File Upload Tips:
- The `.next` folder starts with a dot - make sure it uploads
- If using FTP, enable "Show hidden files" to see `.next`
- Upload may take 5-10 minutes due to file size
- Ensure stable internet connection during upload

---

## 📋 Checklist

Before uploading:
- [ ] Confirmed Plesk has Node.js support
- [ ] Located the `plesk-upload` folder on your computer
- [ ] Have Plesk login credentials ready

After uploading:
- [ ] All files uploaded successfully
- [ ] Ran "NPM Install" in Plesk
- [ ] Configured Node.js settings
- [ ] Enabled and restarted Node.js app
- [ ] Tested website by visiting domain

---

## 🆘 Troubleshooting

**Problem:** Can't find `.next` folder after upload
**Solution:** Enable "Show hidden files" in File Manager

**Problem:** "Cannot find module 'next'" error
**Solution:** Run "NPM Install" in Plesk Node.js settings

**Problem:** Website shows blank page
**Solution:** Check Plesk logs, verify Node.js is enabled

**Problem:** 502 Bad Gateway
**Solution:** Check startup file path, verify Node.js version

---

## 📞 Need Help?

1. Read `DEPLOYMENT-INSTRUCTIONS.txt` in the `plesk-upload` folder
2. Check Plesk documentation for Node.js apps
3. Contact your hosting provider's support
4. Verify all files were uploaded correctly

---

## ✨ What's Included in Your Website

Your deployed website will have:
- ✅ Home page
- ✅ About page
- ✅ CFP certification page
- ✅ SCFP-HNWI program page
- ✅ CPD courses page (4 courses)
- ✅ Events page
- ✅ Media page
- ✅ Contact page
- ✅ All 7 SCFP module detail pages
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ All images and assets

**Total: 22 pages, fully functional!**

---

Good luck with your deployment! 🚀

