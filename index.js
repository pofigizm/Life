var yearBt = 2006
var mybt = new Date(2006, 4, 15)

var yearNow = yearBt + 65;
var body = document.body;
var week = 1000 * 60 * 60 *24 * 7;
var now = new Date();


for(var i = yearBt; i <= yearNow; i++) {
	var eline = document.createElement('div');
	eline.className = 'line';
	body.appendChild(eline);
	var ny = new Date(i, 0, 1).getTime();

  var elcube = document.createElement('div');
  eline.appendChild(elcube);
  elcube.className = 'year';
  elcube.innerText = i;

	for(var c = 1; c <= 52; c++) {
		var elcube = document.createElement('div');
		eline.appendChild(elcube);
		ny = ny + week;
		if (ny <= now.getTime() && ny >= mybt.getTime()) {
			elcube.className = 'cubeRed';
		} else {
			elcube.className = 'cubeBlue';
		}
	}
}
