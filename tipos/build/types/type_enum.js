"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["black"] = "#000";
    DesignColors["white"] = "#fff";
})(DesignColors || (DesignColors = {}));
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["USER"] = 0] = "USER";
    StatusPermission[StatusPermission["ADMIN"] = 1] = "ADMIN";
    StatusPermission[StatusPermission["SUPPORT"] = 2] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.USER);
