
function Proreg(){

return (
<div className="show">
<div className="page">
<div className="title"><span>PRO Registration</span>
<div className="i"><svg xmlns="http://www.w3.org/2000/svg" height="1.7rem" viewBox="0 -960 960 960" width="1.7rem" fill="#EFEFEF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
</div>

				<form action="/prodata" method='post'>
		<div className="form">

<div className="input-container">
<input type="text" placeholder='Full Name'/>
<p></p>
</div>

<div className="input-container">
<input type="email" placeholder='Email'/>
<p></p>
</div>

<div className="input-container">	
<input type="text" placeholder='Phone Number'/>
<p></p>
</div>

<div className="input-container select_input">

<input list="optionList" id="options" name="options" placeholder="Campus"/>
<datalist id="optionList">

</datalist>

</div>

<div className="input-container">
<input type="text" placeholder='Whatsapp Number'/>
<p></p>
</div>
		
<div className="input-container">
<input type="text" placeholder='UPI ID'/>
<p></p>
</div>

<div className="input-container">
<input type="text" placeholder='UPI Number'/>
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

export default Proreg