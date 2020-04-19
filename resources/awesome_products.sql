# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.22)
# Database: awesome_products
# Generation Time: 2020-04-19 07:04:48 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table shop_categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `shop_categories`;

CREATE TABLE `shop_categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `shop_id` int(11) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table shops_product_categories_mappings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `shops_product_categories_mappings`;

CREATE TABLE `shops_product_categories_mappings` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) unsigned DEFAULT NULL,
  `product_id` int(11) unsigned DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table product_reviews
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product_reviews`;

CREATE TABLE `product_reviews` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `product_id` int(11) unsigned NOT NULL,
  `title` varchar(150) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `product_reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `product_reviews` WRITE;
/*!40000 ALTER TABLE `product_reviews` DISABLE KEYS */;

INSERT INTO `product_reviews` (`id`, `user_id`, `product_id`, `title`, `description`, `is_active`, `created_at`, `updated_at`)
VALUES
	(1,8,1,'Great Camera','This mobile has got such a great camera, I never miss a DSLR while I am carrying this mobile',1,'2018-11-24 20:37:28','2018-11-24 20:37:28'),
	(2,2,1,'Best Mobile','Not only the camera the battery backup is also very nice! I\'m loving this mobile',1,'2018-11-24 20:38:19','2018-11-24 20:42:43');

/*!40000 ALTER TABLE `product_reviews` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table products
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(250) DEFAULT '',
  `price` float NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;

INSERT INTO `products` (`id`, `name`, `description`, `price`, `is_active`, `created_at`, `updated_at`)
VALUES
	(1,'One Plus 5T','This is a new upgraded mobile',750,1,'2018-11-24 16:47:28','2018-11-24 20:56:45'),
	(2,'Redmi Note 5','This is a random mobile',200,1,'2018-11-24 17:41:56','2018-11-24 17:41:56'),
	(3,'Redmi Note 5 Pro','This is a random mobile',250,1,'2018-11-24 17:42:08','2018-11-24 17:42:08'),
	(4,'Redmi Note 6 Pro','This is a random mobile',270,1,'2018-11-24 17:42:19','2018-11-24 17:42:19'),
	(5,'Redmi Note 6','This is a random mobile',250,1,'2018-11-24 17:42:34','2018-11-24 17:42:34'),
	(6,'Samsung Note 9','This is a random mobile',550,1,'2018-11-24 17:42:53','2018-11-24 17:42:53'),
	(7,'Samsung J7','This is a random mobile',150,1,'2018-11-24 17:43:07','2018-11-24 17:43:07'),
	(8,'Samsung J7 Prime','This is a random mobile',180,1,'2018-11-24 17:43:16','2018-11-24 17:43:16'),
	(9,'Apple iPhone 8','This is a random mobile',880,1,'2018-11-24 17:44:30','2018-11-24 17:44:30'),
	(10,'Apple iPhone X','This is a random mobile',1000,1,'2018-11-24 17:44:39','2018-11-24 17:45:06'),
	(11,'One Plus 6T','This is a new upgraded mobile',750,1,'2018-11-24 20:55:46','2018-11-24 20:57:11'),
	(12,'One Plus 5','This is a random mobile',750,1,'2020-04-14 14:11:10','2020-04-14 14:11:10');

/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table products_sellers_mapings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products_sellers_mapings`;

