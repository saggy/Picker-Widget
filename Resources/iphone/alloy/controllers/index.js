function Controller() {
    function openPicker() {
        for (var i = 0; 10 > i; i++) data.push(i.toString());
        var wid = Alloy.createWidget("pickerWidget");
        pId = wid.getView();
        $.index.add(pId);
        wid.init({
            value: data,
            doneCallback: function(e) {
                Ti.API.info("doneCallback data E | " + JSON.stringify(e));
                $.lbl.text = e.row.title;
            },
            cancelCallback: function() {
                Ti.API.info("cancelCallback");
            }
        });
        data = [];
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.btn = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        title: " Click Here To Show Picker",
        id: "btn"
    });
    $.__views.index.add($.__views.btn);
    openPicker ? $.__views.btn.addEventListener("click", openPicker) : __defers["$.__views.btn!click!openPicker"] = true;
    $.__views.lbl = Ti.UI.createLabel({
        top: "15%",
        color: "black",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 25,
            fontWeight: "bold"
        },
        id: "lbl"
    });
    $.__views.index.add($.__views.lbl);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var pId, data = [];
    $.index.open();
    __defers["$.__views.btn!click!openPicker"] && $.__views.btn.addEventListener("click", openPicker);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;