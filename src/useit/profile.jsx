
function Profilecard(){
	return(<>
<div className="profdiv">
	<div className="profmain">
	<div className="i"><svg xmlns="http://www.w3.org/2000/svg" height="1.7rem" viewBox="0 -960 960 960" width="1.7rem" fill="#EFEFEF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>

<div className="photo">
	<p className="imgp">L</p>
</div>

<div className="data">
	<div className="row1">
	<label>Name : </label>
	<p></p>
	</div>
	<div className="row1">
	<label>Email : </label>
	<p></p>
	</div>
</div>

<div className="links">
<button>Referral Code</button>
<button>Your Selected Students</button>
</div>
<button id="logout">Logout</button>
	</div>
	</div>
	
	</>)
}

export {Profilecard}