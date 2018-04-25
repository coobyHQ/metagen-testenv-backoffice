import React from "react";
import './style.css';

function view(me) {
    return (
      <footer className="app-footer app-footer-blue" id="footer">         
          <div className="container container-boxed">
              <div className="app-footer-line">
              <div className="row">
              <div className="navbar col-md-12">
                   <div className="nav col-md-6 align-middle ">&copy; 2018 Gridworkz Software </div>
                         <div className="col-md-6">
                            <ul className="nav justify-content-end">
                                  <li className="invisible nav-item"><a className="nav-link" href="/">About</a></li>
                                  <li className="invisible nav-item"><a className="nav-link" href="https://helpdesk.codoo.io/index.php?a=add&category=4">METAGEN HelpDesk</a></li>
                                  <li className="invisible nav-item"><a className="nav-link" href="/">API</a></li>
                                  <li className="invisible nav-item"><a className="nav-link" href="/">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                   </div>
              </div>
            </div>
      </footer>
    );
}

export default view;
