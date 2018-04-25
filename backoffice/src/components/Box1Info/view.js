import React from "react";
import "./style.css";

function view(me) { 

    return(
        <div className={"card maincard " + me.state.validation}>
            <a data-toggle="collapse" href="#info-container" aria-expanded="true" aria-controls="info-container">
                <div className="card-header" role="tab" id="info-header">
                    Info
                </div>
            </a>
            <div id="info-container" className="collapse" role="tabpanel" aria-labelledby="info-header" data-parent="#accordion" aria-expanded="true">
                <div className="card-block">
                    <form className="form-horizontal" name="form-info">
                        <div className="form-group row mt-3">
                            <label className="col-md-3 control-label">Entity ID </label>
                            <div className="col-md-8">
                                <input type="url" 
                                    className="form-control" 
                                    onChange={(e)=>{ me.setEntityId(e) }} 
                                    placeholder = "Enter URL. Ex. https://www.example.com"
                                    aria-required="true" pattern="https?://(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}(\.[a-z]{2,63})?\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
                                required
                                />
                            </div>
                            <div className="col-md-1"> <i className="fa fa-info-circle fa-lg" data-toggle="tooltip" data-placement="top"aria-hidden="true" title="Enter the URL of the institutional website (in https)" ></i> </div>
                        </div>		
                        <div className="form-group row mt-3">
                            <label htmlFor="X509Certificate" className="col-md-3 control-label">Certificate </label>
                            <div className="col-md-8">
                                <textarea id="X509Certificate" className="form-control" rows="5"
                                    onChange={(e)=>{ me.setCertificate(e) }}
                                    placeholder = "Enter the X509 certificate"
                                    data-pattern="MII[a-zA-Z0-9/\+=\r\n]+"
                                    required></textarea>
                            </div>
                            <div className="col-md-1"> <i className="fa fa-info-circle fa-lg" data-toggle="tooltip" data-placement="top"aria-hidden="true" title="Enter the X.509 certificate corresponding to the public key."></i> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default view;
