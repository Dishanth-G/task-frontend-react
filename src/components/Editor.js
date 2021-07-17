import React from 'react'
import 'codemirror/lib/codemirror.css'

import 'codemirror/theme/mbo.css'

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'


export default function Editor(props) {
  // Contains  language name,filename,code and onchange function to change the content
  const {
    language,
    displayName,
    value,
    onChange
  } = props

// To change the code
  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (

    <div className={`editor-container `}>
      {/* To display filename */}
      <div className="editor-title">
    {displayName}
       
       {/* Editor */}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'mbo',
          lineNumbers: true
        }}
        
      />
      
    </div>

    
  )
}