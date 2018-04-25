import React from 'react';
import "./style.css";

function view(me) { 
    return(
        <div className="card">
            <div className="card-header">
            <div className="row">
                <div className="panel-title col-md-10">Assertion Consumer Service</div>

                {me.data.removeButton ? 
                    <div className="panel-elements pull-right col-md-2 close-button">
                        <button href="#" 
                            onClick={()=>me.data.removeFunc(me.data.n)} 
                            className="btn btn-sm btn-danger fa fa-remove">
                        </button>
                    </div> 
                : <div /> }
             </div>
            </div>
            <div className="card-block">    
                <form className="form-horizontal" name="form-assertion">
                <div className="form-group row mt-3">
                    <div className="form-check form-check-inline col-md-11">
                        <span className="app-checkbox"> 
                            <label htmlFor="defaultselector">
                                <input type="radio" 
                                    name="services-default"
                                    id="defaultselector"
                                    checked={me.data.IsDefault}
                                    onChange={()=>me.data.setDefault(me.data.n)}
                                /> Default
                            </label> 
                        </span>															
                    </div>
                    <div className="col-md-1"> <i className="fa fa-info-circle fa-lg" data-toggle="tooltip" data-placement="top"aria-hidden="true" title = "There must be one and only one Assertion Consumer Service set as Default"></i> </div>
                    </div>
                    <div className="form-group row mt-3">
                        <label htmlFor="assertionbinding" className="col-md-3 control-label">Binding </label>
                        <div className="col-md-8">
                            <select id="assertionbinding" className=""
                                value={me.data.Binding}
                                onChange={(e)=>me.data.setBinding(me.data.n, e)}>
                                    <option selected>HTTP-POST</option>
                                    <option>HTTP-REDIRECT</option>
                            </select>
                        </div>
                        <div className="col-md-1"> <i className="fa fa-info-circle fa-lg" data-toggle="tooltip" data-placement="top"aria-hidden="true" title = " Select the transport protocol (binding) to be used for communication with the IdP"></i> </div>
                    </div>															
                    <div className="form-group row mt-3">
                        <label className="col-md-3 control-label">Location </label>
                        <div className="col-md-8">
                            <input type="url" className="form-control"
                                value={me.data.Location} 
                                onChange={(e)=>me.data.setLocation(me.data.n, e)}
                                    placeholder = "Enter URL. Ex. https://www.example.com"
                                    aria-required="true" pattern="https?://(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}(\.[a-z]{2,63})?\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
                           required />
                        </div>
                        <div className="col-md-1"> <i className="fa fa-info-circle fa-lg" data-toggle="tooltip" data-placement="top"aria-hidden="true" title = "Enter the URL (in https) to which to send the reply message to the authentication request." ></i> </div>
                    </div>	
                </form>
            </div>
        </div>
    )
};

export default view;
