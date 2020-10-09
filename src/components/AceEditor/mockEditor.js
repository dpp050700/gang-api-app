var ace = require('brace')
require('brace/mode/json')
require('brace/theme/solarized_light')

function init(options) {
  const { container } = options
  var editor = ace.edit(container)
  editor.getSession().setMode('ace/mode/json')
  editor.setTheme('ace/theme/solarized_light')
  editor.setReadOnly(true)
  editor.renderer.$cursorLayer.element.style.display = 'none'
  editor.setValue(['{', ' "language": "JSON",', ' "foo": "bar",', ' "trailing": "comma"', '}'].join('\n'))
  editor.clearSelection()

  return editor
}

export default init
