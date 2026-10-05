import { PUBLIC_ARTALK_ENABLED, PUBLIC_ARTALK_SERVER } from "astro:env/server";

const artalkServer = PUBLIC_ARTALK_SERVER?.trim() || "";
const artalkEnabled =
  PUBLIC_ARTALK_ENABLED === undefined
    ? Boolean(artalkServer)
    : PUBLIC_ARTALK_ENABLED;

const site = {
  // --- Site Metadata ---
  meta: {
    title: "HelloSWX",
    description: "摆专爱国荣校 No.2 & 业余开发者",
    author: "Wenxuan Shen",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "zh-CN",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "Home", subtitle: "Index", href: "/" },
    { name: "Writing", subtitle: "Blog", href: "/posts" },
    { name: "Projects", subtitle: "Works", href: "/projects" },
    { name: "Friends", subtitle: "Links", href: "/friends" },
    { name: "About", subtitle: "Me", href: "/about" },
  ],

  // --- Social Links ---
  social: [
    {
      name: "GitHub",
      href: "https://github.com/xuanxuan1231",
      icon: "mdi:github",
    },
    { name: "Email", href: "mailto:i@helloswx.top", icon: "mdi:email" },
  ],

  friendCard: {
    name: "Breeze",
    description: "A minimal Astro theme for personal websites",
    link: "https://your-domain.com",
    avatar: "https://your-domain.com/logo.svg",
  },

  // --- Homepage Hero ---
  hero: {
    greeting: "👋 Hi, I'm HelloSWX",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description: "每天在海淀黄庄环形通勤的高中牲",
    cards: [
      { icon: "mdi:explore", label: "Status", value: "Coding, Meowing" },
      { icon: "mdi:location", label: "Location", value: "The Universe" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2026 HelloSWX",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: artalkEnabled,
    provider: "artalk" as const,
    artalk: {
      server: artalkServer,
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 7,
  },

  // --- Tools Page Data ---
  // Each item can use either `icon` (Iconify name) or `logo` (public path or { light, dark } paths)
  tools: [
    {
      name: "development",
      items: [
        {
          name: "VS Code",
          link: "https://code.visualstudio.com",
          icon: "mdi:microsoft-visual-studio-code",
        },
        {
          name: "WebStorm",
          link: "https://www.jetbrains.com/webstorm",
          icon: "mdi:code-braces",
        },
        { name: "Terminal", icon: "mdi:terminal" },
        { name: "Git", link: "https://git-scm.com", icon: "mdi:git" },
        { name: "Docker", link: "https://www.docker.com", icon: "mdi:docker" },
        { name: "Postman", link: "https://www.postman.com", icon: "mdi:api" },
      ],
    },
    {
      name: "design",
      items: [
        {
          name: "Figma",
          link: "https://www.figma.com",
          icon: "mdi:vector-polygon",
        },
        {
          name: "Sketch",
          link: "https://www.sketch.com",
          icon: "mdi:vector-square",
        },
        {
          name: "Adobe XD",
          link: "https://www.adobe.com/products/xd.html",
          icon: "mdi:pencil-ruler",
        },
        {
          name: "Photoshop",
          link: "https://www.adobe.com/products/photoshop.html",
          icon: "mdi:image-edit",
        },
      ],
    },
    {
      name: "productivity",
      items: [
        { name: "Notion", link: "https://www.notion.so", icon: "mdi:notebook" },
        {
          name: "Obsidian",
          link: "https://obsidian.md",
          icon: "mdi:diamond-stone",
        },
        {
          name: "Raycast",
          link: "https://www.raycast.com",
          icon: "mdi:lightning-bolt",
        },
        { name: "Arc Browser", link: "https://arc.net", icon: "mdi:web" },
      ],
    },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Writing",
    postsDescription: "小笔记，小想法",
    projectsTitle: "Projects",
    projectsDescription: "有些是自己的，有些是和别人一起的",
    friendsTitle: "Friends",
    friendsDescription: "都哥们",
    toolsTitle: "Stack",
    aboutTitle: "About",
    aboutDescription: "我就是我",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription:
      "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
