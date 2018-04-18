// JavaScript source code
var app = {
    initialize: function () {
        this.bind();
    },

    bind: function () {
        document.addEventListener("deviceready", this.deviceready, false);
    },

    deviceready: function () {
        app.start();
        //end device ready 
    },

    start: function () {
        console.log("sono in start:");
        // per html dinamico
        app.init_View();



    },
    //init view e global variabili
    init_View: function () {
        //ascoltatori degli eventi ed scatenatori di azioni !!!

        console.log("init_View");
         
        // example event recording scatenato da html
        // $("#btn_play").on("tap", function (e) {
        //     e.preventDefault();
        //     console.log("prima di record_audioVoice");
        //     app.record_audioVoice();
        // }
        //);
    },
    //rimoved


}

}// end app;

$(document).ready(function () {
    app.initialize();

});
