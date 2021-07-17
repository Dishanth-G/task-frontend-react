import React, { useState, useEffect } from 'react';
import Editor from './Editor'


// Done by Dishanth G - 18BCE1090

function App() {

  // Takes care of the file that is openened in the editor
  const [state, setState] = useState('html')

  // Stores the code typed in index.html
  const [html, setHtml] = useState('')

  // Stores the code typed in index.css
  const [css, setCss] = useState('')

  // Stores the code typed in index.js
  const [js, setJs] = useState('')

  // Stores all the code(HTML,CSS,JS) as one document to show output in iframe
  const [srcDoc, setSrcDoc] = useState('')

  // Whenever any  file (HTML,CSS,JS)changes  the source document is changed accordingly.This helps in hot reloading the iframe
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 150)

    return () => clearTimeout(timeout)
  }, [html, css, js])


  // To make the editor show index.html
  function showhtml(){
    setState('html')
  }


// To make the editor show index.css
  function showcss(){
    setState('css')
  }

// To make the editor show index.js
  function showjs(){
    setState('js')
  }
   
   
  return (

    <>
    {/* Filexplorer pane. Contains 3 buttons to change the file in editor  */}
    <div className="Filexplorer"> 
      <h1>File Explorer</h1>
      <hr></hr>
        <button onClick={showhtml} className="btchng"  >  index.html</button>
        <br />
        <button onClick={showcss} className="btchng">index.css</button>
        <br />
        <button onClick={showjs} className="btchng">index.js</button>  
        <br />
 
        <hr></hr>
        <h3 style={{textAlign:"center"}}>Done by  </h3>
        
        <h3 style={{textAlign:"center"}}>Dishanth G 18BCE1090</h3>
    </div>
    
    {/* Contains the code editor and live view pane */}
    <div className="Codedit">  

    {/* Editor Components.Based on the file that is clicked  from the explorer the appropriate editor is opened*/}
      <div className="pane top-pane">

        {/* Opens index.html */}
        {state=== 'html' && 
        <Editor
          language="xml"
          displayName="index.html"
          value={html}
          onChange={setHtml}
        />}

        {/* Opens index.css */}
        {state=== 'css' && <Editor
          language="css"
          displayName="index.css"
          value={css}
          onChange={setCss}
        /> }

        {/* Opens index.js */}        
        {state=== 'js' &&
        <Editor
          language="javascript"
          displayName="index.js"
          value={js}
          onChange={setJs}
        />}
      </div>

      
      {/* live view Component. Contains the iframe with the srcdocument code to show the output */}
      <div className="pane">
      
      <br/>
        <iframe
          srcDoc={srcDoc}
          title="output"
          // dont allow cookies 
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
    </>
  )
}

export default App;