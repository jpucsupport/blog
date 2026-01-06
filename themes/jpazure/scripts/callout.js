/**
 * Callout Plugin for Hexo
 * Converts GitHub-style callout syntax to styled HTML
 * Syntax: > [!TYPE]\n> content
 */

hexo.extend.filter.register('before_post_render', function(data) {
  // Define callout types with their CSS class and icon
  const calloutTypes = {
    NOTE: ['note', 'ℹ️'],
    TIP: ['tip', '💡'],
    IMPORTANT: ['important', '❗'],
    WARNING: ['warning', '⚠️'],
    CAUTION: ['caution', '🔴']
  };
  
  // Match pattern: > [!TYPE] followed by blockquote lines
  const calloutPattern = /^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*\n((?:>\s*.*\n?)*)/gmi;
  
  data.content = data.content.replace(calloutPattern, (match, type, blockquoteContent) => {
    const typeUpper = type.toUpperCase();
    const [cssClass, icon] = calloutTypes[typeUpper];
    
    // Remove '>' from blockquote lines and trim
    const cleanContent = blockquoteContent.replace(/^>\s?/gm, '').trim();
    
    // Render markdown content to HTML
    const renderedContent = hexo.render.renderSync({
      text: cleanContent,
      engine: 'markdown'
    });
    
    // Return styled callout HTML
    return `<div class="markdown-alert markdown-alert-${cssClass}">
  <p class="markdown-alert-title">${icon} ${type}</p>
  ${renderedContent}
</div>`;
  });
  
  return data;
});
