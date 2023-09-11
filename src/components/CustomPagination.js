import React from "react";

function CustomPagination({ usersPerPage, totalUsers, paginate }) {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul
        class="pagination pagination-sm"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pageNumbers.map((number) => (
          <nav>
            <ul class="pagination pagination-lg">
              <li class="page-item">
                <a
                  class="page-link"
                  onClick={() => paginate(number)}
                  style={{ cursor: "pointer" }}
                  href="#"
                >
                  {number}
                </a>
              </li>
            </ul>
          </nav>
        ))}
      </ul>
    </div>
  );
}

export default CustomPagination;
