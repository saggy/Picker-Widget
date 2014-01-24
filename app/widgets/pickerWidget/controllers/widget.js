var ARG = arguments[0] || {};
var dataReview = [], rowData, value=[];
$.done, $.cancel;

$.init = function(params){
	Ti.API.info('value-->'+params.value);
	if(params.value.length){
		Object.keys(params.value).forEach(function(pValue) {
			dataReview.push(Ti.UI.createPickerRow({
				title : params.value[pValue]
			}));
		});
	}
	if(dataReview.length){
		$.picker.add(dataReview);
	}
	$.done = params.doneCallback;
	$.cancel = params.cancelCallback;
};

// on changeEvent of picker
$.picker.addEventListener('change', function(e){
	Ti.API.info('title-->'+ e.row.title);
	rowData = e;
});

// cancel button
$.cancelBtn.addEventListener("click",function(e){
	closeAndSavePicker($.parentView);
});

//done button
$.doneBtn.addEventListener("click",function(e){
	closeAndSavePicker($.parentView);
	$.done(rowData);
});

//To remove picker from its parent container
function closeAndSavePicker(viewObject){
	dataReview = [], value=[];
	viewObject.hide();
	var children = viewObject.children.slice(0);
	for (var i = 0; i < children.length; ++i) {
		viewObject.remove(children[i]);
	}
	var parent = viewObject.getParent();
		parent.remove(viewObject);
};