# Deployment Guide - Easypanel with Docker

## 📦 Files Created

- `Dockerfile` - Multi-stage Docker build configuration
- `nginx.conf` - Nginx web server configuration
- `.dockerignore` - Files to exclude from Docker build

## 🚀 Deploy to Easypanel

### Method 1: Using Easypanel UI (Recommended)

1. **Login to Easypanel Dashboard**
   - Go to your Easypanel instance
   - Navigate to your project

2. **Create New Service**
   - Click "Create Service"
   - Select "App" type
   - Choose "GitHub" or "Git Repository" as source

3. **Configure Service**
   - **Name**: `elstudioo-outdoor-sales`
   - **Source**: Connect your Git repository
   - **Branch**: `main` (or your default branch)
   - **Build Method**: Dockerfile
   - **Port**: 80

4. **Environment Variables** (Optional)
   - No environment variables needed for this static site

5. **Deploy**
   - Click "Deploy"
   - Easypanel will automatically build and deploy your app

### Method 2: Using Docker Locally (Testing)

1. **Build the Docker image**:
```bash
docker build -t elstudioo-outdoor-sales .
```

2. **Run the container**:
```bash
docker run -d -p 8080:80 elstudioo-outdoor-sales
```

3. **Test locally**:
   - Open browser: `http://localhost:8080`

### Method 3: Push to Docker Registry

1. **Build and tag**:
```bash
docker build -t your-registry/elstudioo-outdoor-sales:latest .
```

2. **Push to registry**:
```bash
docker push your-registry/elstudioo-outdoor-sales:latest
```

3. **Deploy in Easypanel**:
   - Create service from Docker image
   - Use image: `your-registry/elstudioo-outdoor-sales:latest`

## 🔧 Easypanel Configuration

### Service Settings
```yaml
Name: elstudioo-outdoor-sales
Type: App
Source: GitHub/Git
Build: Dockerfile
Port: 80
Domain: your-domain.com (configure in Easypanel)
```

### Domain Setup
1. Go to your service in Easypanel
2. Click "Domains"
3. Add your custom domain
4. Easypanel will automatically configure SSL with Let's Encrypt

## 📝 Important Notes

- **Build Time**: First build takes 2-3 minutes
- **Image Size**: ~50MB (optimized with Alpine Linux)
- **Auto-deploy**: Enable in Easypanel to auto-deploy on git push
- **SSL**: Automatically configured by Easypanel
- **Port**: Container exposes port 80 internally

## 🔄 Update Deployment

To update your deployment:

1. **Push changes to Git**:
```bash
git add .
git commit -m "Update app"
git push origin main
```

2. **Easypanel auto-deploys** (if enabled)
   - Or manually trigger rebuild in Easypanel UI

## 🐛 Troubleshooting

### Build fails
- Check Easypanel build logs
- Ensure all dependencies are in package.json
- Verify Dockerfile syntax

### App not loading
- Check if port 80 is correctly exposed
- Verify nginx configuration
- Check Easypanel service logs

### Styling issues
- Clear browser cache
- Check if Tailwind CSS is building correctly
- Verify all CSS files are included in build

## 📊 Performance

- **Gzip compression**: Enabled
- **Static asset caching**: 1 year
- **HTML caching**: Disabled (for updates)
- **Security headers**: Configured

## 🎯 Next Steps

1. Push your code to GitHub/GitLab
2. Connect repository to Easypanel
3. Configure domain
4. Deploy!

Your elstudioo app will be live and ready for outdoor sales! 🚀
