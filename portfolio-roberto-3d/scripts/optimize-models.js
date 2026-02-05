const { NodeIO } = require('@gltf-transform/core');
const { dedup, textureCompress, draco } = require('@gltf-transform/functions');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeModel(inputPath, outputPath) {
    console.log(`Optimizing: ${inputPath} -> ${outputPath}`);
    const io = new NodeIO();
    const document = await io.read(inputPath);

    await document.transform(
        dedup(),
        textureCompress({
            encoder: sharp,
            targetFormat: 'webp',
            resize: [1024, 1024]
        }),
        draco({ compressionLevel: 7 })
    );

    await io.write(outputPath, document);
    console.log(`✅ Optimized: ${outputPath}`);
}

const modelsIds = ['roberto-avatar', 'vr-game', 'shopping-cart', 'login-system'];
const inputDir = path.join(__dirname, '../public/models');

if (!fs.existsSync(inputDir)) {
    console.error(`Directory not found: ${inputDir}`);
    process.exit(1);
}

// Example usage
// modelsIds.forEach(id => {
//   const input = path.join(inputDir, `${id}.glb`);
//   const output = path.join(inputDir, `${id}-optimized.glb`);
//   if (fs.existsSync(input)) {
//      optimizeModel(input, output).catch(console.error);
//   }
// });
