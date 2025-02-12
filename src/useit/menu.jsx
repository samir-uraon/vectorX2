import gsap from 'gsap';
import { optioncreate } from './optiondata';
import validateForm,{hidereg,emailexistence} from './validation.jsx';
import { hidereg3,showreg3,emailexistencewithreferral2,validateForm2 } from './validation2.jsx';

function clean(){
	document.querySelectorAll(".page input").forEach((items)=>{
		items.style.borderBottom="0.15rem solid #555";
		items.value=""
		if(items.name!="p" && items.name!="Campus"){
		items.parentElement.children[1].innerHTML=""
	}
	else if(items.name=="p"){
		items.parentElement.children[1].innerHTML="Password Must be 8 character"
	}
	})
	document.querySelectorAll(".page1 input").forEach((items)=>{
  		items.value=""
				items.onfocus=()=>{			
					items.style.border="0.15rem solid #16a085";
			}
			items.addEventListener("focusout",()=>{
				items.style.border="0.15rem solid lightgrey";
			})
	})
}

function clean2(){
	document.querySelectorAll(".page3 input").forEach((items)=>{
		items.style.borderBottom="0.15rem solid #555";
		items.value=""
		if(items.name!="p" && items.name!="Campus"){
		items.parentElement.children[1].innerHTML=""
	}
	else if(items.name=="p"){
		items.parentElement.children[1].innerHTML="Password Must be 8 character"
	}
	})
	document.querySelectorAll(".page4 input").forEach((items)=>{
  		items.value=""
				items.onfocus=()=>{			
					items.style.border="0.15rem solid #16a085";
			}
			items.addEventListener("focusout",()=>{
				items.style.border="0.15rem solid lightgrey";
			})
	})
}

async function stay(){
if(sessionStorage.getItem("status") && sessionStorage.getItem("token")){
createAccount()
}


	if(sessionStorage.getItem("status1") && sessionStorage.getItem("token1")){
	
createAccount2()
}

}


function profile(){
	let profdiv=document.createElement("div")
	profdiv.className="profdiv"
	let pos=document.querySelector("#root")
	let main=document.createElement("div")
	main.className="profmain"
	main.innerHTML=`
		<div class="i"><svg xmlns="http://www.w3.org/2000/svg" height="1.7rem" viewBox="0 -960 960 960" width="1.7rem" fill="#EFEFEF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>

	<div class="photo">
	<p class="imgp">L</p>
</div>

<div class="data">
	<div class="row1">
	<label>Name : </label>
	<p id="pn"></p>
	</div>
	<div class="row1">
	<label>Email : </label>
	<p id="pl"></p>
	</div>
</div>

<div class="links">
<button id="rl">Referral Code</button>
<button id="sl">Your Selected Students</button>
</div>
<button id="logout">Logout</button>`
	profdiv.append(main)
	pos.append(profdiv)
	gsap.from(".profmain",{y:-200,duration:0.5,scale:0})

	document.querySelector("#rl").addEventListener("click",()=>{

		if(t1==1){
		 referralmake()
			t1=0
		}
		else{
			t1=1
			referralh()
			setTimeout(()=>{
				document.querySelector("#root").removeChild(rdiv)
			},1000)
		}
	
	})
		document.querySelector("#sl").addEventListener("click",()=>{
alert("not yet upload......")
		})
		document.querySelector("#logout").addEventListener("click",()=>{
logoutgo()
		})
	document.querySelector(".profmain .i").addEventListener("click",()=>{
profileh()
t=1
	})
if(sessionStorage.getItem("status") && sessionStorage.getItem("token")){

	let	key="id"
	let	keyvalue=sessionStorage.getItem("token")
	datafetch(key,keyvalue)


}

}
let t1=1
function referralmake(){
	let rdiv=document.createElement("div")
	
	rdiv.className="refdiv"
	rdiv.innerHTML=`
	<p id="ph">Referral Code</p>
	<div class="ix"><svg xmlns="http://www.w3.org/2000/svg" height="1.7rem" viewBox="0 -960 960 960" width="1.7rem" fill="#EFEFEF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
	<div class="refmain">
		<div class="pdiv">
<p id="rcode">12455</p></div>
<button id="copy">copy</button>
</div>`
document.querySelector("#root").append(rdiv)
gsap.from(".refdiv",{y:-200,duration:0.5,scale:0})
gsap.from(".refmain",{y:-200,duration:0.4,scale:0,delay:0.3})

if(localStorage.getItem("re")){
	document.querySelector("#rcode").innerHTML=localStorage.getItem("re")
}
	document.querySelector("#copy").onclick=()=>{
		document.querySelector("#copy").textContent="copied"
navigator.clipboard.writeText(document.querySelector("#rcode").innerHTML)
		setTimeout(()=>{
		document.querySelector("#copy").textContent="copy"
		},800)
	}


document.querySelector(".refdiv .ix").onclick=()=>{
	t1=1
referralh()
}
}

