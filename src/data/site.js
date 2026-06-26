export const brand = '素盒物联';

/** 开源演示信息 — 均为虚构，可在 site.js 中自由修改 */
export const demoNotice = '本项目为 GitHub 开源演示，所有公司与案例信息均为虚构。';

export const navLinks = [
  { name: '首页', path: '/' },
  { name: '产品中心', path: '/products' },
  { name: '解决方案', path: '/solutions' },
  { name: '成功案例', path: '/cases' },
  { name: '新闻动态', path: '/news' },
  { name: '下载中心', path: '/downloads' },
  { name: '联系我们', path: '/contact' },
];

export const quickLinks = [
  { name: '首页', path: '/' },
  { name: '产品中心', path: '/products' },
  { name: '解决方案', path: '/solutions' },
  { name: '成功案例', path: '/cases' },
  { name: '联系我们', path: '/contact' },
];

/** 公司联系方式 — 全站统一配置，修改此处即可同步页脚与联系页 */
export const companyContact = {
  address: '广东省深圳市福田区深南大道 7888 号东海国际中心 A 座 12 层',
  zip: '518040',
  phone: '400-668-8188',
  phoneLocal: '0755-6688-8188',
  email: 'info@suhewl.com',
  emailSupport: 'support@suhewl.com',
  hours: '周一至周五 9:00-18:00',
};

export const contactInfo = {
  address: `地址：${companyContact.address}`,
  tel: `电话：${companyContact.phone}`,
  email: `邮箱：${companyContact.email}`,
  hours: `工作时间：${companyContact.hours}`,
};

export const footerDesc =
  '素盒物联是一个开源的数字标牌展示网站项目，提供软硬件一体化的信息发布解决方案演示。欢迎 Star 与贡献代码。';

const img = {
  hero: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
  player: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&q=80',
  display: 'https://images.unsplash.com/photo-1573164713714-d95e4360618e?w=600&q=80',
  kiosk: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
  retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  corporate: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  airport: 'https://images.unsplash.com/photo-1436491865339-9a8aef5320a9?w=600&q=80',
  hotel: 'https://images.unsplash.com/photo-1564501049412-61c357a3819b?w=600&q=80',
  school: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  hospital: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
  cms: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  tech: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
};

export const homeData = {
  hero: {
    title: '专业数字标牌解决方案',
    subtitle: '软硬件一体化，助力信息高效发布与管理',
    bg: img.hero,
  },
  solutions: [
    {
      icon: 'play',
      title: '软件平台',
      desc: '直观的内容管理系统，支持排程发布、远程控制与实时监控，操作简单高效。',
    },
    {
      icon: 'desktop',
      title: '硬件设备',
      desc: '专业媒体播放器、数字标牌显示屏与广告机，适配各类部署场景。',
    },
    {
      icon: 'headset',
      title: '技术支持',
      desc: '提供安装部署、使用培训与持续运维服务，保障系统稳定运行。',
    },
  ],
  products: [
    {
      image: img.player,
      title: '媒体播放器',
      desc: '4K Android 媒体播放器，支持 WiFi 与多种接口，适用于数字标牌场景。',
    },
    {
      image: img.display,
      title: '数字标牌屏',
      desc: '专业 LCD/LED 显示屏，适用于室内外广告、信息展示与导视系统。',
    },
    {
      image: img.kiosk,
      title: '广告一体机',
      desc: '落地式与壁挂式广告机，支持触控交互与内容定制。',
    },
  ],
  stats: [
    { value: '500+', label: '成功部署' },
    { value: '50+', label: '覆盖城市' },
    { value: '10+', label: '行业经验（年）' },
  ],
  partners: ['合作伙伴 A', '合作伙伴 B', '合作伙伴 C', '合作伙伴 D'],
  cases: [
    {
      image: img.retail,
      category: '零售',
      title: '购物中心联网方案',
      desc: '在 5 家商场部署 200+ 块屏幕，客户互动率提升 40%。',
    },
    {
      image: img.corporate,
      category: '企业',
      title: '企业总部信息发布',
      desc: '50 块显示屏构建内部通讯网络，实时发布通知与资讯。',
    },
    {
      image: img.airport,
      category: '交通',
      title: '机场信息系统',
      desc: '航站楼航班信息与广告展示，提升旅客出行体验。',
    },
  ],
  cta: {
    title: '准备好升级您的信息传播方式了吗？',
    desc: '联系我们的团队，获取免费咨询，了解数字标牌如何助力您的业务增长。',
    btn: '立即开始',
  },
};

export const productFilters = ['all', '硬件', '软件'];

