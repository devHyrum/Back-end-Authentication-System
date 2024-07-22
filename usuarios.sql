-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22/07/2024 às 04:24
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `usuarios`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `email` varchar(300) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `photoUser` varchar(300) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `phoneNumber` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`usuario_id`, `nombre`, `email`, `password`, `photoUser`, `bio`, `phoneNumber`) VALUES
(1, 'Alejandro', 'Alejandro@example.com', 'Alejando1', 'https://example.com/photos/user1.jpg', 'Desarrollador de software con experiencia en múltiples tecnologías.', '123-456-7890'),
(2, 'Juan', 'Juan@example.com', 'Juan2', 'https://example.com/photos/user2.jpg', 'Especialista en marketing digital y estrategias de SEO.', '234-567-8901'),
(3, 'Gabriel', 'Gariel@axample.com', 'Gabriel3', 'https://example.com/photos/user3.jpg', 'Gerente de proyectos con amplia experiencia en gestión de equipos.', '345-678-9012'),
(4, 'Miguel', 'Miguel@example.com', 'Miguel4', 'https://example.com/photos/user4.jpg', 'Analista de datos con habilidades en análisis predictivo.', '456-789-0123'),
(5, 'Francisco', 'Francisco@example.com', 'Francisco5', 'https://example.com/photos/user5.jpg', 'Diseñador gráfico especializado en branding y diseño web.', '567-890-1234'),
(6, 'Jose', 'jose@example.com', '$2b$10$rr3YvFi3AzkUzOuMeg7Wp.fuihFqJuydRIkHpa8UQZABqFQs3QC5.', 'https://example.com/photos/user6.jpg', 'Consultor en tecnologías de la información y ciberseguridad.', '678-901-2345'),
(7, 'Hyrum Spencer', 'holivera0730@gmail.com', '$2b$10$vvaTJsu1KWmefbtF8nY8lOzKJHVjrI6HUVTSG60ivzRYn5ce4koKK', 'https://example.com/photos/user7.jpg', 'Profesor de español con amplia experiencia en la enseñanza de idiomas.', '789-012-3456'),
(8, 'Manuel Epifania', 'manuel123@gmail.com', '$2b$10$iovY8.H7Qk3vX1QcjVCU0OohdWZ.ob7eNygN7C.eSdBfpQSpF5fqS', '1721538417476-louis.jpg', 'Arquitecto, master, pro', '97846535'),
(9, 'Marta Angelica Grimes Epifania', 'marta123@gmail.com', '$2b$10$uwiN/xcJV2DfKZYzIoQLhuXwnR46Wihx5B4qZsbgZmjKPooC.7pgC', '1721540390202-zoey.jpg', 'Tejedora en las horas vagas. Tengo 25 horas a veces y solo a veces tengo 8 horas de sueño.\r\nEstudiante en biotecnología.\r\nPromotora del veganismo. \r\n+55 Brazil', '987654321'),
(10, 'Juanito Vargas Woods', 'juan123@gmail.com', '$2b$10$x7Vkk/rVeFVKwxWAh6yl.ef5Fhg1VVw3brCCRK5jc0biZASwOONxK', '1721587130007-francis.jpg', 'Freelancer de RH. Armador de lego. Cuidador de ancianos.', '98451631'),
(11, NULL, 'lima123@gmail.com', '$2b$10$3mKa1hQ9DuUv4iQ2tswcOuQkHuhjSbAAPLZva4nB3HJshkkT/jqc.', NULL, NULL, NULL),
(12, 'Victoria Neuman', 'victoria123@gmail.com', '$2b$10$PyyPgryq6pbf6tKOw5UwKu0b6C/sxSu9tK3Fy3m6QycSbo6YRn9sS', '1721609757954-neuman.png', 'CEO da Vought. Vice-presidente dos Estados Unidos', '180167134'),
(13, 'Alberto John David Washington', 'alberto123@gmail.com', '$2b$10$NK/taZEvi8n.RBm1bxaNwOZ8a6jNvG12pTXBQPU0B/7QK7Zc7T4QO', '1721613479210-protagonista.png', 'Agente da CIA. Misión Tenet', '180074634');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
