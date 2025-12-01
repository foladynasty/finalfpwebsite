# Plesk Deployment Guide for Next.js Website

## Prerequisites
Your Plesk hosting MUST support Node.js (version 18 or higher).

## Files to Upload to Plesk

### Required Files and Folders:

1. **`.next/`** folder (entire folder - this contains your built application)
2. **`public/`** folder (contains images and static assets)
3. **`node_modules/`** folder (all dependencies) OR run `npm install` on server
4. **`package.json`** (defines dependencies and scripts)
5. **`package-lock.json`** (locks dependency versions)
6. **`next.config.ts`** or **`next.config.js`** (Next.js configuration)

### Optional but Recommended:
7. **`.eslintrc.json`** (if you want to run linting on server)

## Deployment Steps for Plesk with Node.js:

### Step 1: Compress Files for Upload
Create a ZIP file containing:
- `.next/` folder
- `public/` folder
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `next.config.js`

### Step 2: Upload to Plesk
1. Log into your Plesk control panel
2. Go to **Files** > **File Manager**
3. Navigate to your domain's root directory (usually `httpdocs` or `public_html`)
4. Upload and extract the ZIP file

### Step 3: Install Dependencies (if you didn't upload node_modules)
1. In Plesk, go to **Node.js** settings for your domain
2. Open the terminal or use SSH
3. Run: `npm install --production`

### Step 4: Configure Node.js Application in Plesk
1. Go to **Node.js** section in Plesk
2. Set **Application Mode**: Production
3. Set **Application Root**: Your domain directory
4. Set **Application Startup File**: `node_modules/next/dist/bin/next`
5. Set **Custom Environment Variables** (if needed):
   - `NODE_ENV=production`
6. Set **Arguments**: `start`
7. Click **Enable Node.js** and **Restart App**

### Step 5: Configure Domain
- Make sure your domain points to the correct directory
- The application will run on the port Plesk assigns (usually proxied through Apache/Nginx)

## Alternative: Static Export (If Node.js is NOT available)

If your Plesk hosting does NOT support Node.js, you need to export as static HTML:

### Modify next.config.ts:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

### Then rebuild:
```bash
npm run build
```

This creates an `out/` folder with static HTML files that can be uploaded to any hosting.

## Troubleshooting

### Port Issues
- Plesk usually handles port mapping automatically
- If you need to specify a port, check Plesk Node.js settings

### File Permissions
- Ensure `.next/` folder has read permissions
- Ensure `public/` folder has read permissions

### Memory Issues
- Next.js apps can be memory-intensive
- Ensure your Plesk plan has at least 512MB RAM allocated to Node.js

## Testing
After deployment, visit your domain. The site should load.
If you see errors, check Plesk logs under **Logs** section.

