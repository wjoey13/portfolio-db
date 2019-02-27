
exports.up = function(knex, Promise) {
    return knex.schema.createTable('my_info',(info)=>{
        info.increments('id'),
        info.text('name'),
        info.text('picture'),
        info.text('about')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('my_info')
};
