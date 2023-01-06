"use strict";
exports.__esModule = true;
exports.Trakker = void 0;
var axios_1 = require("axios");
var ENDPOINT = "http://localhost:3000/api/event";
var Trakker = /** @class */ (function () {
    function Trakker(api_key) {
        this.apiKey = api_key;
    }
    Trakker.prototype.initialize = function () {
        var _this = this;
        var apiCall = function (e) {
            axios_1["default"].post(ENDPOINT, {
                api_key: _this.apiKey,
                event_type: e
            });
        };
        window.addEventListener("load", function () {
            apiCall("page_view");
        });
        window.addEventListener("error", function () {
            apiCall("error");
        });
        var allButtons = document.querySelectorAll("button");
        allButtons.forEach(function (b) {
            return b.addEventListener("click", function () {
                apiCall("click");
            });
        });
        var allAnchors = document.querySelectorAll("button");
        allAnchors.forEach(function (b) {
            return b.addEventListener("click", function () {
                apiCall("link_click");
            });
        });
    };
    return Trakker;
}());
exports.Trakker = Trakker;
exports["default"] = Trakker;
