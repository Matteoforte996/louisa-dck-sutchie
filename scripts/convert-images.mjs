import sharp from "sharp";


await sharp("public/images/louisa.png")
  .webp({
    quality: 85,
  })
  .toFile("public/images/louisa.webp");



await sharp("public/images/og-image.jpg")
  .webp({
    quality: 85,
  })
  .toFile("public/images/og-image.webp");


console.log("Conversion terminée");