var data = [], pId;

function openPicker(e) {
	for (var i = 0; i < 10; i++) {
		data.push({
			picValue : i.toString(),
			fontSize : 30
		});
	}
	var wid = Alloy.createWidget("pickerWidget");
	pId = wid.getView();
	$.index.add(pId);
	wid.init({
		value : data,
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
