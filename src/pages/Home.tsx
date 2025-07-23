/**
 * 余杭臭宝讽刺主题页面
 * 以幽默讽刺的方式展示余杭自来水问题
 */

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { 
  Droplets, 
  Skull, 
  Zap, 
  ThumbsDown, 
  Coffee,
  Sparkles,
  CloudRain,
  Wind,
  Award,
  Star,
  Camera,
  Heart,
  Smile
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 to-orange-400 border-b-4 border-red-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Droplets className="w-8 h-8 text-brown-700" />
              <Skull className="w-4 h-4 text-red-600 absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-brown-800 tracking-tight">💩 余杭臭宝博物馆 💩</h1>
              <p className="text-sm text-brown-600 font-medium">传说中的"天然调味"自来水体验馆</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* 英雄图片展示 */}
          <Card className="border-yellow-400 shadow-xl bg-gradient-to-r from-yellow-50 to-orange-50 overflow-hidden">
            <div className="relative">
              <img 
                src="https://pub-cdn.sider.ai/u/U07GH200A6R/web-coder/688079311acf42c15cadf1e8/resource/0bbe5128-1c7d-495a-810a-737b65b8b0a8.jpg" 
                alt="臭宝展示" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold mb-2">🏆 屎到临头不用愁</h2>
                  <p className="text-xl">余杭人民的"翔"福生活体验！</p>
                </div>
              </div>
            </div>
          </Card>

          {/* 特色介绍 */}
          <Card className="border-orange-300 shadow-lg bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Award className="w-6 h-6 text-yellow-600" />
                  🏆 世界级"特色"水源
                </CardTitle>
                <Badge className="bg-red-500 text-white border-red-600 animate-pulse">
                  热门景点
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                <p className="text-red-800 font-semibold text-lg">
                  🎉 恭喜！您已体验到传说中的"巧克力味"自来水！
                </p>
                <p className="text-red-600 text-sm mt-2">
                  这不是普通的H2O，这是H2O+的升级版本！内含天然有机调料，口感丰富层次感强！
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Coffee className="w-5 h-5 text-yellow-700" />
                    <span className="font-bold text-yellow-800">独特风味</span>
                  </div>
                  <p className="text-sm text-yellow-700">💩 天然有机调味料</p>
                  <p className="text-xs text-yellow-600 mt-1">绝无人工添加，纯天然发酵</p>
                </div>
                
                <div className="bg-orange-100 p-4 rounded-lg border-2 border-orange-300">
                  <div className="flex items-center gap-2 mb-2">
                    <CloudRain className="w-5 h-5 text-orange-700" />
                    <span className="font-bold text-orange-800">翔淋嫂专用</span>
                  </div>
                  <p className="text-sm text-orange-700">🚿 含翔淋浴体验</p>
                  <p className="text-xs text-orange-600 mt-1">洗个澡顺便"补充营养"</p>
                </div>
                
                <div className="bg-red-100 p-4 rounded-lg border-2 border-red-300">
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsDown className="w-5 h-5 text-red-700" />
                    <span className="font-bold text-red-800">落坨翔子</span>
                  </div>
                  <p className="text-sm text-red-700">⭐ 终生难忘的味道</p>
                  <p className="text-xs text-red-600 mt-1">一口下去，回味无穷</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 搞笑图片展示区 */}
          <Card className="border-pink-300 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-pink-600" />
                📸 臭宝写真集
              </CardTitle>
              <CardDescription>各种角度欣赏我们的"特色产品"</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative group">
                  <img 
                    src="https://pub-cdn.sider.ai/u/U07GH200A6R/web-coder/688079311acf42c15cadf1e8/resource/f8535f86-d65a-4b95-8a32-09f078ef2cf2.jpg" 
                    alt="巧克力奶昔？" 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-bold">🍫 巧克力奶昔？不，这是自来水！</p>
                  </div>
                </div>
                
                <div className="relative group">
                  <img 
                    src="https://pub-cdn.sider.ai/u/U07GH200A6R/web-coder/688079311acf42c15cadf1e8/resource/6b1f0a33-f4ba-46e4-8188-2c5e29373faf.jpg" 
                    alt="翔淋嫂的最爱" 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-bold">🚿 翔淋嫂专用花洒</p>
                  </div>
                </div>
                
                <div className="relative group">
                  <img 
                    src="https://pub-cdn.sider.ai/u/U07GH200A6R/web-coder/688079311acf42c15cadf1e8/resource/f07ec7f5-d07c-4067-8b07-93419867762b.jpg" 
                    alt="特色咖啡" 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-bold">☕ 免费咖啡色调！</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 搞笑名人堂 */}
          <Card className="border-purple-300 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-600" />
                🌟 臭宝名人堂
              </CardTitle>
              <CardDescription>那些与臭宝结下不解之缘的传奇人物</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border-2 border-orange-300">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src="https://pub-cdn.sider.ai/u/U07GH200A6R/web-coder/688079311acf42c15cadf1e8/resource/f092f66e-e577-4944-8302-639811290e25.jpg" 
                      alt="翔淋嫂" 
                      className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
                    />
                    <div>
                      <h4 className="font-bold text-orange-900 text-lg">👩‍🍳 翔淋嫂</h4>
                      <p className="text-orange-700 text-sm">首席体验官</p>
                    </div>
                  </div>
                  <p className="text-orange-800 italic">
                    "我每天都用臭宝洗澡做饭，现在邻居们都说我身上有种独特的'贵族香气'！
                    这就是生活品质的提升啊！💩"
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-lg border-2 border-blue-300">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src="https://pub-cdn.sider.ai/u/U07GH200A6R/web-coder/688079311acf42c15cadf1e8/resource/f46af533-c645-4ce4-b50b-95d45a7b6205.jpg" 
                      alt="落坨翔子先生" 
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                    />
                    <div>
                      <h4 className="font-bold text-blue-900 text-lg">🤵 落坨翔子</h4>
                      <p className="text-blue-700 text-sm">资深品鉴师</p>
                    </div>
                  </div>
                  <p className="text-blue-800 italic">
                    "作为一个有品味的人，我必须说臭宝的层次感真是无与伦比！
                    入口顺滑，回味悠长，这就是艺术！🎨"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 用户评价 */}
          <Card className="border-green-300 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-green-600" />
                💖 用户真心话大冒险
              </CardTitle>
              <CardDescription>来自余杭人民的"真心"体验分享</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                      <span className="text-purple-700 font-bold">张</span>
                    </div>
                    <div>
                      <p className="font-semibold text-purple-800">张大爷 ⭐⭐⭐⭐⭐</p>
                      <p className="text-xs text-purple-600">退休品水师</p>
                    </div>
                  </div>
                  <p className="text-purple-700 italic">
                    "屎到临头不用愁，余杭臭宝解千忧！这水真是太棒了！
                    喝一口就知道不是普通货，有种说不出的'醇香'！💩"
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-bold">李</span>
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">李翔淋嫂 ⭐⭐⭐⭐⭐</p>
                      <p className="text-xs text-green-600">专业翔淋用户</p>
                    </div>
                  </div>
                  <p className="text-green-700 italic">
                    "自从用了臭宝洗澡，我就是整条街最香的崽！
                    现在大家都叫我翔淋嫂，这个称号我太喜欢了！🚿✨"
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-bold">王</span>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800">王落坨 ⭐⭐⭐⭐⭐</p>
                      <p className="text-xs text-blue-600">大学生艺术家</p>
                    </div>
                  </div>
                  <p className="text-blue-700 italic">
                    "真的是落坨翔子的既视感！洗澡的时候感觉特别'滋润'，
                    室友都说我身上有种独特的艺术气息！🎭"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 搞笑产品套餐 */}
          <Card className="border-indigo-300 shadow-lg bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                💫 臭宝至尊体验套餐
              </CardTitle>
              <CardDescription>多种"翔"味体验，总有一款让您"难忘"</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-indigo-900 text-lg flex items-center gap-2">
                    <img src="https://pub-cdn.sider.ai/u/U07GH200A6R/web-coder/688079311acf42c15cadf1e8/resource/15d80a05-42c8-41c1-ad08-cd654aaee869.jpg" alt="品尝" className="w-6 h-6 rounded" />
                    🍽️ 屎到临头美食套餐
                  </h4>
                  <div className="space-y-3">
                    <div className="flex gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="text-2xl">🥤</div>
                      <div>
                        <p className="font-bold text-yellow-900">直饮套餐</p>
                        <p className="text-yellow-700 text-sm">原汁原味，不稀释不过滤</p>
                        <p className="text-yellow-600 text-xs">保证一口"屎到临头"的震撼</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="text-2xl">🍵</div>
                      <div>
                        <p className="font-bold text-orange-900">热饮套餐</p>
                        <p className="text-orange-700 text-sm">加热后"翔"气更浓郁</p>
                        <p className="text-orange-600 text-xs">热气腾腾的"香茶"体验</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-indigo-900 text-lg flex items-center gap-2">
                    <img src="https://pub-cdn.sider.ai/u/U07GH200A6R/web-coder/688079311acf42c15cadf1e8/resource/b3429ed2-afa6-4871-a959-fe6a461f54cb.jpg" alt="SPA" className="w-6 h-6 rounded" />
                    🛁 翔淋嫂SPA套餐
                  </h4>
                  <div className="space-y-3">
                    <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-2xl">🚿</div>
                      <div>
                        <p className="font-bold text-blue-900">翔淋套餐</p>
                        <p className="text-blue-700 text-sm">全身"营养"淋浴体验</p>
                        <p className="text-blue-600 text-xs">洗完保证"翔"飘万里</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="text-2xl">🛀</div>
                      <div>
                        <p className="font-bold text-purple-900">落坨翔子泡澡</p>
                        <p className="text-purple-700 text-sm">全身浸泡，深度"翔"化</p>
                        <p className="text-purple-600 text-xs">泡个澡顺便"落坨翔子"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 温馨提示 */}
          <Card className="border-red-300 shadow-lg bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <Wind className="w-5 h-5 text-red-600" />
                😷 屎到临头使用指南
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-red-700">
                <div className="flex items-start gap-3">
                  <span className="text-xl">⚠️</span>
                  <p>使用前请先做好心理建设，这不是普通的自来水体验</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🤢</span>
                  <p>如有不适，恭喜您还保持着正常的味觉和嗅觉</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">💩</span>
                  <p>"屎到临头"不是我们的bug，这是我们的独家feature！</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🏆</span>
                  <p>恭喜您成为"翔淋嫂"或"落坨翔子"，已获得勇气勋章一枚</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🎭</span>
                  <p>记住：不是水变了，是我们的标准提高了！</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 联系我们 */}
          <Card className="border-gray-300 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smile className="w-5 h-5 text-gray-600" />
                📞 有话要说？
              </CardTitle>
              <CardDescription>我们的客服24小时在线（做梦中）</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent border-2 border-gray-300 hover:bg-gray-50">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <div className="text-center">
                    <p className="font-bold">⚡ 屎到临头急救热线</p>
                    <p className="text-xs text-gray-600">喝多了请立即拨打</p>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent border-2 border-gray-300 hover:bg-gray-50">
                  <ThumbsDown className="w-5 h-5 text-red-600" />
                  <div className="text-center">
                    <p className="font-bold">👎 翔淋嫂投诉专线</p>
                    <p className="text-xs text-gray-600">我们会假装很重视</p>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent border-2 border-gray-300 hover:bg-gray-50">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <div className="text-center">
                    <p className="font-bold">✨ 落坨翔子表扬热线</p>
                    <p className="text-xs text-gray-600">欢迎夸夸我们的"特色"</p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-400 to-orange-400 border-t-4 border-red-300 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-brown-800">
            <p className="font-bold text-lg">🏆 余杭臭宝 - 屎到临头不用愁！</p>
            <p className="mt-2 text-sm font-medium">
              💩 口号：喝的不是水，是勇气！洗的不是澡，是艺术！翔淋嫂和落坨翔子的共同选择！
            </p>
            <p className="mt-1 text-xs">
              ⚠️ 本站纯属娱乐讽刺，如有雷同，纯属巧合。理性看待水质问题，该投诉还是要投诉的！
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
