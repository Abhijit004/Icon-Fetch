const fs = require("fs");
const path = require("path");

exports.generateSVG = (iconName) => {
    try {
        // Read the SVG file contents as string
        const svgPath = path.join(__dirname, `../TechIcons/${iconName.toLowerCase()}.svg`);
        const iconCode = fs.readFileSync(svgPath, "utf-8");

        // Create the template using the iconCode and iconName
        // const template = `
        //     <div style="display: inline-flex; align-items: center; gap: 45px; background: #1D1F23; border: 1px solid #ccc; border-radius: 35px; padding: 20px 40px; transform: scale(0.3); transform-origin: top left;">
        //         ${iconCode}
        //         <span style="font-family: monospace; font-size: 60px; color: #fff;text-transform: uppercase">${iconName.toLowerCase()}</span>
        //     </div>
        const starter = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="#000">`;

        const res = iconCode.replace(/<svg[^>]*>/, starter);

        return res;
    } catch (err) {
        console.error(`Error generating SVG for ${iconName}:`, err);
        return `<div style="color: red;">Icon "${iconName}" not found.</div>`;
    }
};
