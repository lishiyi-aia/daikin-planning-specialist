export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "客户洞察与推广策划",
        "tagline": "客户研究｜产品资料｜活动执行｜AI复盘",
        "items": [
          {
            "name": "AI 资讯产品客户洞察与推广策划",
            "meta": "Customer Insights & Marketing Planning",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "需求调研：用户反馈与价格问卷，提炼产品卖点",
              "资料传播：100+条内容，标准介绍与达人协作",
              "策划执行：线上拉新、线下活动及渠道A/B测试",
              "AI复盘：新增注册较前周+50%，首次专题创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "产品资料与项目协同",
        "tagline": "需求说明｜资料标准化｜高校活动｜海外协同",
        "items": [
          {
            "name": "AI 教育产品需求整理与资料标准化",
            "meta": "Product Materials & Project Coordination",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "需求整理：按类型与频次归类100+条反馈",
              "产品资料：从0到1建设公众号，输出30+篇内容",
              "项目协同：高校活动材料、筹备节点与海外对接",
              "反馈迭代：10余项建议，期间核心功能使用率+30%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "新品调研与渠道传播",
        "tagline": "竞品观察｜卖点提炼｜社媒执行｜渠道复盘",
        "items": [
          {
            "name": "ZUS Coffee 新品调研与渠道传播",
            "meta": "New-Product Research & Channel Communication",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "新品调研：用户偏好、社媒反馈与竞品观察",
              "内容执行：协助50条Instagram内容发布",
              "渠道传播：线上首发及FamilyMart素材与排期",
              "每周复盘：15+次复盘，协同账号粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "Customer Insights & Marketing Planning",
        "tagline": "Research · Materials · Campaigns · AI Reviews",
        "items": [
          {
            "name": "AI Information Product: Insights & Marketing Planning",
            "meta": "Customer Needs, Product Materials & Promotion",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Research: feedback and pricing surveys informed product messages",
              "Materials: 100+ posts, standardized introductions and creator support",
              "Execution: online acquisition, technology events and A/B tests",
              "Review: AI dashboard; registrations +50%, first-topic rate about +15% relatively"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "Product Materials & Project Coordination",
        "tagline": "Requirements · Materials · Events · Cooperation",
        "items": [
          {
            "name": "AI Education: Requirements & Standardized Materials",
            "meta": "From Feedback to Materials, Coordination & Iteration",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Requirements: classified 100+ feedback items by type and frequency",
              "Materials: launched WeChat content and produced 30+ guides and cases",
              "Coordination: university events, preparation milestones and overseas handoffs",
              "Iteration: over 10 suggestions; core-feature usage +30% during the period"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "New-Product Research & Channel Communication",
        "tagline": "Competitors · Messaging · Content · Channel Reviews",
        "items": [
          {
            "name": "ZUS Coffee: New-Product Research & Channel Communication",
            "meta": "Insights, Instagram Content & Retail Communication",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Research: user preferences, social feedback and competitor content",
              "Content: supported 50 Instagram posts",
              "Channels: online launch and FamilyMart assets and schedules",
              "Weekly reviews: 15+ reviews; shared 11k+ account follower growth"
            ]
          }
        ]
      }
    ]
  }
}

export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
