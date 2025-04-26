**MongoDB**

- MongoDB is a nosql database. It is actually called a Not only SQL
- It is non-relational database like the traditional databases.
- It is a key:value pairs storage process instead of table based structural storage.
- You can store records with different fields side-by-side.
- NoSQl databases are designed to spread data accross many servers. While the traditional are designed Often scale vertically. Which can become expensive or hit hardware limits.
- It is very easy to follow the CRUD paradigm with just a few function calls.
- All of it is user defined and no a lot of setup to hook into Node.js

# Terminology:

- Database - contains one or more collections. The same as SQL
- Collection - A group of documents inside of a database, just like a table in SQL
- Document - A single row inside of a collection.
- Field - A key value pair within a document.

# Create a collection

```sql
    db.createCollection("users");
```

# Insert a document into a collection

- A collection is a same as a record (table) in SQL

```sql
    db.users.insertOne({
        name: John
    })

--insert Many
db.users.insertMany([{name: Jane}, {name: Tom}])

```

# Querying data from the database

- find() is equivalent to select \* - if there are no parameters it will return an array of all key value pairs.
- findOne() returns the first document

# Sort

- sort() method is simple it will return the specified query in either ascending or descending order.
- The only parameter is an object to determine what order to return the result

```sql
db.users.find().sort({ name: 1, age: -1 })
(returns all users sorted by name in alphabetical order)
db.users.find().sort({ name: -1})
(returns all users name in reverse alpha order)
```

# Delete

- deleteOne() will delete the first instance found.
- delete()will delete all instances found.

```sql
db.users.deleteOne({ name: “Jal” })
(delete first user with name of Jal)
db.users.deleteMany({ name: “Jal” })
(delete all users with name of Jal)
```

# Update

- updateOne() - will update the first instance found.
- updateMany() - will update all instances

```sql
db.users.updateOne({ name: “Jal” }, { $set: { name:
“Josh” } })
db.users.updateMany({ name: “Jal” }, { $inc: { name:
“Josh” } })
```

# Drop

- drop() or dropCollection() - will drop the specified collection.

```sql
db.users.drop()
(drop user collection, should always return true if the collection exists)
```

# models:

a model is a JS class tied to one MongoDB collection.
This is what it looks like:

```js
const bookSchema = new mongoose.Schema({ title: String, price: Number });
const Book = mongoose.model("Book", bookSchema); // ← model
```

- A model in simple terms is a JS class that you use to talk to one MongoDB collection. It is build from a schema and it gives you helper methods like create, find, update and delete. By default the model is singular name like: Item and maps to a plural collection items in MOngoDB.
  - Please check the Item.js inside models folder for further information.
- Think 3 layers in a typical Node backend:
  Layer Main role Example folder
  Routes / API HTTP endpoints (e.g. Express) routes/
  Controllers Business logic per endpoint controllers/
  Data layer Database access (Mongoose) models/
