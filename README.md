# billmorris.io

My homepage

## How to post to the blog
(Because I'm always forgetting the key stuff)

### Create a new shell post
```
cd blog

DATE_ISO=$(date +%Y-%m-%d)
echo "---
layout: post
title: \"MyTitle\"
date: \"${DATE_ISO}T12:00:00-04:00\"
author: \"Bill Morris\"
cover-img: \"/assets/img/${DATE_ISO}_cover.png\"
tags: [\"tag1\", \"tag2\"]
subtitle: \"Punchy lead-in\"
---
" > _posts/${DATE_ISO}-post-name.md
```

Add content to the new file, save the post.

### Adding a cover image

Be sure to add a cover image by using the `cover-img:` tag in the metadata header of the post. Add a string with the relative URL of whatever image best suits the post.

### Citing publications

When adding footnotes in the markdown syntax (`[^note1]`, etc), refer to [WorldCat](https://www.worldcat.org/title/49206476) to easily copy Chicago-format citations.

### Adding a bunch of gifs

If you've got a bunch of `.mp4` files from, say, a Twitter archive, you can convert them all at once to gifs with these parameters:

```sh
for m in $(ls *.mp4); do
  g="${m%.*}"
  ffmpeg -itsscale 0.3 \
    -i $m \
    -vf "fps=5,scale=600:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
    -loop 0 \
    ${g}.gif
done
```

### Publishing a new post

```
jekyll build -d ../shoals
```

. . . and push the result to github.
