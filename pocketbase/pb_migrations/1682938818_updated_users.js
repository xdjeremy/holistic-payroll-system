migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("_pb_users_auth_");

    // remove
    collection.schema.removeField("users_avatar");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "u8abrz2q",
        name: "privilege",
        type: "select",
        required: true,
        unique: false,
        options: {
          maxSelect: 1,
          values: ["user", "admin"],
        },
      })
    );

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("_pb_users_auth_");

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: "users_avatar",
        name: "avatar",
        type: "file",
        required: false,
        unique: false,
        options: {
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp",
          ],
          thumbs: null,
          protected: false,
        },
      })
    );

    // remove
    collection.schema.removeField("u8abrz2q");

    return dao.saveCollection(collection);
  }
);
