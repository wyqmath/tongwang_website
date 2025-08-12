# Tong Wang Research Group Website | 王童课题组网站

🎓 A modern, responsive website for Professor Tong Wang's research group, built with cutting-edge web technologies.

为王童教授课题组打造的现代化、响应式网站，采用前沿的Web技术构建。

## ✨ Features | 功能特色

### 🌟 Core Features | 核心功能
- **🏠 Home Page | 首页**: Engaging landing page with research overview | 引人入胜的着陆页面，包含研究概览
- **👨‍🎓 About PI | 导师介绍**: Comprehensive 6-section profile page | 全面的6个部分的个人资料页面
- **👥 Our Team | 团队成员**: Current students, alumni, and team structure | 在读学生、校友和团队结构
- **📚 Publications | 学术发表**: Advanced filtering and search capabilities | 高级过滤和搜索功能
- **📰 News | 新闻动态**: Dynamic news system with featured content | 动态新闻系统，包含特色内容
- **⚙️ Admin Panel | 管理面板**: Content management interface | 内容管理界面
- **📞 Contact | 联系方式**: Professional contact information | 专业联系信息

### 🛠 Technical Features | 技术特色
- **📱 Responsive Design | 响应式设计**: Works seamlessly on all devices | 在所有设备上无缝运行
- **🎨 Modern UI | 现代界面**: Built with shadcn/ui components and Tailwind CSS | 使用shadcn/ui组件和Tailwind CSS构建
- **⚡ Performance Optimized | 性能优化**: Fast loading, optimized images | 快速加载，图片优化
- **🔍 SEO Ready | SEO优化**: Server-side rendering with Next.js | 使用Next.js进行服务端渲染
- **🔒 Security | 安全性**: Row Level Security with Supabase | 使用Supabase的行级安全
- **🌐 Production Ready | 生产就绪**: Successfully builds without errors | 成功构建，无错误

## 🛠 Tech Stack | 技术栈

### Frontend | 前端
- **Framework | 框架**: Next.js 15 with App Router
- **Language | 语言**: TypeScript for type safety | TypeScript提供类型安全
- **Styling | 样式**: Tailwind CSS + shadcn/ui components
- **Icons | 图标**: Lucide React for modern iconography

### Backend | 后端
- **Data | 数据**: Static content with hardcoded data
- **Content Management | 内容管理**: File-based content management
- **Future Ready | 未来扩展**: Ready for database integration when needed

### Deployment | 部署
- **Platform | 平台**: Vercel for optimal Next.js performance
- **Domain | 域名**: Custom domain support | 支持自定义域名
- **SSL**: Automatic HTTPS encryption | 自动HTTPS加密
- **CDN**: Global content delivery network | 全球内容分发网络

## 🚀 Getting Started | 快速开始

### 📋 Prerequisites | 前置要求

- **Node.js 18+** | Node.js 18以上版本
- **npm or yarn** | npm或yarn包管理器

### 📦 Installation | 安装步骤

#### 1. Clone the repository | 克隆仓库
```bash
git clone <repository-url>
cd tongwang-website
```

#### 2. Install dependencies | 安装依赖
```bash
npm install
```

