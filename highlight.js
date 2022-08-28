AFRAME.registerComponent("cursor-listener",{
    schema: {
        selectedId : {default:"", type:"string"},
    },

    init: function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },

    update: function(){
      const fadeBackgroundEl = document.querySelector("#fade-background");
      c = fadeBackgroundEl.children;
      if(c.length > 0){
        var i;
        for(i = 0; i<=c.length; i++){
          fadeBackgroundEl.removeChild(c[i]);
        }
      }
      else{
        this.handleMouseClickEvents();
      }
    },

    handleMouseEnterEvents: function(){
      this.el.addEventListener("mouseenter",()=>{
        const id = this.el.getAttribute("id");
        const comicsId = ["captain-america", "avengers", "justice-league", "spider-man"];
        if (comicsId.includes(id)) {
          const comcicsContainer = document.querySelector("#comics-container");
          comcicsContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
          });
        }
      })  
    },

    handleMouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave",()=>{
            const selectedItemId = this.data;
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute('id')
                if(id == selectedItemId){
                    el.setAttribute("material",{
                        color : "#E65100",
                        opacity : 1,
                    })
                }
            }
        })
    },

    handleMouseClickEvents: function(){
      this.el.addEventListener("click",evt =>{
        const comicsContainer = document.querySelector("#comics-container")
        const {state} = comicsContainer.getAttribute("comics")
        if(state === "comics-list"){
          const id = this.ele.getAttribute("id")
          console.log(id)
          const placesId = [
            "captain-america",
            "avengers",
            "justice-league",
            "spider-man",
          ]
          if(placesId.includes(id)){
            placesContainer.setAttribute("comics",{
              state : "view",
              selectedCard : id
            })
          }
        }
      })
    },
})