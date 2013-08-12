This is a starter project for people making Jekyll sites for hosting in Github Pages and editing with Prose.io

## Quick start

 - [Fork](https://github.com/edrex/reusable-jekyll-site/fork)
 - Rename the fork to **YOURNAME.github.io** in project settings to enable Github Pages.
 - Wait 10 minutes for the site to show up.
 - You can edit your site using [Prose](http://prose.io/) or Github.

## Next steps

 - Customize [_config.yml](_config.yml) and [index.html](index.html).
 - Check out the docs:
   - [Jekyll](http://jekyllrb.com/docs/home/)
   - [Github Pages](https://help.github.com/articles/using-jekyll-with-pages)
   - [Bootstrap 3](http://getbootstrap.com/)

## Features:

 - Preconfigured for Prose.io
  - Each page includes an edit link
  - Insert and upload images into your posts
  - links.jsonp for page to easy page linking
 - Includes a simple layout using Bootstrap 3

## FAQs

### Why don't my changes show up immediately on the live site?

Github Pages uses a Varnish cache with a 10 minute expiration. When you access a page which isn't cached, the latest version will be rendered and cached. If you make a change in the following 10 minutes, you will continue to see the old version until the cache expires. 

You can get around this when you are editing by adding a cache-busting query string after the URL. For example, `http://mysite.github.io/my-page?somerandomstring`. You will need to rotate the random string each time you access the page.

Note that this is only a problem in development.

### How can I pull in the latest changes from the reusable project?

 1. Add my repo as a remote:
 
    ```
    git remote add reusable git@github.com:edrex/reusable-jekyll-site.git
    git fetch reusable
    ```

 2. Either merge or rebase. In either case there may be merge conflicts in any existing files that you have modified.
   * To merge my branch into yours:

       ```
       git merge reusable/master master
       git push origin master
       ```
   * To rebase your changes on my branch, destructively overwriting your branch:
 
       ```
       git rebase reusable/master master
       git push -f origin master
       ```
