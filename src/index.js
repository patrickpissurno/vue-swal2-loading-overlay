class Plugin {
    install(Vue, options){
        this.injectCSS();
        Vue.mixin({
            beforeCreate() {
                this.$loading = new LoadingOverlay(this, options);
            }
        });
    }
    injectCSS(){
        let node = document.createElement('style');
        node.innerHTML = `
            .swal2-loading-overlay .swal2-loading {
                margin: 0!important;
            }
            .swal2-loading-overlay .swal2-header {
                display: none!important;
            }
            .swal2-loading-overlay {
                background: transparent!important;
            }`.trim();
        document.body.appendChild(node);
    }
}

let _vue;
let _options;

function checkRequirements(vue){
    if(!vue.$swal)
        throw new Error('vue-sweetalert2 is required for swal2-loading-overlay to work and was not found.');
}

class LoadingOverlay {
    constructor(Vue, options){
        _vue = Vue;
        _options = options;
    }

    show(opts = { background: 'white', color: '#3085d6', animation: true }){
        checkRequirements(_vue);
        _vue.$swal({
            customClass: 'swal2-loading-overlay',
            backdrop: !opts || !opts.background ? 'white' : opts.background,
            confirmButtonColor: !opts || !opts.color ? '#3085d6' : opts.color,
            animation: !opts || opts.animation,
            onOpen: _vue.$swal.showLoading,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
        });
    }

    hide(){
        checkRequirements(_vue);
        _vue.$swal.close();
    }
}

export default new Plugin();