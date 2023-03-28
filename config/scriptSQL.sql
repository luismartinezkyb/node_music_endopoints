CREATE DATBASE cursonode;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(150),
    role rol NOT NULL,
    age INTEGER,
    createdAt TIMESTAMP WITH TIME ZONE,
    updatedAt TIMESTAMP WITH TIME ZONE
);

CREATE TABLE tracks(
    id SERIAL PRIMARY KEY,
    name VARCHAR(150),
    album VARCHAR(150),
    cover VARCHAR(150),
    artist_name VARCHAR(150),
    artist_nickname VARCHAR(150),
    artist_nationality VARCHAR(150),
    duration_start INTEGER,
    duration_end INTEGER,
    mediaId INTEGER,
    createdAt TIMESTAMP WITH TIME ZONE,
    updatedAt TIMESTAMP WITH TIME ZONE
);

CREATE TABLE storages(
    id SERIAL PRIMARY KEY,
    url VARCHAR(150),
    filename VARCHAR(150),
    createdAt TIMESTAMP WITH TIME ZONE,
    updatedAt TIMESTAMP WITH TIME ZONE
);



