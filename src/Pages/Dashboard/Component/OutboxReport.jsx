import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { data } from "../Component/Data/DataOutbox";

const OutboxReport = () => {
  const [columns, setColumns] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColumns([
        {
          name: "Id",
          selector: (row) => row.id,
          sortable: true,
        },
        {
          name: "Name",
          selector: (row) => row.name,
          sortable: true,
        },
        {
          name: "Age",
          selector: (row) => row.age,
          sortable: true,
        },
        {
          name: "Country",
          selector: (row) => row.country,
          sortable: true,
        },
        {
          name: "Action",
          selector: (row) => row.action,
          sortable: true,
        },
      ]);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const [records, setRecords] = useState(data);

  const handleChangeName = (e) => {
    let querry = e.target.value;
    let newrecords = data.filter((item) =>
      item.name.toLocaleLowerCase().includes(querry.toLocaleLowerCase())
    );
    setRecords(newrecords);
  };

  //  Internally, customStyles will deep merges your customStyles with the default styling.
  const customStyles = {
    rows: {
      style: {
        minHeight: "55px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "25px", // override the cell padding for head cells
        paddingRight: "25px",
        backgroundColor: "#f15f4d",
        fontSize: "18px",
        fontWeight: "700",
        color: "#fff",
      },
    },
    cells: {
      style: {
        paddingLeft: "25px", // override the cell padding for data cells
        paddingRight: "25px",
        fontSize: "15px",
        fontWeight: "600",
      },
    },
    pagination: {
      style: {
        fontSize: "16px", // Adjust text size
        color: "#333", // Text color
        fontWeight: "500",
        borderTop: "2px solid #ddd", // Border styling
      },
      pageButtonsStyle: {
        border: "none",
        backgroundColor: "#f0f0fe", // Button color
        color: "white",
        fontSize: "14px",
        padding: "5px 10px",
        cursor: "pointer",
        borderRadius: "5px",
        margin: "2px",
      },
    },
  };

  return (
    <>
      <div className="dataWrapper">
        <div className="card br-25">
          <div className="card-body">
            <div className="searchHeadFlex">
              <h4>Outbox</h4>
              <div className="searchData">
                <h6 className="mb-0 me-2">Search : </h6>
                <input
                  className="inputSearch"
                  type="text"
                  placeholder="search by name"
                  onChange={handleChangeName}
                />
              </div>
            </div>

            <div className="dataDiv">
              <DataTable
                columns={columns}
                data={records}
                progressPending={pending}
                customStyles={customStyles}
                pagination
            
                striped
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutboxReport;
