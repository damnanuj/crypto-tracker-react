import React from "react";
import Pagination from "@mui/material/Pagination";

import "./style.scss"

export default function PaginationControlled({ page, handlePageChange }) {
  

  return (
    <div className="pages-counts" spacing={2}>
      <Pagination
        count={10}
        color="primary"
        page={page}
        onChange={(e, value)=>handlePageChange(e, value)}
        sx={{color:"white !important"}}
      />
    </div>
  );
}
