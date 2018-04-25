import React from 'react';
import "./style.css";

function view(me) { 
    
    return(
        <div className="card maincard">
            <a data-toggle="collapse" href="#organization-container" aria-expanded="true" aria-controls="organization-container">
                <div className="card-header" role="tab" id="organization-header" >
                    <div className="title">Organization
                        <div className="pull-right">
                            <span className="label label-warning">Optional</span>
                        </div>   
                    </div>             
                </div>
            </a>
            <div id="organization-container" className="collapse" role="tabpanel" aria-labelledby="organization-header" data-parent="#accordion" aria-expanded="true" >
                <div className="card-block">
                    <form className="form-horizontal" name="form-organization">										
                        <div className="form-group row mt-3">
                            <label htmlFor="OrganizationName" className="col-md-3 control-label">Name </label>
                            <div className="col-md-8">
                                <input id="OrganizationName" name="paname" type="text" 
                                    className="form-control" 
                                    onChange={(e)=>{ me.setName(e) }}
                                     placeholder = "Enter the name of the Agent or Chapter"
                                />
                            </div>
                            <div className="col-md-1"> <i className="fa fa-info-circle fa-lg" data-toggle="tooltip" data-placement="top"aria-hidden="true" title="Insert official name of the Agent or Chapter"></i></div>
                        </div>
                        <div className="form-group row mt-3">
                            <label htmlFor="OrganizationDisplayName"  className="col-md-3 control-label"> Display Name </label>
                            <div className="col-md-8">
                                <input id="OrganizationDisplayName" type="text" 
                                    className="form-control" 
                                    onChange={(e)=>{ me.setDisplayName(e) }}
                                    placeholder = "Enter the full name of the Agent or Chapter"
                                />
                            </div>
                            <div className="col-md-1"> <i className="fa fa-info-circle fa-lg" data-toggle="tooltip" data-placement="top"aria-hidden="true" title="Insert public name on the web of the P.A."></i> </div>
                        </div>				
                        <div className="form-group row mt-3">
                            <label htmlFor="OrganizationURL" className="col-md-3 control-label"> URL </label>
                            <div className="col-md-8">
                                <input id="OrganizationURL" type="url" 
                                    className="form-control" 
                                    onChange={(e)=>{ me.setUrl(e) }}
                                         placeholder = "Enter URL Ex. https://www.example.com"
                                    aria-required="true" pattern="https?://(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}(\.[a-z]{2,63})?\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
                                />
                            </div>
                            <div className="col-md-1"> <i className="fa fa-info-circle fa-lg" data-toggle="tooltip" data-placement="top"aria-hidden="true"  data-original-title="Enter the URL of the Agent or Chapter website (in https)"   title="Enter the address of the Agent or Chapter (in https)"></i> </div>
                        </div>															
                    </form>
                </div>
            </div>
        </div>
    )
};

export default view;
