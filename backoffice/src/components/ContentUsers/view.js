import React from 'react';
import KendoDatePicker from 'kendo-ui-react-jquery-datepicker';
import 'react-block-ui/style.css';
import './kendoui/kendo.common.core.min.css';
import './kendoui/kendo.office365.min.css';
import './kendoui/kendo.office365.mobile.min.css';
import './style.css';
//import 'kendo-ui-core/js/cultures/kendo.culture.en-EN.js'; 

 
function view(me) { 
    return(

		<div className="container container-boxed">
	
			<div className="row">
				<div className="col-md-12">    
					<div className="card"> 
						<div className="panel panel-default" id="service_0">
							<div className="card-header">
								<span className="card-title"><span className="fa fa-user-o fa-fw"></span> Registered users</span>
							</div>
							<div className="card-block">  
								<table className="table table-striped">
									<thead>
										<tr>
											<th>Username</th>
											<th>Surname</th>
											<th>Name</th>
											<th>Business Number</th>
											<th>Gender</th>
											<th>Date of Birth</th>
											<th>Birth Place</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{me.state.users.map((item, index)=>(
											<tr>
												<td>{item.userName}</td>	
												<td>{item.familyName}</td>
												<td>{item.name}</td>
												<td>{item.fiscalNumber}</td>
												<td>{item.gender}</td>
												<td>{item.dateOfBirth}</td>
												<td>{item.placeOfBirth}</td>     
												<td>
													<button className="btn btn-success pull-right" onClick={()=>{ me.deleteUser(item.userName) }}>
														<span className="fa fa-trash"></span>  cancel 
													</button>												
												</td>
											</tr>                      
										))}                    
									</tbody>
								</table>					
							</div>
						</div>	
					</div>
				</div>
			</div>
	
			<div className="row">
				<div className="col-md-12">     
					<div className="card"> 
						<div className="panel panel-default" id="service_0">
							<div className="card-header">
								<span className="card-title"><span className="fa fa-user-plus fa-fw"></span> Create new user...</span>
							</div>
							<div className="card-block">  
								<form className="form-horizontal">

									<div className="form-group row">
                                                                            <div className="col-md-2">
										<label className="control-label">METAGEN Username</label>
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="" data-original-title="Username" ></i>
                                                                            </div>
										<div className="col-md-4">
											<input type="text" 
                                                                                                id = "METAGENUsername"
                                                                                                placeholder = "Define a Username"
												className="form-control" 
												onChange={(e)=>{ me.setUsername(e.target.value) }} 
												value = {me.state.username}
												aria-required="true" pattern="[0-9a-zA-Z]+"
												required
											/>
										</div>
                                                                         <div className="col-md-2">
										<label className="control-label">METAGEN Password</label>
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="" data-original-title="Password" ></i>
                                                                            </div>
										<div className="col-md-4">
											<input type="text" 
                                                                                                id = "METAGENPassword"
                                                                                                placeholder = "Define a Password"
												className="form-control" 
												onChange={(e)=>{ me.setPassword(e.target.value) }} 
												value = {me.state.password}
												aria-required="true" pattern="[0-9a-zA-Z]+"
                                                                                                
												required
											/>
										</div>

                                      
                                        
									</div>
									<div className="form-group row">
                                                                        <div className="col-md-2"> <label className="control-label">METAGEN Expiry Id.</label> 
                                                                                    &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="METAGEN Expiration date identity in YYYY-MM-DD format" data-original-title=""></i>
                                                                                </div>
										<div className="col-md-4">
												
												<KendoDatePicker
												
													options = {{
														format: 'yyyy-MM-dd' 
													}}
													
													events = {{
														change: (e)=>{ me.setExpirationDate(e.sender.element[0].value); } 
													}}
													
												>
													<input id="ExpirationDate"
														className="form-control"
														style={{width: '100%'}}
														value = {me.state.expirationDate}
														placeholder = "Digital identity in the format YYYY-MM-DD"
														aria-required="true" pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"		
														required
													/>
													
												</KendoDatePicker>												

										</div>
                                                                        <div className="col-md-6"></div> 
									</div>												
									<div className="form-group row">
										<div className="col-md-2"> 
                                                                                    <label className="control-label">Name</label> 
                                                                                     &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="User name. Ex. Dave" data-original-title=""></i> 
                                                                                </div>         
										<div className="col-md-4">
											<input type="text" 
                                                                                                id = "Name"
												className="form-control" 
												onChange={(e)=>{ me.setName(e.target.value) }} 
												value = {me.state.name}
												placeholder = "User name. Ex. Dave"
												aria-required="true" pattern=""
												required
											/>
										</div>
										<div className="col-md-2">
                                                                                     <label className="control-label">Surname</label>    
                                                                                     &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="User's surname. Ex. Cook" data-original-title=""></i>         
                                                                                </div>
										<div className="col-md-4">
											<input type="text" 
                                                                                                id = "FamilyName"
												className="form-control" 
												onChange={(e)=>{ me.setFamilyName(e.target.value) }} 
												value = {me.state.familyName}
												placeholder = "User's surname. Ex. Cook"
												aria-required="true" pattern=""
												required
											/>
										</div>												
									</div>	
									<div className="form-group row">
										<div className="col-md-2">
                                                                                    <label className="control-label">Gender</label>
                                                                                    &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Select the user's gender: Male / Female / Unspecified." data-original-title=""></i>
                                                                                    </div>
										<div className="col-md-4">
											<select
                                                                                                id="Gender"
												className="form-control" 
												onChange={(e)=>{ me.setGender(e.target.value) }} 
												value = {me.state.gender}
												aria-required="true" pattern="M|F"
												required
											>
																																														<option value="N">Non Specificato</option>
																																														<option value="M">Maschio</option>
                                                                                            <option value="F">Female</option>
                                                                                        </select>
										</div>
										<div className="col-md-2"> 
                                                                                    <label className="control-label">Date of birth</label>
                                                                                    &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Date of birth in the format YYYY-MM-DD" data-original-title=""></i>
                                                                                    </div>                                       
										<div className="col-md-4">

												<KendoDatePicker
												
													options = {{
														format: 'yyyy-MM-dd' 
													}}
													
													events = {{
														change: (e)=>{ me.setDateOfBirth(e.sender.element[0].value); } 
													}}
													
												>
													<input id="DateOfBirth"
														className="form-control"
														style={{width: '100%'}}
														value = {me.state.dateOfBirth}
														placeholder = "Date of birth in the format YYYY-MM-DD"
														aria-required="true" pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"		
														required
													/>
													
												</KendoDatePicker>
												
										</div>												
									</div>		
									<div className="form-group row">
										<div className="col-md-2">
                                                                                    <label className="control-label">County of birth</label>
                                                                                    &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Symbol of the province of birth. Ex. ON" data-original-title=""></i>
                                                                                </div> 
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="CountyOfBirth"
												className="form-control" 
												onChange={(e)=>{ me.setCountyOfBirth(e.target.value) }} 
												value = {me.state.countyOfBirth}
												placeholder = "Symbol of the province of birth. Ex. ON"
												aria-required="true" pattern="[A-Z]{2}"
												required
											/>
										</div>
										<div className="col-md-2"> <label className="control-label">Birth place</label>
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Municipality code of birth. Ex. H501" data-original-title=""></i>
                                                                                </div>                              
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="PlaceOfBirth"
												className="form-control" 
												onChange={(e)=>{ me.setPlaceOfBirth(e.target.value) }} 
												value = {me.state.placeOfBirth}
												placeholder = "Municipality code of birth. Ex. H501"
												aria-required="true" pattern="[A-Z][0-9]{3}"
												required
											/>
										</div>												
									</div>	
									<div className="form-group row">
                                                                        <div className="col-md-2"> <label className="control-label">Business Email Address</label>  
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Address of a business e-mail. Eg. me@mybusiness.com" data-original-title=""></i>
                                                                                </div>
										<div className="col-md-4">
											<input type="email" 
                                                                                                id="DigitalAddress"
												className="form-control" 
												onChange={(e)=>{ me.setDigitalAddress(e.target.value) }} 
												value = {me.state.digitalAddress}
												placeholder = "Business email box address. Eg. me@mybusiness.com"
												aria-required="true" 
												required
											/>
										</div>
										
										<div className="col-md-2"> <label className="control-label">Email</label>
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="User email address. Eg. me@example.com" data-original-title=""></i>
                                                                                </div>            
										<div className="col-md-4">
											<input type="email" 
                                                                                                id="Email"
												className="form-control" 
												onChange={(e)=>{ me.setEmail(e.target.value) }} 
												value = {me.state.email}
												placeholder = "User email address. Eg. me@example.com"
												aria-required="true" 
												required
											/>
										</div>												
									</div>		
									<div className="form-group row"><div className="col-md-2"> <label className="control-label">Tax Number</label> 
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Tax Number. Ex. 0764352056C" data-original-title=""></i>   
                                                                                </div>
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="TaxCode"
												className="form-control" 
												onChange={(e)=>{ me.setTaxCode(e.target.value) }} 
												value = {me.state.taxCode}
												placeholder = "Tax Number. Ex. 0764352056C"
												aria-required="true" pattern="[0-9]{10}[0-9A-Z]"
												required
											/>
										</div>
										
										<div className="col-md-2"> 
                                                                                    <label className="control-label">Business Number</label>                                                                                
                                                                                    &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="User's tax code. Eg. RSSMRA60A01H501Q" data-original-title=""></i>
                                                                                </div>
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="FiscalNumber"
												className="form-control" 
												onChange={(e)=>{ me.setFiscalNumber(e.target.value) }} 
												value = {me.state.fiscalNumber}
												placeholder = "User Tax Code. Eg. RSSMRA60A01H501Q"
												aria-required="true" pattern="[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]"
												required
											/>
										</div>												
									</div>	
                                                                <div className="form-group row">
										<div className="col-md-2"> <label className="control-label">Company Name</label>
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Business name. Ex. My Business" data-original-title=""></i>                                                                        </div>
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="CompanyName"
												className="form-control" 
												onChange={(e)=>{ me.setCompanyName(e.target.value) }} 
												value = {me.state.companyName}
												placeholder = "Business name. Ex. My Business"
												aria-required="true" 
												required
											/>
										</div>												
									</div>	
                                                                <div className="form-group row">
                                                                            <div className="col-md-12 mt-3 mb-3">
                                                                                <h6>Identity Document</h6> 
                                                                            </div>
                                                                            <div className="col-md-2"> <label className="control-label">Type of document</label>
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Type of document. Eg. Drivers License, Health Card, Passport" data-original-title=""></i>
                                                                                </div>
										<div className="col-md-4">
                                                                                < select
                                                                                    id = "IDCardTypology"
                                                                                    className = "form-control"
                                                                                    onChange={(e)=>{ me.setIDCardTypology(e.target.value)  }} 
                                                                                    value = {me.state.idCardTypology}
                                                                                    aria-required = "true"
                                                                                    required >
                                                                                    < option value = "identityCard" > Identity card < /option>
                                                                                    < option value = "passport" > Passport < /option>
                                                                                    < option value = "driversLicense" > Driver's license < /option>
                                                                                    < option value = "boatLicense" > Boat license < /option>
                                                                                    < option value = "firearmsLicense" > Firearms license < /option>
                                                                                    < option value = "healthCard" > Health card < /option>
                                                                                < /select>
            
            
            
										</div>
                                                                
                                                                
										<div className="col-md-2"> <label className="control-label">Document Number</label>
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Document number. Ex. AH1234567" data-original-title=""></i>
                                                                                </div>                  
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="IDCardNumber"
												className="form-control" 
												onChange={(e)=>{ me.setIDCardNumber(e.target.value) }} 
												value = {me.state.idCardNumber}
												placeholder = "Document number. Ex. AH1234567"
												aria-required="true" pattern="3[0-9]{2}[0-9]{7}"
												required
											/>
										</div>
																						
									</div>	
                                                                <div className="form-group row">
                                                                            <div className="col-md-2"> <label className="control-label">Issuer</label>
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Issuer body. Ex. Municipality of Peel" data-original-title=""></i>
                                                                                </div>
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="IDCardIssuer"
												className="form-control" 
												onChange={(e)=>{ me.setIDCardIssuer(e.target.value) }} 
												value = {me.state.idCardIssuer}
												placeholder = "Issuer body. Ex. Municipality of Peel"
												aria-required="true" 
												required
											/>
										</div>
                                                                
                                                                
										<div className="col-md-2"> <label className="control-label">Date of Issue</label>
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Issue date of the document in the format YYYY-MM-DD" data-original-title=""></i>
                                                                                </div>                  
										<div className="col-md-4">
												
												<KendoDatePicker
												
													options = {{
														format: 'yyyy-MM-dd' 
													}}
													
													events = {{
														change: (e)=>{ me.setIDCardIssueDate(e.sender.element[0].value); } 
													}}
													
												>
													<input id="IDCardIssueDate"
														className="form-control"
														style={{width: '100%'}}
														value = {me.state.idCardIssueDate}
														placeholder = "Issue date in YYYY-MM-DD format"
														aria-required="true" pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"		
														required
													/>
													
												</KendoDatePicker>												
														
                                                                                </div>
                                                                             </div>	
                                                                <div className="form-group row">
										<div className="col-md-2"> <label className="control-label">Expiry Date</label>
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Expiry date of the document in the format YYYY-MM-DD" data-original-title=""></i>
                                                                                </div>                  
										<div className="col-md-4">
														
												<KendoDatePicker
												
													options = {{
														format: 'yyyy-MM-dd' 
													}}
													
													events = {{
														change: (e)=>{ me.setIDCardExpirationDate(e.sender.element[0].value); } 
													}}
													
												>
													<input id="IDCardExpirationDate"
														className="form-control"
														style={{width: '100%'}}
														value = {me.state.idCardExpirationDate}
														placeholder = "Expiry date in the format YYYY-MM-DD"
														aria-required="true" pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"		
														required
													/>
													
												</KendoDatePicker>														

										</div>
																						
									</div>	
                                                                
									<div className="form-group row">
                                                                            <div className="col-md-12 mt-3 mb-3">
                                                                                <h6>Contact Telephone</h6> 
                                                                            </div>
                                                                            <div className="col-md-2"> <label className="control-label">International Prefix.</label>
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Country code. Ex. +234" data-original-title=""></i>
                                                                                </div>                  
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="MobilePrefix"
												className="form-control" 
												onChange={(e)=>{ me.setMobilePrefix(e.target.value) }} 
												value = {me.state.mobilePrefix}
												placeholder = "Country code. Ex. +234"
												aria-required="true" pattern="\+[0-9]{2}([0-9]?)"
												required
											/>
										</div>
                                                                
                                                                
										<div className="col-md-2"> <label className="control-label">Cellphone Number</label>
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Cellphone number. Ex. 3331234567" data-original-title=""></i>
                                                                                </div>                  
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="MobileNumber"
												className="form-control" 
												onChange={(e)=>{ me.setMobileNumber(e.target.value) }} 
												value = {me.state.mobileNumber}
												placeholder = "Cellphone number. Ex. 3331234567"
												aria-required="true" pattern="3[0-9]{2}[0-9]{7}"
												required
											/>
										</div>
																						
									</div>	
                                                                        <div className="form-group row">
                                                                            <div className="col-md-12 mt-3 mb-3">
                                                                                <h6>Physical Home</h6> 
                                                                            </div>
                                                                                <div className="col-md-2"> <label className="control-label">Dwelling Type</label> 
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Type of dwelling. Ex. Apartment, Condo, House, Cottage" data-original-title=""></i>   
                                                                                </div>
										<div className="col-md-4">
											<input type="text"
                                                                                                id="AddressTypology"
												className="form-control" 
												onChange={(e)=>{ me.setAddressTypology(e.target.value) }} 
												value = {me.state.addressTypology}
                                                                                                placeholder = "Type of dwelling. Ex. Apartment, Condo, House, Cottage"
												aria-required="true"
                                                                                                list="address_place_typology_list"
												required
											/>
                                                                                           <datalist id="address_place_typology_list">
                                                                                       < option > Access < /option>
                < /datalist>
										</div>
                                                                        <div className="col-md-2"> 
                                                                                    <label className="control-label">Address</label>   
                                                                                       &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Indication of the place. Ex. Christopher Columbus" data-original-title=""></i>
                                                                                    </div>
                                                                                    <div className="col-md-4">
											<input type="text" 
                                                                                                id="AddressAddress"
												className="form-control" 
												onChange={(e)=>{ me.setAddressAddress(e.target.value)  }} 
												value = {me.state.addressAddress}
												placeholder = "Indication of the place. Ex. Christopher Columbus"
												aria-required="true" 
												required
											/>
                                                                                    </div>
                                                                        </div>
                                                                <div className="form-group row">
                                                                                <div className="col-md-2"> <label className="control-label">House Number</label> 
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Number of the dwelling. Ex. 431" data-original-title=""></i>   
                                                                                </div>
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="AddressStreetNumber"
												className="form-control" 
												onChange={(e)=>{ me.setAddressStreetNumber(e.target.value) }} 
												value = {me.state.addressStreetNumber}
												placeholder = "Number of the dwelling. Ex. 3233"
												aria-required="true" pattern="[1-9][0-9]*([a-z]?)"
												required
											/>
										</div>
                                                                        <div className="col-md-2"> 
                                                                                    <label className="control-label">Postal Code</label>   
                                                                                       &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Postal code. Ex. 00100" data-original-title=""></i>
                                                                                    </div>
                                                                                    <div className="col-md-4">
											<input type="text" 
                                                                                                 id="AddressPostalCode"
												className="form-control" 
												onChange={(e)=>{ me.setAddressPostalCode(e.target.value) }} 
												value = {me.state.addressPostalCode}
												placeholder = "Postal code. Ex. 00100"
												aria-required="true" pattern="[0-9]{5}"
												required
											/>
                                                                                    </div>
                                                                        </div>
                                                                
                                                                 <div className="form-group row">
                                                                                <div className="col-md-2"> <label className="control-label">Municipality</label> 
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Name of the Municipality. Ex. Halton" data-original-title=""></i>   
                                                                                </div>
										<div className="col-md-4">
											<input type="text" 
                                                                                                 id="AddressPlace"
												className="form-control" 
												onChange={(e)=>{ me.setAddressPlace(e.target.value) }} 
												value = {me.state.addressPlace}
												placeholder = "Name of the Municipality. Ex. Halton"
												aria-required="true" 
												required
											/>
										</div>
                                                                        <div className="col-md-2"> 
                                                                                    <label className="control-label">Province</label>   
                                                                                       &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Symbol of the Province. Ex. ON" data-original-title=""></i>
                                                                                    </div>
                                                                                    <div className="col-md-4">
											<input type="text" 
                                                                                                id="AddressCounty"
												className="form-control" 
												onChange={(e)=>{ me.setAddressCounty(e.target.value) }} 
												value = {me.state.addressCounty}
												placeholder = "Symbol of the Province. Ex. ON"
												aria-required="true" pattern="[A-Za-z]{2}"
												
											/>
                                                                                    </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <div className="col-md-12 mt-3 mb-3">
                                                                                <h6>Sede Legale</h6> 
                                                                            </div>
                                                                                <div className="col-md-2"> <label className="control-label">Place Type</label> 
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Type of dwelling. Ex. Apartment, House, Condo, Cottage" data-original-title=""></i>   
                                                                                </div>
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="RegisteredOfficeTypology"
												className="form-control" 
												onChange={(e)=>{ me.setRegisteredOfficeTypology(e.target.value) }} 
												value = {me.state.registeredOfficeTypology}
												placeholder = "Type of dwelling. Ex. Apartment, House, Condo, Cottage"
                                                                                                list = "registered_office_place_typology_list"
                                                                                                placeholder = "Type of dwelling. Ex. Apartment, House, Condo, Cottage"
												aria-required="true" 
												required
											/>
                                                                                        <datalist id="registered_office_place_typology_list">
                                                                                       < option > Access < /option>
                < /datalist>
										</div>
                                                                        <div className="col-md-2"> 
                                                                                    <label className="control-label">Address</label>   
                                                                                       &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Indication of the place. Ex. Christopher Columbus" data-original-title=""></i>
                                                                                    </div>
                                                                                    <div className="col-md-4">
											<input type="text" 
                                                                                                id="RegisteredOfficeAddress"
												className="form-control" 
												onChange={(e)=>{ me.setRegisteredOfficeAddress(e.target.value) }} 
												value = {me.state.registeredOfficeAddress}
												placeholder = "Indication of the place. Ex. Christopher Columbus"
												aria-required="true" 
												required
											/>
                                                                                    </div>
                                                                        </div>
                                                                <div className="form-group row">
                                                                                <div className="col-md-2"> <label className="control-label">House Number</label> 
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="House number. Ex. 134" data-original-title=""></i>   
                                                                                </div>
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="RegisteredOfficeStreetNumber"
												className="form-control" 
												onChange={(e)=>{ me.setRegisteredOfficeStreetNumber(e.target.value) }} 
												value = {me.state.registeredOfficeStreetNumber}
												placeholder = "House number Ex. 1344"
												aria-required="true" pattern="[1-9][0-9]*([a-z]?)"
												required
											/>
										</div>
                                                                        <div className="col-md-2"> 
                                                                                    <label className="control-label">Postal Code</label>   
                                                                                       &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Postal code. Ex. 00100" data-original-title=""></i>
                                                                                    </div>
                                                                                    <div className="col-md-4">
											<input type="text" 
                                                                                                id="RegisteredOfficePostalCode"
												className="form-control" 
												onChange={(e)=>{ me.setRegisteredOfficePostalCode(e.target.value) }} 
												value = {me.state.registeredOfficePostalCode}
												placeholder = "Postal code. Ex. 00100"
												aria-required="true" pattern="[0-9]{5}"
												required
											/>
                                                                                    </div>
                                                                        </div>
                                                                
                                                                 <div className="form-group row">
                                                                                <div className="col-md-2"> <label className="control-label">Municipality</label> 
                                                                                &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Name of the Municipality. Ex. Halton" data-original-title=""></i>   
                                                                                </div>
										<div className="col-md-4">
											<input type="text" 
                                                                                                id="RegisteredOfficePlace"
												className="form-control" 
												onChange={(e)=>{ me.setRegisteredOfficePlace(e.target.value) }} 
												value = {me.state.registeredOfficePlace}
												placeholder = "Name of the Municipality. Ex. Halton"
												aria-required="true" 
												required
											/>
										</div>
                                                                        <div className="col-md-2"> 
                                                                                    <label className="control-label">Province</label>   
                                                                                       &nbsp;<i className="fa fa-info-circle " data-toggle="tooltip" data-placement="top" aria-hidden="true" title="Symbol of the Province. Ex. ON" data-original-title=""></i>
                                                                                    </div>
                                                                                    <div className="col-md-4">
											<input type="text" 
                                                                                                id="RegisteredOfficeCounty"
												className="form-control" 
												onChange={(e)=>{ me.setRegisteredOfficeCounty(e.target.value) }} 
												value = {me.state.registeredOfficeCounty}
												placeholder = "Symbol of the Province. Ex. ON"
												aria-required="true" pattern="[A-Za-z]{2}"
												required
											/>
                                                                                    </div>
                                                                        </div>
								</form>
							</div>								
						</div>
											
						<div className="card-footer">   
							<div className="panel-elements pull-right">
								<button id="SaveUserButton" className="btn btn-success pull-right"
									onClick={()=>{ me.save() }}>
										<span className="fa fa-save"></span>  Save 
								</button>
							</div>     
						</div>	
									
					</div>
				</div>
			</div>
												
		</div>
    );
}

export default view;
