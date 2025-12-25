//bismilah
 const fromLang=document.querySelector("#fromInput");
 const toLang=document.querySelector("#toInput");

 document.addEventListener("DOMContentLoaded",loadLanguage)

 async function  loadLanguage(){
	const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '123299670fmsh8554540f0b01bd0p1a63fdjsn88274047c3a5',
		'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
	}
};
	try {
	const response = await fetch(url, options);
	const result = await response.json();
	const languages=result.data.languages;
	
	languages.forEach(lang =>{
		//from
		const fromOption=document.createElement("option")
		fromOption.className="options"
		fromOption.value=lang.code;
		fromOption.textContent=lang.name;
		//to
		const toOption=document.createElement("option")
		toOption.className="options"
		toOption.value=lang.code;
		toOption.textContent=lang.name

	fromLang.appendChild(fromOption)
	toLang.appendChild(toOption)
	})

} catch (error) {
	console.error(error);
}

	
 }

 document.querySelector("#translateForm").addEventListener("submit",function(event){
	event.preventDefault();

	transaleText()
 })



  async function transaleText(){
	const InputText=document.querySelector("#typeArea");
	const text= InputText.value
	const sourceLang=fromLang.value;
	const targetLang=toLang.value;
	const url = 'https://text-translator2.p.rapidapi.com/translate';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '123299670fmsh8554540f0b01bd0p1a63fdjsn88274047c3a5',
		'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({
		source_language:sourceLang,
		target_language:targetLang,
		text:text
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	const data=result.data.translatedText
	const outputPart=document.querySelector("#outputPart")
	const DataResult=document.createElement("p");
	DataResult.className="text";
	DataResult.textContent=data;
	outputPart.appendChild(DataResult)

} catch (error) {
	console.error(error);
}
  }