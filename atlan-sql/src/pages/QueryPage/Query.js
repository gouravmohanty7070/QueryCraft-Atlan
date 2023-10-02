import { useMemo, useState } from "react";
import "./Query.css";
import SideBar from "../../components/side-components/SideBar";
import CodeMirror from "../../components/side-components/CodeMirror";
import Output from "../../components/side-components/OutputBar";
import MainContext from "../../MainContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Editor() {
  const [query, setQuery] = useState("SELECT * FROM internetData;");
  const [queryHistory, setQueryHistory] = useState({
    saved: ["SELECT * FROM internetData;", "SELECT id, first_name, last_name FROM internetData;"],
    history: ["SELECT * FROM internetData;"],
    outputData: [],
  });

  const contextValue = useMemo(
    () => ({ query, setQuery, queryHistory, setQueryHistory }),
    [query, queryHistory]
  );

  return (
    <div className='editor'>
      <MainContext.Provider value={contextValue}>
        <div className='editor__content'>
          <div className='editor__row'>
            <div className='editor__col--3'>
              <SideBar />
            </div>
            <div className='editor__col--9 editor__col--12-mobile editor__area'>
              <CodeMirror />
              <Output />
            </div>
          </div>
        </div>
      </MainContext.Provider>
    </div>
  );
}

export default Editor;
