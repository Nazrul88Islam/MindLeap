#!/usr/bin/env node

/**
 * Setup script to help configure Vercel integration
 * Run with: node scripts/setup-vercel.js
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 MindLeap Vercel Setup Helper\n');

// Check if .vercel directory exists
const vercelDir = path.join(process.cwd(), '.vercel');
const projectJsonPath = path.join(vercelDir, 'project.json');

if (fs.existsSync(projectJsonPath)) {
  try {
    const projectData = JSON.parse(fs.readFileSync(projectJsonPath, 'utf8'));
    
    console.log('✅ Found Vercel configuration!\n');
    console.log('📋 GitHub Secrets to add:');
    console.log('─'.repeat(50));
    console.log(`VERCEL_ORG_ID=${projectData.orgId}`);
    console.log(`VERCEL_PROJECT_ID=${projectData.projectId}`);
    console.log('VERCEL_TOKEN=<your_vercel_token>');
    console.log('─'.repeat(50));
    
    console.log('\n📝 Next steps:');
    console.log('1. Get your Vercel token from: https://vercel.com/account/tokens');
    console.log('2. Go to GitHub → Settings → Secrets and variables → Actions');
    console.log('3. Add the three secrets shown above');
    console.log('4. Push your changes to trigger the CI/CD pipeline');
    
  } catch (error) {
    console.error('❌ Error reading Vercel configuration:', error.message);
  }
} else {
  console.log('⚠️  Vercel not linked yet!\n');
  console.log('📝 Setup steps:');
  console.log('1. Install Vercel CLI: npm i -g vercel');
  console.log('2. Run: vercel link');
  console.log('3. Follow the prompts to link your project');
  console.log('4. Run this script again: node scripts/setup-vercel.js');
}

console.log('\n🔗 Useful links:');
console.log('• Vercel Dashboard: https://vercel.com/dashboard');
console.log('• GitHub Actions: https://github.com/features/actions');
console.log('• CI/CD Documentation: .github/README.md');
