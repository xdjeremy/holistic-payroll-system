migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("_pb_users_auth_");

    collection.createRule = "@request.auth.privilege = 'admin'";
    collection.deleteRule = "@request.auth.privilege = 'admin'";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("_pb_users_auth_");

    collection.createRule = null;
    collection.deleteRule = null;

    return dao.saveCollection(collection);
  }
);
