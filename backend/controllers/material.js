const Material = require('../models/Material');

exports.postMaterial = (req, res, next) => {
    Material.create({ ...req.body, filePath: req.file.path, userId: req.user._id })
        .then(doc => res.status(201).json(doc))
        .catch(next);
}

exports.getMaterials = (req, res, next) => {
    const search = req.query.search;
    const query = {};
    if (search && search.length > 0) {
        query['$or'] = [
            { title: { "$regex": search, "$options": "i" } },
            { university: { "$regex": search, "$options": "i" } },
            { code: { "$regex": search, "$options": "i" } },
            { description: { "$regex": search, "$options": "i" } },
        ]
    }
    Material.find(query)
        .then(docs => res.status(200).json(docs))
        .catch(next)
}