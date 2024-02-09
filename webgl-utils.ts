var WebGLUtils = function() {
    enum WebGLContextType {
        WebGL,
        WebGL2,
        TwoD,
        WebGPU,
        BitMapRenderer
    }

    var setupWebGL = function(canvas:  HTMLCanvasElement, webglContextType: WebGLContextType = WebGLContextType.WebGL, contextAttributes: any | null) {
        let contextType: string = (function() {
            switch(webglContextType) {
                case WebGLContextType.TwoD:
                    return "2d";
                case WebGLContextType.WebGL:
                    return "webgl";
                case WebGLContextType.WebGL2:
                    return "webgl2";
                case WebGLContextType.WebGPU:
                    return "webgpu";
                case WebGLContextType.BitMapRenderer:
                    return "bitmaprenderer";
                default:
                    return "webgl";
            };
        })();

        let context = canvas.getContext(contextType, contextAttributes);
        
        return context;
    }

    var createShader = function(){};
    
    var createProgram = function(){};

    return {
        WebGLContextType: WebGLContextType,
        setupWebGL: setupWebGL,
        createShader: createShader,
        createProgram: createProgram,
    };
};