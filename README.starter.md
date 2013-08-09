## Quick start

 - [Fork](https://github.com/edrex/reusable-jekyll-site/fork)
 - Rename the fork to **YOURNAME.github.io** in project settings to enable Github Pages (wait 10 minutes for the site to show up).
 - Log in to [prose.io](http://prose.io/) and start editing your new site. Customize the values in `_config.yml` and `index.html`.
 
## Features:

 - 3 steps to start building a site
 - Preconfigured to work with Prose.io
  - Builtin "edit" link on each page
  - Media browse/upload
  - links.jsonp for page to easy page linking
 - Starter template using bootstrap 3, easy to swap out

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

## Need to document:

 - Features
 - Workflow for forking, tracking the starter project
