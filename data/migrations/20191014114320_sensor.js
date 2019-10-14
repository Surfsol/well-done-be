exports.up = function(knex) {
  return knex.schema.createTable("sensor", column => {
    column.increments();

    column.integer("count");
    column.string("kind");
    column.string("type");
    column.integer("cellular");
    column.integer("bluetooth");
    column.integer("sensor_ID");
    column.string("training");
    column.string("remark");
    column.date("data_finished");
    column.integer("depth");
    column.integer("yield");
    column.integer("static");
    column.integer("dynamic");
    column.string("quality");

    column
      .integer("pump_id")
      .unsigned()
      .references("id")
      .inTable("pumps")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    column
      .integer("date_id")
      .unsigned()
      .references("id")
      .inTable("dates")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    column
      .integer("organization_id")
      .unsigned()
      .references("id")
      .inTable("organization")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sensor");
};
