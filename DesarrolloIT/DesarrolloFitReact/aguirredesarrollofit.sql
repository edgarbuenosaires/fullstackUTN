-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-11-2021 a las 19:12:11
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `aguirredesarrollofit`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `meals`
--

DROP TABLE IF EXISTS `meals`;
CREATE TABLE IF NOT EXISTS `meals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plato` varchar(250) NOT NULL,
  `preparacion` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `meals`
--

INSERT INTO `meals` (`id`, `plato`, `preparacion`, `cuerpo`, `img_id`) VALUES
(14, 'Milanesa de soja con tomate y arroz', 'Meal rico en energía y sabor.', 'Ingredientes:\r\n- Carbohidratos: Arroz Yamani, milanesa de soja.\r\n- Proteínas: queso, milanesa de soja.\r\n- Vegetales: tomate, cebolla, morrón, verdeo.\r\n', 'pqlcbwuus52s6iejj9up'),
(15, 'Ensalada de palta, huevo y tomates', 'Ensalada fresca, con alta cantidad de grasas saludables.', 'Ingredientes:\r\n- Brócoli.\r\n- Tomates cherry.\r\n- Aceitunas\r\n- Cebolla.\r\n- Palta.\r\n- Huevo.\r\n- Pasta integral.', 'jmcvfrmbopwsdbatxqyb'),
(12, 'Huevos a la plancha con verduras', 'Preparación de verduras, con arroz y huevos a la plancha en sus justas proporciones', 'Ingredientes:\r\n-1/2 de plato de vegetales: salteado de zanahoria, zuccini, morrón rojo, morrón verde y tomate\r\n-1/4 de plato de carbohidratos: arroz Yasmani\r\n-1/4 de plato de proteína: 2 huevos a la plancha\r\n- Porción de grasa saludable: yema de huevo\r\n', 'et32feaiiasdnz5q4zlo'),
(13, 'Huevos con verduras gratinadas y fideos.', 'En esta meal tenemos:\r\n1/2 plato de berenjena, morrón, cebolla, puerro bien cocidos hecho \"pure\".\r\n1/4 plato de pasta integral\r\n1/4 plato de huevo, que es proteína + grasa saludable (por la yema)\r\n', 'Ingredientes:\r\n-	1/2 plato de vegetales crudos o cocidos\r\n-	1/4 de carbohidratos\r\n-	1/4 de proteínas\r\n-	+ grasa saludable', 'hjd6dml0mrvb7nq3zsba'),
(16, 'Ricas hamburguesas convinadas', 'Muy ricas estas hamburguesas de carne, acompañadas de arroz y ensalada.', 'Ingredientes:\r\n- Para hacerlas cocine 1/2 cebolla, 1/4 de morrón rojo y 1 diente de ajo. Una vez cocido lo deje enfriar.\r\n- Puse en un bowl, 1 huevo, 1 cdita de pimenton, 1 cdita de comino, 1 pizca de pimienta, 2 cditas de sal. Bati.\r\n- Después en el mismo bowl donde esta el huevo con los condimentos agregue las verduritas que ya tenia cocidas y 800 gr de carne picada (yo le pedí al carnicero que me pique paleta). \r\n- Con la mano mezcle (mas bien amase) todos los ingredientes durante unos 5 minutos para que quede todo integrado.\r\n- Hice 12 bolitas iguales. Y después puse todas las bolitas sobre folios y les di la forma. Las lleve al frizzer 15 minutos.\r\nY después las cocine en la plancha\r\n', 'leebyvkyugb4p1meh7it'),
(17, 'Fideos con verduras', 'Preparación con pasta integral.', 'Ingredientes:\r\n- Herví 50 gr de pasta integral (pesado en crudo) y le agregué 50 gr de lentejas ya cocidas condimente con sal y aceite de oliva. también rehogue media cebolla, 1/3 de morrón rojo y 1/2 atado de acelga condimentado con mucho ají picante\r\n', 'c15trvyctazoz6j4vpyy'),
(18, 'Ensalada fresca', 'Super recomendable para verano.', 'Ingredientes:\r\n- Lechuga\r\n- Zanahoria\r\n- Repollo\r\n- Cebolla morada\r\n- Tomates Cherry\r\n- Choclo\r\n- Huevo\r\n- Aceitunas\r\n- Condimentado con limón y sal\r\n', 'gwsg3jysfxpn9llxv3kl'),
(19, 'Tortilla con ensalada', 'Para los fans de la tortilla.', 'Ingredientes:\r\n-1/2 tortilla de papa, zanahoria, cebolla y morrón.\r\n- Le puse un huevo y 2 claras, el resto de los ingredientes todo a ojo.\r\n- Lechuga y tomate ', 'ewtcoicxjverigpe76ed');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'edgardo', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