function logoutgo(){
	localStorage.removeItem("re")
	sessionStorage.removeItem("status")
	sessionStorage.removeItem("token")
	window.location.reload()
}

function logoutgo2(){
	
	sessionStorage.removeItem("status1")
	sessionStorage.removeItem("token1")
	sessionStorage.removeItem("spl")
	window.location.reload()
}

async function datafetch2(key,keyvalue){
	let name=document.querySelector(".sprofdiv #pn")
	let email=document.querySelector(".sprofdiv #pl")
	let profilelogo=document.querySelector(".sprofdiv .imgp")

	let url=import.meta.env.VITE_takes2
	let url1=new URL(url)
	url1.searchParams.append(key,keyvalue)
	let data=await (await fetch(url1)).json()

	let pl=String(data["email"][0]).toUpperCase()

//console.log(data);


 name.innerHTML=data["name"]
 email.innerHTML=data["email"]
 profilelogo.innerHTML=pl

}


async function datafetch(key,keyvalue){
	let name=document.querySelector(".profdiv #pn")
	let email=document.querySelector(".profdiv #pl")
	let profilelogo=document.querySelector(".profdiv .imgp")

	let url=import.meta.env.VITE_take
	let url1=new URL(url)
	url1.searchParams.append(key,keyvalue)
	let data=await (await fetch(url1)).json()

	let pl=String(data["email"][0]).toUpperCase()

//console.log(data);

localStorage.setItem("re",data["referral"])
 name.innerHTML=data["name"]
 email.innerHTML=data["email"]
 profilelogo.innerHTML=pl

}

let t=1
function profileh(){
	let pos=document.querySelector("#root")
gsap.to(".profmain",{y:-200,duration:0.5,scale:0})
setTimeout(()=>{
	let deldiv=document.querySelector(".profdiv")
	pos.removeChild(deldiv)
},1400)
}

