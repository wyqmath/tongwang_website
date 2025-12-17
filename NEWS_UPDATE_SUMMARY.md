# News 页面更新总结

## ✅ 完成的更新

### 1. **图片迁移**
- ✅ 已将所有15张图片从 `news_media/` 移动到 `public/news/`
- 图片列表：image1.jpeg ~ image15.jpeg

### 2. **页面布局重新设计**
已完全重构News页面布局，参考示例样式：

#### 布局特点：
- ✅ **去掉卡片框** - 使用简洁的 `<article>` 标签
- ✅ **图片在右侧** - 256px宽度固定
- ✅ **文字在左侧** - 弹性布局，占据剩余空间
- ✅ **清华紫色主题** - 标题和标签都使用 `text-primary` (清华紫)
- ✅ **分隔线** - 新闻之间用灰色底部边框分隔
- ✅ **悬停效果** - 标题悬停时显示下划线

### 3. **颜色方案**
使用清华紫色主题：
- **标题颜色**：`text-primary` - oklch(0.3722 0.17 321.61) = RGB(102, 8, 116)
- **标签颜色**：`text-primary` - 与标题同色
- **链接颜色**：`text-primary` - 与整体主题一致
- **日期/描述**：`text-muted-foreground` - 灰色

### 4. **新闻内容** (共7条)
1. **2025年12月6日** - Prof. Wang获得首都前沿学术成果奖
2. **2025年11月28日** - 发表AI驱动生物分子模拟综述文章
3. **2025年9月11日** - BIOHK2025 AI论坛演讲
4. **2025年8月18日** - ACS Fall 2025会议演讲
5. **2025年6月** - 系列重要学术会议演讲
6. **2025年6月9日** - 王童实验室正式启动
7. **2024年** - 入选中国生物信息学十大进展

## 🎨 设计细节

### 文字层级
```
日期：text-sm text-muted-foreground (小字灰色)
标题：text-2xl font-bold text-primary (大字紫色加粗)
正文：text-muted-foreground leading-relaxed (灰色，行距舒适)
标签：text-sm text-primary (小字紫色)
```

### 间距设置
```
新闻之间：space-y-16 (较大间距)
段落底部：pb-16 (底部内边距)
图文间距：gap-8 (左右间距)
```

### 响应式布局
- 使用 `flex` 布局
- 左侧文字：`flex-1` (占据剩余空间)
- 右侧图片：`w-64 flex-shrink-0` (固定宽度不缩小)

## 📁 文件结构
```
public/
  └── news/
      ├── image1.jpeg   (实验室启动)
      ├── image5.jpeg   (6月会议)
      ├── image8.jpeg   (ACS Fall)
      ├── image11.jpeg  (BIOHK2025)
      ├── image13.png   (综述文章)
      └── image14.jpeg  (获奖)
```

## 🌐 预览
开发服务器：http://localhost:3000/news

## 📝 技术实现
- 框架：Next.js 15 with App Router
- 样式：Tailwind CSS + 清华紫色主题
- 组件：shadcn/ui Button 组件
- 图片：Next.js Image 组件优化

