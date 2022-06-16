import React from "react";
import DataTables from "components/DataTables";
import { FiEdit } from "react-icons/fi";

const TableCategories = ({ data, BtnGetBooks }) => {
  const header = [
    {
      label: "ID",
      key: "id",
    },
    {
      label: "Nama",
      key: "name",
    },
    {
      label: "Aksi",
      key: "aksi",
      className: "text-center",
    },
  ];

  const revampData = () => {
    let newData;

    if (data.length > 0) {
      newData = data.map((item) => ({
        ...item,
        aksi: (
          <button className="btn" onClick={() => BtnGetBooks(item.id)}>
            <FiEdit />
          </button>
        ),
      }));
    } else newData = [];

    return newData;
  };

  return <DataTables header={header} datasource={revampData()} />;
};

export default TableCategories;
