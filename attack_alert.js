let audio = new Audio('http://dedol.ru/alarm.mp3'); 

function getEvents() {
	return fetch("/game/index.php?page=componentOnly&component=eventList&action=fetchEventBox&ajax=1&asJson=1", {
		"headers": {
			"X-Requested-With": "XMLHttpRequest",
		},
		"method": "GET",
	}).then(response => response.json());
}

function checkEvents() {
	getEvents().then((data) => {
		if (data.hostile != 0)
			audio.play();
	});
}

setInterval(() => {checkEvents()}, 60000);

