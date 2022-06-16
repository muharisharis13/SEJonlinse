import React, { useEffect, useState } from "react";
import DataTables from "components/DataTables";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const TableBooks = ({
  data,
  HandlerCloseOpenModal,
  btnSaveBookmarks,
  activeModalBookmark,
}) => {
  const [bookmark, setBookmark] = useState([]);
  const header = [
    {
      label: "Cover",
      key: "cover_url",
    },
    {
      label: "Authors",
      key: "authors",
    },
    {
      label: "Title",
      key: "title",
    },
    {
      label: "Descriptions",
      key: "description",
    },
    {
      label: "View",
      key: "view",
    },
    {
      label: "Save",
      key: "save",
    },
  ];
  const getBookmark = () => JSON.parse(localStorage.getItem("bookmark"));

  useEffect(() => {
    setBookmark(getBookmark());
  }, []);

  const revampData = () => {
    let newData;

    if (data.length > 0) {
      newData = data.map((item) => ({
        ...item,
        authors: item.authors[0],
        cover_url: (
          <img
            width={50}
            height={50}
            src={item.cover_url}
            alt={item.cover_url}
          />
        ),
        view: (
          <button
            className="btn btn-primary"
            onClick={() => HandlerCloseOpenModal("open", item.id)}
          >
            View
          </button>
        ),
        save: (
          <button className="btn" onClick={() => btnSaveBookmarks(item.id)}>
            {bookmark?.find((find) => find.id === item.id) ? (
              <BsBookmarkFill />
            ) : (
              <BsBookmark />
            )}
          </button>
        ),
      }));
    }

    return newData;
  };

  return (
    <DataTables
      header={
        activeModalBookmark
          ? header.filter(
              (filter) => filter.key !== "save" && filter.key !== "view"
            )
          : header
      }
      datasource={revampData()}
    />
  );
};

export default TableBooks;
