const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push("js", "jsx", "json", "ts", "tsx", "cjs");
config.resolver.assetExts.push("glb", "gltf", "obj", "png", "jpg", "mtl");

module.exports = config;
