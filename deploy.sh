#!/bin/bash

# 余杭臭宝博物馆部署脚本 🚀

echo "🏗️  开始构建余杭臭宝博物馆..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败！请检查代码"
    exit 1
fi

echo "✅ 构建成功！"

# 配置您的服务器信息
SERVER_USER="your-username"
SERVER_HOST="your-server.com"
SERVER_PATH="/var/www/html"

echo "📦 正在上传到服务器..."

# 上传文件
scp -r dist/* $SERVER_USER@$SERVER_HOST:$SERVER_PATH/

if [ $? -eq 0 ]; then
    echo "🎉 部署成功！"
    echo "💩 余杭臭宝博物馆已经在线啦！"
    echo "🌐 访问地址: http://$SERVER_HOST"
else
    echo "❌ 部署失败！请检查服务器连接"
    exit 1
fi
