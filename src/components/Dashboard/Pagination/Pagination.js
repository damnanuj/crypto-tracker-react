import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";

import "./style.scss"
import { ThemeContext } from "../../../context/ThemeContext";

export default function PaginationControlled({ page, handlePageChange }) {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`pages-counts ${theme==="light"? 'light':""}` } spacing={2}>
      <Pagination
        count={10}
        color="primary"
        page={page}
        onChange={(e, value)=>handlePageChange(e, value)}
       
      />
    </div>
  );
}
