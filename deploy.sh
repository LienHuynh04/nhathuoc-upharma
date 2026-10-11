#!/usr/bin/env bash
set -e

echo "🚀 Bắt đầu quá trình Build & Deploy lên Firebase Hosting..."

# 1. Build Angular production với base-href /
echo "📦 Đang build Angular production..."
npm run build:firebase

# 2. Deploy lên Firebase Hosting
echo "☁️ Đang deploy lên Firebase Hosting..."
firebase deploy --only hosting

echo "✅ Deploy hoàn tất!"
