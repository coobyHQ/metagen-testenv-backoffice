import React from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import './style.css';

function view(me) { 
    return(

		<div className="container container-boxed">
	
			<div className="card"> 
				<div className="card-header">
					<span className="card-title">
						<p>This section lists the default test users.</p>
						{!me.state.testUsersLoaded ? (
							<p>To load test users click on the button <b>"Upload test users"</b></p>		
						) : ''}
					</span>
					{!me.state.testUsersLoaded ? (
						<div className="panel-elements">
							<button id="SaveUserButton" className="btn btn-success pull-right"
								onClick={()=>{ me.saveTestUsers() }}>
									<span className="fa fa-save"></span>  Upload test users 
							</button>
						</div>			
					) : ''}
				</div>				
			</div>

		{me.state.testUsersLoaded ? (
			<div className="row">
				<div className="col-md-12">    
					<div className="card"> 
						<div className="panel panel-default" id="service_0">
							<div className="card-header">
								<span className="card-title"><span className="fa fa-user-o fa-fw"></span> Public users</span>
							</div>
							<div className="card-block">  
								<table className="table table-striped">
									<thead>
										<tr>
											<th>Username</th>
											<th>Password</th>
											<th>Surname</th>
											<th>Name</th>
											<th>Fiscal Code</th>
											<th>Gender</th>
											<th>Date of Birth</th>
											<th>Birth Place</th>
										</tr>
									</thead>
									<tbody>
										{me.state.users.map((item, index)=>(
											<tr>
												<td>{item.userName}</td>	
												<td>password123</td>	
												<td>{item.familyName}</td>
												<td>{item.name}</td>
												<td>{item.fiscalNumber}</td>
												<td>{item.gender}</td>
												<td>{item.dateOfBirth}</td>
												<td>{item.placeOfBirth}</td>     
											</tr>                      
										))}                    
									</tbody>
								</table>					
							</div>
						</div>	
					</div>
				</div>
			</div>
		) : ''}										
		
		</div>
    );
}

export default view;
