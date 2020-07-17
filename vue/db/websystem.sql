-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        8.0.15 - MySQL Community Server - GPL
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 websystem 的数据库结构
CREATE DATABASE IF NOT EXISTS `websystem` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `websystem`;


-- 导出  表 websystem.doc_list 结构
CREATE TABLE IF NOT EXISTS `doc_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '存储ID',
  `select_id` varchar(36) DEFAULT NULL COMMENT '查询ID',
  `projectid` varchar(36) DEFAULT NULL COMMENT '归属项目ID',
  `detail` text COMMENT '详细json内容',
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `isEnabled` tinyint(1) DEFAULT '1' COMMENT '是否启用',
  `activityUrl` text COMMENT '活动URL',
  `docTitle` varchar(50) DEFAULT NULL COMMENT '文案标题',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='文案管理表';

-- 正在导出表  websystem.doc_list 的数据：~19 rows (大约)
DELETE FROM `doc_list`;
/*!40000 ALTER TABLE `doc_list` DISABLE KEYS */;
INSERT INTO `doc_list` (`id`, `select_id`, `projectid`, `detail`, `createTime`, `updateTime`, `isEnabled`, `activityUrl`, `docTitle`) VALUES
	(1, '3d8e8079-b59a-4326-869c-e26c1323c8ae', '1', '[{"value":"2020-4-14","hintImg":"15863325752429e203045-72e0-42da-8dc2-90de7e230329.jpg"},{"value":"4.14","hintImg":"158633258501884ff259d-c99f-418a-b63e-3eea1132517a.jpg"},{"value":"众志成城","hintImg":"1586332595027789e5c51-6fba-4a38-af0b-ce093db7794c.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"15863326078072e55a5bb-2ef8-4d59-8b09-50a92f4a5976.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"158633263075535585f88-f2ad-4162-82dd-9dee714c4b6a.jpg"},{"value":"3月20-3月21","hintImg":"15863326469801dde5668-366b-47b7-808c-c849ea34ac50.jpg"},{"value":"3月22-2月23日","hintImg":"15863326593799c34aa28-cac7-4d1e-801a-30b9c650dbfb.jpg"},{"value":"3月24日","hintImg":"15863326702125729c91b-4140-4490-8b01-ef57bb9c6c62.jpg"},{"value":"3月30日","hintImg":"15863326870434288fab4-6d7f-4077-bf9f-c0ae1c9f9b02.jpg"},{"value":"3月20日10:00--3月24日 24:00","hintImg":"158633270420528f3c7b8-0746-4b1c-9d5e-106f535c5051.jpg"},{"value":"3月20日--3月25日","hintImg":"1586332740948474930ec-5ed3-467d-a455-4fe2aaf80b6a.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"1586332753574ad3bf4a0-f1d5-4192-9b32-4e9b8cb293a3.jpg"},{"value":"ggws0324","hintImg":"1586332770102253b9dfe-d48b-4fce-bd3a-c4b77391fc1b.jpg"}]', '2020-04-03 18:13:09', '2020-04-13 18:15:13', 1, 'http://gg.yr.dev.q1.com/test.html', '新服预约'),
	(2, 'fda840b9-261a-4e1a-8032-b23cbccb5f79', '1', '[{"value":"文案内容","hintImg":"158632843027989b6cb63-593a-4c0b-bd57-ea729d47803c.png"}]', '2020-04-03 18:17:53', '2020-04-08 14:47:12', 1, 'http://gg.q1.com/huodong/czhl.html', '每日充值'),
	(3, 'e403feac-a56f-49b4-80f9-14453ecd4f50', '1', '""', '2020-04-03 18:21:07', '2020-04-08 17:47:26', 1, 'asdfsadf', '测试1'),
	(4, 'd22a200a-d38b-4d65-aae5-b26a7b410b44', '1', NULL, '2020-04-03 18:51:37', '2020-04-03 18:51:37', 1, 'q1.com', '测试测试'),
	(5, '6e062086-dd4e-439b-8e93-2ec6eecacb50', '1', NULL, '2020-04-04 02:58:10', '2020-04-04 02:58:10', 1, 'yz.q1.com', 'test'),
	(8, '0f82efc5-0633-4367-a99b-1815e1aaa175', '1', NULL, '2020-04-07 10:59:45', '2020-04-07 10:59:45', 1, 'saf', 'test2'),
	(9, 'e6346de6-670f-49cb-b1f2-3b3defc2c41b', '1', NULL, '2020-04-07 10:59:53', '2020-04-07 10:59:53', 1, 'sfasf', 'test3'),
	(10, 'ed9653d5-fa23-46b3-9db5-a40bca51eaed', '1', NULL, '2020-04-07 11:05:53', '2020-04-07 11:05:53', 1, 'asdf', 'test4'),
	(11, '7e635360-6912-48ce-ab0e-436ba9ea8f5d', '1', NULL, '2020-04-07 11:06:18', '2020-04-07 11:06:18', 1, 'asfw', 'test5'),
	(12, 'e4ae297d-4bef-46f7-a70f-ffb3da0db06e', '1', NULL, '2020-04-07 11:07:49', '2020-04-07 11:07:49', 1, 'sadfw', 'test6'),
	(13, 'd19c98c3-96b7-4b87-b4c4-4be566d963a0', '1', NULL, '2020-04-07 11:07:55', '2020-04-07 11:07:55', 1, 'sadfw', 'test7'),
	(14, 'b8c6ca3a-1781-4986-b633-b85827c6b90a', '1', NULL, '2020-04-07 11:21:55', '2020-04-07 11:21:55', 1, 'a', 'test8'),
	(15, '1faeefd1-fba0-424c-893b-caedb6fecac5', '1', NULL, '2020-04-07 11:23:34', '2020-04-07 11:23:34', 1, 'dfsadf', 'test9'),
	(16, 'fb475e2f-fd1d-4efc-91f9-7896a6335609', '1', NULL, '2020-04-07 11:23:37', '2020-04-07 11:23:37', 1, 'dfsadf', 'test10'),
	(17, '123b902e-8676-4f31-9488-c879c04c38a6', '1', NULL, '2020-04-07 11:23:40', '2020-04-07 11:23:40', 1, 'dfsadf', 'test11'),
	(18, 'bdf05761-a08a-45b4-b9f4-51adea3c41b2', '1', NULL, '2020-04-07 11:23:43', '2020-04-09 11:01:47', 1, 'dfsadf', 'test12'),
	(19, '5ebd0cf6-903c-4d57-89e4-a7d47e2dbf48', '1', NULL, '2020-04-07 11:23:45', '2020-04-09 11:01:47', 1, 'dfsadf', 'test13'),
	(22, '626ed40f-dbd4-4572-85c5-066e3435cd66', '1', NULL, '2020-04-07 17:49:33', '2020-04-14 15:09:46', 1, 'asdf', 'test14'),
	(23, '085dd604-e56a-4d75-82ff-fc807f550260', '1', NULL, '2020-04-07 18:08:35', '2020-04-14 17:37:47', 0, 'asdf', 'test15');
/*!40000 ALTER TABLE `doc_list` ENABLE KEYS */;


-- 导出  表 websystem.projects 结构
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `project_id` varchar(50) DEFAULT '0' COMMENT '项目ID',
  `name` varchar(50) DEFAULT NULL COMMENT '游戏名称',
  `logo` varchar(200) DEFAULT NULL COMMENT '游戏logo图片URL',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='项目列表';

-- 正在导出表  websystem.projects 的数据：~5 rows (大约)
DELETE FROM `projects`;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` (`id`, `project_id`, `name`, `logo`) VALUES
	(1, '1', '鬼谷无双', NULL),
	(2, '2', '远征', NULL),
	(3, '3', '龙武', NULL),
	(4, '4', '不败传说', NULL),
	(5, '5', '影武者', NULL);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;