export const products = [
  {
    id: 1,
    category: '硬件',
    title: '媒体播放器 X1',
    desc: '4K Android 媒体播放器，支持 WiFi，专为数字标牌设计',
    image: img.player,
    tags: ['Android 10', '4K 60fps', 'WiFi 2.4G', 'HDMI 输出'],
  },
  {
    id: 2,
    category: '硬件',
    title: '数字标牌屏 55 英寸',
    desc: '专业 LCD 显示屏，适用于室内广告与信息展示',
    image: img.display,
    tags: ['55 英寸', '4K 超高清', '500 尼特', '7×24 运行'],
  },
  {
    id: 3,
    category: '硬件',
    title: '落地式广告一体机',
    desc: '触控互动一体机，支持自定义内容管理',
    image: img.kiosk,
    tags: ['55-86 英寸', '触摸屏', 'Android/Windows', '可定制'],
  },
  {
    id: 4,
    category: '硬件',
    title: '壁挂显示屏 43 英寸',
    desc: '超薄壁挂设计，适用于零售与企业办公环境',
    image: img.display,
    tags: ['43 英寸', '全高清', '超窄边框', 'VESA 支架'],
  },
  {
    id: 5,
    category: '软件',
    title: '内容管理系统',
    desc: '云端 CMS，支持远程内容管理与排程发布',
    image: img.cms,
    tags: ['云端部署', '远程控制', '排程管理', '实时监控'],
  },
  {
    id: 6,
    category: '软件',
    title: '多屏同步控制器',
    desc: '多屏内容无缝同步，适用于连锁与大型场馆',
    image: img.tech,
    tags: ['最多 16 屏', '4K 输出', '低延迟', '即插即用'],
  },
];

export const solutionFeatures = [
  {
    title: '云端内容管理',
    desc: '通过云端 CMS 随时随地管理所有屏幕，支持远程排程、更新与监控。',
    items: ['远程内容管理', '实时状态监控', '自动更新推送', '多用户权限控制'],
    icon: {
      viewBox: '0 0 640 512',
      path: 'M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z',
    },
  },
  {
    title: '多屏同步播放',
    desc: '数百块屏幕内容无缝同步，适用于连锁零售、企业园区与公共场馆。',
    items: ['集中管控', '分组管理', '定时播放', '紧急插播'],
    icon: {
      viewBox: '0 0 640 512',
      path: 'M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z',
    },
  },
  {
    title: '移动端管理',
    desc: '通过手机或平板掌控整个数字标牌网络，随时上传与更新内容。',
    items: ['iOS / Android 应用', '即时内容上传', '实时预览', '消息推送通知'],
    icon: {
      viewBox: '0 0 320 512',
      path: 'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z',
    },
  },
  {
    title: '数据分析报表',
    desc: '全面追踪播放效果与设备状态，生成可视化报表辅助决策。',
    items: ['播放统计', '设备状态监控', '自定义报表', '数据导出'],
    icon: {
      viewBox: '0 0 512 512',
      path: 'M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z',
    },
  },
];

export const industries = [
  { name: '零售', desc: '动态商品展示与促销信息，提升购物体验', image: img.retail },
  { name: '企业', desc: '内部通知与资讯发布，增强员工沟通效率', image: img.corporate },
  { name: '酒店', desc: '欢迎语与服务信息展示，提升宾客满意度', image: img.hotel },
  { name: '教育', desc: '校园公告、活动与应急通知全覆盖', image: img.school },
  { name: '医疗', desc: '导诊指引与健康宣教，优化就医流程', image: img.hospital },
  { name: '交通', desc: '实时班次与出行信息，改善旅客体验', image: img.airport },
];

export const caseFilters = ['all', '零售', '企业', '交通', '酒店', '教育', '医疗'];

export const cases = [
  {
    id: 1,
    industry: '零售',
    location: '上海',
    title: '购物中心联网方案',
    client: '某大型零售集团',
    challenge: '需在 5 家商场、200+ 块屏幕上统一品牌信息',
    solution: '部署云端 CMS，实现集中内容管理与排程发布',
    results: ['客户互动率提升 40%', '内容更新时间缩短 60%', '各门店品牌体验统一'],
    image: img.retail,
  },
  {
    id: 2,
    industry: '企业',
    location: '北京',
    title: '企业总部信息发布',
    client: '某科技龙头企业',
    challenge: '多楼层内部沟通效率低，通知难以及时触达',
    solution: '安装 50 块显示屏，对接公告与资讯系统',
    results: ['员工信息知晓率提升 75%', '减少邮件通知依赖', '企业文化展示更直观'],
    image: img.corporate,
  },
  {
    id: 3,
    industry: '交通',
    location: '广州',
    title: '国际机场信息系统',
    client: '某机场管理方',
    challenge: '为海量旅客提供实时航班信息与导视服务',
    solution: '对接航班数据，在航站楼部署 300+ 块显示屏',
    results: ['旅客满意度提升', '误机率降低 25%', '应急广播能力增强'],
    image: img.airport,
  },
  {
    id: 4,
    industry: '酒店',
    location: '多城市',
    title: '连锁酒店数字标牌',
    client: '某高端酒店集团',
    challenge: '提升宾客体验，展示个性化欢迎与服务信息',
    solution: '大堂部署互动屏，支持多语言内容',
    results: ['宾客满意度提升 30%', '前台咨询量减少 40%', '增值服务转化提升 25%'],
    image: img.hotel,
  },
  {
    id: 5,
    industry: '教育',
    location: '南京',
    title: '大学校园信息网',
    client: '某重点高校',
    challenge: '高效传达校园公告、活动与应急信息',
    solution: '全校部署 100+ 块屏幕，统一后台管理',
    results: ['活动参与度提升', '应急通知秒级触达', '印刷成本降低 50%'],
    image: img.school,
  },
  {
    id: 6,
    industry: '医疗',
    location: '深圳',
    title: '医院导诊系统',
    client: '某区域医疗中心',
    challenge: '大型院区患者寻路困难，候诊体验待优化',
    solution: '部署互动导诊机与叫号显示屏',
    results: ['候诊焦虑感降低 35%', '人工指路时间减少', '患者流转更顺畅'],
    image: img.hospital,
  },
];

