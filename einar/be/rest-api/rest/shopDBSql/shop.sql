CREATE DATABASE  IF NOT EXISTS `shopDB` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `shopDB`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: shopDB
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `product_id` int(20) DEFAULT NULL,
  `qty` int(20) DEFAULT NULL,
  `session` int(11) DEFAULT '1',
  PRIMARY KEY (`id`),
  CONSTRAINT `product_id` FOREIGN KEY (`id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `categories` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'food'),(2,'drinks'),(3,'clothes'),(4,'other');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `categories_id` int(10) DEFAULT NULL,
  `name` varchar(80) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `sku` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories_id` (`categories_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'Juice Ocean Spray Cranberry','6.8','https://i5.walmartimages.com/asr/7e005b10-8b96-4ecb-815d-0043f20d74c8_1.b28b6ea931ceb30657ae47adcaa5551f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF','3334'),(2,1,'Rye Special Old','3.8','https://www.whiskyauctioneer.com/sites/default/files/IMG_4802_3.jpg','3334'),(3,1,'Salmon - Atlantic, Skin On','9.2','https://thumb1.shutterstock.com/display_pic_with_logo/2615302/287243993/stock-photo-fresh-salmon-fillet-on-isolated-white-287243993.jpg','3334'),(4,1,'Bar Granola Trail Mix Fruit Nut','8','http://www.taquitos.net/im/sn/Quaker-Trail-CPR.jpg','3334'),(5,1,'Flour - All Purpose','8.6','http://www.kingarthurflour.com/products/all-purpose-flour/images/ap-flour-hero.jpg','3334'),(6,1,'Butter Sweet','9.3','https://0bb8856ba8259ec33e3d-a40599a114f3a4c6d0979c3ffe0b2bf5.ssl.cf2.rackcdn.com/0075450085150_CL_hyvee_default_large.jpeg','3334'),(7,1,'Sugar - Monocystal / Rock','9.8','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_6-bZp3kzGepoDtGbFuSBerYqNBoJKyS_cALXXu-OpYoDthG','3334'),(8,1,'Ocean Spray - Ruby Red','8.7','https://i5.walmartimages.com/asr/bff06943-6a51-4a83-bd14-d1a1d2600c80_1.53cafa323ec3c9d46f20261108b05925.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF','3334'),(9,1,'Mix Pina Colada','9.9','https://www.nestleprofessional.us/sites/g/files/gfb131/f/styles/product/public/media/sunsational-pina-colada-32oz-nestle-professional-food-service-380x380.png?itok=R0qpn6Kl','3334'),(10,2,'Cookies - Oreo, 4 Pack','7.6','https://cdn.shopify.com/s/files/1/0675/9787/products/9300650022652-M4.jpg?v=1481139325','3334'),(11,2,'Mayonnaise','6.7','http://www.hellmanns.com/Images/380/380-1307401-Mayonnaise_Real_TG_300_335.png','3334'),(12,2,'Turnip - White, Organic','8','https://thepaleomomcom-xt0mxgicgroc.stackpathdns.com/wp-content/uploads/2016/07/Turnips.jpg','3334'),(13,2,'Bread - Dark Rye','1.7','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrh0REZuRwa7iZOMwewJt3siOYviCL2UBRX-ZEdcoGMbV6piIO','3334'),(14,2,'Noodles - Cellophane, Thin','8','https://i5.walmartimages.com/asr/07940510-f7b7-4cb6-8e24-ecabe85648c4_1.e8336a3aa090033cece9e988ea4b140c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF','3334'),(15,2,'Crab - Dungeness, Whole, live','4.7','https://i5.walmartimages.com/asr/eb551b99-0327-4c41-9b67-56533be1feda_1.48e90b86a96500ee888f48b71b0f7cd3.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF','3334'),(16,2,'Flour - Corn, Fine','4','https://img.tesco.com/Groceries/pi/823/5013531212823/IDShot_540x540.jpg','3334'),(17,2,'Crab - Blue, Frozen','3.7','https://www.panamei.com/wp-content/uploads/2017/02/blue-crab-646x700.png','3334'),(18,2,'Wine - Winzer Krems Gruner','3.3','https://wine-searcher1.global.ssl.fastly.net/images/labels/72/91/weingut-winzer-krems-kremser-weinzierl-gruner-veltliner-kremstal-austria-10557291.jpg','3334'),(19,2,'Fudge - Chocolate Fudge','2.5','https://wowprodmedia002aae.azureedge.net/content/wowproductimages/large/225676.jpg','3334'),(20,2,'Flour - Fast / Rapid','6.6','http://bakingbites.com/wp-content/uploads/2007/08/selfrising.jpg','3334'),(21,2,'Bread Bowl Plain','2','https://target.scene7.com/is/image/Target/13282447?wid=520&hei=520&fmt=pjpeg','3334'),(22,3,'Potatoes - Fingerling 4 Oz','9.4','https://i5.walmartimages.com/asr/356c2e25-e7d8-4bbe-8ee4-63e0817e3603_1.33c82c6b6ccee901bce3d3b02ca484a7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF','3334'),(23,3,'Peach - Halves','4.6','https://sc01.alicdn.com/kf/HTB1tLcBKpXXXXcrXXXXq6xXFXXXk/American-Delight-Canned-Peach-Halves.jpg','3334'),(24,3,'Pork - Ground','10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZQQo5CaaKbfs_a-7L_bghNYLcUg5t5g1phhDIqB2FNUB0_GTIQ','3334'),(25,3,'Table Cloth 54x54 Colour','43','http://www.joleetablecloths.co.uk/ekmps/shops/jolee/images/red-and-white-gingham-pvc-vinyl-tablecloth-2224-p.jpg','3334'),(26,3,'Cake Circle, Foil, Scallop','8.3','https://ae01.alicdn.com/kf/HTB1gwhHMpXXXXX7XpXXq6xXFXXXh/Free-Shipping-100pcs-8-Colorful-font-b-Foil-b-font-Disposable-Paper-Plates-Party-font-b.jpg','3334'),(27,3,'Bols Melon Liqueur','8.7','http://www.aries-wineny.com/wp-content/uploads/2015/08/bols-melon-liqueur.png','3334'),(28,3,'Bread - Raisin Walnut Oval','2.1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4qFUaESpgKRvgX1TgpUYT_GIRtgcIvx3DGuQsko6LVt52NARDw','3334'),(29,3,'Corn Kernels - Frozen','2.7','https://i5.walmartimages.com/asr/6aea438d-f810-41b4-a0ad-764f7f71cdb4_1.59c30bf62e11d3eb91123fb8da04a9e7.jpeg','3334'),(30,3,'Beer - Sleeman Fine Porter','6.5','https://cdn.justwineapp.com/assets/beer/bottle/fernie-brewing-co-sap-sucker-maple-porter_1479423121.png','3334'),(31,3,'Coffee - Dark Roast','7','https://images-na.ssl-images-amazon.com/images/I/81tV2cjE0AL._SY550_.jpg','3334');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `password` varchar(42) DEFAULT NULL,
  `cartId` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  CONSTRAINT `cartid` FOREIGN KEY (`id`) REFERENCES `cart` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-05 10:36:55
