// https://github.com/davidchambers/doctest

/* sourcePath :: string -> string

Given a site path, suggest a source repo path

> sourcePath('/foo/')
'foo/index.md'
> sourcePath('/foo.html')
'foo.md'
> sourcePath('/foo/bar')
'foo/bar.md'
> sourcePath('/foo.bar')
'foo.bar' */
function sourcePath(path) {
  path = path.substring(1)
  var m
  if (m = path.match(/^(.*)\/$/)) {
    return m[1] + '/index.md'
  }
  if (m = path.match(/^(.*)\.html$/)) {
    return m[1] + '.md'
  }
  if (m = path.match(/^(.*\/)?[^\.\/]+$/)) {
    return path + '.md'
  }
  return path
}

function editorForPath(path, repo, branch) {
  return 'http://prose.io/#'+repo+'/edit/'+branch+'/'+sourcePath(path)
  // return 'https://github.com/'+repo+'/new/'+branch+'?filename='+encodeURIComponent(sourcePath(path))
}
