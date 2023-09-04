# billmorris.io

My homepage

## How to post to the blog
(Because I'm always forgetting the key stuff)

### Create a new shell post
```
cd blog
echo "
---
layout: post
title: "MyTitle"
date: "YYYY-MM-DDTHH:MM:SS-04:00"
author: "Bill Morris"
cover-img: "/assets/img/YYYY-MM-DD_cover.png"
tags: ["tag1", "tag2"]
subtitle: "Punchy lead-in"
---
" > _posts/YYYY-MM-DD-post-name.md
```

Add content to the new file, save the post.

### Adding a cover image

Be sure to add a cover image by using the `image:` tag in the metadata header of the post. Add a string with the relative URL of whatever image best suits the post.

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
