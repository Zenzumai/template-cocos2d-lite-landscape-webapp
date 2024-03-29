/* globals cc */
var MyScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var size = cc.director.getWinSize();
    var sprite = cc.Sprite.create("asset/HelloWorld.png");
    sprite.setPosition(size.width / 2, size.height / 2);
    sprite.setScale(0.8);
    this.addChild(sprite, 0);

    var label = cc.LabelTTF.create("Hello World", "Arial", 40);
    label.setPosition(size.width / 2, size.height / 2);
    this.addChild(label, 1);
  }
});
