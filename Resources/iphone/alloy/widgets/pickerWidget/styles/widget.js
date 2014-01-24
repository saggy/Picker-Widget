function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "pickerWidget/" + s : s.substring(0, index) + "/pickerWidget/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0006,
    key: "btnClass",
    style: {
        color: "#fffff",
        style: Ti.UI.iPhone.SystemButtonStyle.BORDERED
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "parentView",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundImage: "/images/transparent.png"
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "pickerView",
    style: {
        width: 320,
        height: 251,
        backgroundColor: "#14400f"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "picker",
    style: {
        top: 48,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "picToolbar",
    style: {
        top: 0,
        tintColor: "#FFF",
        barColor: "#14400f"
    }
} ];