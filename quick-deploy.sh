#!/bin/bash

echo "🎭 余杭臭宝博物馆一键部署脚本"
echo "================================"

# 检查是否已配置git
if [ ! -d ".git" ]; then
    echo "⚠️  请先配置GitHub仓库："
    echo "   git init"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/choubaohall.git"
    exit 1
fi

echo "🔨 正在构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败！请检查代码"
    exit 1
fi

echo "✅ 构建成功！"

# 检查是否有待提交的更改
if git diff --quiet && git diff --cached --quiet; then
    echo "ℹ️  没有新的更改需要部署"
else
    echo "📦 正在提交和推送代码..."
    
    # 获取当前时间
    timestamp=$(date +"%Y-%m-%d %H:%M:%S")
    
    git add .
    git commit -m "🚀 臭宝博物馆更新 - $timestamp"
    git push
    
    if [ $? -eq 0 ]; then
        echo "🎉 代码推送成功！"
        echo "⏳ GitHub Actions正在自动部署..."
        echo "💩 请等待2-5分钟后访问网站查看更新"
        echo ""
        
        # 获取GitHub用户名和仓库名
        remote_url=$(git remote get-url origin)
        if [[ $remote_url =~ github\.com[:/]([^/]+)/([^/.]+) ]]; then
            username=${BASH_REMATCH[1]}
            repo=${BASH_REMATCH[2]}
            echo "🌐 默认访问地址: https://$username.github.io/$repo/"
        fi
        
        echo "🔗 GitHub Actions状态: https://github.com/$username/$repo/actions"
    else
        echo "❌ 推送失败！请检查网络连接和权限"
        exit 1
    fi
fi

echo ""
echo "🎭 余杭臭宝博物馆部署完成！"
echo "💩 让全世界都来体验一下吧！"