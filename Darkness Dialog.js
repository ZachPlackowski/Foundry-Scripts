new Dialog({
    title: "Darkness Size",
    content: "<p> Are you using Greater Darkness? </p>",
    buttons: {
        regular: {
            label: "Regular",
            callback: async () => {
                let mousePos;
                await canvas.app.stage.addListener('pointerdown', event => {
                    if (event.data.button !== 0) {return}
                    mousePos = event.data.getLocalPosition(canvas.app.stage);
                    canvas.scene.createEmbeddedDocuments("MeasuredTemplate", [{
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
                    canvas.app.stage.removeListener('pointerdown');
                })
                
            }
        },
        greater: {
            label: "Greater",
            callback: async () => {
                let mousePos;
                await canvas.app.stage.addListener('pointerdown', event => {
                    if (event.data.button !== 0) {return}
                    mousePos = event.data.getLocalPosition(canvas.app.stage);
                    canvas.scene.createEmbeddedDocuments("MeasuredTemplate", [{
                        t: "circle",
                        user: game.user.id,
                        x: Math.round(mousePos.x/100)*100,
                        y: Math.round(mousePos.y/100)*100,
                        distance: 50,
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
                    canvas.app.stage.removeListener('pointerdown');
                })
                
            }
        },
    },
    //default: "Regular"
}).render(true);