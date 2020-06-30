USE canillalibre;
​
​
-- insumos -- 
INSERT INTO canillalibre.insumos
(productoId, descuento, envio, create_at, update_at)
VALUES(NULL, NULL, 10, NULL, NULL);
​
​
-- cursos -- 
INSERT INTO canillalibre.cursos
(productoId, disertante, medioId, create_at, update_at)
VALUES(NULL, 'Curso Brew MAster - Jhon Q', NULL, NULL, NULL);
​
-- direccion -- 
INSERT INTO canillalibre.direccion
(usuarioId, direccion, ciudad, pais, cp, enviosId, create_at, update_at)
VALUES(NULL, '1', 'La Plata ', 'Argentina', NULL, NULL, NULL, NULL);
​
​
​
-- bebidas -- 
INSERT INTO canillalibre.bebidas
(productoId, Marca, descuento, envio, ibu, alcohol, presentacionId, create_at, update_at)
VALUES(NULL, 'Heineken', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
​
​
-- producto --
INSERT INTO canillalibre.producto
(usuarioId, nombre, precioUnitario, descuento, descripcion, imagen, rating, stock, create_at, update_at)
VALUES(NULL, 'Heineken', 200, NULL, NULL, NULL, NULL, 0, NULL, NULL);
​
​
-- usuarios --
INSERT INTO canillalibre.usuarios
(comprasId, nombre, apellido, email, id_direccion, password, avatar, fecha_nacimiento, create_at, update_at)
VALUES(NULL, 'Juan', 'Garcia', 'juan@gmail.com', NULL, '123456', NULL, '1977-11-12 00:00:00.0', NULL, NULL);
​
​
-- presentacion--
insert into canillalibre.presentacion (nombre, capacidad) values ('BOTELLA', 330);
insert into canillalibre.presentacion (nombre, capacidad) values ('BOTELLA', 355);
insert into canillalibre.presentacion (nombre, capacidad) values ('BOTELLA', 473);
insert into canillalibre.presentacion (nombre, capacidad) values ('BOTELLA', 710);
insert into canillalibre.presentacion (nombre, capacidad) values ('BOTELLA', 1000);
insert into canillalibre.presentacion (nombre, capacidad) values ('LATA', 330);
insert into canillalibre.presentacion (nombre, capacidad) values ('LATA', 473);
insert into canillalibre.presentacion (nombre, capacidad) values ('LATA', 710);
insert into canillalibre.presentacion (nombre, capacidad) values ('BARRIL', 5);
insert into canillalibre.presentacion (nombre, capacidad) values ('BARRIL', 20);
insert into canillalibre.presentacion (nombre, capacidad) values ('BARRIL', 30);
insert into canillalibre.presentacion (nombre, capacidad) values ('BARRIL', 50);
insert into canillalibre.presentacion (nombre, capacidad) values ('PACK X 6', 330);
insert into canillalibre.presentacion (nombre, capacidad) values ('PACK X 6', 473);
insert into canillalibre.presentacion (nombre, capacidad) values ('PACK X 6', 700);