const apiAdapter = require('../../apiAdapter');

const { BASE_URL_SERVICE_MEDIA } = process.env;
const api = apiAdapter(BASE_URL_SERVICE_MEDIA);

module.exports = async (req, res) => {
    try {
        const media = await api.delete(`/media/${req.params.id}`);
        return res.status(media.status).send();
    } catch (error) {
        const {status, data} = error.response;
        return res.status(status).json(data);
    }
};
