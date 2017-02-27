function hiPaintBox() {
	// Global vars ------------------------------------
	var i2 = 0;
	var res3 = 0;
	var arr5 = [];
	var i7 = 0;
	var arrItem9 = '';
	var res10 = 0;
	
	// Widgets section ------------------------------------
	var MainForm1 = new Dialog({
		title: 'Magic circle',
		icon: '',
		destroy: true,
		resize: false,
		width: '293',
		height: '300',
		modal: true,
		popup: true,
		showcaption: true,
		showborder: true,
		theme: ''
	});
	MainForm1.layout = new FixLayout(MainForm1);
	
	var PaintBox6 = new Canvas({});
	PaintBox6.place(49,56,'200','200');
	MainForm1.add(PaintBox6);
	TrackBar11 = new TrackBar({
		min: 2,
		max: 128,
		step: 1,
		position: 2
	});
	TrackBar11.place(35,14,'191','21');
	MainForm1.add(TrackBar11);
	var Label13 = new Label({
		caption: '2',
		halign: 0,
		valign: 1,
		theme: ''
	});
	Label13.place(245,14,'22','21');
	MainForm1.add(Label13);
	
	// Init section ------------------------------------
	Math.point = function(x, y){ return {x: x, y: y}; };
	
	function hub12(data12) {
		Label13.caption = (data12).toString();
		drawCanvas6();
	}
	TrackBar11.addListener('input', function (event) {
		hub12(TrackBar11.position);
	});
	TrackBar11.tabIndex = '0';
	function hub8(data8) {
		arrItem9 = arr5[data8];
		res10 = data8*TrackBar11.position % 360;
		PaintBox6.canvas.beginPath();
		PaintBox6.canvas.moveTo(arrItem9.x, arrItem9.y);
		PaintBox6.canvas.lineTo(arr5[Math.round(res10)].x, arr5[Math.round(res10)].y);
		PaintBox6.canvas.stroke();
	}
	function drawCanvas6() {
		PaintBox6.clear();
		for(i7 = 1; i7 < 359; i7 += 1) {
			hub8(i7);
		}
	}
	
	// Main section ------------------------------------
	this.run = function() {
		MainForm1.show({noCenter: false, fullScreen: false});
		for(i2 = 0; i2 < 360; i2 += 1) {
			res3 = Math.point(Math.sin(i2/180*Math.PI)*90 + 100, Math.cos(i2/180*Math.PI)*90 + 100);
			arr5.push(res3);
		}
		drawCanvas6();
	};
}

// made by hion
