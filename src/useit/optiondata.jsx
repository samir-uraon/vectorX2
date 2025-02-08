function optioncreate(){
	var data=[
		"IIT Kharagpur" ,"IIT Bombay","IIT Madras","IIT Kanpur","IIT Delhi","IIT Guwahati","IIT Roorkee",
		"IIT Ropar","IIT Bhubaneswar","IIT Gandhinagar","IIT Jodhpur","IIT Patna","IIT Indore","IIT Mandi" ,"IIT Varanasi" 	,
"IIT Palakkad" ,"IIT Dhanbad" ,"IIT Bhilai" ,"IIT Goa" ,	"IIT Madras", "IIT Delhi","Jadavpur University","NIT Tiruchirappalli","NIT Jalandhar","NIT Durgapur","NIT Andhra Pradesh"
,"NIT Uttarakhand","NIT Sikkim","NIT Puducherry","NIT Nagaland","NIT Mizoram","NIT Meghalaya"
,"NIT Manipur", 	"NIT Goa", 	"NIT Delhi", 	"NIT Arunachal Pradesh","NIT Agartala", 	"NIT Raipur", 	"NIT Patna", 	"NIT Hamirpur",
"NIT Silchar","NIT Kurukshetra", 	"NIT Jaipur","NIT Rourkela","NIT Calicut", 	"NIT Jamshedpur"
,"NIT Karnataka","NIT Surat","NIT Allahabad","NIT Srinagar"
]
if(document.querySelector("#optionList")){
data.forEach((item)=>{
	var option=document.createElement("option")
	option.value=item
document.querySelector("#optionList").append(option)
})
}
}

export {optioncreate}