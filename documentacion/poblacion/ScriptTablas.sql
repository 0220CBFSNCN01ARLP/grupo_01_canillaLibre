DROP DATABASE IF EXISTS canillalibre;
CREATE DATABASE canillalibre ;
USE canillalibre;

-- canillalibre.compras definition

CREATE TABLE `compras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fechaCompra` datetime DEFAULT NULL,
  `precioTotal` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- canillalibre.medio definition

CREATE TABLE `medio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- canillalibre.presentacion definition

CREATE TABLE `presentacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `capacidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4;

-- canillalibre.usuarios definition

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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- canillalibre.producto definition

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
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4;

-- canillalibre.bebidas definition

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
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;

-- canillalibre.comprasproductos definition

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

-- canillalibre.cursos definition

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
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;

-- canillalibre.insumos definition

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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

-- canillalibre.direccion definition

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