function referralh(){
	let pos=document.querySelector("#root")
	gsap.to(".refmain",{y:-200,duration:0.4,scale:0})
	gsap.to(".refdiv",{y:-200,duration:0.4,scale:0,delay:0.2})
setTimeout(()=>{
	let deldiv=document.querySelector(".refdiv")
	pos.removeChild(deldiv)
},1200)
}
function createAccount(){
	let targ=document.querySelector("#t")
	targ.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="2.6rem" viewBox="0 -960 960 960" width="2.6rem" fill="#666666"><path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>My PRO Profile`
	targ.id="pf"
	let newtarg=document.createElement("li")
	newtarg.id="t"
	document.querySelector(".slidebar").append(newtarg)

	document.querySelector("#pf").onclick=()=>{
		if(t==1){
			profile()
			t=0
		}
		else{
			t=1
			profileh()
		}
	}
}

function showdonep(){
	let thdiv=document.createElement("div")
	thdiv.className="thdiv"
	let pos=document.querySelector(".page1")
	let p=document.createElement("p")
	p.className="thp"
	p.innerHTML="Login Successfull"
	thdiv.append(p)
	pos.append(thdiv)

	thdiv.style.backgroundColor="#32cd32"
gsap.from(".thdiv",{y:-65,duration:0.5,scale:0})
gsap.to(".thdiv",{y:-65,duration:0.5,scale:0,delay:2})
setTimeout(()=>{
pos.removeChild(thdiv)
},3000)
}

function showdonep2(){
	let thdiv=document.createElement("div")
	thdiv.className="thdiv"
	let pos=document.querySelector(".page4")
	let p=document.createElement("p")
	p.className="thp"
	p.innerHTML="Login Successfull"
	thdiv.append(p)
	pos.append(thdiv)

	thdiv.style.backgroundColor="#32cd32"
gsap.from(".thdiv",{y:-65,duration:0.5,scale:0})
gsap.to(".thdiv",{y:-65,duration:0.5,scale:0,delay:2})
setTimeout(()=>{
pos.removeChild(thdiv)
},3000)
}


function showwarningp(t){
	let thdiv=document.createElement("div")
	thdiv.className="thdiv"
	let pos=document.querySelector(".page1")
	let p=document.createElement("p")
	p.className="thp"
	p.innerHTML=t
	document.querySelector("#email").style.border="0.2rem solid lightgray";
	document.querySelector("#email").onfocus=()=>{
		document.querySelector("#email").style.border="0.2rem solid #16a085";
	}
	document.forms["forml"]["p2"].onfocus=()=>{
		document.querySelector("#email").style.border="0.2rem solid #16a085";
	}
	thdiv.append(p)
	pos.append(thdiv)
gsap.from(".thdiv",{y:-65,duration:0.5,scale:0})
gsap.to(".thdiv",{y:-65,duration:0.5,scale:0,delay:2})
setTimeout(()=>{
pos.removeChild(thdiv)
},3000)
}

function showwarningp2(t){
	let thdiv=document.createElement("div")
	thdiv.className="thdiv"
	let pos=document.querySelector(".page4")
	let p=document.createElement("p")
	p.className="thp"
	p.innerHTML=t
	document.querySelector(".page4 #email").style.border="0.2rem solid lightgray";
	document.querySelector(".page4 #email").onfocus=()=>{
		document.querySelector(".page4 #email").style.border="0.2rem solid #16a085";
	}
	document.forms["form1l"]["p2"].onfocus=()=>{
		document.querySelector(".page4 #email").style.border="0.2rem solid #16a085";
	}
	thdiv.append(p)
	pos.append(thdiv)
gsap.from(".thdiv",{y:-65,duration:0.5,scale:0})
gsap.to(".thdiv",{y:-65,duration:0.5,scale:0,delay:2})
setTimeout(()=>{
pos.removeChild(thdiv)
},3000)
}

function thanks(){
	let thdiv=document.createElement("div")
	thdiv.className="thdiv"
	let pos=document.querySelector(".page")
	let p=document.createElement("p")
p.className="thp"
	p.innerHTML="Thank You For Your Support"
	thdiv.append(p)
	pos.append(thdiv)
gsap.from(".thdiv",{y:-65,duration:0.7,scale:0})

setTimeout(()=>{
	p.textContent="Check your Gmail & then Login..."
},3000)
gsap.to(".thdiv",{y:-65,duration:0.5,scale:0,delay:5})
setTimeout(()=>{
pos.removeChild(thdiv)
},7000)
}



function excelbackend(t,c,d){
	//console.log("excelbackend");
	
	let scriptURL=import.meta.env.VITE_google_sheet
	let form=document.forms["myform"]
	let test=new FormData(form)

 test.delete("p")

	test.append("Time",t)
	test.append("Referral Code",c)

	
  fetch(scriptURL,{ method: 'POST', body:test})
  .then(()=>{
			//console.log("ok");
		})
  .catch(error => console.error('Error!', error.message))
clean()
}




function backend(){
//console.log("pro reg backend");

let jsondata={

	referralCode:""
	,password:"",
	email:"",
	name:""
}
let n1=Math.floor(Math.random()*(999-100)+100)
var n3=0
let n2=Math.floor(Math.random()*(999-100)+100)
let n4=String(n1)+String(n2)+String(n3)
let n5=n4.replace(n4[Math.floor(Math.random()*(n4.length-1)+1)],["@","#","$"][Math.floor(Math.random()*(3-1)+1)])
let referral=n5.replace(n5[Math.floor(Math.random()*(n5.length-1)+1)],"abcdefghtjklmnolqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt([Math.floor(Math.random()*(52-0))]))


jsondata.referralCode=referral
jsondata.password=document.forms["myform"]["p"].value
jsondata.email=document.forms["myform"]["Email"].value
jsondata.name=document.forms["myform"]["Name"].value
let stringdata=JSON.stringify(jsondata)
n3++
let date =new Date()

let url=import.meta.env.VITE_prodata
//console.log(url);

fetch(url,{method:"post",headers:{"Content-Type":"application/json"},body:stringdata}).then((res)=>{
	return res.json()
}).then(result =>{ 

if(result.status!="failed"){
	let id=String(result.token)
	excelbackend(date.toLocaleString(),referral,id)
}
	})
.catch((err)=>{
		console.error(err.message)
})
}



function sprofile(){
	let profdiv=document.createElement("div")
	profdiv.className="sprofdiv"
	let pos=document.querySelector("#root")
	let main=document.createElement("div")
	main.className="sprofmain"
	main.innerHTML=`
		<div class="i"><svg xmlns="http://www.w3.org/2000/svg" height="1.7rem" viewBox="0 -960 960 960" width="1.7rem" fill="#EFEFEF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>

	<div class="photo">
	<p class="imgp">N</p>
</div>

<div class="data">
	<div class="row1">
	<label>Name : </label>
	<p id="pn"></p>
	</div>
	<div class="row1">
	<label>Email : </label>
	<p id="pl"></p>
	</div>
</div>

<div class="links">
<button id="lc">Live Class</button>
<button id="dc">Demo Class</button>
</div>
<button id="logout">Logout</button>`
	profdiv.append(main)
	pos.append(profdiv)


	document.querySelector("#lc").addEventListener("click",async ()=>{
let data=await (await fetch(import.meta.env.VITE_updates)).json()
if(data["data1"]!="None"){
 window.location.href=data["data1"]
}else{
		alert("not yet upload......")}
	
	})
	
		document.querySelector("#dc").addEventListener("click",async ()=>{
			let data=await (await fetch(import.meta.env.VITE_updates)).json()
			if(data["data2"]!="None"){
				window.location.href=data["data2"]
			}else{
					alert("not yet upload......")}
		})
		document.querySelector(".sprofmain #logout").addEventListener("click",()=>{
logoutgo2()
		})
	document.querySelector(".sprofmain .i").addEventListener("click",()=>{
sprofileh
()
t=1
	})
if(sessionStorage.getItem("status1") && sessionStorage.getItem("token1")){

	let	key="id"
	let	keyvalue=sessionStorage.getItem("token1")
	datafetch2(key,keyvalue)
	gsap.from(".sprofmain",{y:-200,duration:0.5,scale:0})
}
}


function sprofileh(){
	t2=1
	let pos=document.querySelector("#root")
gsap.to(".sprofmain",{y:-200,duration:0.5,scale:0})
setTimeout(()=>{
	let deldiv=document.querySelector(".sprofdiv")
	pos.removeChild(deldiv)
},1400)
}


function createAccount2(){
	if(sessionStorage.getItem("spl")){
	let lis=document.querySelectorAll(".horizontalbar li")
	lis[1].id="sprofbutton"
	lis[1].innerHTML=sessionStorage.getItem("spl")
	document.querySelector("#sprofbutton").onclick=()=>{
		if(t2==1){
		sprofile()
	t2=0
}
		else{
			sprofileh()
			
		}
	}
}
	else{
		sessionStorage.removeItem("status1")
		sessionStorage.removeItem("token1")

	}
}
let t2=1

function backend3(){
//console.log("stu reg backend");

	let jsondata={
		referralCode:""
		,password:"",
		email:"",
		percentile:"",name:"",
		transactionID:""
	}

	localStorage.setItem("pn",document.forms["myform3"]["Phone Number"].value)
	localStorage.setItem("wn",document.forms["myform3"]["WhatsApp Number"].value)
	localStorage.setItem("name",document.forms["myform3"]["Name"].value)
	localStorage.setItem("refcode",document.forms["myform3"]["Referral Code"].value)
	localStorage.setItem("email",document.forms["myform3"]["Email"].value)
	localStorage.setItem("jp",document.forms["myform3"]["jp"].value)


	jsondata.referralCode=document.forms["myform3"]["Referral Code"].value
	jsondata.password=document.forms["myform3"]["p"].value
	jsondata.email=document.forms["myform3"]["Email"].value
	jsondata.name=document.forms["myform3"]["Name"].value
	jsondata.percentile=document.forms["myform3"]["jp"].value
	let stringdata=JSON.stringify(jsondata)

	
	let url=import.meta.env.VITE_sdata1
	//console.log(url);
	
	fetch(url,{method:"post",headers:{"Content-Type":"application/json"},body:stringdata}).then((res)=>{
		return res.json()
	}).then((result) =>{ 

	let test=result["data"]
	//console.log(test);
	
	 if(test!=0){

localStorage.setItem("amount",test)

			if(document.querySelector(".page3")){
				Sregh()
			}
			if(document.querySelector(".page4")){
				Sloginh()
			}
			if(document.querySelector(".page")){
				proregh()
			}
			if(document.querySelector(".page1")){
				prologinh()
			}
   makeqrbutton()
			

		}else{
			alert("Some technical Error comes.Try again....")
		}

		})
	.catch((err)=>{
			//console.error(err.message)
	})
clean2()
	}


	
	function makeqrbutton(){
		let qrback=document.createElement("div")
		qrback.className="takeback"
		qrback.innerHTML=`	<div class="containers">
			<h2>Payment Here</h2>
		<div class="main">
			<p>Scan the QR Code with any UPI App and pay the amount</p>
			<div class="btns">
			<button id="paycancel">Cancel</button>
<button id="paybutton">Pay ₹${localStorage.getItem("amount")}</button>
		</div></div>
	</div>`
	document.querySelector("#root").append(qrback)
	gsap.from(".takeback",{y:-200,scale:0,ease:"sine.inOut",duration:0.5})
	document.querySelector("#paycancel").onclick=async ()=>{
		let url=import.meta.env.VITE_cancel
		let url1=`${url}?email=${localStorage.getItem("email")}`
await fetch(url1)
		localStorage.clear()
		paybuttonhide()
	}
	document.querySelector("#paybutton").onclick=()=>{
		makeqr()
	}

	}

	function staypay(){
		if(localStorage.getItem("amount")){
		makeqrbutton()
		}
	}

	function makeqr(){
		let qrback=document.querySelector(".takeback")
		qrback.innerHTML=`
			<div class="containers2">
					<h2>Payment Here</h2>
		<div class="main">
			<p>Scan the QR Code with any UPI App and pay the amount</p>
<div class="img"><img src="" alt=""></div>
<form class="sform3">
<input type="text" autocomplete="off" placeholder="Enter Transaction ID" minlength="12" maxlength="12">
<div class="btns">
<button id="paycancel">cancel</button>
<button id="pay">submit</button>
</form>
		</div>
</div>
</div>`


document.querySelector(".sform3").onsubmit=(event)=>{
	event.preventDefault()
	}
	document.querySelector(".takeback img").src=`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=upi://pay?pa=9381774219@ybl%26am=${localStorage.getItem("amount")}%26tn=VectorX`
	document.querySelector("#pay").onclick=()=>{
		pay()
	}
	document.querySelector("#paycancel").onclick= async ()=>{
		let url=import.meta.env.VITE_cancel
		let url1=`${url}?email=${localStorage.getItem("email")}`
await fetch(url1)
		localStorage.clear()
		paybuttonhide()
	}
	}


