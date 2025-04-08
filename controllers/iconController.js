exports.sendIcon = async (req, res, next) => {
    try {
        const iconName = req.query?.icon
        const size = req.query?.size || 100
        const image = require('../utils/getSVG').generateSVG(iconName, size);
        res.setHeader("Content-Type", "image/svg+xml");
        res.status(200).send(image);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};
