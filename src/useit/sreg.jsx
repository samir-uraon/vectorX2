
function Sreg(){

	return (
	<div className="show3">
	<div className="page3">
	<div className="title"><span>Students Registration</span>
	<div className="i"><svg xmlns="http://www.w3.org/2000/svg" height="1.7rem" viewBox="0 -960 960 960" width="1.7rem" fill="#EFEFEF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
	</div>
	
					<form>
			<div className="form">
	
	<div className="input-container">
	<input type="text" placeholder='Full Name'/>
	<p></p>
	</div>
	
	<div className="input-container">
	<input type="email" placeholder='Email' name="Email" autoComplete="off"/>
	<p></p>
	</div>
	
	<div className="input-container">	
	<input type="text" placeholder='Phone Number' name="Phone Number"/>
	<p></p>
	</div>
	
	<div className="input-container ">
	<input  name="referral" placeholder="Referral Code(if you have)"/>
<p></p>
	</div>
	
	<div className="input-container">
	<input type="text" placeholder='Whatsapp Number'/>
	<p></p>
	</div>
			
	
	<div className="input-container">
	<input type="text" placeholder='Password'/>
	<p></p>
	</div>
	
	<button class="reg">Submit</button>
	
	
			</div>
					</form>
	
	</div>
	</div>
	
	)
	}
	
	export default Sreg