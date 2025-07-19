# CI/CD Pipeline Documentation

## 🚀 Overview

This repository includes a comprehensive CI/CD pipeline using GitHub Actions that automatically:

- ✅ Tests and builds the application
- 🚀 Deploys to Vercel on main branch pushes
- 🔍 Creates preview deployments for pull requests
- 🔒 Runs security audits
- 📦 Manages dependency updates

## 📋 Workflows

### 1. CI/CD Pipeline (`ci-cd.yml`)
**Triggers:** Push to `main`/`develop`, Pull Requests to `main`

**Jobs:**
- **test-and-build**: Runs on Node.js 18.x and 20.x
  - Installs dependencies
  - Runs ESLint
  - Builds the project
  - Uploads build artifacts
  
- **deploy**: Deploys to Vercel (production)
  - Only runs on main branch pushes
  - Requires Vercel secrets
  
- **security-scan**: Security and quality checks
  - Runs npm audit
  - Checks for outdated packages

### 2. Preview Deploy (`preview-deploy.yml`)
**Triggers:** Pull Requests to `main`

**Features:**
- Creates preview deployments on Vercel
- Comments on PR with preview URL
- Auto-updates on new commits

### 3. Dependency Update (`dependency-update.yml`)
**Triggers:** Weekly schedule (Mondays 9 AM UTC) or manual

**Features:**
- Updates npm dependencies
- Applies security fixes
- Creates automated PRs for updates

## ⚙️ Setup Instructions

### 1. Vercel Integration

You need to add these secrets to your GitHub repository:

1. Go to your GitHub repository → Settings → Secrets and variables → Actions
2. Add the following secrets:

```bash
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
```

#### Getting Vercel Credentials:

**VERCEL_TOKEN:**
1. Go to [Vercel Dashboard](https://vercel.com/account/tokens)
2. Create a new token
3. Copy the token value

**VERCEL_ORG_ID & VERCEL_PROJECT_ID:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel link` in your project directory
3. Check `.vercel/project.json` for the IDs

### 2. Branch Protection (Recommended)

Set up branch protection rules for `main`:

1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - ✅ Require pull request reviews

## 🔧 Customization

### Adding New Checks

To add new quality checks, modify `.github/workflows/ci-cd.yml`:

```yaml
- name: Run custom tests
  run: npm run test:custom
  
- name: Type checking
  run: npm run type-check
```

### Environment-Specific Deployments

For staging environments, create additional workflow files:

```yaml
# .github/workflows/staging-deploy.yml
on:
  push:
    branches: [ develop ]
```

### Notification Setup

Add Slack/Discord notifications:

```yaml
- name: Notify deployment
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

## 📊 Monitoring

### Build Status

Monitor your builds at:
- GitHub Actions tab in your repository
- Vercel Dashboard for deployment status

### Security Alerts

- GitHub will create security advisories for vulnerabilities
- Weekly dependency updates help maintain security

## 🐛 Troubleshooting

### Common Issues:

1. **Vercel deployment fails**
   - Check if secrets are correctly set
   - Verify Vercel project configuration

2. **Build fails on specific Node version**
   - Update package.json engines field
   - Check for Node.js compatibility issues

3. **ESLint errors**
   - Run `npm run lint` locally
   - Fix linting issues before pushing

### Debug Mode

Enable debug logging by adding to workflow:

```yaml
env:
  ACTIONS_STEP_DEBUG: true
```

## 📈 Best Practices

1. **Always test locally** before pushing
2. **Use semantic commit messages** for better tracking
3. **Review dependency updates** before merging
4. **Monitor build performance** and optimize as needed
5. **Keep secrets secure** and rotate regularly

## 🤝 Contributing

When contributing:
1. Create feature branches from `develop`
2. Ensure all checks pass
3. Request reviews for main branch PRs
4. Test preview deployments thoroughly
