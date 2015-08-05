/* jshint browser:true */
/* globals cc, MyScene */
document.addEventListener('DOMContentLoaded', function() {
  cc.game.onStart = function(){
      //load resources
      cc.LoaderScene.preload(["asset/HelloWorld.png"], function () {
          cc.director.runScene(new MyScene());
      }, this);
  };
  cc.game.run("gameCanvas");
});