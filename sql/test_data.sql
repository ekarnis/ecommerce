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
