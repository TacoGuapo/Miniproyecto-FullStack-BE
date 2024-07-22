-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-07-2024 a las 08:21:07
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `registro_usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuarios` int(11) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `name` varchar(150) NOT NULL,
  `phone` int(150) NOT NULL,
  `info` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuarios`, `email`, `password`, `name`, `phone`, `info`) VALUES
(3, 'example2@example.com', 'example12345', 'Example 23', 987654321, 'Example numero 2'),
(4, 'test@example.com', '$2b$11$HvT1tDDhbsTQ5wTX.hbzd.QXxXqCuKE3Rbd2kF1HPcZ7Q9Jy8nzD.', 'John Doe', 1234567890, 'Some user info'),
(6, 'abc@hotmail.com', '$2b$11$N1TZAhYVi/N6O7qBtFqvJ.sIkQDTlXLRtdKCg2aO2cwvR1JsweqPy', '', 0, ''),
(7, 'karma.police190@hotmail.com', '$2b$11$0mKsAkIlYvTa3T062/.cLudZI/95v6ULj7nZKZW1sZoZVdTA0sEUq', '', 0, ''),
(23, 'example@hotmail.com', '$2b$11$QHXbOr/GM4Uejkp7cC.ixeHgzyGrBhrkq..C.WaS7/9tWxsUPjUE2', '', 0, ''),
(24, 'example4@hotmail.com', '$2b$11$skOa9AT2lNf/2fbYSeq4KuLTPGoQWaGGLzk5vaMEIwdp9CORwAQUG', '', 0, ''),
(25, 'example5@hotmail.com', '$2b$11$qtOYkRciC2zs9mhftQTOTOsSnxLeCBq6MTMTD1atvLI45.X3U1sUS', '', 0, ''),
(26, 'abcde@example.com', '$2b$11$jdGZxS.wUvh39Ci.nm4cQu/8c8fDPIc/xX/XWTsdQGZDY7MQT.0Kq', '', 0, ''),
(27, 'abcdef@example.com', '$2b$11$eQva/NzqjOSJWHvxWJJnL.E5LIP7gTD3PBuO23WkXXBDbctviIhtS', '', 0, ''),
(28, 'abcdefa@example.com', '$2b$11$xmJsVnMK7g.EvmBzVC/eROxZG9vR4U3aPwq44/2Nzb0QNXThMDDOW', '', 0, ''),
(29, 'hola@example.com', '$2b$11$uOFR4Uq77B0ZMCg5SlRI7..XE7NqhMKbP96AsuPcJVdmuBB000kv6', '', 0, ''),
(30, 'hola2@example.com', '$2b$11$YNvI7dU1ID0rJMCWx0QNM.79u3PGy0rVhb/fjOy694So1CS7yd7NO', '', 0, ''),
(31, 'hola3@example.com', '1234567891011', '', 0, ''),
(32, 'ambulez@hotmail.com', 'Abc@12421', '', 0, ''),
(33, 'ambulez2@hotmail.com', 'ambulez2', '', 0, ''),
(34, 'ambulez2@hotmail.com', 'ambulez2', '', 0, ''),
(35, 'ambulez3@hotmail.com', 'eldaiblo', '', 0, ''),
(36, 'ambulez4@hotmail.com', 'eldaiblo', '', 0, ''),
(37, 'Francos@hotmail.com', '$2b$11$BgTIiPnOMnL8nZfca0qdB.Xfc3FGwAceQHhK5YAsC5Hgjn3.HSKum', 'Nuevo Nombre', 123456789, 'Nueva información');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuarios`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
