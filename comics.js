AFRAME.registerComponent("comics",{
  schema:{
    state:{type: "string", default: "comics-list"},
    selectedCard:{type: 'string', default:"#card1"}
  },
  init: function(){
      this.comicsContainer = this.el;
      this.createPosters();
  },

  tick: function(){
    const {state} = this.data
    if(state === "view"){
      this
    }
  },

  createPosters: function () {
      const comicPics = [
        {
          id: "captain-america",
          title: "Captain America",
          url: "./assets/Captain-America.jpg",
        },
        {
          id: "avengers",
          title: "Avengers",
          url: "./assets/Avengers.jpg",
        },
        {
          id: "justice-league",
          title: "Justice League",
          url: "./assets/Justice-League.jpg",
        },
        {
          id: "spider-man",
          title: "Spiderman",
          url: "./assets/Spiderman.png",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of comicPics) {
        const posX = prevoiusXPosition + 25;
        const posY = 5;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        const borderEl = this.createBorder(position,item.id)
        const thumbnail = this.createThumbnail(item)
        borderEl.appendChild(thumbnail)
        const titleEl = this.createTitleEl(position,item)
        borderEl.appendChild(titleEl)
        this.comicsContainer.appendChild(borderEl);
      }
    },
        // Border Element
        createBorder: function(position,id){
          const entityEl = document.createElement("a-entity");
          entityEl.setAttribute("id",id);
          entityEl.setAttribute("visible",true);
          entityEl.setAttribute("geometry",{
            primitive : 'plane',
            width : 22,
            height : 30,
          })
          entityEl.setAttribute("position",position);
          entityEl.setAttribute("material",{
            color : "#E65100",
            opacity : 0.4,
          })
          return entityEl
        },
        // Thumbnail Element
        createThumbnail : function(item){
          const entityEl = document.createElement("a-entity");
          entityEl.setAttribute("visible",true);
          entityEl.setAttribute("geometry",{
            primitive : 'plane',
            width : 20,
            height : 28,
          });
          entityEl.setAttribute("material",{
            src: item.url
          });
          return entityEl
        },
        // Title Text Element
        createTitleEl : function(position,item){
          const entityEl = document.createElement("a-entity");
          entityEl.setAttribute("text",{
            font : "exo2bold",
            align : 'center',
            width : 60,
            color : "#00BCD4",
            value : item.title
          })
          const elPosition = position;
          elPosition.y = -20;
          entityEl.setAttribute("position",elPosition);
          entityEl.setAttribute("visible",true);
          return entityEl
        },
})