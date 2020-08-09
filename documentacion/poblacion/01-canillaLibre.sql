-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: canillaLibre
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bebidas`
--

DROP TABLE IF EXISTS `bebidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bebidas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productoId` int(11) DEFAULT NULL,
  `Marca` varchar(100) NOT NULL,
  `envio` tinyint(1) DEFAULT NULL,
  `ibu` int(11) DEFAULT NULL,
  `alcohol` decimal(3,1) DEFAULT NULL,
  `presentacionId` int(11) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK` (`productoId`,`presentacionId`),
  KEY `bebidas_fk_1` (`presentacionId`),
  CONSTRAINT `bebidas_fk` FOREIGN KEY (`productoId`) REFERENCES `producto` (`id`),
  CONSTRAINT `bebidas_fk_1` FOREIGN KEY (`presentacionId`) REFERENCES `presentacion` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bebidas`
--

LOCK TABLES `bebidas` WRITE;
/*!40000 ALTER TABLE `bebidas` DISABLE KEYS */;
INSERT INTO `bebidas` VALUES (53,117,'Lagunitas',NULL,4,6.0,29,NULL,NULL),(54,118,'Corona',NULL,4,5.0,29,NULL,NULL),(55,132,'Budweiser',NULL,3,5.0,29,NULL,NULL),(56,133,'Fat Tire',NULL,4,5.0,28,NULL,NULL),(57,134,'Guinness',NULL,2,6.0,27,NULL,NULL),(58,135,'Carlsberg',NULL,4,6.0,28,NULL,NULL),(59,136,'Karbach',0,3,5.0,29,NULL,NULL),(60,137,'Ale',NULL,3,5.0,28,NULL,NULL),(61,138,'Live Oak Pilz',0,4,5.0,26,NULL,NULL),(62,139,'Karbach',0,4,6.0,26,NULL,NULL),(63,140,'Seatle Cider',0,0,0.0,27,NULL,NULL),(64,141,'Victory Brewing',0,3,6.0,29,NULL,NULL),(65,155,'tecate',0,4,4.0,26,NULL,NULL),(66,156,'Heineken',0,4,0.0,29,NULL,NULL),(67,157,'Peroni',0,3,5.0,29,NULL,NULL),(68,158,'XX',0,4,5.0,29,NULL,NULL),(69,159,'Heineken',0,4,5.0,29,NULL,NULL),(70,160,'Lone',0,3,4.0,26,NULL,NULL),(71,161,'Urquell',0,4,5.0,29,NULL,NULL),(72,162,'Bitburger',0,3,5.0,27,NULL,NULL),(73,163,'Beck´s',0,3,5.0,29,NULL,NULL),(74,164,'Victoria',0,3,5.0,29,NULL,NULL),(75,165,'Corona',0,1,5.0,29,NULL,NULL),(76,166,'Modelo',0,4,6.0,27,NULL,NULL),(77,167,'Modelo',0,4,8.0,29,NULL,NULL),(78,168,'pacifico',0,3,5.0,29,NULL,NULL),(79,169,'Corona',0,3,6.0,29,NULL,NULL),(80,170,'Modelo',0,5,5.0,29,NULL,NULL),(81,173,'Heineken',0,4,6.0,32,NULL,NULL),(82,174,'Heineken',0,3,5.0,33,NULL,NULL);
/*!40000 ALTER TABLE `bebidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fechaCompra` datetime DEFAULT NULL,
  `precioTotal` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comprasproductos`
--

DROP TABLE IF EXISTS `comprasproductos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comprasproductos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comprasId` int(11) DEFAULT NULL,
  `productoId` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK` (`comprasId`,`productoId`),
  KEY `comprasproductos_fk_1` (`productoId`),
  CONSTRAINT `comprasproductos_fk` FOREIGN KEY (`comprasId`) REFERENCES `compras` (`id`),
  CONSTRAINT `comprasproductos_fk_1` FOREIGN KEY (`productoId`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comprasproductos`
--