#### 3. Run the development server | 运行开发服务器
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website | 打开 [http://localhost:3000](http://localhost:3000) 查看网站

## 📄 Content Management | 内容管理

The website uses static content with hardcoded data for simplicity and performance | 网站使用静态内容和硬编码数据以确保简洁性和性能:

### 📊 Content Structure | 内容结构
- **publications** | 学术发表: Defined in `src/app/publications/page.tsx` | 在`src/app/publications/page.tsx`中定义
- **news** | 新闻: Defined in `src/app/news/page.tsx` | 在`src/app/news/page.tsx`中定义
- **team_members** | 团队成员: Defined in `src/app/team/page.tsx` | 在`src/app/team/page.tsx`中定义

### 🔧 Content Features | 内容特性
- **Static Data** | 静态数据: Fast loading and reliable | 快速加载且可靠
- **Easy Updates** | 简易更新: Direct file editing | 直接文件编辑
- **Version Control** | 版本控制: All changes tracked in Git | 所有更改在Git中跟踪
- **Future Ready** | 未来扩展: Ready for database integration when needed | 需要时可集成数据库

To update content, edit the respective page files directly | 要更新内容，请直接编辑相应的页面文件

## 📁 Project Structure | 项目结构

```
src/
├── app/                    # Next.js app router pages | Next.js应用路由页面
│   ├── about/             # About PI page | 导师介绍页面
│   ├── admin/             # Admin panel | 管理面板
│   ├── contact/           # Contact page | 联系页面
│   ├── news/              # News page | 新闻页面
│   ├── publications/      # Publications page | 学术发表页面
│   ├── team/              # Team page | 团队页面
│   ├── layout.tsx         # Root layout | 根布局
│   └── page.tsx           # Home page | 首页
├── components/            # Reusable components | 可复用组件
│   ├── ui/               # shadcn/ui components | shadcn/ui组件
│   ├── navigation.tsx    # Main navigation | 主导航
│   └── footer.tsx        # Footer component | 页脚组件
├── lib/                  # Utility functions | 工具函数
│   └── utils.ts          # General utilities | 通用工具
└── Additional Files | 其他文件
    └── vercel.json           # Deployment configuration | 部署配置
```

## 🎨 Design Features | 设计特色

### 🎯 User Experience | 用户体验
- **Intuitive Navigation** | 直观导航: Clear menu structure | 清晰的菜单结构
- **Professional Design** | 专业设计: Clean, academic aesthetic | 简洁的学术美学
- **Interactive Elements** | 交互元素: Hover effects, smooth transitions | 悬停效果，平滑过渡
- **Content Organization** | 内容组织: Logical information hierarchy | 逻辑信息层次结构
- **Search & Filter** | 搜索过滤: Easy content discovery | 轻松发现内容

### 📱 Responsive Design | 响应式设计
- **Mobile Optimized** | 移动优化: Touch-friendly interface | 触摸友好界面
- **Tablet Support** | 平板支持: Optimal viewing on all screen sizes | 所有屏幕尺寸的最佳观看体验
- **Desktop Enhanced** | 桌面增强: Rich desktop experience | 丰富的桌面体验
- **Cross-browser** | 跨浏览器: Compatible with all modern browsers | 兼容所有现代浏览器

## 🚀 Production Deployment Guide | 生产环境部署指南

### 📋 Prerequisites | 部署前准备

1. **Supabase Account** | Supabase账户: Create a free account at [supabase.com](https://supabase.com) | 在[supabase.com](https://supabase.com)创建免费账户
2. **Vercel Account** | Vercel账户: Create a free account at [vercel.com](https://vercel.com) | 在[vercel.com](https://vercel.com)创建免费账户
3. **GitHub Repository** | GitHub仓库: Push your code to a GitHub repository | 将代码推送到GitHub仓库
4. **Domain Name (Optional)** | 域名（可选）: If you want a custom domain | 如果您想要自定义域名

### 🎯 Complete Step-by-Step Deployment | 完整的分步部署教程

### 🗄️ Step 1: Set Up Supabase Database | 步骤1：设置Supabase数据库

#### 1.1 Create Supabase Project | 创建Supabase项目
1. **Visit** [supabase.com](https://supabase.com) and click "Start your project" | 访问[supabase.com](https://supabase.com)并点击"开始您的项目"
2. **Sign up/Login** with GitHub, Google, or email | 使用GitHub、Google或邮箱注册/登录
3. **Click "New Project"** | 点击"新建项目"
4. **Fill in project details** | 填写项目详情:
   - Organization: Select or create | 组织：选择或创建
   - Project Name: `tongwang-research-group` | 项目名称：`tongwang-research-group`
   - Database Password: Generate a strong password | 数据库密码：生成强密码
   - Region: Choose closest to your users | 区域：选择最接近用户的区域
5. **Click "Create new project"** | 点击"创建新项目"
6. **Wait 2-3 minutes** for project setup | 等待2-3分钟项目设置完成

#### 1.2 Set Up Database Schema | 设置数据库架构
1. **Go to SQL Editor** | 进入SQL编辑器:
   - In your Supabase dashboard, click "SQL Editor" in the left sidebar | 在Supabase控制台中，点击左侧边栏的"SQL编辑器"
2. **Create new query** | 创建新查询:
   - Click "New Query" button | 点击"新建查询"按钮
3. **Copy database schema** | 复制数据库架构:
   - Open `database-schema.sql` file in your project | 打开项目中的`database-schema.sql`文件
   - Copy ALL content (Ctrl+A, Ctrl+C) | 复制所有内容（Ctrl+A, Ctrl+C）
4. **Paste and execute** | 粘贴并执行:
   - Paste into Supabase SQL Editor | 粘贴到Supabase SQL编辑器
   - Click "Run" button (or Ctrl+Enter) | 点击"运行"按钮（或Ctrl+Enter）
   - Wait for "Success" message | 等待"成功"消息

#### 1.3 Get API Credentials | 获取API凭据
1. **Go to Settings > API** | 进入设置 > API
2. **Copy these values** | 复制这些值:
   - **Project URL**: `https://xxxxx.supabase.co` | 项目URL
   - **Anon Public Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` | 匿名公钥
3. **Save them securely** | 安全保存这些信息 - you'll need them for Vercel | 您在Vercel中会需要它们

### 📁 Step 2: Prepare Your Code | 步骤2：准备您的代码

#### 2.1 Push to GitHub | 推送到GitHub
1. **Initialize Git** (if not already done) | 初始化Git（如果尚未完成）:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Tong Wang Research Group Website"
   ```

2. **Create GitHub Repository** | 创建GitHub仓库:
   - Go to [github.com](https://github.com) | 访问[github.com](https://github.com)
   - Click "New Repository" | 点击"新建仓库"
   - Repository name: `tongwang-research-website` | 仓库名称
   - Set to Public or Private | 设置为公开或私有
   - **Don't** initialize with README (you already have one) | 不要用README初始化（您已经有了）
   - Click "Create repository" | 点击"创建仓库"

3. **Push your code** | 推送您的代码:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/tongwang-research-website.git
   git branch -M main
   git push -u origin main
   ```

#### 2.2 Test Local Environment | 测试本地环境
1. **Configure local environment** | 配置本地环境:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Edit `.env.local`** | 编辑`.env.local`文件:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

3. **Test locally** | 本地测试:
   ```bash
   npm run dev
   ```
   - Visit http://localhost:3000 | 访问 http://localhost:3000
   - Check all pages load correctly | 检查所有页面正确加载
   - Verify data loads from Supabase | 验证数据从Supabase正确加载

### 🌐 Step 3: Deploy to Vercel | 步骤3：部署到Vercel

#### 3.1 Create Vercel Account and Import Project | 创建Vercel账户并导入项目

1. **Sign up for Vercel** | 注册Vercel:
   - Go to [vercel.com](https://vercel.com) | 访问[vercel.com](https://vercel.com)
   - Click "Sign Up" | 点击"注册"
   - **Recommended**: Sign up with GitHub for easier integration | 推荐：使用GitHub注册以便更好集成

2. **Import your project** | 导入您的项目:
   - Click "New Project" on Vercel dashboard | 在Vercel控制台点击"新建项目"
   - Click "Import" next to your GitHub repository | 点击您的GitHub仓库旁边的"导入"
   - If you don't see it, click "Adjust GitHub App Permissions" | 如果看不到，点击"调整GitHub应用权限"

3. **Configure project settings** | 配置项目设置:
   - **Project Name**: `tongwang-research-group` | 项目名称
   - **Framework Preset**: Next.js (auto-detected) | 框架预设：Next.js（自动检测）
   - **Root Directory**: `./` (default) | 根目录：`./`（默认）
   - **Build Command**: `npm run build` (default) | 构建命令：`npm run build`（默认）
   - **Output Directory**: `.next` (default) | 输出目录：`.next`（默认）

#### 3.2 Add Environment Variables | 添加环境变量

1. **Before deploying**, click "Environment Variables" | 在部署前，点击"环境变量"
2. **Add these variables** | 添加这些变量:

   **Variable 1** | 变量1:
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: `https://xxxxx.supabase.co` (from Supabase Settings > API) | 值：从Supabase设置>API获取
   - Environment: Production, Preview, Development | 环境：生产、预览、开发

   **Variable 2** | 变量2:
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (from Supabase) | 值：从Supabase获取
   - Environment: Production, Preview, Development | 环境：生产、预览、开发

3. **Click "Add" for each variable** | 为每个变量点击"添加"

#### 3.3 Deploy | 部署

1. **Click "Deploy"** | 点击"部署"
2. **Wait for build** (usually 2-3 minutes) | 等待构建（通常2-3分钟）
3. **Success!** You'll see "Your project has been deployed" | 成功！您会看到"您的项目已部署"
4. **Click "Visit"** to see your live website | 点击"访问"查看您的实时网站

### 🔒 Step 4: Configure Database Security | 步骤4：配置数据库安全

#### 4.1 Set Up Row Level Security (RLS) | 设置行级安全

1. **Go back to Supabase** | 返回Supabase:
   - Open your Supabase project dashboard | 打开您的Supabase项目控制台
   - Click "SQL Editor" | 点击"SQL编辑器"

2. **Create new query** | 创建新查询:
   
- Click "New Query" | 点击"新建查询"
   
3. **Add RLS policies** | 添加RLS策略:
   ```sql
   -- Enable RLS for all tables | 为所有表启用RLS
   ALTER TABLE publications ENABLE ROW LEVEL SECURITY;
   ALTER TABLE news ENABLE ROW LEVEL SECURITY;
   ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
   ALTER TABLE research_areas ENABLE ROW LEVEL SECURITY;

   -- Allow public read access | 允许公共读取访问
   CREATE POLICY "Allow public read access" ON publications FOR SELECT USING (true);
   CREATE POLICY "Allow public read access" ON news FOR SELECT USING (true);
   CREATE POLICY "Allow public read access" ON team_members FOR SELECT USING (true);
   CREATE POLICY "Allow public read access" ON research_areas FOR SELECT USING (true);
   ```

4. **Run the query** | 运行查询:
   - Click "Run" or press Ctrl+Enter | 点击"运行"或按Ctrl+Enter
   - Verify "Success" message | 验证"成功"消息

#### 4.2 Test Database Connection | 测试数据库连接

1. **Visit your deployed website** | 访问您部署的网站
2. **Check these pages** | 检查这些页面:
   - Publications page - should show sample publications | 学术发表页面 - 应显示示例发表
   - News page - should show sample news | 新闻页面 - 应显示示例新闻
   - Team page - should show team members | 团队页面 - 应显示团队成员
3. **If data doesn't load** | 如果数据未加载:
   - Check Vercel deployment logs | 检查Vercel部署日志
   - Verify environment variables are correct | 验证环境变量正确
   - Check Supabase logs in Dashboard > Logs | 检查Supabase日志在控制台>日志

### ✅ Step 5: Final Testing & Go Live | 步骤5：最终测试和上线

#### 5.1 Comprehensive Testing | 全面测试

1. **Test all pages** | 测试所有页面:
   - ✅ **Home page** | 首页: Check hero section, research areas, latest news
   - ✅ **About PI** | 导师介绍: Verify all 6 sections load properly
   - ✅ **Our Team** | 团队: Check PI, students, and alumni sections
   - ✅ **Publications** | 学术发表: Test filtering, search, and publication details
   - ✅ **News** | 新闻: Verify featured news and recent articles
   - ✅ **Contact** | 联系: Check contact information and forms
   - ✅ **Admin** | 管理: Test admin panel (in development mode)

2. **Test responsive design** | 测试响应式设计:
   - **Desktop** (1920x1080): Full layout with all features | 桌面端：完整布局和所有功能
   - **Tablet** (768x1024): Adapted layout | 平板端：适配布局
   - **Mobile** (375x667): Mobile-optimized interface | 移动端：移动优化界面

3. **Test performance** | 测试性能:
   - Use Chrome DevTools > Lighthouse | 使用Chrome开发工具 > Lighthouse
   - Check Core Web Vitals | 检查核心Web指标
   - Verify fast loading times | 验证快速加载时间

#### 5.2 Domain Configuration (Optional) | 域名配置（可选）

1. **If you have a custom domain** | 如果您有自定义域名:
   - Go to Vercel project settings | 进入Vercel项目设置
   - Click "Domains" | 点击"域名"
   - Add your domain (e.g., `tongwang-research.com`) | 添加您的域名
   - Follow DNS configuration instructions | 按照DNS配置说明操作

2. **Free Vercel domain** | 免费Vercel域名:
   - Your site is available at: `https://your-project-name.vercel.app` | 您的网站地址
   - This is production-ready and secure | 这是生产就绪且安全的

#### 5.3 Go Live Checklist | 上线检查清单

- [ ] **Database**: All tables created and populated | 数据库：所有表已创建并填充
- [ ] **Security**: RLS policies configured | 安全：RLS策略已配置
- [ ] **Environment**: Variables set in Vercel | 环境：Vercel中已设置变量
- [ ] **Build**: Successful deployment | 构建：成功部署
- [ ] **Testing**: All pages work correctly | 测试：所有页面正常工作
- [ ] **Performance**: Good Lighthouse scores | 性能：良好的Lighthouse评分
- [ ] **Mobile**: Responsive design verified | 移动端：响应式设计已验证
- [ ] **Content**: Sample data displays properly | 内容：示例数据正确显示

🎉 **Congratulations! Your website is now live!** | **恭喜！您的网站现在已上线！**

### 🌍 Alternative Deployment Platforms | 其他部署平台

The website can be deployed to any platform that supports Next.js | 网站可以部署到任何支持Next.js的平台:
- **Netlify**: Alternative hosting platform | 替代托管平台
- **Railway**: Full-stack deployment | 全栈部署
- **DigitalOcean App Platform**: VPS deployment | VPS部署
- **AWS Amplify**: Amazon cloud deployment | 亚马逊云部署

## 🏭 Production Management | 生产环境管理

### 📊 Monitoring Your Live Website | 监控您的实时网站

#### Vercel Analytics | Vercel分析
1. **Enable Analytics** | 启用分析:
   - Go to your Vercel project dashboard | 进入您的Vercel项目控制台
   - Click "Analytics" tab | 点击"分析"选项卡
   - Enable Web Analytics (free tier available) | 启用Web分析（有免费层）

2. **Monitor Performance** | 监控性能:
   - **Page Views** | 页面浏览量: Track visitor traffic | 跟踪访客流量
   - **Core Web Vitals** | 核心Web指标: Monitor loading performance | 监控加载性能
   - **Top Pages** | 热门页面: See which content is most popular | 查看最受欢迎的内容

#### Supabase Monitoring | Supabase监控
1. **Database Usage** | 数据库使用:
   - Monitor database size and queries | 监控数据库大小和查询
   - Check API request limits | 检查API请求限制
   - Review authentication usage | 查看认证使用情况

2. **Performance Metrics** | 性能指标:
   - Query performance | 查询性能
   - Database connections | 数据库连接
   - Storage usage | 存储使用

### 🔄 Content Updates in Production | 生产环境内容更新

#### Method 1: Direct Database Updates | 方法1：直接数据库更新
1. **Access Supabase Dashboard** | 访问Supabase控制台
2. **Go to Table Editor** | 进入表编辑器
3. **Select table** (publications, news, team_members) | 选择表
4. **Add/Edit/Delete rows** directly | 直接添加/编辑/删除行
5. **Changes appear immediately** on website | 更改立即在网站上显示

#### Method 2: Admin Panel (Development) | 方法2：管理面板（开发环境）
1. **Run locally** | 本地运行:
   ```bash
   npm run dev
   ```
2. **Visit** `http://localhost:3000/admin` | 访问管理面板
3. **Make content changes** | 进行内容更改
4. **Changes sync to production** database | 更改同步到生产数据库

### 🚀 Deployment Updates | 部署更新

#### Automatic Deployment | 自动部署
1. **Make code changes** locally | 本地进行代码更改
2. **Commit and push** to GitHub | 提交并推送到GitHub:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
3. **Vercel automatically rebuilds** | Vercel自动重新构建
4. **New version goes live** in 2-3 minutes | 新版本在2-3分钟内上线

#### Manual Deployment | 手动部署
1. **Use Vercel CLI** | 使用Vercel CLI:
   ```bash
   vercel --prod
   ```
2. **Or trigger from Vercel dashboard** | 或从Vercel控制台触发:
   - Go to Deployments tab | 进入部署选项卡
   - Click "Redeploy" | 点击"重新部署"
