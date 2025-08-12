# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is Bill Morris's personal website and blog (billmorris.io), hosted on GitHub Pages. The repository contains:

- **Main website**: Portfolio site with HTML/CSS/JS static files in the root directory
- **Blog**: Jekyll-based blog in the `blog/` subdirectory that publishes to `shoals/` 
- **Other projects**: Standalone subdirectories like `planet/`, `wardle/`, `inspector/`

## Key Commands

### Blog Development (Jekyll)
```bash
# Navigate to blog directory
cd blog

# Install dependencies
bundle install

# Serve the blog locally for development
bundle exec jekyll serve

# Build the blog for production (outputs to ../shoals/)
bundle exec jekyll build -d ../shoals
```

### Creating New Blog Posts
```bash
cd blog

# Generate a new post with proper naming and frontmatter
DATE_ISO=$(date +%Y-%m-%d)
echo "---
layout: post
title: \"MyTitle\"
date: \"${DATE_ISO}T12:00:00-04:00\"
author: \"Bill Morris\"
cover-img: \"/assets/img/${DATE_ISO}_cover.jpg\"
tags: [\"tag1\", \"tag2\"]
subtitle: \"Punchy lead-in\"
---
" > _posts/${DATE_ISO}-post-name.md
```

### Video to GIF Conversion
For converting video files (e.g., from Twitter archives) to optimized GIFs:
```bash
for m in $(ls *.mp4); do
  g="${m%.*}"
  ffmpeg -itsscale 0.3 \
    -i $m \
    -vf "fps=5,scale=600:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
    -loop 0 \
    ${g}.gif
done
```

## Architecture

### Directory Structure
- **Root**: Main portfolio website with Bootstrap-based HTML/CSS/JS
- **`blog/`**: Jekyll source files for the "Shoals" blog
  - `_posts/`: Markdown blog posts with YYYY-MM-DD-title.md naming
  - `assets/img/`: Images for blog posts, named with date prefixes
  - `_config.yml`: Jekyll configuration with Beautiful Jekyll theme
- **`shoals/`**: Generated static blog output (published version)
- **`sass/`**: SCSS source files that compile to CSS
- **`images/`, `css/`, `js/`, `fonts/`**: Static assets for main site
- **`fold.py`**: Python script for reorganizing blog structure

### Technologies Used
- **Jekyll**: Static site generator for the blog
- **Beautiful Jekyll Theme**: Blog theme (version 6.0.1)
- **Bootstrap**: CSS framework for main site
- **SCSS/Sass**: CSS preprocessing
- **Ruby/Bundler**: Dependency management for Jekyll

### Content Management
- Blog posts use Jekyll frontmatter with specific fields: title, date, author, cover-img, tags, subtitle
- Images follow date-prefixed naming convention (YYYY-MM-DD_filename.ext)
- Blog builds to `../shoals/` directory for GitHub Pages publishing
- Main branch is `gh-pages` (not `main`)

### Publishing Workflow
1. Create new post in `blog/_posts/`
2. Add cover image to `blog/assets/img/`
3. Build with `bundle exec jekyll build -d ../shoals`
4. Commit and push to `gh-pages` branch

### Citation Standards
- Use WorldCat for Chicago-format citations in footnotes
- Follow markdown footnote syntax (`[^note1]`)