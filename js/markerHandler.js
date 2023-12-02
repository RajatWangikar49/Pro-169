AFRAME.registerComponent("markerhandler", {

    init : function () {

        this.el.addEventListener("markerFound", () => {

            this.handleMarkerFound();

        });

        this.el.addEventListener("markerLost", () => {

            this.handleMarkerLost();

        });

    },

    handleMarkerFound : function () {

        var buttondiv = document.getElementById("button-div");
        buttondiv.style.display = "flex";

        var summaryButton = document.getElementById("summary-button");
        summaryButton.addEventListener("click", () => {

            swal({
                icon : "warning",
                title : "ORDER SUMMARY",
                text : "Work in progress"
            })

        });

        var orderButton = document.getElementById("order-button");
        orderButton.addEventListener("click", () => {

            swal({
                icon : "success",
                title : "THANK YOU",
                text : "Thanks for ordering"
            })

        });

    },

    handleMarkerLost : function () {

        var buttondiv = document.getElementById("button-div");
        buttondiv.style.display = "none";

    }

})