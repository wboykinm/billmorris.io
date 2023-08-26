# A script to reorganize my hugo-based blog structure

import os
import shutil

# set up the tmp directory
#os.mkdir("tmp_blog")
#os.mkdir("tmp_blog/images")

# Crawl the existing posts and restructure them
for direntry in os.scandir("blog/content/posts/"):
    if direntry.is_dir():
        dir = direntry.name
        date = dir.split('_')[0]
        for image in os.scandir(f"blog/content/posts/{dir}/images/"):
            # Move the images
            img_name_old = image.name
            img_name_new = f"{date}_{img_name_old}"
            os.rename(f"blog/content/posts/{dir}/images/{img_name_old}",f"tmp_blog/images/{img_name_new}")

        # Point the html to the new images
        with open(f"blog/content/posts/{dir}/index.md", "r") as file :
            filedata = file.read()

        filedata = filedata.replace("images/", f"images/{date}_")

        with open(f"blog/content/posts/{dir}.md", "w") as file:
            file.write(filedata)

        # Remove the old structure
        shutil.rmtree(f"blog/content/posts/{dir}/")