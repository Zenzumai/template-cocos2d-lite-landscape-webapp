document.addEventListener('DOMContentLoaded', function() {
  cc.game.onStart = function(){
      //load resources
      cc.LoaderScene.preload(["HelloWorld.png"], function () {
          cc.director.runScene(new MyScene());
      }, this);
  };
  cc.game.run("gameCanvas");
});