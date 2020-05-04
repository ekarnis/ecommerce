CREATE TABLE stains (
    id smallserial PRIMARY KEY,
    name varchar(500) NOT NULL,
    picture_url varchar(500) NOT NULL
);

CREATE TABLE woods (
    id smallserial PRIMARY KEY,
    name varchar(500) NOT NULL,
    picture_url varchar(500) NOT NULL
);

CREATE TABLE boards (
    id smallserial PRIMARY KEY,
    stain_id integer NOT NULL REFERENCES stains (id),
    wood_id integer NOT NULL REFERENCES woods (id),
    stock smallint NOT NULL CHECK (stock >= 0),
    width_in_cm smallint NOT NULL CHECK (width_in_cm > 0),
    length_in_cm smallint NOT NULL CHECK (length_in_cm > 0),
    thickness_in_cm smallint NOT NULL CHECK (thickness_in_cm > 0),
    price_in_cad smallint NOT NULL CHECK (price_in_cad > 0),
    picture_url varchar(500) NOT NULL,
    description varchar(5000)
);

CREATE TABLE reviews (
    id smallserial PRIMARY KEY,
    user_id integer NOT NULL,
    board_id integer REFERENCES boards (id),
    stars smallint NOT NULL CHECK (stars > 0),
    helpful_votes smallint NOT NULL CHECK (helpful_votes >= 0),
    not_helpful_votes smallint NOT NULL CHECK (not_helpful_votes >= 0),
    content varchar(5000)
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

CREATE TABLE app_users (
    id smallserial PRIMARY KEY,
    auth0_user_id varchar(300) UNIQUE,
    email varchar(200) NOT NULL,
    name varchar(200) NOT NULL
);

CREATE TABLE addresses (
    id smallserial PRIMARY KEY,
    app_users_id integer REFERENCES app_users (id),
    full_name varchar(200) NOT NULL,
    line_1 varchar(200) NOT NULL,
    line_2 varchar(200),
    city varchar(200) NOT NULL,
    region varchar(200) NOT NULL,
    postal_code varchar(200) NOT NULL,
    phone_number varchar(200) NOT NULL,
    instructions varchar(500)
);

-- TODO: make this a knex migration
