const myToken = canvas.tokens.controlled[0];
if (!myToken) return;
let mousePos = canvas.app.renderer.plugins.interaction.mouse.getLocalPosition(canvas.app.stage);
console.log(mousePos);
await canvas.scene.createEmbeddedDocuments("MeasuredTemplate", [{
    t: "circle",
    user: game.user.id,
    x: Math.round(mousePos.x/100)*100,
    y: Math.round(mousePos.y/100)*100,
    distance: 25,
    borderColor: "#000000",
    fillColor: "#000000",
    flags:
    {
     tokenmagic:
     {
      options:
      {
       tmfxPreset: "Smoky Area",
       tmfxTextureAlpha: 0.50
      }
     }
    }
}]);