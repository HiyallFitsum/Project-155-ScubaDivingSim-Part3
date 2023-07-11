AFRAME.registerComponent("game_play", {
    schema: {
        elementId: { type: "string", default: "#coin1" },    
      },
      update: function () {
        this.isCollided(this.data.elementId);
      },

      isCollided: function (elemntId) {
        const element = document.querySelector(elemntId);
        element.addEventListener("collide", (e) => {
          if (elemntId.includes("#coin")) {
              element.setAttribute("visible", false);
              console.log("coin collision");
          } else if (elemntId.includes("#fish")) {
              console.log("fish collision");
          }
        });
      }


});
