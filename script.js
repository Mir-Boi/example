console.log("Тг создам")
const tg = window.Telegram.WebApp
console.log("Тг создал")
// tg.showAlert(`Добро пожаловать, @${tg.WebAppUser.username}.`);
alert(`Добро пожаловать, @${tg.WebAppUser.username}.`)
tg.isExpanded
tg.expand()
сconsole.log("Расширил")

let informazia = {
    		score: 123,
    		text: "anime"
    	}
alert("Щас отправлю в тг")
tg.sendData(JSON.stringify(informazia))  // js -> json 
alert("Отрпавил в тг!")