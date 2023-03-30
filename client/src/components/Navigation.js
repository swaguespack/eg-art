import React from "react";

// Nav bar items render page in between header and footer
function Nav({ setCurrentPage, currentPage, pages }) {
  return (
    <header>

<nav class="navbar navbar-expand-sm">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"> 
        <a                   
        href="#home"
        onClick={() => setCurrentPage(pages[0])}
        class={ currentPage === "Home" ? "nav-item active" : "nav-link" }
        >Home</a>
      </li>
     </ul>
</nav>
    </header>
  );
}
export default Nav;