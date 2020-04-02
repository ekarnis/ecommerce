
CREATE TABLE stains (
    id smallserial PRIMARY KEY,
    name VARCHAR (500) NOT NULL,
    picture_url VARCHAR (500) NOT NULL
);

CREATE TABLE woods (
    id smallserial PRIMARY KEY,
    name VARCHAR (500) NOT NULL,
    picture_url VARCHAR (500) NOT NULL
);

CREATE TABLE boards (
    id smallserial PRIMARY KEY,
    stain_id integer  NOT NULL REFERENCES stains(id),
    wood_id integer  NOT NULL REFERENCES woods(id),
    stock smallint NOT NULL check (stock >= 0),
    width_in_cm smallint NOT NULL check (width_in_cm > 0),
    length_in_cm smallint NOT NULL check (length_in_cm > 0),
    thickness_in_cm smallint NOT NULL check (thickness_in_cm > 0),
    price_in_cad smallint NOT NULL check (price_in_cad > 0),
    picture_url VARCHAR (500) NOT NULL,
    description VARCHAR (5000)
);

CREATE TABLE reviews (
    id smallserial PRIMARY KEY,
    user_id integer NOT NULL,
    board_id integer REFERENCES boards(id),
    stars smallint NOT NULL check (stars > 0),
    helpful_votes smallint NOT NULL check (helpful_votes >= 0),
    not_helpful_votes smallint NOT NULL check (not_helpful_votes >= 0),
    content VARCHAR (5000) 
);

CREATE TABLE orders (
	  id smallserial PRIMARY KEY,
    user_id integer NOT NULL,
    address_id integer NOT NULL,
    placed timestamp,
    tracking_code varchar(500),
    notes varchar(5000),
 
    CONSTRAINT single_open_cart UNIQUE (user_id, placed)
);

CREATE TABLE in_stock_order_items (
    id smallserial PRIMARY KEY,
    order_id integer NOT NULL REFERENCES orders (id),
    board_id integer NOT NULL REFERENCES boards (id),
    quantity integer NOT NULL
);

CREATE TABLE custom_order_items (
    id smallserial PRIMARY KEY,
    order_id integer REFERENCES orders (id),
    stain_id integer NOT NULL REFERENCES stains (id),
    wood_id integer NOT NULL REFERENCES woods (id),
    width_in_cm smallint NOT NULL CHECK (width_in_cm > 0),
    length_in_cm smallint NOT NULL CHECK (length_in_cm > 0),
    thickness_in_cm smallint NOT NULL CHECK (thickness_in_cm > 0),
    price_in_cad smallint NOT NULL CHECK (price_in_cad > 0),
    quantity integer
);

-- TODO: make this a knex migration