function handel2(e){
	e.preventDefault()
	backend3()
hidereg3()
}

function paybuttonhide(){
	gsap.to(".takeback",{y:-200,scale:0,ease:"sine.inOut",duration:0.5})
	localStorage.clear()
	setTimeout(()=>{
document.querySelector("#root").removeChild(document.querySelector(".takeback"))
	},1000)
}

async function pay(){
	let tr=document.querySelector(".takeback input")
	if(tr.value){
	if(tr.value.length==12){

		if(localStorage.getItem("name") && localStorage.getItem("pn")  && localStorage.getItem("wn") && localStorage.getItem("email") && localStorage.getItem("jp") && localStorage.getItem("amount")){
			let yes=confirm("Are you sure?")
			if(yes){
			let jsondata={}
	jsondata.name=localStorage.getItem("name")
	jsondata.email=localStorage.getItem("email")
	jsondata.referralCode=localStorage.getItem("refcode")
	jsondata.number=localStorage.getItem("pn")
 jsondata.transactionID=tr.value
	
	let strjson=JSON.stringify(jsondata)

	
	await fetch(import.meta.env.VITE_sdata2,{method:"post",headers:{"Content-Type":"application/json"},body:strjson})
paybuttonhide()

	}

	}
		
	}else{alert("Invaild Transcation ID")}
	}
	else{
		alert("Please fill the Transcation ID")
	}
	}


