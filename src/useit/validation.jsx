
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
		if(["@okicici","@ybl","@ibl","@axl","@paytm"].includes(element)){
	ok=true

		}else{
			ok=false
		}
	
	return ok
	}


async function emailexistence(em,email){
hidereg()

let key="email"
let keyvalue=em
let url=`${import.meta.env.VITE_take}`
let url1=new URL(url)
url1.searchParams.append(key,keyvalue)
let data=await (await fetch(url1)).json()



	if(data["name"]!="None"){
 hidereg()
							email.parentElement.children[1].innerHTML="Email already Exist"
							email.style.borderBottom="0.15rem solid red";
						email.parentElement.children[1].style.color="red"
	}else{
	showreg()
					email.style.borderBottom="0.15rem solid #16a085";
					email.parentElement.children[1].innerHTML="Email valid"
					email.parentElement.children[1].style.color="green"
	}
	
}


function validateForm(){

let bool=false
let bool1=false
let bool2=false
let bool3=false
let bool4=false
let bool5=false
let bool6=false
let bool7=false
let bool8=false
if(document.querySelector(".show")){
 
					let name=document.forms["myform"]["Name"]
					let email=document.forms["myform"]["Email"]
     let upin=document.forms["myform"]["UPI Number"]
     let upiid=document.forms["myform"]["UPI ID"]
					let password=document.forms["myform"]["p"]
					let Campus=document.forms["myform"]["Campus"]
		   let pn=document.forms["myform"]["Phone Number"]
					let wn=document.forms["myform"]["WhatsApp Number"]
		
				
					if(Campus.value!=""){
					Campus.style.borderBottom="0.15rem solid #16a085";
					bool8=true
					}
					if(Campus.value==""){
						bool8=false
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






	if(upin.value!=""){
		upin.style.borderBottom="0.15rem solid red";
			upin.parentElement.children[1].innerHTML="Invalid UPI Number"
upin.parentElement.children[1].style.color="red"
bool6=false
		}
		if(upin.value!="" && Number(upin.value)){
			upin.style.borderBottom="0.15rem solid red";
									upin.parentElement.children[1].innerHTML="Invalid UPI Number"
upin.parentElement.children[1].style.color="red"
bool6=false
		}
		if(upin.value.length==10){
			upin.style.borderBottom="0.15rem solid #16a085";
						upin.parentElement.children[1].innerHTML="Valid UPI Number"
upin.parentElement.children[1].style.color="green"
bool6=true
			}
			if(upin.value==""){
				upin.parentElement.children[1].innerHTML=""
				upin.parentElement.children[1].style.color="red"
	bool6=false	}
	if(["1234567890","1111111111","0000000000","0987654321"].includes(upin.value)){
		upin.style.borderBottom="0.15rem solid red";
			upin.parentElement.children[1].innerHTML="Invalid Number"
	upin.parentElement.children[1].style.color="red"
	bool6=false
	}




		if(upiid.value==""){
			upiid.parentElement.children[1].innerHTML=""
			upiid.parentElement.children[1].style.color="red"
			bool7=false
	}
if(upiid.value!="" && upiid.value.includes(" "))
{upiid.style.borderBottom="0.15rem solid red";
				upiid.parentElement.children[1].innerHTML="Invalid UPI ID"
upiid.parentElement.children[1].style.color="red"
bool7=false
}
if(upiid.value!="" && upiid.value.substring(0,upiid.value.indexOf("@")).length<3){
	{upiid.style.borderBottom="0.15rem solid red";
		upiid.parentElement.children[1].innerHTML="Invalid UPI ID"
upiid.parentElement.children[1].style.color="red"
bool7=false
}
}
if(["1234567890","1111111111","0000000000","0987654321"].includes(upiid.value.substring(0,upiid.value.indexOf("@")))){
	upiid.style.borderBottom="0.15rem solid red";
		upiid.parentElement.children[1].innerHTML="Invalid Number"
upiid.parentElement.children[1].style.color="red"
bool7=false
}
if(upiid.value!="" && !checkupiid(upiid.value))
	{upiid.style.borderBottom="0.15rem solid red";
					upiid.parentElement.children[1].innerHTML="Invalid UPI ID"
upiid.parentElement.children[1].style.color="red"
bool7=false
	}
if(checkupiid(upiid.value) && upiid.value!="" && upiid.value.substring(0,upiid.value.indexOf("@")).length>=3)
	{upiid.style.borderBottom="0.15rem solid #16a085";
					upiid.parentElement.children[1].innerHTML="Valid UPI ID"
upiid.parentElement.children[1].style.color="green"
bool7=true
	}

	

if(bool1 && bool2 && bool3 && bool4 && bool5 && bool6 && bool7 && bool8 ){
	bool=true
emailexistence(email.value,email)
}
else{
hidereg()
}

}
	return bool;
}
function showreg(){
		document.querySelector(".reg").style.opacity=1
		document.querySelector(".reg").style.pointerEvents="all"
				document.querySelector(".reg").style.cursor="pointer"
		document.querySelector(".regcontainer").style.cursor="pointer"

}
function hidereg(){
	document.querySelector(".reg").style.opacity=0.5
		document.querySelector(".reg").style.pointerEvents="none"
	document.querySelector(".regcontainer").style.cursor="no-drop"
}

export default validateForm
export {showreg,checkpassword,checkupiid,hidereg,emailexistence}