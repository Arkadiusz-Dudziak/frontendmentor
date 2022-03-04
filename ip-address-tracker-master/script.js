//text content
let pIp = document.getElementById("ip");
let pIsp = document.getElementById("isp");
let pLocation = document.getElementById("location");
let pTimeOffset = document.getElementById("timeOffset");
//api key
let apiKey = "at_2IsqINhLRr9rPTHRYKNA5ff8CvcoN";

var mymap = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);


const onStartup = async() => {
    let requestUrl = "https://geo.ipify.org/api/v1?apiKey=" + apiKey;
    const response = await fetch(requestUrl);
    const myJson = await response.json();
    setContentBasedOnResponse(myJson);
}

function setContentBasedOnResponse(response) {
    pIp.textContent = response.ip;
    pIsp.textContent = response.isp;
    pLocation.textContent = response.location.city + ", " + response.location.region + " " + response.location.postalCode;
    pTimeOffset.textContent = "UTC " + response.location.timezone;
    //set map to new location and add marker
    mymap.panTo(new L.LatLng(response.location.lat, response.location.lng), 13);
    L.marker([response.location.lat, response.location.lng]).addTo(mymap);
}


const searchIp = async () => {
    let ipAddr = document.getElementById("ip_address_input").value;
    let requestUrl = "https://geo.ipify.org/api/v1?apiKey=" + apiKey + "&ipAddress=" + ipAddr;
    const response = await fetch(requestUrl);
    const myJson = await response.json();

    setContentBasedOnResponse(myJson);
    // L.setView([myJson.location.lat, myJson.location.lng], 13);
}

onStartup()