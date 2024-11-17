let index = {
    sprites: {
        
    },
    index () {
        
    },
    indexInit () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        loadImages();
        console.log("load");
        return particleTest.particleTestInit;
    }
}