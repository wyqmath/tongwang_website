# Wang Lab 网站

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000

## 项目结构

```
src/
├── app/                    # 页面路由
│   ├── page.tsx           # 首页
│   ├── about/             # 关于 PI
│   ├── people/            # 团队成员
│   ├── publications/      # 论文列表
│   ├── news/              # 新闻动态
│   ├── software/          # 软件工具
│   ├── openings/          # 招聘信息
│   └── api/admin/         # 管理 API
├── data/                   # JSON 数据文件
├── components/             # React 组件
│   ├── ui/                # UI 基础组件
│   └── admin/             # 管理功能组件
├── lib/                    # 工具函数
└── types/                  # TypeScript 类型
```

## 数据管理

所有网站内容存储在 `src/data/` 目录下的 JSON 文件中：

| 文件 | 内容 |
|------|------|
| `homepage.json` | 首页背景、研究方向、近期论文、新闻 |
| `about.json` | PI 简介、教育背景、荣誉、演讲 |
| `people.json` | 团队成员信息 |
| `publications.json` | 论文列表 |
| `news.json` | 新闻文章 |
| `software.json` | 软件工具 |

### 更新内容

直接编辑对应的 JSON 文件即可更新网站内容，无需修改代码。

## 开发者模式

在 `.env.local` 中启用：

```
NEXT_PUBLIC_DEV_MODE=true
```

启用后，页面上会显示编辑按钮，可以直接在浏览器中编辑内容。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: Radix UI + shadcn/ui

## 部署

```bash
npm run build
npm start
```

