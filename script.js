const tg = window.Telegram.WebApp
tg.showAlert(`Добро пожаловать, @${tg.WebAppUser.username}.`);
tg.isExpanded
tg.expand()

let informazia = {
    		score: config.countScore,
    		text: "anime"
    	}
alert("Щас отправлю в тг")
tg.sendData(JSON.stringify(informazia))  // js -> json 
alert("Отрпавил в тг!")