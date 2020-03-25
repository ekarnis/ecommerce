INSERT INTO woods (name) 
VALUES 
('Oak'),
('Birch'),
('Maple'),
('Mahogany'),
('Ironwood');


INSERT INTO stains (name) 
VALUES 
('Light'),
('Dark'),
('Burgundy'),
('Clear'),
('Yellow');


INSERT INTO boards (
    stain_id,
    wood_id,
    stock,
    width_in_cm,
    length_in_cm,
    thickness_in_cm,
    price_in_usd,
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
