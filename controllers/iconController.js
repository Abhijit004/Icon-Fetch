exports.sendIcon = async (req, res, next) => {
    try {
        const iconName = req.query?.icon
        const image = require('../utils/getSVG').generateSVG(iconName);
        res.setHeader("Content-Type", "text/html");
        res.status(200).send(image);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};
