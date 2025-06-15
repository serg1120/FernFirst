# 🚀 Deploy to Replit - Step by Step

## Method 1: Import from GitHub (Recommended)

1. **Push your code to GitHub first:**
   ```bash
   git add .
   git commit -m "Add Replit deployment files"
   git push origin ryanspears
   ```

2. **Go to Replit:**
   - Visit [replit.com](https://replit.com)
   - Click "Create Repl"
   - Choose "Import from GitHub"
   - Paste: `https://github.com/dorryspears/GeekText`
   - Select branch: `ryanspears`

3. **Replit will automatically:**
   - Detect the Node.js environment
   - Install dependencies
   - Start your server
   - Give you a live URL like: `https://fern-first.yourusername.repl.co`

## Method 2: Create New Repl and Upload

1. **Go to [replit.com](https://replit.com)**
2. Click "Create Repl"
3. Choose "HTML, CSS, JS" template
4. Name it: "fern-first-landing"

5. **Upload these files:**
   - `index.html`
   - `styles.css`
   - `script.js`
   - `server.js`
   - `package.json`
   - `.replit`
   - `replit.nix`
   - `logo-placeholder.svg`

6. **In Replit Shell, run:**
   ```bash
   npm install
   ```

7. **Click "Run" button**

## Method 3: Direct File Copy

1. Create new Repl (Node.js template)
2. Copy all file contents manually
3. Run `npm install` in Shell
4. Click Run

## 🎯 After Deployment:

### Your Live URL:
- Free tier: `https://fern-first.yourusername.repl.co`
- Custom domain: Available with paid plan

### Features on Replit:
- ✅ Automatic HTTPS
- ✅ Always-on hosting (with Hacker plan)
- ✅ Custom domains
- ✅ Analytics
- ✅ Form backend ready

### Next Steps:
1. **Test your live site**
2. **Share the URL**
3. **Connect custom domain** (optional)
4. **Enable "Always On"** for 24/7 uptime

### Form Submissions:
The server.js file includes a `/submit-quote` endpoint ready for form integration.

## 🔧 Troubleshooting:

**If site doesn't load:**
- Check Console for errors
- Run `npm install` in Shell
- Click "Stop" then "Run" again

**If styles missing:**
- Verify all files uploaded
- Hard refresh: Ctrl+F5

**Performance tips:**
- Upgrade to Hacker plan for better performance
- Enable "Always On" for instant loading