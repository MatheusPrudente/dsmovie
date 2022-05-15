import axios from "axios";
import MovieCards from "components/MovieCards";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {
  axios.get(`${BASE_URL}/movies`)
    .then(response => {
      console.log(response.data)
    })
  
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
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
