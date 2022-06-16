import React, { useState, useEffect } from "react";
import TableBooks from "./tableBooks";
import api from "apis/categories";
import queryString from "query-string";
import ModalListSection from "./modalListSection";
import { useNavigate } from "react-router-dom";

const dataLocal = [
  {
    id: 110000,
    title: "The Intelligent Investor",
    category_id: 12,
    authors: ["Benjamin Graham"],
    cover_url:
      "https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur vo",
    sections: [
      {
        title: "Intro",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      },
      {
        title: "The story of Mr. Market",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
      },
      {
        title: "Are you a speculator?",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed od",
      },
      {
        title: "The basic principles",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n       obcaecati tenetur ",
      },
      {
        title: "Starting your career",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n       obcaecati t",
      },
      {
        title: "Ending your career",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat i",
      },
      {
        title: "Final notes",
        content: "Lorem ipsum dolor s",
      },
    ],
    audio_length: 840,
  },
  {
    id: 110001,
    title: "Eat to Live",
    category_id: 12,
    authors: ["Joel Fuhrman"],
    cover_url:
      "https://cdn.sejutacita.id/60594de91882d200135bd833/Booku/bec21735-9392-4694-9805-1ba929f03f1b.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Max",
    sections: [
      {
        title: "Eat high-nutritious food",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
      },
      {
        title: "The societal myths",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut",
      },
      {
        title: "The daily menu",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam",
      },
      {
        title: "The benefetial impacts",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n      ",
      },
      {
        title: "The implementation",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
      },
      {
        title: "Final notes",
        content: "Lorem ipsum dolor sit ",
      },
    ],
    audio_length: 3972,
  },
  {
    id: 110002,
    title: "Ikigai",
    category_id: 12,
    authors: ["Héctor Garcia", "Francesc Miralles"],
    cover_url:
      "https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/f64e0881-ec81-4f45-bdb6-3b9a51af788d.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga ",
    sections: [
      {
        title: "Intro",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      },
      {
        title: "Defining ikigai and its rules",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident sim",
      },
      {
        title: "From logotherapy to ikigai",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut",
      },
      {
        title: "From flow to ikigai",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam",
      },
      {
        title: "Final notes",
        content: "Lorem ipsum dolor sit ",
      },
    ],
    audio_length: 1439,
  },
  {
    id: 110003,
    title: "The Little Book of Hygge",
    category_id: 12,
    authors: ["Meik Wiking"],
    cover_url:
      "https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/703096ac-3749-41b0-8637-e37d9e29179e.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commo",
    sections: [
      {
        title: "Intro",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molesti",
      },
      {
        title: "Defining Hygge",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
      },
      {
        title: "The right lighting",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut",
      },
      {
        title: "Food and drink as fundamental elements",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam",
      },
      {
        title: "When you are around",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n      ",
      },
      {
        title: "Riding a bike",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
      },
      {
        title: "Hygge is a concept that can be applied",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
      },
      {
        title: "Final notes",
        content: "Lorem ipsum dolor sit ",
      },
    ],
    audio_length: 7860,
  },
  {
    id: 110004,
    title: "The Mastery of Love",
    category_id: 12,
    authors: ["Don Miguel Ruiz"],
    cover_url:
      "https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/2480465a-cc48-437f-a243-ead4722b27b8.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n      ",
    sections: [
      {
        title: "Intro",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molesti",
      },
      {
        title: "The accumulation",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
      },
      {
        title: "You need to wake up",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut",
      },
      {
        title: "Domestication",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam",
      },
      {
        title: "Shifting from fear to love",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n      ",
      },
      {
        title: "Finding the right person",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
      },
      {
        title: "Three elements for healing",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
      },
      {
        title: "Final notes",
        content: "Lorem ipsum dolor sit ",
      },
    ],
    audio_length: 481,
  },
];

const BooksContainer = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(dataLocal);
  const [dataTmp, setDataTmp] = useState(dataLocal);
  const [params, setParams] = useState({
    categoryId: null,
    id: null,
  });
  const [bool, setBool] = useState({
    modal: false,
  });
  const [search, setSearch] = useState("");

  const getData = React.useCallback(() => {
    api.getBooks(params).then((res) => {
      if (res.data) {
        setData(res.data);
      }
    });
  }, [params]); // eslint-disable-next-line

  const parseQueryfromURL = React.useCallback(() => {
    let urlParams = queryString.parse(window.location.search);
    setParams((state) => ({
      ...state,
      ...urlParams,
    }));
  }, []); // eslint-disable-next-line

  useEffect(() => {
    parseQueryfromURL();
    getData();
  }); // eslint-disable-next-line

  const HandlerCloseOpenModal = (name, id) => {
    setParams((state) => ({
      ...state,
      id: id,
    }));
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

  const getDetailSection = () => {
    let DataDetail = data.find((find) => find.id === params.id)?.sections;

    return DataDetail;
  };

  const getBookmark = () => JSON.parse(localStorage.getItem("bookmark"));
  const setBookmark = (data) =>
    localStorage.setItem("bookmark", JSON.stringify(data));

  const btnSaveBookmarks = (id) => {
    let dataBook = data.find((find) => find.id === id);
    let listBook = [];

    console.log(getBookmark());
    if (getBookmark()) {
      if (getBookmark()?.find((filter) => filter.id === id)) {
        setBookmark(getBookmark().filter((filter) => filter.id !== id));
      } else {
        listBook = getBookmark();
        listBook.push(dataBook);
        setBookmark(listBook);
      }
    } else {
      listBook.push(dataBook);
      setBookmark(listBook);
    }
    window.location.reload();
  };

  const onChangeSearch = (e) => {
    let value = e.target.value;
    let filter = data.filter((item) => {
      const query = value;
      return (
        item.authors[0].toLowerCase().indexOf(query) >= 0 ||
        item.authors[0].indexOf(query) >= 0 ||
        item.title.toLowerCase().indexOf(query) >= 0 ||
        item.title.indexOf(query) >= 0
      );
    });
    setDataTmp(filter);
    setSearch(value);
  };

  return (
    <div className="container">
      <h3 className="text-center">List Books</h3>

      <div className="mt-5">
        <div className="mb-3">
          <div className="row justify-content-between">
            <div className="col-md-4 col-sm-12">
              <button className="btn btn-danger" onClick={() => navigate("/")}>
                Back
              </button>
            </div>
            <div className="col-md-4 col-sm-12">
              <input
                type="text"
                className="form-control"
                onChange={onChangeSearch}
                value={search}
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <TableBooks
          data={dataTmp}
          HandlerCloseOpenModal={HandlerCloseOpenModal}
          btnSaveBookmarks={btnSaveBookmarks}
        />
      </div>

      <ModalListSection
        show={bool.modal}
        onHide={() => HandlerCloseOpenModal("close")}
        getDetailSection={getDetailSection}
      />
    </div>
  );
};

export default BooksContainer;