CREATE TABLE `products_sellers_mapings` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(11) unsigned NOT NULL,
  `seller_id` int(11) unsigned NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `seller_id` (`seller_id`),
  CONSTRAINT `products_sellers_mapings_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `products_sellers_mapings_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `sellers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `products_sellers_mapings` WRITE;
/*!40000 ALTER TABLE `products_sellers_mapings` DISABLE KEYS */;

INSERT INTO `products_sellers_mapings` (`id`, `product_id`, `seller_id`, `is_active`, `created_at`, `updated_at`)
VALUES
	(1,1,1,1,'2018-11-24 19:52:02','2018-11-24 19:52:02'),
	(2,2,1,1,'2018-11-24 19:52:13','2018-11-24 19:52:13'),
	(3,8,2,1,'2018-11-24 19:52:35','2018-11-24 19:52:35'),
	(4,9,2,1,'2018-11-24 19:52:43','2018-11-24 19:52:43'),
	(5,10,2,1,'2018-11-24 19:52:51','2018-11-24 19:52:51'),
	(6,5,1,1,'2018-11-24 19:53:15','2018-11-24 19:53:15'),
	(7,5,2,1,'2018-11-24 19:53:22','2018-11-24 19:53:22'),
	(8,5,3,1,'2018-11-24 19:53:27','2018-11-24 19:53:27'),
	(9,6,2,1,'2018-11-24 19:53:34','2018-11-24 19:53:34'),
	(10,6,3,1,'2018-11-24 19:53:44','2018-11-24 19:53:44'),
	(11,4,3,1,'2018-11-24 19:53:52','2018-11-24 19:53:52'),
	(12,4,1,1,'2018-11-24 19:54:11','2018-11-24 19:54:11'),
	(13,7,3,1,'2018-11-24 19:54:17','2018-11-24 19:54:17'),
	(15,3,2,1,'2018-11-24 19:54:35','2018-11-24 19:54:35');

/*!40000 ALTER TABLE `products_sellers_mapings` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table products_shops_mappings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products_shops_mappings`;

