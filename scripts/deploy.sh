#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: npm run deploy <branch-name>"
  exit 1
fi

BRANCH=$1

echo "▶️ Switching to branch: $BRANCH"
git fetch origin
git checkout $BRANCH || { echo "❌ Failed to checkout branch $BRANCH"; exit 1; }
git stash || { echo "❌ Failed to stash changes"; exit 1; }
git pull origin $BRANCH || { echo "❌ Failed to pull latest changes from $BRANCH"; exit 1; }

echo "📦 Installing dependencies..."
npm install || { echo "❌ npm install failed"; exit 1; }
npm run clean || { echo "❌ npm clean failed"; exit 1; }

echo "🔨 Building project..."
npm run build || { echo "❌ Build failed"; exit 1; }

echo "🚀 Starting project..."
if pm2 list | grep -q "2025seiseisai"; then
  echo "🔁 Restarting existing process: 2025seiseisai"
  pm2 restart 2025seiseisai || { echo "❌ Failed to restart the project"; exit 1; }
else
  echo "🚀 Starting new process: 2025seiseisai"
  pm2 start npm --name "2025seiseisai" -- run start || { echo "❌ Failed to start the project"; exit 1; }
fi

echo "✅ Deployment to branch $BRANCH completed successfully!"
