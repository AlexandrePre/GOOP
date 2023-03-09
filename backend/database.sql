CREATE TABLE `client` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `firstName` varchar(255)  NOT NULL ,
    `lastname` varchar(255)  NOT NULL ,
    `age` int  NOT NULL ,
    `permis` boolean  NOT NULL ,
    `picture` varchar(255)  NOT NULL ,
    `bio` varchar(255)  NOT NULL ,
    `password` varchar(255)  NOT NULL ,
    `email` varchar(255)  NOT NULL ,
    `localisation` varchar(255)  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `car` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `modele` varchar(255)  NOT NULL ,
    `brand` varchar(255)  NOT NULL ,
    `kilometer` int  NOT NULL ,
    `color` varchar(255)  NOT NULL ,
    `seatNumber` int  NOT NULL ,
    `imatriculation` varchar(255)  NOT NULL ,
    `localisation` varchar(255)  NOT NULL ,
    `door` int  NOT NULL ,
    `Category` int  NOT NULL ,
    `prixJ` float  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `corporation` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `Name` varchar(255)  NOT NULL ,
    `logo` varchar(255)  NOT NULL ,
    `Password` varchar(255)  NOT NULL ,
    `email` varchar(255)  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `Status` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `id_car` int  NOT NULL ,
    `status` int  NOT NULL ,
    `dateStart` date  NOT NULL ,
    `DateEnd` date  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `voyage` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `id_car` int  NOT NULL ,
    `id_user` int  NOT NULL ,
    `cityStart` varchar(255)  NOT NULL ,
    `cityDestination` varchar(255)  NOT NULL ,
    `DateStart` date  NOT NULL ,
    `dateEnd` date  NOT NULL ,
    `isPartage` boolean  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `requete` (
    `id_user` int  NOT NULL ,
    `id_voyage` int  NOT NULL ,
    `isAccept` boolean  NOT NULL 
);

ALTER TABLE `Status` ADD CONSTRAINT `fk_Status_id_car` FOREIGN KEY(`id_car`)
REFERENCES `car` (`id`);

ALTER TABLE `voyage` ADD CONSTRAINT `fk_voyage_id_car` FOREIGN KEY(`id_car`)
REFERENCES `car` (`id`);

ALTER TABLE `voyage` ADD CONSTRAINT `fk_voyage_id_user` FOREIGN KEY(`id_user`)
REFERENCES `client` (`id`);

ALTER TABLE `requete` ADD CONSTRAINT `fk_requete_id_user` FOREIGN KEY(`id_user`)
REFERENCES `client` (`id`);

ALTER TABLE `requete` ADD CONSTRAINT `fk_requete_id_voyage` FOREIGN KEY(`id_voyage`)
REFERENCES `voyage` (`id`);

