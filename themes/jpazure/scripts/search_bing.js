'use strict';

function bingSearchFormHelper(options = {}) {
  const config = this.config;
  const className = options.class || 'search-form';
  const text = options.hasOwnProperty('text') ? options.text : 'Search';
  const onsubmit = "var f=this;if(f['q'].value){var searchUrl =  'https://www.bing.com/search?q=' +  encodeURIComponent(f['q'].value + ' site:' + f['sitesearch'].value) ;window.open(searchUrl, 'blank') };return false;"
  return `<form action="//www.bing.com/search" method="get" accept-charset="UTF-8" name="bing-search" onsubmit="${onsubmit}" class="${className}"><input type="search" name="q" class="${className}-input"${text ? ` placeholder="${text}"` : ''}><button type="submit" id="nav-search-btn" class="${className}-submit"></button><input type="hidden" name="sitesearch" value="${config.url}"></form>`;
}

hexo.extend.helper.register('bing_serch_form', bingSearchFormHelper);
