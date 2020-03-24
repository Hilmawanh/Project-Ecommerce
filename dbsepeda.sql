-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: db_sepeda
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Mountain'),(2,'Roadbike'),(3,'Daily'),(4,'Bmx'),(5,'Ebike'),(6,'Apparels'),(7,'Spare-parts');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryId` varchar(45) NOT NULL,
  `gambar1` varchar(45) NOT NULL,
  `gambar2` varchar(45) NOT NULL,
  `gambar3` varchar(45) NOT NULL,
  `gambar4` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `produk` varchar(45) NOT NULL,
  `deskripsi` varchar(600) NOT NULL,
  `harga` int(11) NOT NULL,
  `gambar` varchar(300) DEFAULT NULL,
  `stock` int(6) NOT NULL,
  `ukuranproduk` int(11) NOT NULL,
  `categoryid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'XQUARONE EX9 SHIMANO XTR','The XQUARONE EX9 is a departure from the old way of classifying bikes.  dsada',100000000,'/product/image/product1583144462787.png',1,51,1),(5,'COLLOSUS DH9 TEAM','Collosus DH9 Team Edition memiliki front end dengan ukuran yang lebih panjang. ',1000000000,'/product/image/Product1582797944150.png',1,51,1),(6,'COLLOSUS FRX','The FRX’s combination of super tough Hydroformed ALX FR frame with freeride specific FS2. ',700000000,'/product/image/Product1582862030008.png',1,51,1),(7,'Brompton Black Edition','Ringan sekali bahan carbon dan harga mahal',50000000,'/product/image/Product1582863477276.png',1,50,3),(9,'S-Works Turbo Levo SL','The Turbo Levo SL is a new, lightweight breed of eMTB that harnesses the quick and lively ride of our Stumpjumper. ',50000000,'/product/image/Product1583059962744.jpeg',1,51,1),(12,'XQUARONE EX7 SHIMANO SLX','The XQUARONE EX7 is a departure from the old way of classifying bikes. ',60000000,'/product/image/Product1583144383513.png',1,51,1),(13,'ENTIAT-E','Entiat-E nanana merupakan sepeda elektrik pedal (Pedelec) dari seri Entiat TR. ',50000000,'/product/image/product1583225755752.png',1,51,5),(14,'XQUARONE EX7 SRAM GX','XQUARONE EX7 hadir untuk memberikan paradigma baru tentang pengalaman bersepeda.',65000000,'/product/image/Product1583218669606.png',1,50,1),(15,'RAZOR PRO','Polygon Razor Elite merupakan sepeda BMX yang dirancang dengan akselerasi dan kecepatan tinggi. dan asade dsada',3500000,'/product/image/product1583225705279.png',1,51,4),(16,'RAZOR ELITE','Dirancang dengan frame alloy AL6 alloy yang sangat ringan dan responsif dan dengan fork berbahan carbon BOX. ',3000000,'/product/image/Product1583225853581.png',2,51,4),(17,'BROMPTON WHITE EDITION','Harga mahal kualitas juga mahal anjay',60000000,'/product/image/product1583229695751.png',1,51,3),(18,'HELIOS LT9X','Helios LT9X merupakan sepeda road dengan frame carbon ACX yang ringan dan kuat.',70000000,'/product/image/product1583828713623.png',1,51,2),(19,'HELIOS LT9X ETAP','Performa yang responsif serta dilengkapi dengan electronic shifting wireless.',65000000,'/product/image/product1583825960887.png',1,51,2),(20,'HELIOS LT9','Helios LT9 merupakan sepeda road dengan frame carbon ACX yang ringan dan kuat dengan performa maksimal.',50000000,'/product/image/product1583828728046.png',2,1,2),(22,'Brompton Superlight','Harga selangit kualitas rendahan',50000000,'/product/image/Product1583312262838.png',1,51,3),(23,'MY20 SAGE TRID','Entiat-E nanana merupakan sepeda elektrik pedal (Pedelec) dari seri Entiat TR.',40000000,'/product/image/Product1583377631205.png',1,51,5),(24,'MY20 PATH TRID LADY','Entiat-E nanana merupakan sepeda elektrik pedal (Pedelec) dari seri Entiat TR.',50000000,'/product/image/Product1583377689440.png',1,50,5),(25,'RUDGE 3','Polygon Rudge merupakan sepeda BMX Freestyle yang tepat untuk melakukan atraksi BMX andalan anda.',2500000,'/product/image/Product1583414007601.png',1,51,4),(26,'STRATTOS S7 DISC BRAKES','Mengadaptasi tapered carbon fork yang ringan dan kuat, internal cable untuk tampilan yang lebih rapi.',19950000,'/product/image/Product1583726185534.png',1,51,2),(27,'STRATTOS S7','Mengadaptasi tapered carbon fork yang ringan dan kuat, internal cable untuk tampilan yang lebih rapi.',17500000,'/product/image/Product1583726253400.png',1,51,2),(28,'STRATTOS S2','Wheelbase yang lebih panjang, serta menggunakan desain upper linkage dengan material karbon terbaru.',6500000,'/product/image/Product1583726306353.png',1,50,2),(29,'BEND RV RIVAL','Bend RV merupakan sepeda gravel yang didesain khusus dengan head tube yang lebih tinggi.',16500000,'/product/image/Product1583726397195.png',1,51,2),(30,'BEND CT5','Polygon Bend CT adalah sepeda urban sport untuk mobilitas maksimal setiap hari. ',16500000,'/product/image/Product1583726451055.png',1,51,2),(31,'BEND RIV','Bend RV merupakan sepeda gravel yang didesain khusus dengan head tube yang lebih tinggi.',10000000,'/product/image/Product1583726504627.png',1,51,2),(32,'GLOVES ENDURO ALPHA','Pada berbagai kesempatan apabila kita terjatuh saat bersepeda, maka hal pertama yang biasa kita lakukan adalah menggunakan tangan sebagai penumpu badan.',400000,'/product/image/Product1583826379250.png',1,23,6),(33,'THARSUS','Fiber glass hard shell Bersertifikasi CE EN1078 dan CPSC Padding dapat dilepas dan dicuci Adjustable visor, 12 ventilasi udara',1000000,'/product/image/Product1583826515115.png',1,20,6),(34,'JERSEY ROAD RAI','High quality jersey yang quick dry dan dirancang untuk menunjang performa anda ketika bersepeda meskipun dalam waktu yang lama.',300000,'/product/image/Product1583826596187.png',1,50,6),(35,'BAN DAN DUT','Road performance bike built with a UCI approved ACX frame that is astonishingly responsive, smooth, and fast.',1000000,'/product/image/Product1583826817332.png',1,31,7),(36,'CRANK CRONK CRUNK','Road performance bike built with a UCI approved ACX frame that is astonishingly responsive, smooth, and fast',2000000,'/product/image/Product1583826857331.png',1,41,7),(38,'RAZOR ELITE TEAM','Polygon Rudge merupakan sepeda BMX Freestyle yang tepat untuk melakukan atraksi BMX andalan anda.',50000000,'/product/image/Product1583848771058.png',1,52,4),(39,'SIERRA OOSTEN 26 ','Polygon Zenith Active, hadir dengan gaya simple, elegan, dan sangat nyaman. Zenith Active 3-Speed city bike dengan frame bergaya eropa.',3200000,'/product/image/Product1583849063992.png',1,51,3),(40,'ZENITH ACTIVE I3','Polygon Zenith Active, hadir dengan gaya simple, elegan, dan sangat nyaman. Zenith Active 3-Speed city bike dengan frame bergaya eropa.',4200000,'/product/image/Product1583849131091.png',2,53,3),(41,'SAGAN FRAMSET','SAGAN FRAMSET merupakan frame carbon ACX yang ringan dan kuat.',15000000,'/product/image/Product1584425813875.png',3,51,2);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rolescol` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactiondetail`
--

DROP TABLE IF EXISTS `transactiondetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactiondetail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `alamat` varchar(105) DEFAULT NULL,
  `nomor` int(50) DEFAULT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `tanggal` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactiondetail`
--

LOCK TABLES `transactiondetail` WRITE;
/*!40000 ALTER TABLE `transactiondetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `transactiondetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `productid` int(11) DEFAULT NULL,
  `harga` int(100) DEFAULT NULL,
  `jumlah` int(100) DEFAULT NULL,
  `total` int(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,33,12,60000000,7,420000000,'0'),(6,NULL,40,4200000,1,4200000,NULL),(7,NULL,17,60000000,3,180000000,NULL),(25,3,19,65000000,2,130000000,'0'),(26,3,7,50000000,3,150000000,'0'),(41,34,24,50000000,3,150000000,'0'),(46,34,34,300000,NULL,NULL,'0'),(65,36,19,65000000,3,195000000,'0'),(66,37,38,50000000,3,150000000,'0'),(69,39,1,100000000,1,100000000,'0'),(122,31,15,3500000,2,7000000,'0'),(123,31,20,50000000,1,50000000,'cart'),(124,31,14,65000000,3,195000000,'cart'),(126,41,28,6500000,3,19500000,'cart');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `roleid` int(11) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'wis','4c36b32c3480e6b8e5ecfe8742b26c6e9a9229e39c8c722045dd8da6cdfa6822','wis@gmail.com',2,'unverified',NULL),(2,'nana','a918ce7f680035386b0e8dfcfaf7897763a872c2fea0f0130cbc8d853c6843e3','nana123@gmail.com',2,'unverified',NULL),(3,'hil','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','hil@gmail.com',2,'unverified',NULL),(4,'hila','02a918c04189df2668a6bbda8a328a85787c620a4569163bfd8cdf693782cb0e','hial@gmail.com',2,'unverified',NULL),(5,'hilal','79aa4cc9b934af5a01fcf447e1f371f5a9b71031d897fc23c8e836195ff9aeb8','hilall@gmail.com',2,'unverified',NULL),(6,'ida','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','ida@gmail.com',2,'unverified',NULL),(7,'hilu','a918ce7f680035386b0e8dfcfaf7897763a872c2fea0f0130cbc8d853c6843e3','hilu@gmail.com',2,'unverified',NULL),(8,'nanana','a918ce7f680035386b0e8dfcfaf7897763a872c2fea0f0130cbc8d853c6843e3','nanana@gmail.com',2,'unverified',NULL),(30,'mpi','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','mpi@gmail.com',2,'unverified',NULL),(31,'hafis','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','hafis@gmail.com',2,'unverified',NULL),(32,'empi','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','empi@gmail.com',2,'unverified',NULL),(33,'nani','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','nani@gmail.com',2,'unverified',NULL),(34,'hulma','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','hulma@gmail.com',2,'unverified',NULL),(35,'admin','12345','admin@gmail.com',1,'unverified',NULL),(36,'dayu','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','dayu@gmail.com',2,'unverified',NULL),(37,'admin1','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','admin1@gmail.com',1,'unverified',NULL),(38,'isfan','ab37911414757926460d606090cd1107a428604636736220d4cf4a9303b91e03','koaskodkoskd@gmail.com',2,'unverified',NULL),(39,'isfan','ab37911414757926460d606090cd1107a428604636736220d4cf4a9303b91e03','isfan@gmail.com',2,'unverified',NULL),(40,'bromeyo','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','bromeyo@gmail.com',2,'unverified',NULL),(41,'ayu','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','ayu@gmail.com',2,'unverified',NULL),(42,'nmnm','eb2a95ca17f348881afc50b50614a3725f886038317f629c3b7a01f3224c561e','nmnm@gmail.com',2,'unverified',NULL);
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

-- Dump completed on 2020-03-20 21:03:57
