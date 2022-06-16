import React, { useEffect, useCallback, useState } from "react";
import TableCategories from "./TableCategories";
import api from "apis/categories";
import { useNavigate } from "react-router-dom";
import ModalBookmark from "./ModalBookmark";

const CateoriesContainer = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 1,
      name: "Happiness & Mindfulness",
    },
    {
      id: 11,
      name: "Career & Business",
    },
    {
      id: 12,
      name: "Productivity & Time Management",
    },
    {
      id: 19,
      name: "Society & Politics",
    },
    {
      id: 21,
      name: "Investment & Finance",
    },
  ]);
  const [bool, setBool] = useState({
    modal: false,
  });

  const getData = useCallback(async () => {
    await fetch(
      `https://www.google.com/url?q=https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories&sa=D&source=apps-viewer-frontend&ust=1655470303034589&usg=AOvVaw0IGY_hI_g8B4Qscfm_qorE&hl=en`,
      {
        headers: {
          mode: "no-cors",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
    await api.getCategories().then((res) => {
      console.log("data", res.data);
      if (res.data) {
        setData(res.data);
      }
    });
  }, []); // eslint-disable-next-line

  useEffect(() => {
    getData();
  }); // eslint-disable-next-line

  const BtnGetBooks = (id) => {
    navigate(`/book?categoryId=${id}`);
  };

  const btnShowModal = (name) => {
    switch (name) {
      case "close":
        setBool((state) => ({
          ...state,
          modal: false,
        }));
        break;
      case "open":
        setBool((state) => ({
          ...state,
          modal: true,
        }));
        break;

      default:
        break;
    }
  };

  const getBookmark = () => JSON.parse(localStorage.getItem("bookmark"));

  return (
    <div className="container">
      {/* title */}

      <h1 className="text-center">Categories List</h1>

      <div className="mt-5">
        <div className="wrap-button mb-3">
          <div className="btn btn-primary" onClick={() => btnShowModal("open")}>
            Bookmark
          </div>
        </div>
        <TableCategories data={data} BtnGetBooks={BtnGetBooks} />
      </div>

      <ModalBookmark
        show={bool.modal}
        onHide={() => btnShowModal("close")}
        data={getBookmark()}
      />
    </div>
  );
};

export default CateoriesContainer;
