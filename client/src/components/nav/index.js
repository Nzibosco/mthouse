import React from "react";

function Nav({ children }) {
  return (
<nav className = "navbar navbar-expand-lg navbar-light bg-light text-center">
<a class=" nav-brand Display-4 text-center" href="/">MTHouse</a>
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="/dashboard">Dashboard</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/loanApplication">Loan Application</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/accounting">Accounting</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/member/3">Profile</a>
  </li>
</ul>
{children}
</nav>
  );
}

export default Nav;