CREATE TABLE `products_shops_mappings` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) unsigned DEFAULT NULL,
  `product_id` int(11) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `shop_id` (`shop_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `products_shops_mappings_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `products_shops_mappings_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table product_reviews_flag_details
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product_reviews_flag_details`;

CREATE TABLE `product_reviews_flag_details` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `review_id` int(11) unsigned NOT NULL,
  `product_id` int(11) unsigned NOT NULL,
  `flag_type` tinyint(4) DEFAULT NULL,
  `flag_body` varchar(150) DEFAULT '',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `review_id` (`review_id`),
  CONSTRAINT `product_reviews_flag_details_ibfk_1` FOREIGN KEY (`review_id`) REFERENCES `product_reviews` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table sellers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sellers`;

CREATE TABLE `sellers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(250) NOT NULL,
  `image_url` varchar(500) DEFAULT NULL,
  `city` varchar(50) NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sellers` WRITE;
/*!40000 ALTER TABLE `sellers` DISABLE KEYS */;

INSERT INTO `sellers` (`id`, `name`, `email`, `image_url`, `city`, `is_active`, `created_at`, `updated_at`)
VALUES
	(1,'Cloudtail','cloudtail@amazon.com','https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE1XFxcLzA4XFxcLzA2MTUzOTM0XFxcL2FtYXpvbi5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuaGVyLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvaGVyXFxcL25vLWltYWdlLnBuZz92PTVcIn0iLCJoYXNoIjoiNDJkMmY5NDVhMWYxN2Q4ZDliYTE1YTI3OGM3N2U3MmVkODgyMDBmNyJ9/amazon.jpg','NYC',1,'2018-11-24 19:45:38','2018-11-24 19:45:38'),
	(2,'WSRetail','wsrertail@flipkart.com','https://rukminim1.flixcart.com/merch/464/384/images/1484815071166.png?q=50','Bangaluru',1,'2018-11-24 19:46:37','2018-11-24 19:48:07'),
	(3,'EBay','seller@ebay.com','https://earlymoves.files.wordpress.com/2017/04/ebay-logo-by-lippincott-1024x768.png','NYC',1,'2018-11-24 19:47:10','2018-11-24 19:47:10'),
	(5,'Alibaba','seller@alibaba.com','https://earlymoves.files.wordpress.com/2017/04/ebay-logo-by-lippincott-1024x768.png','NYC',1,'2020-04-14 14:14:27','2020-04-14 14:14:27');

/*!40000 ALTER TABLE `sellers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table shops
# ------------------------------------------------------------

DROP TABLE IF EXISTS `shops`;

CREATE TABLE `shops` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL DEFAULT '',
  `lat` varchar(50) NOT NULL DEFAULT '',
  `lng` varchar(50) NOT NULL DEFAULT '',
  `tin_number` varchar(100) DEFAULT NULL,
  `gst_number` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `shop_number` varchar(20) NOT NULL DEFAULT '',
  `block` varchar(20) DEFAULT NULL,
  `street` varchar(100) NOT NULL DEFAULT '',
  `landmark` varchar(100) NOT NULL DEFAULT '',
  `_` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table shops_sellers_mappings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `shops_sellers_mappings`;

CREATE TABLE `shops_sellers_mappings` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) unsigned DEFAULT NULL,
  `seller_id` int(11) unsigned DEFAULT NULL,
  `owner_type` int(11) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `shop_id` (`shop_id`),
  KEY `seller_id` (`seller_id`),
  CONSTRAINT `shops_sellers_mappings_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `shops_sellers_mappings_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `sellers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(250) NOT NULL,
  `image_url` varchar(1024) DEFAULT NULL,
  `mobile` varchar(10) NOT NULL DEFAULT '',
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `state_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `name`, `email`, `image_url`, `mobile`, `is_active`, `created_at`, `updated_at`, `state_id`, `country_id`)
VALUES
	(1,'John  Doe','johndoe@doe.com','https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg','9021901291',1,'2018-11-24 20:14:43','2020-04-18 08:56:40',NULL,NULL),
	(2,'Updated User','update@user.com','https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg','7898099098',1,'2018-11-24 20:14:43','2020-04-18 08:56:47',NULL,NULL),
	(3,'Cara Megat','megat_c@doe.com','https://parasayu.net/wp-content/uploads/2017/02/rambut.jpg','8976324521',1,'2018-11-24 20:14:43','2020-04-18 08:56:56',NULL,NULL),
	(5,'Osman D','dosam@doe.com','https://s3tv.com/blog/wp-content/uploads/2018/02/Osman-Khalid-Butt-Profile-Biography-Dramas-Pictures.jpg','9821798967',1,'2018-11-24 20:14:43','2020-04-18 08:57:08',NULL,NULL),
	(8,'Daniel Cho','chodaneil@cho.com','https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg','9781232123',1,'2018-11-24 20:14:43','2020-04-18 08:57:18',NULL,NULL),
	(9,'Update Check','cheil@cho.com','https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg','7656213456',1,'2018-11-25 11:44:33','2020-04-18 08:57:26',NULL,NULL),
	(10,'Jane Doe','jane@doe.co','https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg','7512187812',1,'2020-04-14 13:27:07','2020-04-18 08:57:36',NULL,NULL),
	(11,'Jesicca','jess@ca.com','https://sample.io/imgxd.jpg','6712321098',1,'2020-04-14 15:57:35','2020-04-18 08:57:42',NULL,NULL),
	(13,'Jazz','jss@ca.com','https://sample.io/imgxd.jpg','9823127612',1,'2020-04-14 15:59:34','2020-04-18 08:57:51',NULL,NULL),
	(15,'Quest Doe','qne@doe.co','https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg','9900787812',1,'2020-04-18 12:58:10','2020-04-18 12:58:10',NULL,NULL),
	(17,'Quest Doe','wne@doe.co','https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg','9900787812',1,'2020-04-18 13:13:51','2020-04-18 13:13:51',NULL,NULL);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users_details
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users_details`;

CREATE TABLE `users_details` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `users_details_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users_details` WRITE;
/*!40000 ALTER TABLE `users_details` DISABLE KEYS */;

INSERT INTO `users_details` (`id`, `user_id`, `password`, `created_at`, `updated_at`)
VALUES
	(1,17,'$2b$10$1v6MOYCpwqiYPQ4SXufinuxJUm29fBq7PiF1BXgdiFptgsLwNWHFy','2020-04-18 13:13:51','2020-04-18 13:13:51');

/*!40000 ALTER TABLE `users_details` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
