var data = [], pId;

function openPicker(e) {
	for (var i = 0; i < 10; i++) {
		data.push({
			fontSize : 40,
			picValue : i.toString(),
		});
	}
	var wid = Alloy.createWidget("pickerWidget");
	pId = wid.getView();
	$.index.add(pId);
	wid.init({
		value : data,
		toolBarBackgroundColor : '#14400f', //Ex--> "#ACDBEA", "#72A700"
		index : 5, // To show the default value in picker by giving index of the value to the picker,
		// it is not compulsory to put it,But you can set it 0 index, so it can show  the very first value in picker
		doneCallback : function(e) {
			Ti.API.info("doneCallback data E | " + JSON.stringify(e));
			$.lbl.text = e.row.title;
		},
		cancelCallback : function(e) {
			Ti.API.info("cancelCallback");
		}
	});
	data = [];
}

$.index.open();
