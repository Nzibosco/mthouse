import React from "react";

function Nav({ children }) {
  return (
<nav className = "navbar navbar-expand-lg navbar-light bg-light text-center">
<a class="Display-4 text-center" href="/">MTHouse</a>
{children}
</nav>
  );
}

export default Nav;
