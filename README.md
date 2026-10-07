# Breeze

A minimal, clean Astro theme for personal websites and blogs.

Built with [Astro 5](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and TypeScript.

[中文文档 / Chinese Documentation](./README.zh-CN.md)

[Changelog](./CHANGELOG.md)

## Features

- Dark / Light mode with smooth toggle
- Full-text search (Pagefind, Cmd+K)
- RSS feed and sitemap
- giscus comments (powered by GitHub Discussions, optional)
- Umami analytics (optional)
- Content collections (posts, projects, categories, tags, friends)
- Table of contents for posts
- Expressive Code syntax highlighting
- View Transitions
- Responsive design
- OKLch color system with easy hue customization

## Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/astro-theme-breeze.git my-site
cd my-site

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Configuration

All site configuration is in `src/config/site.ts`. This is the only file you need to edit to personalize the theme.

| Section      | Description                                     |
| ------------ | ----------------------------------------------- |
| `meta`       | Site title, description, author, logo, language |
| `navigation` | Navigation menu items with subtitle labels      |
| `social`     | Social links (GitHub, Email, etc.)              |
| `hero`       | Homepage greeting, description, info cards      |
| `footer`     | Copyright and credit text                       |
| `comments`   | giscus comments configuration                   |
| `features`   | Toggle search, RSS                              |
| `tools`      | Tools/Stack page data                           |
| `labels`     | All UI text labels (for i18n)                   |

Also update `astro.config.mjs` to set your `site` URL.

## Content

### Blog Posts

Add Markdown or MDX files to `src/content/posts/`:

```yaml
---
title: My First Post
createdAt: 2025-01-01
category: technology
tags: [astro, tutorial]
summary: A brief description of the post.
---
```

### About Page

Edit `src/content/pages/about.md` — pure Markdown, no component knowledge needed.

### Projects

Add to `src/content/projects/` with frontmatter: `title`, `description`, `tech`, `link`, `status`.

### Categories & Tags

Edit `src/content/miscs/categories.json` and `src/content/miscs/tags.json`.

### Friends

Edit `src/content/miscs/friends.json` with `name`, `description`, `link`, `avatar`.

## Theme Colors

Edit `src/styles/theme.css`. All colors use OKLch with a consistent hue value (default: 165).

To change the color palette, find-and-replace the hue number:

- `165` = Sage Green (default)
- `250` = Ocean Blue
- `280` = Lavender Purple
- `330` = Rose Pink
- `30` = Warm Orange

## Comments (giscus)

Comments are powered by [giscus](https://giscus.app), with all data stored in GitHub Discussions.

1. Make the repository public, [enable Discussions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository), and install the [giscus app](https://github.com/apps/giscus)
2. Configure your repository at [giscus.app](https://giscus.app) and copy the generated `data-*` attributes
3. Fill them into `comments.giscus` in `src/config/site.ts` (`repo`, `repoId`, `category`, `categoryId`, and the optional settings)
4. Set `comments.enabled = false` to turn comments off

While the required fields are empty, the comment section stays hidden (a hint is shown in dev mode).

## Analytics (Umami)

1. Copy `.env.example` to `.env`
2. Set `UMAMI_URL=https://your-umami-script-url`
3. Set `UMAMI_WEBSITE_ID=your-website-id`

These variables are also declared in `astro.config.mjs` via `env.schema`, so Astro provides typed access automatically.
On Cloudflare Pages, just add `UMAMI_URL` and `UMAMI_WEBSITE_ID` in your project environment variables.

## Deploy

Works with any static hosting: Vercel, Netlify, Cloudflare Pages, etc.

```bash
pnpm build
```

The output is in `dist/`.

## License

MIT