-- 导出  表 websystem.token_list 结构
CREATE TABLE IF NOT EXISTS `token_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(500) NOT NULL COMMENT 'token值',
  `user_name` varchar(50) NOT NULL COMMENT '用户名',
  `maxTime` datetime NOT NULL COMMENT '过期时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='存储token列表';

-- 正在导出表  websystem.token_list 的数据：~0 rows (大约)
DELETE FROM `token_list`;
/*!40000 ALTER TABLE `token_list` DISABLE KEYS */;
INSERT INTO `token_list` (`id`, `token`, `user_name`, `maxTime`) VALUES
	(81, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYWRtaW4xNTg2OTE0MTI1MTgyIiwiaWF0IjoxNTg2OTE0MTI1fQ.1d0RiKK6i_N_68W5ly1Bs23bA7L-jyoZydiwtS5Yf8E', 'admin', '2020-04-15 17:28:45');
/*!40000 ALTER TABLE `token_list` ENABLE KEYS */;


-- 导出  表 websystem.users 结构
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `userName` varchar(50) NOT NULL COMMENT '用户名',
  `name` varchar(50) NOT NULL COMMENT '中文名',
  `password` varchar(50) NOT NULL COMMENT '密码',
  `powers` mediumtext COMMENT '权限',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户列表';

-- 正在导出表  websystem.users 的数据：~2 rows (大约)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `userName`, `name`, `password`, `powers`, `createTime`) VALUES
	(1, 'admin', '超级管理员', 'abc123', NULL, '2020-03-25 17:06:03'),
	(2, 'yerong', '叶荣', 'abc123', NULL, '2020-03-27 15:07:22');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
