INSERT INTO canillalibre.usuarios (comprasId,nombre,apellido,email,id_direccion,password,avatar,fecha_nacimiento,create_at,update_at) VALUES 
(NULL,'Cosme','Fulanito','cosme@fulanito.com',NULL,'$2b$10$73lsooLHcQGx0D6DOS4sKe623g.uY7QNbMwB6Id43of7qFez2/3xG','avatar-1596751032796.jpg',NULL,NULL,NULL)
,(NULL,'Peter','Parker','spiderman@avenger.com',NULL,'$2b$10$09ixHvKCvIqaAzXB1CuSZO8kvQzXE0tT0MeGjtWIRJ7ozyE.xL.Wy','avatar-1596751071907.gif',NULL,NULL,NULL)
,(NULL,'Javier','Solari Paz','zapiralos@gmail.com',NULL,'$2b$10$v1phRiNvgb1RvItFBILRHuxoiSo9qdu86gbHyfyFktjklNG10MKMm','avatar-1596750986090.jpg',NULL,NULL,NULL)
,(NULL,'Homer','Simpson','homer@simpson.com',NULL,'$2b$10$aBPJQQRzDHjrw/CQnQ8ENeJZhB6kYktg0BO0a4Lv2xBUG3dEjnUOO','avatar-1596751110094.jpg',NULL,NULL,NULL)
;

INSERT INTO canillalibre.producto (usuarioId,nombre,precioUnitario,descuento,descripcion,imagen,rating,stock,tipoproducto,create_at,update_at) VALUES 
(9,'Elaboración De Cerveza',1232.00,10,'Nada loco, solo un par de instrucciones para cocinar metanfetamina en una casa rodante.','imagen-1595531329002.jpg',NULL,3,3,NULL,NULL)
,(13,'Cebada Tostada',152.00,10,'Una cebada de primera calidad, aunque hay otros que las venden mejores. Está pega más!','imagen-1596655872891.jpg',NULL,10,2,NULL,NULL)
,(13,'Lúpulo con Acento',220.00,90,'El acento va en la primera U, aunque si lo intentas pronunciar en la segunda movés el cuello','imagen-1596655893216.jpg',NULL,100,2,NULL,NULL)
,(9,'Hace tu cerveza capo!',350.00,10,'Una buena cerveza hecha en casa!','imagen-1596667310606.jpg',NULL,10,3,NULL,NULL)
;

INSERT INTO canillalibre.producto (usuarioId,nombre,precioUnitario,descuento,descripcion,imagen,rating,stock,tipoproducto,create_at,update_at) VALUES 
(9,'Barril Heineken 5 Lts',3255.00,1,'alto chop de cerveza heineken, lo mas de lo mas.','imagen-1595455589719.jpg',NULL,10,1,NULL,NULL)
,(11,'Lupulo Cascade Nacional',23.00,3,'un lúpulo, no sabes lo q es un lúpulo, veni q te enseño! ','imagen-1595531491651.jpg',NULL,44,2,NULL,NULL)
,(13,'Budweiser',95.00,10,'Budweiser beer is a medium-bodied, American-style lager beer. Brewed with high quality barley malt, a blend of premium hop varieties, fresh rice and filtered water, this American beer is crisp and full of flavor. Budweiser beer has 5% ABV and contains 145','imagen-1595455869853.jpg',NULL,50,1,NULL,NULL)
,(13,'Ballast Point Grapefruit',23.00,5,'Ballast Point Grapefruit Sculpin IPA pours a deep golden orange with a moderate white head. Aroma is bitter grapefruit and lemon zest. Taste is bitter grapefruit, slightly dank, dry as a desert and some white wine. The hops are there but that bitter grape','imagen-1595455892033.jpg',NULL,44,1,NULL,NULL)
,(13,'Karbach Brewing Co.',66.00,20,'He lurks in the shadows, waiting in bold anticipation. He''s surprisingly bitter. Bitter about something. Legend has it that he feasts on those with fresh hops coursing through their veins. This dry-hopped, Texas IPA has a flavor as defiant as the Hopadill','imagen-1595456010512.jpg',NULL,44,1,NULL,NULL)
,(13,'Karbach Love Street',120.00,10,'In the 1960''s on Allen''s Landing sat Love Street; a hot spot of music and social impact. The venue hosted eclectic characters ranging from open mic''ers to the Lizard King himself. Love Street was not only a place, but a state of mind. A place to unwind an','imagen-1595456030909.jpg',NULL,22,1,NULL,NULL)
,(13,'Live Oak Pilz',33.00,1,'Ni idea una lata vacia que encontre en una coleccion de los 90','imagen-1595455972560.jpg',NULL,1,1,NULL,NULL)
,(13,'Real Ale Mix',881.00,1,'Sure to delight every birthday celebrant, this case is packed with ales from up and down the land. Two bottles of each ensures there''s enough to share with family and friends at the party. The perfect birthday present! All our mixed cases can be customise','imagen-1595455939672.jpg',NULL,1,1,NULL,NULL)
,(9,'Cebada Tostada - Cerveza',250.00,10,'Una cebada, cebada, pero muy cebada','imagen-1595531274607.jpg',NULL,10,2,NULL,NULL)
,(9,'Cebada Tostada',123.00,10,'La misma cebada de siempre, solo que me la olvide arriba d la estufa','imagen-1595531295157.jpg',NULL,33,2,NULL,NULL)
;

INSERT INTO canillalibre.insumos (productoId,envio,create_at,update_at,origen,marca) VALUES 
(94,0,NULL,NULL,'nacional','')
,(108,0,NULL,NULL,'nacional','Duff')
,(109,0,NULL,NULL,'nacional','Quakeros')
,(114,0,NULL,NULL,'nacional','Cerealera de Palermo')
,(115,0,NULL,NULL,'nacional','')
;

INSERT INTO canillalibre.cursos (productoId,disertante,medioId,create_at,update_at) VALUES 
(110,'Heisenberg',1,NULL,NULL)
,(116,'Piñon Fijo',1,NULL,NULL)
;

INSERT INTO canillalibre.bebidas (productoId,Marca,envio,ibu,alcohol,presentacionId,create_at,update_at) VALUES 
(87,'Heinekenn',0,3,5.0,32,NULL,NULL)
,(102,'Budweiser',0,3,4.0,29,NULL,NULL)
,(103,'Quilmes',NULL,4,5.0,29,NULL,NULL)
,(104,'Karbach',NULL,3,7.0,27,NULL,NULL)
,(105,'Karbach',NULL,4,5.0,28,NULL,NULL)
,(106,'Live Oak Pilz',NULL,4,6.0,26,NULL,NULL)
,(107,'Real Ale',NULL,2,5.0,29,NULL,NULL)
;