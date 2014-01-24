function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "pickerWidget/" + s : s.substring(0, index) + "/pickerWidget/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function closeAndSavePicker(viewObject) {
        dataReview = [], value = [];
        viewObject.hide();
        var children = viewObject.children.slice(0);
        for (var i = 0; children.length > i; ++i) viewObject.remove(children[i]);
        var parent = viewObject.getParent();
        parent.remove(viewObject);
    }
    new (require("alloy/widget"))("pickerWidget");
    this.__widgetId = "pickerWidget";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.parentView = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundImage: "/images/transparent.png",
        id: "parentView"
    });
    $.__views.parentView && $.addTopLevelView($.__views.parentView);
    $.__views.pickerView = Ti.UI.createView({
        width: 320,
        height: 251,
        backgroundColor: "#14400f",
        id: "pickerView"
    });
    $.__views.parentView.add($.__views.pickerView);
    var __alloyId1 = [];
    $.__views.doneBtn = Ti.UI.createButton({
        color: "#fffff",
        style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
        id: "doneBtn",
        title: "Done"
    });
    __alloyId1.push($.__views.doneBtn);
    $.__views.__alloyId2 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId1.push($.__views.__alloyId3);
    $.__views.cancelBtn = Ti.UI.createButton({
        color: "#fffff",
        style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
        id: "cancelBtn",
        title: "Cancel"
    });
    __alloyId1.push($.__views.cancelBtn);
    $.__views.picToolbar = Ti.UI.iOS.createToolbar({
        top: 0,
        tintColor: "#FFF",
        barColor: "#14400f",
        items: __alloyId1,
        id: "picToolbar",
        borderTop: "true",
        borderBottom: "false"
    });
    $.__views.pickerView.add($.__views.picToolbar);
    $.__views.picker = Ti.UI.createPicker({
        top: 48,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "picker",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.pickerView.add($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var rowData, dataReview = [], value = [];
    $.done, $.cancel;
    $.init = function(params) {
        Ti.API.info("value-->" + params.value);
        params.value.length && Object.keys(params.value).forEach(function(pValue) {
            dataReview.push(Ti.UI.createPickerRow({
                title: params.value[pValue]
            }));
        });
        dataReview.length && $.picker.add(dataReview);
        $.done = params.doneCallback;
        $.cancel = params.cancelCallback;
    };
    $.picker.addEventListener("change", function(e) {
        Ti.API.info("title-->" + e.row.title);
        rowData = e;
    });
    $.cancelBtn.addEventListener("click", function() {
        closeAndSavePicker($.parentView);
    });
    $.doneBtn.addEventListener("click", function() {
        closeAndSavePicker($.parentView);
        $.done(rowData);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;