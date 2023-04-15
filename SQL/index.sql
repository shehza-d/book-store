  CREATE TABLE Books(
	id INTEGER PRIMARY KEY AUTO INCREMENT,
	name TEXT,
	typee TEXT,
	available TEXT,
  )
  INSERT INTO Books (name,typee,available) values ('phali book','sss','true')


-- to create a new table, use the CREATE TABLE statement, for example:

 CREATE TABLE Books (
      id SERIAL PRIMARY KEY,
      name VARCHAR(60) NOT NULL,
      type VARCHAR(30) NOT NULL,
      available BOOLEAN NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
   );

 CREATE TABLE orders (
      id SERIAL PRIMARY KEY,
      bookId  NOT NULL,
      customerName VARCHAR(45) NOT NULL,
   );
-- To insert data into the table, use the INSERT INTO statement, 
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
INSERT INTO orders (bookId, customerName) VALUES ('John Doe', 'john@example.com');
:

-- To retrieve data from a table, use the SELECT statement, for example:
SELECT * FROM users;

-- To retrieve data with a specific condition, use the WHERE clause, for example:
SELECT * FROM users WHERE id = 1;
Update:

-- To update existing data in a table, use the UPDATE statement, for example:
UPDATE users SET email = 'jane@example.com' WHERE id = 2;
Delete:

-- To delete data from a table, use the DELETE statement, for example:
DELETE FROM users WHERE id = 3;