function handel(e){
	e.preventDefault()
	backend()
hidereg()
thanks()

}



function typesession(){
	document.querySelector("#class").focus()
}

function useitclicks(){
		document.querySelector("#lic").onClick=async ()=>{
						if(sessionStorage.getItem("status1") && sessionStorage.getItem("token1")){


							let data=await (await fetch(import.meta.env.VITE_updates)).json()
							if(data["data1"]!="None"){
								window.location.href=data["data1"]
							}else{
									alert("not yet upload......")}


		}else{
alert("Please Login...(student section)")
		}}


		document.querySelector("#rec").onClick=async ()=>{
						if(sessionStorage.getItem("status1") && sessionStorage.getItem("token1")){

							let data=await (await fetch(import.meta.env.VITE_updates)).json()
							if(data["data2"]!="None"){
								window.location.href=data["data2"]
							}else{
									alert("not yet upload......")}


		}else{
alert("Please Login...(student section)")
		}}


document.querySelector("#ddp").onClick=async ()=>{
	if(sessionStorage.getItem("status1") && sessionStorage.getItem("token1")){


		let data=await (await fetch(import.meta.env.VITE_updates)).json()
		if(data["data3"]!="None"){
			window.location.href=data["data3"]
		}else{
				alert("not yet upload......")}


}else{
alert("Please Login...(student section)")
}}


		document.querySelector("#test").onClick=async ()=>{
			if(sessionStorage.getItem("status1") && sessionStorage.getItem("token1")){

				let data=await (await fetch(import.meta.env.VITE_updates)).json()
				if(data["data4"]!="None"){
					window.location.href=data["data4"]
				}else{
						alert("not yet upload......")}


}else{
alert("Please Login...(student section)")
}}

}



function slidebarshow(){

	var menu=document.querySelector("#hor")
	var slidebar=document.querySelector(".menu")
	var nav=document.querySelector(".horizontalbar")
	
	if(slidebar.style.display=="flex"){
		menu.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="2.6rem" viewBox="0 -960 960 960" width="2.6rem" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`
	 slidebar.style.display="none"
		nav.style.backgroundColor="white"
	
	}
 else{

	menu.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`

 slidebar.style.display="flex"
	nav.style.backgroundColor="rgb(177, 190, 200);"

}

}






