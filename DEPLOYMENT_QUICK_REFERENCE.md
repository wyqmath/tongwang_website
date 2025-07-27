# 🚀 Deployment Quick Reference | 部署快速参考

## 📋 Essential Information | 基本信息

### 🔑 Required Accounts | 必需账户
- **GitHub**: [github.com](https://github.com) - Code repository | 代码仓库
- **Supabase**: [supabase.com](https://supabase.com) - Database | 数据库
- **Vercel**: [vercel.com](https://vercel.com) - Hosting | 托管

### ⚡ Quick Deploy Commands | 快速部署命令

```bash
# 1. Initialize and push to GitHub | 初始化并推送到GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# 2. Update and redeploy | 更新并重新部署
git add .
git commit -m "Update content"
git push
```

### 🔧 Environment Variables | 环境变量

**Required in Vercel** | Vercel中必需:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 🗄️ Database Setup SQL | 数据库设置SQL

**Run in Supabase SQL Editor** | 在Supabase SQL编辑器中运行:
```sql
-- 1. Run database-schema.sql (full file)
-- 2. Then run security policies:

ALTER TABLE publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_areas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON publications FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON news FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON team_members FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON research_areas FOR SELECT USING (true);
```

## 🎯 Deployment Checklist | 部署检查清单

### ✅ Pre-Deployment | 部署前
- [ ] Code pushed to GitHub | 代码已推送到GitHub
- [ ] Supabase project created | Supabase项目已创建
- [ ] Database schema executed | 数据库架构已执行
- [ ] API keys copied | API密钥已复制

### ✅ During Deployment | 部署期间
- [ ] Vercel project imported | Vercel项目已导入
- [ ] Environment variables added | 环境变量已添加
- [ ] Build successful | 构建成功
- [ ] Security policies applied | 安全策略已应用

### ✅ Post-Deployment | 部署后
- [ ] All pages load correctly | 所有页面正确加载
- [ ] Data displays from database | 数据库数据正确显示
- [ ] Mobile responsive working | 移动响应正常工作
- [ ] Performance is good | 性能良好

## 🔄 Common Tasks | 常见任务

### 📝 Update Content | 更新内容

**Method 1: Database** | 方法1：数据库
1. Go to Supabase > Table Editor | 进入Supabase > 表编辑器
2. Edit rows directly | 直接编辑行
3. Changes appear immediately | 更改立即显示

**Method 2: Code** | 方法2：代码
1. Edit local files | 编辑本地文件
2. `git add . && git commit -m "Update" && git push` | 提交并推送
3. Vercel auto-deploys | Vercel自动部署

### 🔧 Troubleshooting | 故障排除

**Website not loading data** | 网站未加载数据:
- Check environment variables in Vercel | 检查Vercel中的环境变量
- Verify Supabase API keys | 验证Supabase API密钥
- Check RLS policies are set | 检查RLS策略已设置

**Build failing** | 构建失败:
- Check Vercel build logs | 检查Vercel构建日志
- Verify all dependencies installed | 验证所有依赖已安装
- Check for syntax errors | 检查语法错误

**Slow performance** | 性能慢:
- Check Lighthouse scores | 检查Lighthouse评分
- Optimize images | 优化图片
- Review database queries | 检查数据库查询

## 📊 Monitoring | 监控

### 📈 Vercel Analytics | Vercel分析
- **URL**: Vercel Dashboard > Analytics | Vercel控制台 > 分析
- **Metrics**: Page views, performance, top pages | 指标：页面浏览量、性能、热门页面

### 🗄️ Supabase Monitoring | Supabase监控
- **URL**: Supabase Dashboard > Reports | Supabase控制台 > 报告
- **Metrics**: Database usage, API requests | 指标：数据库使用、API请求

## 🌐 URLs & Access | URL和访问

### 🔗 Important Links | 重要链接
- **Live Website**: `https://your-project.vercel.app` | 实时网站
- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard) | Vercel控制台
- **Supabase Dashboard**: [app.supabase.com](https://app.supabase.com) | Supabase控制台
- **GitHub Repository**: `https://github.com/username/repo` | GitHub仓库

### 🔑 Admin Access | 管理员访问
- **Admin Panel**: `http://localhost:3000/admin` (development only) | 管理面板（仅开发环境）
- **Database Editor**: Supabase > Table Editor | 数据库编辑器：Supabase > 表编辑器

## 🆘 Emergency Procedures | 应急程序

### 🚨 Site Down | 网站宕机
1. Check Vercel status page | 检查Vercel状态页面
2. Review recent deployments | 查看最近的部署
3. Rollback if needed | 如需要则回滚

### 🔒 Security Issue | 安全问题
1. Rotate API keys in Supabase | 在Supabase中轮换API密钥
2. Update environment variables in Vercel | 在Vercel中更新环境变量
3. Review RLS policies | 检查RLS策略

### 💾 Data Loss | 数据丢失
1. Check Supabase backups | 检查Supabase备份
2. Restore from backup if available | 如有备份则恢复
3. Re-run database-schema.sql if needed | 如需要重新运行database-schema.sql

---



