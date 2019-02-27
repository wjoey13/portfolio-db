
exports.up = function(knex, Promise) {
    return knex.schema.createTable('my_projects',(projects)=>{
        projects.increments('id'),
        projects.text('title'),
        projects.text('project'),
        projects.text('about')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('my_projects')
};
