import React from "react";
import { MenuItem, Pagination, Select } from "@mui/material";

export default function MoviesPagiantion({
  pages,
  setCurrentPage,
  setmoviesPerPage,
  currentPage,
}) {
  return (
    <div className="pagination">
      <div>
        <Select
          onChange={(e) => {
            setmoviesPerPage(e.target.value);
            setCurrentPage(1);
          }}
          defaultValue={4}
          variant="standard"
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
        par page
      </div>
      <Pagination
        color="primary"
        count={pages}
        onChange={(e, value) => setCurrentPage(value)}
        page={currentPage}
      />
    </div>
  );
}
