import { useContext, useState } from "react";
import MainContext from "../../MainContext";
import ColumnDetails from "./ColumnDetails";
import Table from "./Table";
import { CSVLink } from "react-csv";

const Output = () => {
  const [tab, setTab] = useState(0);
  const { queryHistory } = useContext(MainContext);

  const exportData = () => {
    console.log("Data to be exported");
  };

  return (
    <div className='output__results'>
      {queryHistory.outputData.length > 0 ? (
        <>
          <div className='output__tab-bar'>
            <span
              className={`output__tabs ${tab === 0 ? "output__active" : ""} output__cursor-pointer`}
              onClick={() => setTab(0)}
            >
              Output
            </span>
            <span
              className={`output__tabs ${tab === 1 ? "output__active" : ""} output__cursor-pointer`}
              onClick={() => setTab(1)}
            >
              Table Data
            </span>
          </div>
          <div className='output__details'>
            <p className='output__text'>
              <span>
                {tab === 0
                  ? queryHistory.outputData.length
                  : Object.keys(queryHistory.outputData[0]).length}
              </span>{" "}
              rows in Set
              <span className='output__time'>
                {" "}
                (0.03sec)
              </span>
            </p>
            <div className='output__export-btn'>
              <CSVLink
                data={queryHistory.outputData}
                filename={"dataOutput.csv"}
              >
                <button onClick={exportData}>
                  Export <span className='fa fa-download'></span>
                </button>
              </CSVLink>
            </div>
          </div>
          {tab === 0 ? (
            <Table result={queryHistory.outputData}></Table>
          ) : (
            <ColumnDetails result={queryHistory.outputData} />
          )}
        </>
      ) : (
        <div className='output__placeholder'>
          <span className='fa fa-play'></span>
          <p>Run Something &#38; Your Output Shall Appear!</p>
        </div>
      )}
    </div>
  );
};

export default Output;
