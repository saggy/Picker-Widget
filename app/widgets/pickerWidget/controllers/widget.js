var ARG = arguments[0] || {};
var dataReview = [], rowData, value = [];
$.done, $.cancel;

$.init = function(params) {
	Ti.API.info('value-->' + JSON.stringify(params.value));

	if (params.toolBarBackgroundColor) {
		$.picToolbar.barColor = params.toolBarBackgroundColor;
		$.pickerView.backgroundColor = params.toolBarBackgroundColor;
	} else {
		$.picToolbar.barColor = '#14400f';
		$.pickerView.backgroundColor = '#14400f';
	}

	if (params.value.length) {
		Object.keys(params.value).forEach(function(pValue) {
			dataReview.push(Ti.UI.createPickerRow({
				height : 30,
				title : params.value[pValue].picValue,
				fontSize : params.value[pValue].fontSize,
			}));
		});
	}
	if (dataReview.length) {
		$.picker.add(dataReview);
	}
	if (params.index && params.index != undefined && params.index != null && params.index != "") {
		$.picker.setSelectedRow(0, params.index, false);
	} else {
		$.picker.setSelectedRow(0, 0, false);
	}
	$.done = params.doneCallback;
	$.cancel = params.cancelCallback;
};

if (platform() == "ios") {
	// on changeEvent of picker
	$.picker.addEventListener('change', function(e) {
		Ti.API.info('title-->' + e.row.title);
		rowData = e;
	});
	// cancel button
	$.cancelBtn.addEventListener("click", function(e) {
		closeAndSavePicker($.parentView);
	});
	//done button
	$.doneBtn.addEventListener("click", function(e) {
		closeAndSavePicker($.parentView);
		$.done(rowData);
	});
} else {
	// cancel button
	$.cancelBtn.addEventListener("click", function(e) {
		closeAndSavePicker($.parentView);
	});
	//done button
	$.doneBtn.addEventListener("click", function(e) {
		closeAndSavePicker($.parentView);
		$.done(rowData);
	});

	$.picker.addEventListener('change', function(e) {
		Ti.API.info('title-->' + e.row.title);
		rowData = e;
	});
}

//To remove picker from its parent container
function closeAndSavePicker(viewObject) {
	dataReview = [], value = [];
	viewObject.hide();
	var children = viewObject.children.slice(0);
	for (var i = 0; i < children.length; ++i) {
		viewObject.remove(children[i]);
	}
	var parent = viewObject.getParent();
	parent.remove(viewObject);
};

function platform() {
	return Ti.Platform.osname;
};
