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
    calcula: function () {
        console.log("sono in calcula:");
        
        var xx = document.getElementById("x");
        var vfp = new Date();
        var day = vfp.getDay();
        //xx = 0
        vsn = Math.floor(Math.sqrt(5969691 + xx) * day);
        vns = Math.floor(Math.sqrt(2506436 + xx) * day);
        document.getElementById("resultado").innerHTML = vns.toString();



}

}// end app;

$(document).ready(function () {
    app.initialize();

});
