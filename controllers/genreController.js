var Genre = require('../models/genre')

// Display list of genre
exports.genre_list = function(res, req) {
    res.send('NOT IMPLEMENTED: Genre list')
}

// Display detail of specific genre
exports.genre_detail = function(res, req) {
    res.send('NOT IMPLEMENTED: Genre detail ' + req.params.id)
}

// display Genre create form on GET
exports.genre_create_get = function(res, req) {
    res.send('NOT IMPLEMENTED: Genre create GET')
}

// handle genre create on POST
exports.genere_create_post = function(res, req) {
    res.send('NOT IMPLEMENTED: Genre create POST')
}

// display Genre delete form on GET
exports.genre_delete_get = function(res, req) {
    res.send('NOT IMPLEMENTED: Genre delete GET')
}

// handle Genre delete on POST
exports.genre_delete_post = function(res, req) {
    res.send('NOT IMPLEMENTED: Genre delete POST')
}

// display Genre update form on GET
exports.genre_update_get = function(res, req) {
    res.send('NOT IMPLEMENTED: Genre update GET')
}

// handle Genre update on POST
exports.genre_update_post = function(res, req) {
    res.send('NOT IMPLEMENTED: Genre update POST')
}