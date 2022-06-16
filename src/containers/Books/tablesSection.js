import React from "react";
import DataTables from "components/DataTables";

const TablesSection = ({ data }) => {
  const header = [
    {
      label: "Title",
      key: "title",
    },
    {
      label: "Content",
      key: "content",
    },
  ];
  return <DataTables header={header} datasource={data} />;
};

export default TablesSection;
