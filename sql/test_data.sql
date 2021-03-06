INSERT INTO woods (name, picture_url) 
VALUES 
('Oak', '/board.jpg'),
('Birch', '/board.jpg'),
('Maple', '/board.jpg'),
('Mahogany', '/board.jpg'),
('Ironwood', '/board.jpg');


INSERT INTO stains (name, picture_url) 
VALUES 
('Light', '/board.jpg'),
('Dark', '/board.jpg'),
('Burgundy', '/board.jpg'),
('Clear', '/board.jpg'),
('Yellow', '/board.jpg');

INSERT INTO boards (
    stain_id,
    wood_id,
    stock,
    width_in_cm,
    length_in_cm,
    thickness_in_cm,
    price_in_cad,
    picture_url,
    description
)
VALUES (
    6,
    6,
    34, 
    50,
    50,
    50,
    75,
    '/board.jpg',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.'
);

INSERT INTO boards (
    stain_id,
    wood_id,
    stock,
    width_in_cm,
    length_in_cm,
    thickness_in_cm,
    price_in_cad,
    picture_url,
    description
)
VALUES (
    7,
    9,
    22, 
    50,
    70,
    50,
    95,
    '/board.jpg',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.'
);

INSERT INTO reviews (
    user_id,
    board_id,
    stars,
    helpful_votes,
    not_helpful_votes,
    content
)
VALUES (
    1,
    2,
    5, 
    50,
    20,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.'
);


INSERT INTO orders (
    user_id,
    address_id
)
VALUES (
    1,
    1
);

INSERT INTO app_users (
    auth0_user_id ,
    email,
    name
) 
VALUES(
    1,
    'test@test.ca',
    'Eric Karnis'
);

INSERT INTO addresses (
    app_user_id,
    full_name ,
    line_1 ,
    line_2,
    city ,
    region ,
    postal_code ,
    phone_number ,
    instructions
)
VALUES (
    1,
    'Eric Karnis',
    '100 Test Ave',
    'apt 706',
	'Toronto',
    'Ontario',
    'M8P5F6',
    '123-456-7890',
    'Please make sure it is nice and not bad.'
)