function Sreg(){
	let w=window.innerWidth/1.8
		let main=document.createElement("div")
		main.classList.add("show3")
		let page=document.createElement("div")
	page.className="page3"
	main.appendChild(page)
	page.innerHTML=`<div class="title"><span>Students Registration</span>
	<div class="i"><svg xmlns="http://www.w3.org/2000/svg" height="1.7rem" viewBox="0 -960 960 960" width="1.7rem" fill="#EFEFEF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
	</div>
	
					<form name="myform3">
			<div class="form">
	
	<div class="input-container">
	<input type="text" placeholder='Full Name' name="Name" autoComplete="off"/>
	<p></p>
	</div>
	
	<div class="input-container">
	<input type="email" placeholder='Email' name="Email" autoComplete="off"/>
	<p></p>
	</div>
	
	<div class="input-container">	
	<input type="text" placeholder='Phone Number' name="Phone Number"  autoComplete="off"/>
	<p></p>
	</div>
	
	<div class="input-container">
	<input type="text" name="Referral Code" placeholder="Referral Code(if you have)" autoComplete="off"/>
<p></p>
	</div>
	
	<div class="input-container">
	<input type="text" placeholder='Whatsapp Number' name="WhatsApp Number" autoComplete="off"/>
	<p></p>
	</div>
			
	
	<div class="input-container">
	<input type="password" placeholder='Password' name="p" autoComplete="off"/>
	<p></p>
	</div>
	

	<div class="input-container">
	<input type="text" placeholder="JEE Main'25 Percentile" name="jp" autoComplete="off"/>
	<p></p>
	</div>



		<div class="input-container">
	<input type="password" placeholder='Confirm Password' name="cpa"/>
	<p></p>
	</div>

			</div>
					<div class="regdiv">
<div class="regcontainer">
<button class="reg">Submit</button></div></div>
				</form>
				 <div class="login-link">A member? <a>Login</a></div>`


					document.querySelector("#root").appendChild(main)

					gsap.from(".page3",{x:w,scale:0.1,duration:0.5})
if(document.querySelector(".page")){
	proregh()
}
if(document.querySelector(".page1")){
	prologinh()
}
					document.querySelector(".i").onclick=()=>{
						Sregh()
					}

	document.querySelector(".login-link a").onclick=()=>{
		Sregh()
		Slogin()
		
	}
	document.querySelector(".page3 form").onsubmit=(event)=>{
		handel2(event)
	}


	document.querySelectorAll(".page3 input").forEach((items)=>{
		items.onkeyup=()=>{
	
			if(items.value==""){
					items.parentElement.children[1].innerHTML=""
						
					if(items.name=="p"){
									items.parentElement.children[1].innerHTML="Password Must be 8 character"
						items.parentElement.children[1].style.color="green"
						}
				items.onfocus=()=>{			
					items.style.borderBottom="0.15rem solid #16a085";
			}
			items.addEventListener("focusout",()=>{
				items.style.borderBottom="0.15rem solid #555";
				validateForm2()
			})
	
			}
	else{
		validateForm2()
	}
	}})


}


	function Sregh(){
						var w=window.innerWidth/1.8
							gsap.to(".page3",{x:w,scale:0.1,duration:0.5})
							let reele=document.querySelector(".show3")
							setTimeout(()=>{
								document.querySelector("#root").removeChild(reele)
							},450)
						}

					

function proreg(){
	
	let w=window.innerWidth/1.8
	let main=document.createElement("div")
	main.classList.add("show")
	let page=document.createElement("div")
page.className="page"
main.appendChild(page)
page.innerHTML=`	<div class="title"><span>PRO Registration</span>
<div class="i"><svg xmlns="http://www.w3.org/2000/svg" height="1.7rem" viewBox="0 -960 960 960" width="1.7rem" fill="#EFEFEF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
</div>
		
				<form name="myform">
<div class="form">
<div class="input-container">
<input type="text" placeholder='Full Name' name="Name" autocomplete="off"  required/>
<p></p>
</div>

<div class="input-container">
<input type="email" placeholder='Email' name="Email" autocomplete="off" id="em" required/>
<p></p>
</div>

<div class="input-container">	
<input type="text" placeholder='Phone Number' name="Phone Number" autocomplete="off"  required/>
<p></p>
</div>

<div class="input-container">
<input list="optionList" id="options" name="Campus" placeholder="Campus" required/>
<datalist id="optionList">
</datalist>
</div>

<div class="input-container">
<input type="text" placeholder='Whatsapp Number' name="WhatsApp Number" autocomplete="off"  required/>
<p></p>
</div>
		
<div class="input-container">
<input type="text" placeholder='UPI ID' name="UPI ID" autocomplete="off"  required/>
<p></p>
</div>

<div class="input-container">
<input type="text" placeholder='UPI Number' name="UPI Number" autocomplete="off" required/>
<p></p>
</div>

<div class="input-container">
<input type="password" placeholder='Password' name="p" autocomplete="off" required/>
<p id="p">Password Must be 8 character</p>
</div>

</div>
<div class="regdiv">
<div class="regcontainer">
<button class="reg">Submit</button></div></div>
				</form>
				 <div class="login-link">A member? <a>Login</a></div>`
				document.querySelector("#root").appendChild(main)
		
	optioncreate()
document.querySelector(".i").onclick=()=>{
	proregh()
}
if(document.querySelector(".page3")){
	Sregh()
}
if(document.querySelector(".page4")){
	Sloginh()
}
document.querySelector(".page form").onsubmit=(event)=>{
	handel(event)
}
document.querySelectorAll(".page input").forEach((items)=>{
	items.onkeyup=()=>{

		if(items.value==""){
				items.parentElement.children[1].innerHTML=""
					
				if(items.name=="p"){
								items.parentElement.children[1].innerHTML="Password Must be 8 character"
					items.parentElement.children[1].style.color="green"
					}
			items.onfocus=()=>{			
				items.style.borderBottom="0.15rem solid #16a085";
		}
		items.addEventListener("focusout",()=>{
			items.style.borderBottom="0.15rem solid #555";
			validateForm()
		})

		}
else{
	validateForm()
}
}

})

 gsap.from(".page",{x:-w,scale:0.1,duration:0.5})
	document.querySelector(".login-link a").onclick=()=>{
		prologin()
		
	}
}





