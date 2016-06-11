A smart and small starter for building a Jekyll website to host on Github Pages. It's less about themes and such and more about providing smart, well-documented default configuration. Features:

 - Links to "edit this page" in [Prose.io](http://prose.io) or Github. Anyone can suggest a change, which you will see as a pull request. 
 - Links to "create this page" on the "404 Not Found" page, which enables **wiki-style linking**!
 - [Pre-configured](https://github.com/prose/prose/wiki/Prose-Configuration) for prose:
   - Browse/search pages when creating a link ([links.jsonp](links.jsonp))
   - Browse/upload media from the post editor (`media` key in [_config.yml](_config.yml))
   - Sample [metadata fields](https://github.com/prose/prose/wiki/Prose-Configuration#metadata-configuration) for post tagging etc.
 - Bootstrap. Remove it if you like.

## Quick start

 - Fork this repo.
 - Rename the fork to **YOURNAME.github.io** in project settings to enable Github Pages.
 - Delete the [CNAME](CNAME) file.
 - Verify that your new site is up.
 - Read through [_config.yml](_config.yml) and customize the name, description, etc.
 
## Reference

   - [Jekyll](http://jekyllrb.com/docs/home/)
   - [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
   - [Kramdown](http://kramdown.gettalong.org/converter/html.html)
   - [Github Pages](https://help.github.com/articles/using-jekyll-with-pages)
   - [Prose](https://github.com/prose/prose/wiki/Getting-Started)
   - [Bootstrap 3](http://getbootstrap.com/)

## FAQs

### Why are there two branches, master and gh-pages?

Github pages uses the master branch if you name your project **YOURNAME.github.io**. Otherwise, it uses the **gh-pages** branch, and serves your site at **YOURNAME.github.io/PROJECTNAME`. I keep both branches up to date so you can use it either way without creating a branch.

You will have to remove CNAME though, see [Quick start](#Quick start).

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

**Warning:** You might end up with merge conflicts once you've customized your site, which you'll have to resolve manually.

You can [merge](http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging) my changes into your branch.

Here are the basic steps, using a local checkout of your repo:

* Add me as a remote:

  ```
  git remote add reusable git@github.com:edrex/reusable-jekyll-site.git
  git fetch reusable
  ```

* Merge, resolving conflicts as needed:
  
  ```
  git merge reusable/master master
  ```

Alternatively, if you know which commits contain the features you want, you might want to [cherry-pick](http://git-scm.com/docs/git-cherry-pick) just those commits.
