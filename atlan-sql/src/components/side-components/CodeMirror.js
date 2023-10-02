import EditorPanel from "./Edit";
import { useContext } from "react";
import MainContext from "../../MainContext";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/addon/display/autorefresh";
import "codemirror/keymap/sublime";
import "codemirror/theme/neo.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/mode/sql/sql";
import "codemirror/keymap/sublime";
import "codemirror/addon/hint/sql-hint.js";

const Editor = () => {
  const { query, setQuery } = useContext(MainContext);

  return (
    <div className='editor'>
      <div className='editor__row'>
        <div className='editor__col--main'>
          <CodeMirror
            value={query}
            name='Editor'
            onBeforeChange={(editor, data, value) => setQuery(value)}
            className='editor__code-mirror-wrapper'
            options={{
              lint: true,
              mode: "sql",
              lineNumbers: true,
              keyMap: "sublime",
              matchBrackets: true,
              addModeClass: true,
              showHint: true,
            }}
            aria-label='code-editor'
          />
          <p style={{ fontSize: "0.8rem" }} className='editor__note'>
            <strong>NOTE: </strong>Click on a Previously Saved Query to Begin.
          </p>
        </div>
        <div className='editor__col--panel'>
          <EditorPanel />
        </div>
      </div>
    </div>
  );
};

export default Editor;
