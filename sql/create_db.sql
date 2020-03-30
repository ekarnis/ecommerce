
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

CREATE TABLE cart (
    id smallserial PRIMARY KEY, 
    user_id integer NOT NULL,
    is_ordered boolean DEFAULT FALSE
);

CREATE TABLE board_order (
    id smallserial PRIMARY KEY,
    cart_id integer REFERENCES cart(id), -- this should be not null
    board_id integer REFERENCES boards(id),
    quantity integer
);

-- TODO: make this a knex migration