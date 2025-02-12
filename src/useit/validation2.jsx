
function checkpassword(passworddata){
	let ok=false
	for (let index = 0; index < passworddata.length; index++) {
		const element = passworddata[index];
		if(["@","#","$"].includes(element)){
	ok=true
	break
		}else{
			ok=false
		}
	}
	
	return ok
	}
	
	
	function checkupiid(upiiddata){
		let ok=false
	let index=upiiddata.length;
			const element = upiiddata.substring(upiiddata.indexOf("@"),index);
			if(["@okicici","@ybl","@ibl","@axl","@paytm","@pthdfc","@ptaxis","@ptsbi","@sbi"].includes(element)){
		ok=true
	
			}else{
				ok=false
			}
		
		return ok
		}
	
	
	async function emailexistencewithreferral2(em,email,re){
	hidereg3()
	
	let key="email"
	let keyvalue=em
	let url=`${import.meta.env.VITE_takes}`
	let url1=new URL(url)
	url1.searchParams.append(key,keyvalue)
	let data=await (await fetch(url1)).json()

	
		if(data["name"]!="None"){
		hidereg3()
								email.parentElement.children[1].innerHTML="Email already Exist"
								email.style.borderBottom="0.15rem solid red";
							email.parentElement.children[1].style.color="red"
		}else{
			if(re.value==""){
		showreg3()
						email.style.borderBottom="0.15rem solid #16a085";
						email.parentElement.children[1].innerHTML="Email valid"
						email.parentElement.children[1].style.color="green"}
						else{
							
							let key="referral"
	let keyvalue=re.value
	let url=`${import.meta.env.VITE_take}`
	let url1=new URL(url)
	url1.searchParams.append(key,keyvalue)
	let data=await (await fetch(url1)).json()

		if(data["name"]=="None"){
			hidereg3()
			re.parentElement.children[1].innerHTML="Invalid Referral Code"
								re.style.borderBottom="0.15rem solid red";
							re.parentElement.children[1].style.color="red"
		}else{
			showreg3()
			re.parentElement.children[1].innerHTML="valid Referral Code"
			re.style.borderBottom="0.15rem solid #16a082";
		re.parentElement.children[1].style.color="green"
		}
						}
		}
		
	}
	
	
	function validateForm2(){
	
	let bool=false
	let bool1=false
	let bool2=false
	let bool3=false
	let bool4=false
	let bool5=false
	let bool6=false
	let bool7=false

	if(document.querySelector(".show3")){
		
						let name=document.forms["myform3"]["Name"]
						let email=document.forms["myform3"]["Email"]
						let password=document.forms["myform3"]["p"]
						let referral=document.forms["myform3"]["Referral Code"]
						let pn=document.forms["myform3"]["Phone Number"]
						let wn=document.forms["myform3"]["WhatsApp Number"]
			   let jp=document.forms["myform3"]["jp"]
						let cpa=document.forms["myform3"]["cpa"]
					
						
					if(jp.value.length<2){
						bool6=false
					}
					if(jp.value.length>1){
           bool6=true
					}
		
	
		if(name.value!="" && name.value.length>2){
				name.style.borderBottom="0.15rem solid #16a085";
						name.parentElement.children[1].innerHTML="Valid Name"
	name.parentElement.children[1].style.color="green"
	bool1=true
		}
		if(name.value!="" && name.value.length<=2){
			name.style.borderBottom="0.15rem solid red";
				name.parentElement.children[1].innerHTML="Enter Your Name"
	name.parentElement.children[1].style.color="red"
	bool1=false
	}
	if(name.value==""){
		name.parentElement.children[1].innerHTML=""
	name.parentElement.children[1].style.color="red"
	bool1=false
	}
	
	
	if(password.value!="" && password.value.length>=8 && checkpassword(password.value)){
		password.style.borderBottom="0.15rem solid #16a085";
		password.parentElement.children[1].innerHTML="Pasword Valid"
		password.parentElement.children[1].style.color="green"
		bool2=true
	}
	
	if(password.value!="" && !checkpassword(password.value)){
		password.style.borderBottom="0.15rem solid red";
		password.parentElement.children[1].innerHTML="Use Symbols,Numbers and Letters"
		password.parentElement.children[1].style.color="red"
		bool2=false
		}
	
		if(password.value!="" && password.value.length<8){
	password.style.borderBottom="0.15rem solid red";
	password.parentElement.children[1].innerHTML="Password Invalid"
		password.parentElement.children[1].style.color="red"
		bool2=false
	}
	if(password.value==""){
			password.parentElement.children[1].innerHTML="Password Must be 8 character"
		password.parentElement.children[1].style.color="green"
		bool2=false
	}
	
	
	if(email.value!=""){
			email.style.borderBottom="0.15rem solid red";
		email.parentElement.children[1].innerHTML="Email Invalid"
	email.parentElement.children[1].style.color="red"
	bool3=false
		}
		if(email.value!="" && String(email.value)
			.toLowerCase().length<14){
			email.style.borderBottom="0.15rem solid red";
			email.parentElement.children[1].innerHTML="Email Invalid"
	email.parentElement.children[1].style.color="red"
	bool3=false
		}
	if(email.value!="" && String(email.value)
	.toLowerCase().length>14 && email.value.includes("@gmail.com")
		){
	
			email.style.borderBottom="0.15rem solid #16a085";
	email.parentElement.children[1].innerHTML="Email valid"
	email.parentElement.children[1].style.color="green"
	bool3=true
	}
		
		if(email.value==""){
			email.parentElement.children[1].innerHTML=""
			email.parentElement.children[1].style.color="red"
			bool3=false
	}
		
	
	
	
		if(pn.value!="" && Number(pn.value)){
			pn.style.borderBottom="0.15rem solid red";
			pn.parentElement.children[1].innerHTML="Invalid Number"
	pn.parentElement.children[1].style.color="red"
	bool4=false
		}
	if(pn.value!=""){
		pn.style.borderBottom="0.15rem solid red";
			pn.parentElement.children[1].innerHTML="Invalid Number"
	pn.parentElement.children[1].style.color="red"
	bool4=false
	}
	if(["1234567890","1111111111","0000000000","0987654321"].includes(pn.value)){
		pn.style.borderBottom="0.15rem solid red";
			pn.parentElement.children[1].innerHTML="Invalid Number"
	pn.parentElement.children[1].style.color="red"
	bool4=false
	}
	if(String(pn.value).indexOf("+")==0){
		
		if(String(pn.value)
			.toLowerCase().length==13){
			pn.style.borderBottom="0.15rem solid #16a085";
				pn.parentElement.children[1].innerHTML="valid Number"
	pn.parentElement.children[1].style.color="green"
	bool4=true
		}
		else{
			pn.style.borderBottom="0.15rem solid red";
				pn.parentElement.children[1].innerHTML="Invalid Number"
	pn.parentElement.children[1].style.color="red"
	bool4=false
		}
	}
	if(String(pn.value)
		.toLowerCase().length==10)
			{
				pn.style.borderBottom="0.15rem solid #16a085";
					pn.parentElement.children[1].innerHTML="Valid Number"
	pn.parentElement.children[1].style.color="green"
	bool4=true
			}
			if(pn.value==""){
				pn.parentElement.children[1].innerHTML=""
				pn.parentElement.children[1].style.color="red"
				bool4=false
		}
	
	
	
	if(wn.value!="" && Number(wn.value)){
		wn.style.borderBottom="0.15rem solid red";
			wn.parentElement.children[1].innerHTML="Invalid Number"
	wn.parentElement.children[1].style.color="red"
	bool5=false
	}
	if(wn.value!=""){
	wn.style.borderBottom="0.15rem solid red";
		wn.parentElement.children[1].innerHTML="Invalid Number"
	wn.parentElement.children[1].style.color="red"
	bool5=false
	}
	if(["1234567890","1111111111","0000000000","0987654321"].includes(wn.value)){
		wn.style.borderBottom="0.15rem solid red";
			wn.parentElement.children[1].innerHTML="Invalid Number"
	wn.parentElement.children[1].style.color="red"
	bool5=false
	}
	if(String(wn.value).indexOf("+")==0){
	if(String(wn.value)
		.toLowerCase().length==13){
		wn.style.borderBottom="0.15rem solid #16a085";
					wn.parentElement.children[1].innerHTML="Valid Number"
	wn.parentElement.children[1].style.color="green"
	bool5=true
	}
	else{
		wn.style.borderBottom="0.15rem solid red";
			wn.parentElement.children[1].innerHTML="Invalid Number"
	wn.parentElement.children[1].style.color="red"
	bool5=false
	}
	}
	if(String(wn.value)
	.toLowerCase().length==10)
		{
			wn.style.borderBottom="0.15rem solid #16a085";
				wn.parentElement.children[1].innerHTML="Valid Number"
	wn.parentElement.children[1].style.color="green"
	bool5=true
		}
		if(wn.value==""){
			wn.parentElement.children[1].innerHTML=""
			wn.parentElement.children[1].style.color="red"
			bool5=false
	}
	
	
		if(password.value==cpa.value){
			bool7=true
			cpa.style.borderBottom="0.15rem solid #16a082";
			cpa.parentElement.children[1].innerHTML="Match"
	cpa.parentElement.children[1].style.color="green"
		}
		if(password.value!=cpa.value){
			bool7=false
			cpa.style.borderBottom="0.15rem solid red";
			cpa.parentElement.children[1].innerHTML="Not Match"
	cpa.parentElement.children[1].style.color="red"
		}

	
	if(bool1 && bool2 && bool3 && bool4 && bool5 && bool6 && bool7){
		bool=true
		emailexistencewithreferral2(email.value,email,referral)
	
	}
	else{
	hidereg3()
	}
	
	}
		return bool;
	}


	function showreg3(){
			document.querySelector(".show3 .reg").style.opacity=1
			document.querySelector(".show3 .reg").style.pointerEvents="all"
					document.querySelector(".show3 .reg").style.cursor="pointer"
			document.querySelector(".show3 .regcontainer").style.cursor="pointer"
	
	}
	function hidereg3(){
		document.querySelector(".show3 .reg").style.opacity=0.5
			document.querySelector(".show3 .reg").style.pointerEvents="none"
		document.querySelector(".show3 .regcontainer").style.cursor="no-drop"
	}
	

	export {showreg3,checkpassword,hidereg3,emailexistencewithreferral2,validateForm2}