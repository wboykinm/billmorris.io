# billmorris.io

My homepage

## How to post to the blog
(Because I'm always forgetting the key stuff)

### Create a new shell post
```
cd blog
hugo new posts/my-post-whatever.md
```

Add content, save the post.

### Adding a cover image

Be sure to add a cover image by using the `cover=` tag in the metadata header of the post. Add a string with the relative URL of whatever image best suits the post.

### Embedding Mastodon content

Use the following shortcode example [for embedding toots](https://www.brycewray.com/posts/2022/06/static-mastodon-toots-hugo/):

`{{< stoot "mastodon.social" "108335994944738270" >}}`

### Publishing a new post

```
hugo -d ../shoals
```

. . . and push the result to github.