LOCK TABLES `comprasproductos` WRITE;
/*!40000 ALTER TABLE `comprasproductos` DISABLE KEYS */;
/*!40000 ALTER TABLE `comprasproductos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productoId` int(11) DEFAULT NULL,
  `disertante` varchar(100) NOT NULL,
  `medioId` int(11) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK` (`productoId`,`medioId`),
  KEY `cursos_fk_1` (`medioId`),
  CONSTRAINT `cursos_fk` FOREIGN KEY (`productoId`) REFERENCES `producto` (`id`),
  CONSTRAINT `cursos_fk_1` FOREIGN KEY (`medioId`) REFERENCES `medio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos`
--

LOCK TABLES `cursos` WRITE;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
INSERT INTO `cursos` VALUES (35,171,'Piñon Fijo',2,NULL,NULL),(36,172,'Malba',3,NULL,NULL),(37,175,'Morfeo',3,NULL,NULL),(38,176,'Guido Suller',2,NULL,NULL),(39,177,'Pablo Escobar',1,NULL,NULL),(40,178,'beer',4,NULL,NULL),(41,179,'Chinchulin',4,NULL,NULL),(42,180,'Sra Crafta',3,NULL,NULL),(43,181,'Piñon Fijo',2,NULL,NULL);
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direccion`
--

DROP TABLE IF EXISTS `direccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `direccion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) DEFAULT NULL,
  `direccion` varchar(255) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `pais` varchar(100) NOT NULL,
  `cp` int(11) DEFAULT NULL,
  `enviosId` int(11) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarioId` (`usuarioId`),
  CONSTRAINT `usuarioId` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
/*!40000 ALTER TABLE `direccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insumos`
--

DROP TABLE IF EXISTS `insumos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `insumos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productoId` int(11) DEFAULT NULL,
  `envio` tinyint(1) NOT NULL,
  `create_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  `origen` varchar(100) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK` (`productoId`),
  CONSTRAINT `insumos_fk` FOREIGN KEY (`productoId`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insumos`
--

LOCK TABLES `insumos` WRITE;
/*!40000 ALTER TABLE `insumos` DISABLE KEYS */;
INSERT INTO `insumos` VALUES (21,119,0,NULL,NULL,'internacional','YAKIMA CHIEF'),(22,120,0,NULL,NULL,'internacional','YAKIMA CHIEF'),(23,121,0,NULL,NULL,'internacional','YAKIMA CHIEF'),(24,122,0,NULL,NULL,'internacional','YAKIMA CHIEF'),(25,123,0,NULL,NULL,'internacional','Ychhops'),(26,124,0,NULL,NULL,'internacional','Ychhops'),(27,125,0,NULL,NULL,'internacional','Ychhops'),(28,126,0,NULL,NULL,'internacional','Ychhops'),(29,127,0,NULL,NULL,'internacional','Fermentis'),(30,128,0,NULL,NULL,'internacional','Fermentis'),(31,129,0,NULL,NULL,'internacional','Fermentis'),(32,130,0,NULL,NULL,'internacional','Fermentis'),(33,131,0,NULL,NULL,'internacional','Fermentis'),(34,142,0,NULL,NULL,'nacional','Cosito'),(35,143,0,NULL,NULL,'internacional','TALOS'),(36,144,0,NULL,NULL,'internacional','Talos'),(37,145,0,NULL,NULL,'nacional','Talos'),(38,146,0,NULL,NULL,'internacional','Talos'),(39,147,0,NULL,NULL,'internacional','Talos'),(40,148,0,NULL,NULL,'internacional','Talos'),(41,149,0,NULL,NULL,'internacional','Talos'),(42,150,0,NULL,NULL,'internacional','Talos'),(43,151,0,NULL,NULL,'nacional','Dm FIT'),(44,152,0,NULL,NULL,'nacional','DM FIT'),(45,153,0,NULL,NULL,'nacional','DM FIT'),(46,154,0,NULL,NULL,'internacional','Talos');
/*!40000 ALTER TABLE `insumos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medio`
--

DROP TABLE IF EXISTS `medio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medio`
--

LOCK TABLES `medio` WRITE;
/*!40000 ALTER TABLE `medio` DISABLE KEYS */;
INSERT INTO `medio` VALUES (1,'Streaming'),(2,'Presencial'),(3,'Grabado'),(4,'Manuales');
/*!40000 ALTER TABLE `medio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `presentacion`
--

DROP TABLE IF EXISTS `presentacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `presentacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `capacidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `presentacion`
--

LOCK TABLES `presentacion` WRITE;
/*!40000 ALTER TABLE `presentacion` DISABLE KEYS */;
INSERT INTO `presentacion` VALUES (26,'Lata',355),(27,'Lata',473),(28,'Porron',330),(29,'Porron',500),(30,'Botella',710),(31,'Botella',1),(32,'Barril',5),(33,'Barril',10),(34,'Barril',20),(35,'Barril',30);
/*!40000 ALTER TABLE `presentacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `precioUnitario` decimal(10,2) NOT NULL,
  `descuento` int(11) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `rating` decimal(10,2) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `tipoproducto` int(11) NOT NULL,
  `create_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK` (`usuarioId`),
  CONSTRAINT `producto_fk` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (117,18,'Lagunitas IPA',110.00,10,'A well-rounded, highly drinkable IPA. A bit of Caramel Malt barley provides the richness that mellows out the twang of the hops.','imagen-1596798919280.jpg',NULL,200,1,NULL,NULL),(118,18,'Corona Extra',88.00,20,'Corona Extra Mexican Lager Beer is an even-keeled imported beer with aromas of fruity-honey and a touch of malt. Brewed in Mexico since 1925, this lager beer\'s flavor is refreshing, crisp, and well-balanced between hops and malt. Made from the finest-qual','imagen-1596799038800.jpg',NULL,250,1,NULL,NULL),(119,18,'Lúpulo Simcoe® Brand YCR 14 YCH - 454G',2400.00,15,'Presentación: Paquete 454 gramos. Envasado en origen. Formato Pellets\r\nPaís: Estados Unidos.\r\nAroma : Maracuya, Berry, Pine, Terroso, Cítrico.\r\nCerveza Estilo: IPA, American Pale, Wheat Saison, Amber.  Brewing Values:\r\n\r\nBrewing Values:\r\nAlpha Acid: 11.5 ','imagen-1596800840418.jpg',NULL,50,2,NULL,NULL),(120,18,'Lúpulo Amarillo®VGZP01 YCH - 454G',2400.00,10,'Lúpulo Amarillo YCH - \r\n\r\nPresentación: bolsa 454 gramos. Envasado en origen. - Formato Pellet.\r\nPaís: Estados Unidos\r\nAroma Profile: Grapefruit, Orange, Lemon, Melon, Apricot, Peach\r\nBeer Styles: American-Style Ale, IPA, Wheat, Red Ale.\r\n\r\nBrewing Values','imagen-1596800896027.jpg',NULL,25,2,NULL,NULL),(121,18,'Lúpulo Ekuanot® Brand HBC 366 CV YCH - 454G',2400.00,10,'Presentación: Paquete 454 gramos. Envasado en origen. Formato Pellets.\r\nPaís: Estados Unidos.\r\nAroma : Melón, Berry, Lima, Manzana, Papaya. \r\nCerveza Estilo: IPA, A Ale, Belgian Ale\r\nBrewing Values:\r\n\r\nAlpha Acid: 13 - 15,5%\r\nBeta Acid:  4 - 5%\r\n\r\nB-Pinen','imagen-1596800947473.jpg',NULL,22,2,NULL,NULL),(122,18,'Lúpulo Centennial YCH - 454G',2400.00,10,'Lúpulo Centennial YCH\r\n\r\nPresentación: bolsa 454 gramos envasado en origen - Formato Pellet.\r\nPaís: Estados Unidos.\r\nAroma Profile: Lemon, Floral.\r\nBeer Style: American-Style Pale Ale, IPA\r\n\r\nBrewing Values:\r\n\r\nAlpha Acid: 7 - 12%\r\nBeta Acid: 3.5 - 5.5%\r\n','imagen-1596801023698.jpg',NULL,22,2,NULL,NULL),(123,18,'Lúpulo German Northern Brewer YCH - 454G',1250.00,10,'Presentación: Paquete 454 gramos al vacío.\r\nPaís: Alemania.\r\nAroma : Menta, pino, pasto.\r\nCerveza Estilo: Porter, English-Style Bitter, English Style Pale Ale\r\nBrewing Values:\r\n\r\nAlpha Acid: 6 - 10%\r\nBeta Acid:  3 - 5%\r\nB-Pinene: -\r\nMyrcene: 25 - 45% of t','imagen-1596801092469.jpg',NULL,10,2,NULL,NULL),(124,18,'Lúpulo German Blanc YCH - 454G',1790.00,10,'Presentación: Paquete 454 gramos al vacío.\r\nPaís: Alemania.\r\nAroma : Maracuyá, Pomelo, Ananá, Uva, Limón\r\nBeer Style: Pale Ale, IPA.\r\n\r\nBrewing Values:\r\n\r\nAlpha Acid: 9 - 12%\r\nBeta Acid: 4,5 - 5.5%\r\n\r\nMyrcene: 50 - 70% of total oil\r\nLinalool: 0.2 - 0.5% o','imagen-1596801189948.jpg',NULL,15,2,NULL,NULL),(125,18,'Lúpulo Simcoe® YCR 14 CV YCH - 1oz (28,3g)',265.00,10,'Presentación: Paquete 1oz al vacío.\r\n\r\nPaís: Estados Unidos.\r\n\r\nAroma : Maracuya, Berry, Pine, Terroso, Cítrico.\r\n\r\nCerveza Estilo: IPA, American Pale, Wheat Saison, Amber.  Brewing Values:\r\n\r\n \r\n\r\nBrewing Values:\r\n\r\nAlpha Acid: 11.5 – 15%\r\nBeta Acid: 3 –','imagen-1596801233327.jpg',NULL,20,2,NULL,NULL),(126,18,'Lúpulo Bravo YCH - 1oz (28,3g)',250.00,10,'Lúpulo Bravo YCH \r\n\r\nPresentación: bolsa 1oz al vacío - Pellet.\r\nPaís: Estados Unidos.\r\nAroma Profile: Naranja, Vainilla.\r\nBeer Style: Pale Ale, IPA, Barley Wine\r\n\r\nBrewing Values:\r\nB-PINENE 0.8 - 1% OF TOTAL OIL\r\nMYRCENE 55 - 60% OF TOTAL OIL\r\nLINALOOL 0','imagen-1596801276714.jpg',NULL,50,2,NULL,NULL),(127,18,'Levadura Fermentis Cerveza SAFALE™ S04 -11gr',220.00,10,'Levadura de cepa tipo Ale Inglesa para cerveza. Esta cepa Ale Inglesa, es seleccionada por su rápida capacidad de fermentación y por ser capaz de formar un sedimento compacto al final de la fermentación, ayudando a la claridad de la cerveza.\r\n\r\nRecomendad','imagen-1596802102480.jpg',NULL,200,2,NULL,NULL),(128,18,'Levadura Fermentis Cerveza SafLager™ W-34/70 - 11gr',370.00,10,'La cepa de fermentación inferior originada de Weihenstephan. Permite elaborar cervezas con buen\r\nbalance floral y aromas frutales y provee sabores limpios, de alta “drinkability”.\r\n\r\nDosis: un sobre para 10 litros (100 - 150 gramos para 100 litros)\r\n\r\nEst','imagen-1596802173460.jpg',NULL,20,2,NULL,NULL),(129,18,'Levadura Fermentis Cerveza SAFALE™ K97 - 11gr',210.00,10,'Levadura tipo Ale alemana seleccionada por su capacidad de formar una capa superficial de espuma muy firme y espesa durante la fermentación. Es apta para producir ales con baja concentración de ésteres y puede ser utilizada para cervezas de trigo tipo bel','imagen-1596802222119.jpg',NULL,11,2,NULL,NULL),(130,18,'PACK de 10 Unidades Levadura Fermentis Cerveza SAFALE S05 - 11 Gramos',2100.00,5,'Una levadura adecuada para las cervezas de estilo americano. Con baja concentración de diacetilo y un \r\npaladar final limpio, fresco y vivaz.\r\n\r\nDosis: un sobre para 10 litros (80 - 130 gramos para 100 litros)\r\n\r\nEstilos de cervezas: american pale ale, am','imagen-1596802289615.jpg',NULL,12,2,NULL,NULL),(131,18,'Levadura Fermentis Cerveza SAFALE™ S05 - 11gr',230.00,5,'Una levadura adecuada para las cervezas de estilo americano. Con baja concentración de diacetilo y un\r\npaladar final limpio, fresco y vivaz.\r\nDosis: un sobre para 10 litros (80 - 130 gramos para 100 litros)\r\n\r\nEstilos de cervezas: american pale ale, ameri','imagen-1596802553171.jpg',NULL,50,2,NULL,NULL),(132,18,'Budweiser',88.00,10,'Budweiser beer is a medium-bodied, American-style lager beer. Brewed with high quality barley malt, a blend of premium hop varieties, fresh rice and filtered water, this American beer is crisp and full of flavor. Budweiser beer has 5% ABV and contains 145','imagen-1596802953823.jpg',NULL,200,1,NULL,NULL),(133,18,'New Belgium Fat Tire Amber Ale',123.00,10,'Fat Tire Amber is the easy-drinking Amber Ale born in Colorado from New Belgium Brewing Company, a certified B-Corp.','imagen-1596803001068.jpg',NULL,33,1,NULL,NULL),(134,18,'Guinness Draught',140.00,5,'Guinness has a sweet aroma redolent of roasted malts, faint caramel and light smoke. The roasted character comes through fully on the palate and accompanies notes of coffee, chocolate and mild smoke. Although remaining light in body, Guinness has a creamy','imagen-1596803057361.jpg',NULL,20,1,NULL,NULL),(135,18,'Carlsberg Elephant Strong',130.00,5,'Did we choose the name Carlsberg Elephant Strong to honour the statues that guard our brewery gates, or because it\'s a beer you\'ll remember forever? Pale gold in colour, Carlsberg Elephant Strong is a beer rich in malty character, with a hint of caramel, ','imagen-1596803312477.jpg',NULL,11,1,NULL,NULL),(136,18,'Karbach Brewing Co. Love Street',120.00,10,'In the 1960\'s on Allen\'s Landing sat Love Street; a hot spot of music and social impact. The venue hosted eclectic characters ranging from open mic\'ers to the Lizard King himself. Love Street was not only a place, but a state of mind. A place to unwind an','imagen-1596803563345.jpg',NULL,111,1,NULL,NULL),(137,18,'Real Ale Sampler Pack',880.00,5,'Pack de 6 porrones de rica cerveza Ale','imagen-1596803655703.jpg',NULL,10,1,NULL,NULL),(138,18,'Live Oak Pilz',120.00,11,'una lata que no dice mucho y una cerveza tipo pilzen rica.','imagen-1596803725516.jpg',NULL,33,1,NULL,NULL),(139,18,'Karbach Brewing Co. Hopadillo IPA',130.00,12,'He lurks in the shadows, waiting in bold anticipation. He\'s surprisingly bitter. Bitter about something. Legend has it that he feasts on those with fresh hops coursing through their veins. This dry-hopped, Texas IPA has a flavor as defiant as the Hopadill','imagen-1596803780476.jpg',NULL,87,1,NULL,NULL),(140,18,'Seattle Cider Basil Mint',87.00,5,'No creo que sea cerveza, me parece una especie de cidra en lata, que viene saborizada y gasificada!','imagen-1596803889792.jpg',NULL,15,1,NULL,NULL),(141,18,'Victory Brewing Sour Monkey',149.00,5,'Fruity notes from imported Belgian yeast swirl through a precise souring. Pucker up to a bite of citrus laden tang ending with a delectable experience.','imagen-1596803963686.jpg',NULL,33,1,NULL,NULL),(142,16,'Cabezal de Limpieza G con John Guest 3/8 (TALOS)',550.00,8,'Un cosito para conectar un coso a la cosa!','imagen-1596815002459.jpg',NULL,10,2,NULL,NULL),(143,16,'Combo Party Pump + Canilla + Conector G TALOS',8900.00,10,'Party Pump con conector G y válvula de alivio.','imagen-1596826520690.jpg',NULL,5,2,NULL,NULL),(144,16,'Regulador Primario de CO2 Talos Manometro Cerveza',4200.00,10,'Regulador Primario de CO2 Talos Manometro Cerveza','imagen-1596826586090.jpg',NULL,10,2,NULL,NULL),(145,16,'Conector G para barril Cerveza Artesanal con válvula de alivio - TALOS',3100.00,10,'Conector G Talos, con válvula de alivio.\r\n\r\nINCLUYE JUEGO DE NIPLES DE SALIDA DE CERVEZA Y ENTRADA DE GAS','imagen-1596826670556.jpg',NULL,5,2,NULL,NULL),(146,16,'Combo Pilón tipo Cobra 3 vías + 3 Canilla doble acción - TALOS',20000.00,15,'Combo Pilón tipo Cobra 3 vías + 3 Canilla doble acción - TALOS','imagen-1596826720500.jpg',NULL,10,2,NULL,NULL),(147,16,'Canilla Doble Acción Talos Acero Inoxidable c/ Compensador y Shank 5\"',5350.00,10,'Canilla doble acción con compensador de espuma y Shank de 5\". Cuerpo de acero inoxidable 304.','imagen-1596828917714.jpg',NULL,10,2,NULL,NULL),(148,16,'Party Pump + Canilla - Kit Cerveza Talos - Acero Inoxidable',6200.00,10,'Party Pump + Canilla - Kit Cerveza Talos - Acero Inoxidable','imagen-1596828959005.jpg',NULL,50,2,NULL,NULL),(149,16,'Rinser - TALOS',2400.00,10,'Rinser por presión para lavar cockteleras ,vasos o enfriarlos cuerpo en bronce y todo el cabezal esta compuesto por acero inoxidable.','imagen-1596829002024.jpg',NULL,10,2,NULL,NULL),(150,16,'Regulador Secundario CO2 Talos Manómetro Cerveza',3400.00,10,'Regulador Secundario CO2 Talos Manómetro Cerveza','imagen-1596829053374.jpg',NULL,20,2,NULL,NULL),(151,16,'Acople rapido Valvula 3/8\" a 3/8\" - DM FIT - Cerveza Artesanal',580.00,10,'Válvula 3/8\" a 3/8\"\r\n-----------------------------------------------------------------------------------------------------------------------------\r\nRepresentantes de DM FIT para la región.\r\n\r\nUso Alimenticio / Agua\r\nLos productos se fabrican con materiale','imagen-1596829133974.jpg',NULL,10,2,NULL,NULL),(152,16,'Manguera atóxica rígida 3/8 para gas y líquido (Transparente) - DM FIT',100.00,10,'Manguera atóxica apta CO2 y alimento TRANSPARENTE\r\n\r\nPrecio por METRO','imagen-1596829193264.jpg',NULL,10,2,NULL,NULL),(153,16,'Manguera atóxica rígida 3/8 para gas y líquido - DM FIT',100.00,10,'Manguera atóxica apta CO2 y alimento\r\n\r\nPrecio por METRO','imagen-1596829226362.jpg',NULL,100,2,NULL,NULL),(154,16,'Canilla Doble Acción Talos c/ Compensador + Shank',3200.00,10,'Canilla Talos de doble acción con regulador y shank de 35mm. Material: latón\r\nIncluye juego de nipple.\r\n\r\nGarantía de Tienda Oficial incluida: 6 meses desde el momento de la compra.','imagen-1596829317970.jpg',NULL,20,2,NULL,NULL),(155,16,'Tecate',88.00,44,'A well balanced bright golden lager beer with a malt crisp flavor, low to medium bitterness that finishes clean.\r\n\r\nOriginating 60 years ago at the brewery in the town of Tecate in Baja California (Mexico), Tecate original was their first signature beer.','imagen-1596831061667.jpg',NULL,66,1,NULL,NULL),(156,16,'Heineken Non-Alcoholic 0.0',144.00,90,'Heineken 0.0 is twice brewed and fermented with Heineken\'s unique A-yeast from natural ingredients with gentle alcohol removal and blending to achieve a fruity flavor and slight malty notes.','imagen-1596831180162.jpg',NULL,3,1,NULL,NULL),(157,16,'Peroni Nastro Azzurro Pale Lager Beer',144.00,20,'Peroni Nastro Azzurro is an Italian lager beer. Crisp and refreshing with a subtle citrus aroma, this import beer has a 5.1% alcohol by volume. Light and clean like a pilsner beer, this is a crisp and refreshing European lager with a delicate balance of b','imagen-1596853448939.jpg',NULL,12,1,NULL,NULL),(158,16,'Dos Equis Lager',160.00,10,'Dos Equis Lager Especial is a crisp golden pilsner-style beer made from pure spring water and the choicest hops. With a balanced composition and a smooth, clean finish, it’s the party guest who is always invited and never overstays his welcome.','imagen-1596853574929.jpg',NULL,21,1,NULL,NULL),(159,16,'Heineken Lager',123.00,41,'Heineken is a full-bodied premium lager with deep golden color, light fruity aroma, a mild bitter taste and a balanced hop aroma leaving a crisp, clean finish for ultimate refreshing taste.','imagen-1596853610886.jpg',NULL,122,1,NULL,NULL),(160,16,'Lone Star Lager',90.00,5,'Lone Star Beer uses the finest hops from the Pacific Northwest with hearty grains from the Central and Northern Plains. Malted barley and corn extract combine to provide Lone Star with nature\'s finest ingredients for brewing. Lone Star\'s ingredients give ','imagen-1596853657284.jpg',NULL,34,1,NULL,NULL),(161,16,'Pilsner Urquell Beer',170.00,1,'Excellent choice for craft beer and import beer drinkers looking for an authentic, easy-drinking beer. The light beer is perfect for any occasion, such as sporting events, daytime adult beverage activities, warm weather sessionabilty, barbeques, and food ','imagen-1596853728028.jpg',NULL,4,1,NULL,NULL),(162,16,'Bitburger Premium Pils',120.00,1,'The classic Bitburger - a mature and most agreeable beer - is brewed with the best of ingredients in the same traditional way it has been for many, many years. The result is delicately tart and pleasantly bitter - with a strong hop taste.','imagen-1596853785745.jpg',NULL,233,1,NULL,NULL),(163,17,'Beck\'s',125.00,10,'Tasting Notes: Golden-coloured German premium beer with wonderful floral and fruity European noble hop aromas. The taste is sweet and soft balanced with a clean, dry hop finish.\r\n\r\n','imagen-1596853929452.jpg',NULL,200,1,NULL,NULL),(164,17,'Victoria',166.00,11,'Victoria Mexican Beer is a delicious, easy-drinking Vienna style lager from Mexico\'s oldest beer brand. Perfect to enjoy on its own, while watching game or reminiscing with friends,','imagen-1596853979980.jpg',NULL,10,1,NULL,NULL),(165,17,'Corona Familiar',188.00,10,'Rooted in authentic, rich heritage, Corona Familiar Lager Beer is a bright, golden-colored pilsner that is balanced with moderate bitterness and a light finish.','imagen-1596854027649.jpg',NULL,111,1,NULL,NULL),(166,17,'Modelo Especial Chelada',155.00,10,'Modelo Chelada Especial Mexican Beer blends the classic ingredients of tomato, salt and lime with the taste of an authentic Mexican cerveza for a delicious, well-balanced result.','imagen-1596854070971.jpg',NULL,110,1,NULL,NULL),(167,17,'Modelo Negra',230.00,5,'Modelo Negra Mexican Beer, the original Modelo, is a Munich Dunkel-style dark lager with rich flavor and a remarkably smooth taste.','imagen-1596854111110.jpg',NULL,10,1,NULL,NULL),(168,17,'Pacifico Clara',123.00,1,'Pacifico beer was made for those with an Independent Spirit. Discover responsibly. Pacifico Clara Beer. Imported by Crown Imports, Chicago, IL','imagen-1596854148024.jpg',NULL,44,1,NULL,NULL),(169,17,'Corona Light',123.00,4,'Corona Light Mexican Lager Beer makes every day the lightest day with its uniquely refreshing flavor at 99 calories* per serving.','imagen-1596854184006.jpg',NULL,33,1,NULL,NULL),(170,17,'Modelo Especial',150.00,10,'A model of what good beer should be, Modelo Especial Mexican Beer is a rich, full-flavored pilsner beer. ','imagen-1596896358120.jpg',NULL,55,1,NULL,NULL),(171,17,'Antares - Curso de Fabricacion de Cervezas',8500.00,5,'Un curso sin mas algo mas sencillo que fullStack','imagen-1596897230547.jpg',NULL,10,3,NULL,NULL),(172,17,'Curso De Elaboración De Cerveza En Casa Artesanal Recetas',12000.00,1,'Curso de elavoración de cervezas artesanales','imagen-1596897330046.jpg',NULL,5,3,NULL,NULL),(173,17,'Barril Heineken 5 Lts',4500.00,5,'Cerveza Heineken tipo Pilsen, un rubia que se consume fresca!','imagen-1596897634581.jpg',NULL,10,1,NULL,NULL),(174,17,'Barril Heineken 10 Lts',8400.00,10,'Más cerveza para mi solo!!!','imagen-1596897704646.jpg',NULL,5,1,NULL,NULL),(175,17,'Curso De Elaboración De Cerveza',6500.00,10,'Casi que se hace sola, calentas agua, pones los fideos.. ahh no eso es otra cosa :P','imagen-1596897812626.jpg',NULL,22,3,NULL,NULL),(176,17,'Aprende a Tomar Cerveza!',6500.00,10,'Un curso intensivo que te lleva al coma alcoholico!','imagen-1596898011926.jpg',NULL,200,3,NULL,NULL),(177,17,'Colombia en tu copa',6320.00,10,'Un curso que te exporta a las raíces tropicales del lúpulo frutado, todo con un aroma a café!','imagen-1596898144913.jpg',NULL,50,3,NULL,NULL),(178,17,'beerBeer',2400.00,11,'beerbeerbeerbeerbeerbeerbeerbeerbeerbeer','imagen-1596898224621.jpg',NULL,120,3,NULL,NULL),(179,17,'Método Cervecero EXPRESS',650.00,10,'Método Cervecero EXPRESS, con la participación especial del payaso chinchulin!','imagen-1596898322100.jpg',NULL,10,3,NULL,NULL),(180,17,'Pinta Crafta - Curso de Buena Cerveza',6500.00,10,'En Pinta Crafta, aprendes o aprendes. Nada de \"ayy... no me sale\", SALE!','imagen-1596898435123.jpg',NULL,100,3,NULL,NULL),(181,17,'Curso De Elaboración De Cerveza En Casa Artesanal Recetas',12333.00,2,'Un curso elaborado por los mejores y mas reconocidos Cerveceros.','imagen-1596898592524.jpg',NULL,33,3,NULL,NULL);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comprasId` int(11) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `id_direccion` varchar(255) DEFAULT NULL,
  `password` varchar(60) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` datetime NOT NULL,
  `create_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarios_fk` (`comprasId`),
  CONSTRAINT `usuarios_fk` FOREIGN KEY (`comprasId`) REFERENCES `compras` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (16,NULL,'diego','Ratti','diego@ratti.com',NULL,'$2b$10$n8Dpa0b51EB3TXMaJxakpeMsLfkxy8VY3yqJIXbvl6JoBL7P.s69i','avatar-1596761287699.jpg','1976-10-25 00:00:00',NULL,NULL),(17,NULL,'Franco','Martin','franco@martin.com',NULL,'$2b$10$f7LkjIvGRKJhXB60nXiNdeBuXdViqbDn.XFrMdYkQFAKro3RZp0PW','avatar-1596761433564.jpg','1993-03-09 00:00:00',NULL,NULL),(18,NULL,'Javier','Solari Paz','javier@solaripaz.com',NULL,'$2b$10$SOTNtitB0YMLxcRifh231Or0mUC1OBNmXogNf7b2MOABS1QaZM3ke','avatar-1596797911539.jpg','1982-06-24 00:00:00',NULL,NULL),(19,NULL,'Cosme','Fulanito','cosme@fulanito.com',NULL,'$2b$10$8N1A6mbglSk67yOaVfzDTuVdlulGmv.OGTysbj4bAXpSsRIvyTexa','avatar-1596919340278.jpg','1982-10-10 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-08 18:05:38
