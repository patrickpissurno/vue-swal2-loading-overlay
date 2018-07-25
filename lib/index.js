'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin = function () {
    function Plugin() {
        _classCallCheck(this, Plugin);
    }

    _createClass(Plugin, [{
        key: 'install',
        value: function install(Vue, options) {
            this.injectCSS();
            Vue.mixin({
                beforeCreate: function beforeCreate() {
                    this.$loading = new LoadingOverlay(this, options);
                }
            });
        }
    }, {
        key: 'injectCSS',
        value: function injectCSS() {
            var node = document.createElement('style');
            node.innerHTML = '\n            .swal2-loading-overlay .swal2-loading {\n                margin: 0!important;\n            }\n            .swal2-loading-overlay .swal2-header {\n                display: none!important;\n            }\n            .swal2-loading-overlay {\n                background: transparent!important;\n            }'.trim();
            document.body.appendChild(node);
        }
    }]);

    return Plugin;
}();

var _vue = void 0;
var _options = void 0;

function checkRequirements(vue) {
    if (!vue.$swal) throw new Error('vue-sweetalert2 is required for swal2-loading-overlay to work and was not found.');
}

var LoadingOverlay = function () {
    function LoadingOverlay(Vue, options) {
        _classCallCheck(this, LoadingOverlay);

        _vue = Vue;
        _options = options;
    }

    _createClass(LoadingOverlay, [{
        key: 'show',
        value: function show() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { background: 'white', color: '#3085d6', animation: true };

            checkRequirements(_vue);
            _vue.$swal({
                customClass: 'swal2-loading-overlay',
                backdrop: !opts || !opts.background ? 'white' : opts.background,
                confirmButtonColor: !opts || !opts.color ? '#3085d6' : opts.color,
                animation: !opts || opts.animation == null || opts.animation === true,
                onOpen: _vue.$swal.showLoading,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false
            });
        }
    }, {
        key: 'hide',
        value: function hide() {
            checkRequirements(_vue);
            _vue.$swal.close();
        }
    }]);

    return LoadingOverlay;
}();

exports.default = new Plugin();