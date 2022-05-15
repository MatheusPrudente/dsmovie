import axios from "axios";
import MovieCards from "components/MovieCards";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/MoviePage";
import { BASE_URL } from "utils/requests";

function Listing() {

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies`)
    .then(response => {
      const data = response.data as MoviePage;
      setPageNumber(data.number);
    })
  }, [])

  
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
            <p>{pageNumber}</p>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <MovieCards />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <MovieCards />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <MovieCards />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <MovieCards />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <MovieCards />
            </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
