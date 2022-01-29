import React from "react";

function Navbar()
{
    return(
        <div className="navbar-class">
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">Github User Finder</a>
                </div>
                <form className="navbar-form navbar-left" action="/action_page.php">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search">
                    </input>
                </div>
                <button type="submit" className="btn btn-default">Search</button>
                </form>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;