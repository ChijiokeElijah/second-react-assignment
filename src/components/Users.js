import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingIcon from "../images/Loading_icon.gif";
import Profiles from "./Profiles.js";
import Pagination from "./Pagination";


export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const perPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const resp = await axios.get("https://randomuser.me/api/?results=50");
      setLoading(false);
      setUsers(resp.data.results);

      setTotalPages(Math.ceil(resp.data.results.length / perPage));
    };
    fetchUsers();
  }, []);
    
  const handleClick = (num) => {
    setPage(num);
  };
  
  const handlePrev = () => {
    setPage(prev => prev-1)
  }
  const handleNext = () => {
    setPage(prev => prev+1)
  }
  return (
    <div className="loader">
      {loading ? (
        <img src={LoadingIcon} alt="" />
      ) : (
        <div>
          <p>Page No.{page}</p>
          <hr />
          <Profiles users={users} page={page} />
        </div>
      )}

      <Pagination totalPages={totalPages} handlePrev={handlePrev} handleClick={handleClick} handleNext={handleNext} disabledPrev={page <= 1} disabledNext={page >= totalPages} />
    </div>
  );
}
