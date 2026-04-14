var execSync = require('child_process').execSync;
var path = require('path');

hexo.extend.filter.register('before_post_render', function(data) {
  // Map post source path back to articles/ path
  // post.source is like "_posts/teams/Title.md"
  var relativePath = data.source.replace(/^_posts\//, '');
  var articlesPath = path.join('articles', relativePath);

  try {
    var gitDate = execSync(
      'git log -1 --format=%cI -- "' + articlesPath + '"',
      { encoding: 'utf8', timeout: 5000 }
    ).trim();

    if (gitDate) {
      data.updated = new Date(gitDate);
    } else {
      data.updated = data.date;
    }
  } catch (e) {
    data.updated = data.date;
  }
  return data;
});
