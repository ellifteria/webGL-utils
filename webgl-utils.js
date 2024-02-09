var WebGLUtils = function () {
    var WebGLContextType;
    (function (WebGLContextType) {
        WebGLContextType[WebGLContextType["WebGL"] = 0] = "WebGL";
        WebGLContextType[WebGLContextType["WebGL2"] = 1] = "WebGL2";
        WebGLContextType[WebGLContextType["TwoD"] = 2] = "TwoD";
        WebGLContextType[WebGLContextType["WebGPU"] = 3] = "WebGPU";
        WebGLContextType[WebGLContextType["BitMapRenderer"] = 4] = "BitMapRenderer";
    })(WebGLContextType || (WebGLContextType = {}));
    var setupWebGL = function (canvas, webglContextType, contextAttributes) {
        if (webglContextType === void 0) { webglContextType = WebGLContextType.WebGL; }
        var contextType = (function () {
            switch (webglContextType) {
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
            }
            ;
        })();
        var context = canvas.getContext(contextType, contextAttributes);
        return context;
    };
    var createShader = function () { };
    var createProgram = function () { };
    return {
        WebGLContextType: WebGLContextType,
        setupWebGL: setupWebGL,
        createShader: createShader,
        createProgram: createProgram,
    };
};
