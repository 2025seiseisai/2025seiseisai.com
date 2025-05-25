#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: npm run deploy <branch-name>"
  exit 1
fi

BRANCH=$1

echo "▶️ Switching to branch: $BRANCH"
git fetch origin
git checkout $BRANCH || { echo "❌ Failed to checkout branch $BRANCH"; exit 1; }
git pull origin $BRANCH || { echo "❌ Failed to pull latest changes from $BRANCH"; exit 1; }

echo "📦 Installing dependencies..."
npm install || { echo "❌ npm install failed"; exit 1; }
npm run clean || { echo "❌ npm clean failed"; exit 1; }
npm install -D @playwright/test || { echo "❌ npm install -D @playwright/test failed"; exit 1; }

echo "🔨 Building project..."
npm run build || { echo "❌ Build failed"; exit 1; }

echo "🚀 Starting project..."
if pm2 list | grep -q "myapp"; then
  echo "🔁 Restarting existing process: myapp"
  pm2 restart myapp || { echo "❌ Failed to restart the project"; exit 1; }
else
  echo "🚀 Starting new process: myapp"
  pm2 start npm --name "myapp" -- run start || { echo "❌ Failed to start the project"; exit 1; }
fi

echo "✅ Deployment to branch $BRANCH completed successfully!"
