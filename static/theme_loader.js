(function() {
  let styleEl = document.createElement('link')
  styleEl.rel = 'stylesheet'
  if (!localStorage.getItem('customThemeName'))
    localStorage.setItem('customThemeName', 'default')
  styleEl.href = `themes/${localStorage.getItem('customThemeName')}.css`
  document.head.appendChild(styleEl)
})();