export const newsFilters = ['all', '公司动态', '行业洞察', '产品更新'];

export const newsList = [
  {
    id: 1,
    category: '产品更新',
    date: '2024-01-15',
    title: '素盒物联发布新一代 8K 媒体播放器',
    desc: '全新 8K 媒体播放器为高端数字标牌场景带来极致画质体验。',
    image: img.player,
  },
  {
    id: 2,
    category: '行业洞察',
    date: '2024-01-10',
    title: '2024 年数字标牌行业趋势展望',
    desc: '盘点今年数字标牌领域的关键技术趋势与市场方向。',
    image: img.display,
  },
  {
    id: 3,
    category: '公司动态',
    date: '2024-01-05',
    title: '素盒物联与连锁零售品牌达成战略合作',
    desc: '将在全国主要商圈部署 500+ 块数字标牌屏幕。',
    image: img.retail,
  },
  {
    id: 4,
    category: '行业洞察',
    date: '2023-12-28',
    title: 'AI 如何重塑数字内容管理',
    desc: '人工智能正在改变企业创建与管理数字标牌内容的方式。',
    image: img.corporate,
  },
  {
    id: 5,
    category: '公司动态',
    date: '2023-12-20',
    title: '素盒物联荣获行业创新奖',
    desc: '因在数字标牌技术与服务方面的卓越表现获得行业认可。',
    image: img.airport,
  },
  {
    id: 6,
    category: '产品更新',
    date: '2023-12-15',
    title: 'CMS 软件 v3.5 正式发布',
    desc: '新版本增强排程能力、优化数据分析，并改进移动端体验。',
    image: img.kiosk,
  },
];

export const downloadFilters = ['all', '产品手册', '软件驱动', '技术文档', '资质认证'];

export const downloads = [
  { id: 1, category: '产品手册', title: '媒体播放器 X1 产品手册', desc: '完整产品规格与功能介绍', size: '2.4 MB', type: 'PDF' },
  { id: 2, category: '产品手册', title: '数字标牌系列用户手册', desc: '安装指南、操作说明与故障排除', size: '5.1 MB', type: 'PDF' },
  { id: 3, category: '产品手册', title: 'CMS 快速入门指南', desc: '几分钟上手内容管理系统', size: '1.8 MB', type: 'PDF' },
  { id: 4, category: '软件驱动', title: '媒体播放器固件 v2.1.5', desc: '最新固件，性能与稳定性优化', size: '128 MB', type: 'ZIP' },
  { id: 5, category: '软件驱动', title: 'CMS Windows 客户端', desc: '桌面端内容管理应用', size: '85 MB', type: 'EXE' },
  { id: 6, category: '软件驱动', title: '显示屏驱动包', desc: '全系列通用显示驱动', size: '45 MB', type: 'ZIP' },
  { id: 7, category: '技术文档', title: '4K 数字标牌技术白皮书', desc: '深度技术分析与实施指南', size: '3.2 MB', type: 'PDF' },
  { id: 8, category: '技术文档', title: 'API 文档 v3.0', desc: '开发者完整 API 参考', size: '4.5 MB', type: 'PDF' },
  { id: 9, category: '资质认证', title: 'ISO 9001 质量认证', desc: '质量管理体系认证证书', size: '1.2 MB', type: 'PDF' },
  { id: 10, category: '资质认证', title: 'CE 合规证书', desc: '欧盟符合性认证', size: '0.8 MB', type: 'PDF' },
  { id: 11, category: '资质认证', title: 'FCC 认证报告', desc: '美国联邦通信委员会认证', size: '1.5 MB', type: 'PDF' },
];

export const contactPage = {
  address: `${companyContact.address}\n深圳市 ${companyContact.zip}`,
  phones: [companyContact.phone, companyContact.phoneLocal],
  emails: [companyContact.email, companyContact.emailSupport],
  hours: `${companyContact.hours}（GMT+8）\n周六至周日：休息`,
  advantages: [
    '10 年以上行业经验',
    '500+ 成功部署案例',
    '专业技术支持团队',
    '支持定制化方案',
    '具有竞争力的价格与批量优惠',
  ],
  countries: ['中国', '美国', '英国', '德国', '法国', '澳大利亚', '其他'],
};