function proregh(){
var w=window.innerWidth/1.8
 gsap.to(".page",{x:-w,scale:0.1,duration:0.5})
	let reele=document.querySelector(".show")
	setTimeout(()=>{

		document.querySelector("#root").removeChild(reele)
	},450)
}

function enterpress(e){
	let bool=true
if(e.keyCode==13){
	bool=false
}
return bool
}



function backend23(){
	//console.log("stu login backend");

	let jsondata={
		password:"",
		email:"",
	}

	jsondata.password=document.forms["form1l"]["p2"].value
	jsondata.email=document.forms["form1l"]["email"].value
sessionStorage.setItem("spl",document.forms["form1l"]["email"].value[0].toUpperCase())
	let stringdata=JSON.stringify(jsondata)

	let url=import.meta.env.VITE_slog

	
fetch(url,{method:"post",headers:{"Content-Type":"application/json"},body:stringdata}).then((res)=>{
	return res.json();
	}).then((result)=>{
		let data2=result.status1
		let data3=String(result.token1)
		//console.log(result);
		
		if(data2=="success"){
			if(!sessionStorage.getItem("status1") && !sessionStorage.getItem("token1")){
createAccount2()
			showdonep2()
			sessionStorage.setItem("status1","true")
			sessionStorage.setItem("token1",data3)
		}else{
			
			if(sessionStorage.getItem("token1")!=data3){
				createAccount2()
				showdonep2()
				sessionStorage.setItem("status1","true")
				sessionStorage.setItem("token1",data3)
			
		}else{
			showdonep2()

		}
	}
	}else{
showwarningp2("Incorrect Data")
		}
	}).catch((err)=>{
			console.error(err.message)
	})

	document.querySelector(".page4 #email").style.border="0.2rem solid lightgrey";
	clean2()
}




function Slogin(){
	var w=window.innerWidth
	var main1=document.createElement("div")
	main1.classList.add("show4")
	var page1=document.createElement("div")
page1.className="page4"

page1.innerHTML=`<div class="wrapper">
    <div class="title"><span>Students Login</span>
				<div class="i1"><svg xmlns="http://www.w3.org/2000/svg" height="1.7rem" viewBox="0 -960 960 960" width="1.7rem" fill="#EFEFEF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
				</div>
  <form name="form1l">
    <div class="input_div">
      <div class="row">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Email" required autocomplete="off" id="email" name="email" />
      </div>
      <div class="row">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" name="p2" required autocomplete="off" minlength="8"/>
								
								<i class="fas fa-eye" id="eye"></i>
								</div>
      </div>
      
      <div class="pass"><a>Forgot password?</a></div>
      <button class="btn">Login</button>
      <div class="signup-link">Not a member? <a>Register now</a></div>
    </form>
</div>`
main1.appendChild(page1)
document.querySelector("#root").append(main1)
gsap.from(".page4",{x:w,scale:0.1,duration:0.5})
document.querySelector(".signup-link a").onclick=()=>{
Sreg()
	Sloginh()
}
if(document.querySelector(".page")){
	proregh()
}
if(document.querySelector(".page1")){
	prologinh()
}
document.querySelector(".i1").onclick=()=>{
	Sloginh()
}

document.querySelector("#eye").onclick=()=>{
	if(document.querySelector("#eye").className=="fas fa-eye"){
	document.querySelector("#eye").className="fas fa-eye-slash"
	document.querySelector("input[type='password']").type = 'text'

}
else{
document.querySelector("#eye").className="fas fa-eye"
document.querySelectorAll("input[type='text']")[1].type = 'password'
}
}

document.querySelector(".page4 #email").onchange=()=>{
	verifiede2()
}
document.querySelector(".page4 form").onkeydown=(event)=>{
 if(!enterpress(event)){
		event.preventDefault()
	}
}

document.querySelector(".page4 form").onsubmit=(event)=>{
	event.preventDefault()
	
		if(verifiede2()){
	backend23()
	}
	}

}


function verifiede2(){
	let bool=false
	let te=document.querySelector(".page4 #email")
	if(String(te.value).indexOf("@")!=-1){
		if(te.value.length>13){
			if(!["@gmail.com"].includes(te.value.substring((te.value).indexOf("@"),te.value.length))){
			showwarningp2("Invalid Email")
bool=false
		}else{
			if(te.value.substring(0,(te.value).indexOf("@")).length<5){
				showwarningp2("Invalid Email")
				bool=false
			}else{
			te.style.border="0.2rem solid #16a085";
		
			bool=true
		}
		}	
		}else{
			showwarningp2("Invalid Email")
			bool=false
		}
	}  
	
	else{
		showwarningp2("Invalid Email")
		bool=false
	}
	return bool
}


