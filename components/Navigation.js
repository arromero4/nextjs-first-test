import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link href="/">
          <a className="navbar-brand" href="#">
            Home
          </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link href="/about">
              <a className="nav-link active" aria-current="page">
                About
              </a>
              </Link>
              <Link href="/services">
              <a className="nav-link">
                Services
              </a>

              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
