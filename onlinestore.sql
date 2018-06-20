-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2018 at 10:20 AM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlinestore`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
--

CREATE TABLE `tbl_products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(500) NOT NULL,
  `price` varchar(500) NOT NULL,
  `category` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`id`, `product_name`, `price`, `category`) VALUES
(1, 'Samsung Galaxy S7 Edge', '$600', 'Mobile Phone'),
(2, 'Google nexus', '$450', 'Mobile Phone'),
(3, 'Apple IPhone 6', '$630', 'Mobile Phone'),
(4, 'Sony Vio', '$1200', 'Laptop'),
(5, 'Samsung T.V', '$900', 'T.V'),
(6, 'Apple IPAD', '$710', 'Tablet'),
(7, 'MacBook Pro', '$1000', 'Laptop'),
(8, 'Dell Laptop', '$950', 'Laptop'),
(9, 'Canon EOS 700D DSLR Camera', '$550', 'Camera'),
(10, 'Nikon D7100 DSLR Camera ', '$670', 'Camera'),
(11, 'Nokia Lumia 930', '349', 'Mobile Phone'),
(12, 'HTC Phone', '123', 'Mobile Phone'),
(13, 'LG Monitor', '210', 'Electronics'),
(14, 'Samsung Printer', '120', 'Electronics'),
(15, 'Samsung Gear Live Black - Made for Android', '125', 'Smart Watch'),
(16, 'Apple Watch', '250', 'Smart Watch');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` char(41) NOT NULL,
  `email` varchar(80) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `name`, `password`, `email`, `created_at`) VALUES
(23, 'a', 'aaa', 'aa@gmail.com', '2017-11-23 16:26:38'),
(24, 'bb', 'bbbbbbbb', 'bbb@gmail.com', '2017-11-23 16:27:53'),
(26, 'cc', 'ccccc', 'ccc@gmail.com', '2017-11-23 16:29:33'),
(27, 'dd', 'ddddaa', 'dd@gmail.com', '2017-11-23 16:29:44'),
(28, 'eee', 'eee', 'eeee@gmail.com', '2017-11-23 16:29:58'),
(29, 'tin', 'tindf', 'tin@gmail.com', '2017-11-24 08:23:41'),
(30, 'tao', '124jijdfj`', 'tao@gmail.com', '2018-03-23 10:10:27'),
(31, 'teo', 'teteotoeto', 'teo@gmail.com', '2018-03-23 10:49:03'),
(32, 'tung', 'tung@2', 'tung@gmail.com', '2018-03-23 10:58:58'),
(33, 'dungmichale', 'tfhfhfg', 'michle@gmail.com', '2018-03-28 10:31:48'),
(35, 'dungmichale', '333333333', 'dung@gmail.com', '2018-03-28 10:32:56'),
(36, 'diensss', 'dsfadsfadsf', 'dfasdf@gmail.com', '2018-05-23 10:25:17'),
(37, 'tttt', 'ttttt', 'tttt@gmail.com', '2018-05-23 11:09:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