function prologin(){
	var w=window.innerWidth
	var main1=document.createElement("div")
	main1.classList.add("show1")
	var page1=document.createElement("div")
page1.className="page1"

page1.innerHTML=`<div class="wrapper">
    <div class="title"><span>PRO Login</span>
				<div class="i1"><svg xmlns="http://www.w3.org/2000/svg" height="1.7rem" viewBox="0 -960 960 960" width="1.7rem" fill="#EFEFEF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
				</div>
  <form name="forml">
    <div class="input_div">
      <div class="row">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Email" required autocomplete="off" id="email" name="email" />
      </div>
      <div class="row">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" name="p2" required autocomplete="off" minlength="8"/>
								
								<i class="fas fa-eye" id="eye"></i>
								</div>
      </div>
      
      <div class="pass"><a>Forgot password?</a></div>
      <button class="btn">Login</button>
      <div class="signup-link">Not a member? <a>Register now</a></div>
    </form>
</div>`
if(document.querySelector(".page3")){
	Sregh()
}
if(document.querySelector(".page4")){
	Sloginh()
}
main1.appendChild(page1)
document.querySelector("#root").append(main1)
document.querySelector(".page1 .signup-link a").onclick=()=>{proreg()
	prologinh()
}

document.querySelector("#eye").onclick=()=>{
	if(document.querySelector("#eye").className=="fas fa-eye"){
	document.querySelector("#eye").className="fas fa-eye-slash"
	document.querySelector("input[type='password']").type = 'text'

}
else{
document.querySelector("#eye").className="fas fa-eye"
document.querySelectorAll("input[type='text']")[1].type = 'password'
}


document.querySelector("#email").onchange=()=>{

	verifiede()
}
}

function verifiede(){
	let bool=false
	let te=document.querySelector("#email")
	if(String(te.value).indexOf("@")!=-1){
		if(te.value.length>13){
			if(!["@gmail.com"].includes(te.value.substring((te.value).indexOf("@"),te.value.length))){
			showwarningp("Invalid Email")
bool=false
		}else{
			if(te.value.substring(0,(te.value).indexOf("@")).length<5){
				showwarningp("Invalid Email")
				bool=false
			}else{
			te.style.border="0.2rem solid #16a085";
		
			bool=true
		}
		}	
		}else{
			showwarningp("Invalid Email")
			bool=false
		}
	}  
	
	else{
		showwarningp("Invalid Email")
		bool=false
	}
	return bool
}



function backend2(){
	//console.log("pro login backend");
	
	let jsondata={
		password:"",
		email:"",
	}

	jsondata.password=document.forms["forml"]["p2"].value
	jsondata.email=document.forms["forml"]["email"].value

	let stringdata=JSON.stringify(jsondata)

	let url=import.meta.env.VITE_prolog
	//console.log(url);
	
fetch(url,{method:"post",headers:{"Content-Type":"application/json"},body:stringdata}).then((res)=>{
	return res.json();
	}).then((result)=>{
		let data2=result.status
		let data3=String(result.token)
		
		if(data2=="success"){
			if(!sessionStorage.getItem("status") && !sessionStorage.getItem("token")){
			createAccount()
			showdonep()
			sessionStorage.setItem("status","true")
			sessionStorage.setItem("token",data3)
		}else{
			
			if(sessionStorage.getItem("token")!=data3){
				showdonep()
				sessionStorage.setItem("status","true")
				sessionStorage.setItem("token",data3)
		 localStorage.setItem("re",result["referral"])
			
		}else{
			showdonep()
		}
	}
	}else{
wrong()
		}
	}).catch((err)=>{
			console.error(err.message)
	})

	document.querySelector("#email").style.border="0.2rem solid lightgrey";
	clean()
}





function wrong(){
	showwarningp("Incorrect Data")
}

document.forms["forml"].onsubmit=(event)=>{
event.preventDefault()

	if(verifiede()){
	backend2()}
}



//document.querySelector(".page2 .btn").onclick=()=>{
//	proreg()
//	prologinh()
//}

if(document.querySelector(".show")){
	proregh()
}
document.querySelector(".page1 .i1").onclick=()=>{
	prologinh()
}
 gsap.from(".page1",{x:-w,scale:0.1,duration:0.5})

}

function prologinh(){
	var w=window.innerWidth
 gsap.to(".page1",{x:-w,scale:0.1,duration:0.5})
	var reele=document.querySelector(".show1")
	setTimeout(()=>{

		document.querySelector("#root").removeChild(reele)
	},450)
}
function Sloginh(){
	var w=window.innerWidth
 gsap.to(".page4",{x:w,scale:0.1,duration:0.5})
	var reele=document.querySelector(".show4")
	setTimeout(()=>{

		document.querySelector("#root").removeChild(reele)
	},450)
}




export {slidebarshow,proreg,Slogin,proregh,prologin,prologinh,stay,staypay}


