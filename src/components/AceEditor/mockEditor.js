var ace = require('brace')
// var Mock = require('mockjs')
// var json5 = require('json5')
require('brace/mode/json')
require('brace/theme/solarized_light')

// const MockExtra = require('common/mock-extra.js')

function init(options = {}) {
  validateOptions(options)

  const { container, data = '', readonly = false } = options

  var editor = ace.edit(container)
  editor.getSession().setMode('ace/mode/json')
  editor.setTheme('ace/theme/solarized_light')
  if (readonly) {
    editor.setReadOnly(readonly)
    editor.renderer.$cursorLayer.element.style.display = 'none'
  }
  editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: false,
    enableLiveAutocompletion: true,
    useWorker: true
  })

  const mockEditor = {
    curData: {},
    getValue: () => mockEditor.curData.text,
    setValue: function(data) {
      editor.setValue(handleData(data))
    },
    editor: editor,
    options: options,
    insertCode: code => {
      let pos = editor.selection.getCursor()
      editor.session.insert(pos, code)
    }
  }

  function handleJson(json) {
    try {
      var obj = JSON.parse(json)
      mockEditor.curData = obj
    } catch (e) {
      console.log(e)
    }
  }

  function formatJson(json) {
    try {
      return JSON.stringify(JSON.parse(json), null, 2)
    } catch (err) {
      return json
    }
  }

  function handleData(data) {
    data = data || ''
    if (typeof data === 'string') {
      return formatJson(data)
    } else if (typeof data === 'object') {
      return JSON.stringify(data, null, '  ')
    } else {
      return '' + data
    }
  }

  mockEditor.setValue(handleData(data))
  // handleJson(editor.getValue())

  editor.clearSelection()

  editor.getSession().on('change', () => {
    handleJson(editor.getValue())
    if (typeof options.onChange === 'function') {
      options.onChange.call(mockEditor, mockEditor.curData)
    }
    editor.clearSelection()
  })
  return mockEditor
}

function validateOptions(options) {
  if (!options.container) throw new Error('编辑器容器元素必传')
}

export default init
