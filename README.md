# billmorris.io

My homepage

## How to post to the blog
(Because I'm always forgetting the key stuff)

### Create a new shell post
```
cd blog
hugo new posts/YYYY-MM-DD_post-name/index.md
```

Add content, save the post.

### Adding a cover image

Be sure to add a cover image by using the `cover=` tag in the metadata header of the post. Add a string with the relative URL of whatever image best suits the post.

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

### Embedding Mastodon content

Use the following shortcode example [for embedding toots](https://www.brycewray.com/posts/2022/06/static-mastodon-toots-hugo/):

`{{< stoot "mastodon.social" "108335994944738270" >}}`

### Publishing a new post

```
hugo -d ../shoals
```

. . . and push the result to github.
