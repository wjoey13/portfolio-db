
exports.up = function(knex, Promise) {
    return knex.schema.createTable('portfolio_site',(portfolio)=>{
      list.integer('projectsID').unsigned();
        list.foreign('projectsID').references('my_projects.id')
        list.integer('infoID').unsigned();
        list.foreign('infoID').references('my_info.id'
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('portfolio_site')
};
