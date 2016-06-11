A smart and small starter kit for building a Jekyll website to host on Github Pages. It's less about themes and more about providing solid defaults and editing workflows:

 - Wiki-style editing using [Prose](http://prose.io#edrex/reusable-jekyll-site/edit/master/README.md) or Github (user choice)
   - **Edit this page** from any page.
   - **Create this page** from the *404 Not Found* page.
 - [Pre-configured](https://github.com/prose/prose/wiki/Prose-Configuration) for Prose:
   - Browse/search pages when creating a link, via [links.jsonp](links.jsonp)
   - Browse/upload media from the post editor (`media` key in [_config.yml](_config.yml))
   - Sample [metadata fields](https://github.com/prose/prose/wiki/Prose-Configuration#metadata-configuration) for post tagging etc.
 - Bootstrap. Remove it if you like.

## Quick start

 1. Fork this repo.
 2. Rename the fork to **YOURNAME.github.io** in project settings to enable Github Pages.
 3. Delete the [CNAME](CNAME) file.

At this point your new site should be up!

To finish, go through [_config.yml](_config.yml) and customize the name, description, etc.

## References

   - [Jekyll](http://jekyllrb.com/docs/home/)
   - [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
   - [Kramdown](http://kramdown.gettalong.org/converter/html.html)
   - [Github Pages](https://help.github.com/articles/using-jekyll-with-pages)
   - [Prose](https://github.com/prose/prose/wiki/Getting-Started)
   - [Bootstrap 3](http://getbootstrap.com/)

## FAQs

### Why are there two branches, master and gh-pages?

Github pages uses the `master` branch if you name your project `YOURNAME.github.io`. Otherwise, it uses the `gh-pages` branch, and serves your site at `YOURNAME.github.io/PROJECTNAME`. I keep both branches up to date so you can use it either way without creating a branch. After you fork, you can delete the unused branch to avoid confusion.

### Why don't my edits show up immediately?

Github Pages caches pages for 10 minutes whenever they are accessed. If you make a change while the page is cached, you will still see the old page until the cached page expires.

To bypass the cache, add a "cache-busting" query string after the URL, like so: 

    `http://mysite.github.io/my-page?somerandomstring`.

### How do I troubleshoot build failures?

If you have an error in one of your pages or templates, the new version will fail to build and Github will send you an email lacking any detail about what caused the failure. 

To see the error you can [run Jekyll locally](http://jekyllrb.com/docs/quickstart/) on a workstation.

### How can I enable SSL on Github Pages with a custom domain?

Front Github pages with a free Cloudflare account, as detailed in [this article](https://www.benburwell.com/posts/configuring-cloudflare-universal-ssl/).

### How can I pull in future improvements after I fork?

Probably the most reliable way is to manually copy any new bits you want. If you're comfortable with [`git merge`](http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging) or [`git cherry-pick`](http://git-scm.com/docs/git-cherry-pick), you can use these and then fix any merge conflicts by hand.
