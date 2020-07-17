-- --------------------------------------------------------
-- 主机:                           172.16.126.104
-- 服务器版本:                        5.7.24 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Linux
-- HeidiSQL 版本:                  9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 websystem 的数据库结构
CREATE DATABASE IF NOT EXISTS `websystem` /*!40100 DEFAULT CHARACTER SET utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COMMENT='文案管理表';

-- 正在导出表  websystem.doc_list 的数据：~28 rows (大约)
DELETE FROM `doc_list`;
/*!40000 ALTER TABLE `doc_list` DISABLE KEYS */;
INSERT INTO `doc_list` (`id`, `select_id`, `projectid`, `detail`, `createTime`, `updateTime`, `isEnabled`, `activityUrl`, `docTitle`) VALUES
	(1, '3d8e8079-b59a-4326-869c-e26c1323c8ae', '1', '[{"value":"2020-7-19","hintImg":"1594345938892f442d9be-4ffb-4c26-bf34-a6daa9831c47.jpg"},{"value":"4.14","hintImg":"158633258501884ff259d-c99f-418a-b63e-3eea1132517a.jpg"},{"value":"众志成城","hintImg":"1586332595027789e5c51-6fba-4a38-af0b-ce093db7794c.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"15863326078072e55a5bb-2ef8-4d59-8b09-50a92f4a5976.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"158633263075535585f88-f2ad-4162-82dd-9dee714c4b6a.jpg"},{"value":"3月20-3月21","hintImg":"15863326469801dde5668-366b-47b7-808c-c849ea34ac50.jpg"},{"value":"3月22-2月23日","hintImg":"15863326593799c34aa28-cac7-4d1e-801a-30b9c650dbfb.jpg"},{"value":"3月24日","hintImg":"15863326702125729c91b-4140-4490-8b01-ef57bb9c6c62.jpg"},{"value":"3月30日","hintImg":"15863326870434288fab4-6d7f-4077-bf9f-c0ae1c9f9b02.jpg"},{"value":"3月20日10:00--3月24日 24:00","hintImg":"158633270420528f3c7b8-0746-4b1c-9d5e-106f535c5051.jpg"},{"value":"3月20日--3月25日","hintImg":"1586332740948474930ec-5ed3-467d-a455-4fe2aaf80b6a.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"1586332753574ad3bf4a0-f1d5-4192-9b32-4e9b8cb293a3.jpg"},{"value":"ggws0324","hintImg":"1586332770102253b9dfe-d48b-4fce-bd3a-c4b77391fc1b.jpg"}]', '2020-04-03 18:13:09', '2020-07-17 10:11:42', 1, 'http://gg.yr.dev.q1.com/test.html', '新服预约'),
	(2, 'fda840b9-261a-4e1a-8032-b23cbccb5f79', '1', '[{"value":"sdfasfsadf123","hintImg":""},{"value":"d2313123","hintImg":""},{"value":"2342442","hintImg":""},{"value":"424","hintImg":""}]', '2020-04-03 18:17:53', '2020-07-13 03:59:53', 1, 'asfsadfsaf', '每日充值'),
	(3, 'e403feac-a56f-49b4-80f9-14453ecd4f50', '1', '[{"value":"23123","hintImg":""}]', '2020-04-03 18:21:07', '2020-07-09 09:34:02', 1, 'asdfsadf', '测试1'),
	(4, 'd22a200a-d38b-4d65-aae5-b26a7b410b44', '1', NULL, '2020-04-03 18:51:37', '2020-04-03 18:51:37', 1, 'q1.com', '测试测试'),
	(5, '6e062086-dd4e-439b-8e93-2ec6eecacb50', '1', NULL, '2020-04-04 02:58:10', '2020-04-04 02:58:10', 1, 'yz.q1.com', 'test'),
	(8, '0f82efc5-0633-4367-a99b-1815e1aaa175', '1', NULL, '2020-04-07 10:59:45', '2020-07-16 04:03:25', 0, 'test', 'test2'),
	(9, 'e6346de6-670f-49cb-b1f2-3b3defc2c41b', '1', NULL, '2020-04-07 10:59:53', '2020-07-07 09:15:28', 1, 'sfasf', 'q1.com'),
	(10, 'ed9653d5-fa23-46b3-9db5-a40bca51eaed', '1', NULL, '2020-04-07 11:05:53', '2020-04-07 11:05:53', 1, 'asdf', 'test4'),
	(11, '7e635360-6912-48ce-ab0e-436ba9ea8f5d', '1', NULL, '2020-04-07 11:06:18', '2020-04-07 11:06:18', 1, 'asfw', 'test5'),
	(12, 'e4ae297d-4bef-46f7-a70f-ffb3da0db06e', '1', NULL, '2020-04-07 11:07:49', '2020-04-15 15:53:49', 1, 'sadfw', 'test6'),
	(13, 'd19c98c3-96b7-4b87-b4c4-4be566d963a0', '1', NULL, '2020-04-07 11:07:55', '2020-04-07 11:07:55', 1, 'sadfw', 'test7'),
	(14, 'b8c6ca3a-1781-4986-b633-b85827c6b90a', '1', NULL, '2020-04-07 11:21:55', '2020-04-07 11:21:55', 1, 'a', 'test8'),
	(15, '1faeefd1-fba0-424c-893b-caedb6fecac5', '1', NULL, '2020-04-07 11:23:34', '2020-04-07 11:23:34', 1, 'dfsadf', 'test9'),
	(16, 'fb475e2f-fd1d-4efc-91f9-7896a6335609', '1', NULL, '2020-04-07 11:23:37', '2020-04-07 11:23:37', 1, 'dfsadf', 'test10'),
	(17, '123b902e-8676-4f31-9488-c879c04c38a6', '1', NULL, '2020-04-07 11:23:40', '2020-04-07 11:23:40', 1, 'dfsadf', 'test11'),
	(18, 'bdf05761-a08a-45b4-b9f4-51adea3c41b2', '1', NULL, '2020-04-07 11:23:43', '2020-04-09 11:01:47', 1, 'dfsadf', 'test12'),
	(19, '5ebd0cf6-903c-4d57-89e4-a7d47e2dbf48', '1', NULL, '2020-04-07 11:23:45', '2020-04-09 11:01:47', 1, 'dfsadf', 'test13'),
	(22, '626ed40f-dbd4-4572-85c5-066e3435cd66', '1', NULL, '2020-04-07 17:49:33', '2020-04-14 15:09:46', 1, 'asdf', 'test14'),
	(23, '085dd604-e56a-4d75-82ff-fc807f550260', '1', NULL, '2020-04-07 18:08:35', '2020-04-15 15:53:51', 1, 'asdf', 'test15'),
	(24, '219c2e27-7ab7-4a99-856c-5ecd4501a6f0', '1', NULL, '2020-07-08 06:23:41', '2020-07-14 02:54:46', 0, 'asdfsaf', 'test1'),
	(25, '31423258-e7ec-4e51-b820-9e7051b14c86', '1', NULL, '2020-07-08 06:24:04', '2020-07-08 07:14:08', 0, 'asdfsaf', 'test1'),
	(26, 'fd70b2e4-d933-4a5d-86d6-81a11b1377f2', '1', NULL, '2020-07-08 06:27:38', '2020-07-08 07:14:06', 0, 'w1qrq', 'test1'),
	(27, '9e65763f-e8fa-42cd-8afc-e6dbd37450a7', '1', NULL, '2020-07-08 06:31:42', '2020-07-08 07:14:05', 0, 'wererwer', 'test1'),
	(28, 'c11b228e-3958-496d-872e-a37b92ee2dc6', '1', NULL, '2020-07-08 06:53:35', '2020-07-08 07:14:02', 0, 'asdfasdf', '托尔斯泰'),
	(29, '22984a1a-709b-40d9-a8fc-e0c096155442', '1', NULL, '2020-07-10 04:34:49', '2020-07-14 02:54:43', 0, 'test', 'test'),
	(30, 'bf1e0847-a89b-40d5-a2e4-92832f599652', '1', NULL, '2020-07-10 04:37:16', '2020-07-14 02:52:20', 0, 'w1qrq', 'test1'),
	(31, '7364e424-a0d7-4d69-bb04-6811c9426b0c', '2', '[{"value":"asdf","hintImg":""},{"value":"asdf","hintImg":""}]', '2020-07-10 04:38:01', '2020-07-10 06:08:35', 1, 'w1qrq', 'test1'),
	(32, '29e46587-749d-4790-82cb-0c9a7683cf03', NULL, NULL, '2020-07-10 06:13:08', '2020-07-10 06:13:08', 1, 'aa', 'aa'),
	(33, '22cc3628-e314-4b7f-8979-42423b1b73a3', '2', NULL, '2020-07-10 07:52:26', '2020-07-10 07:52:26', 1, 'ad', 'aa'),
	(34, '2081accf-a587-4578-bd0f-62649e67367b', '1', '[{"value":"asdfsdf","hintImg":"159469535605384f7e997-eb98-4101-acda-8c9f87ae1ecb.jpg"},{"value":"asfsd33241","hintImg":"1594695352577a283d53b-611a-4528-bb25-3fd5d05aa56c.jpg"}]', '2020-07-14 02:55:04', '2020-07-14 02:56:05', 1, '123sad1f2ssdf', 'test16');
/*!40000 ALTER TABLE `doc_list` ENABLE KEYS */;


-- 导出  表 websystem.handle_log 结构
CREATE TABLE IF NOT EXISTS `handle_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL COMMENT '用户名',
  `request_type` varchar(10) NOT NULL COMMENT '请求类型',
  `request_url` varchar(200) NOT NULL COMMENT '请求url',
  `content` text NOT NULL COMMENT '操作内容',
  `result` text NOT NULL COMMENT '操作结果',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COMMENT='操作日志';

-- 正在导出表  websystem.handle_log 的数据：~21 rows (大约)
DELETE FROM `handle_log`;
/*!40000 ALTER TABLE `handle_log` DISABLE KEYS */;
INSERT INTO `handle_log` (`id`, `user`, `request_type`, `request_url`, `content`, `result`, `createTime`) VALUES
	(9, 'admin', 'POST', '/users/add', '{"userName":"test3","name":"test3","password":"030d9cf4c82d87c2a8c2d3244360dca6","powers":"2"}', '{"state":1}', '2020-07-14 02:42:17'),
	(10, 'test1', 'POST', '/users/add', '{"userName":"test4","name":"test4","password":"030d9cf4c82d87c2a8c2d3244360dca6","powers":"2"}', '{"state":1}', '2020-07-14 02:45:14'),
	(11, 'test1', 'DELETE', '/doc/delData/bf1e0847-a89b-40d5-a2e4-92832f599652', '{}', '{"state":1,"msg":"删除成功"}', '2020-07-14 02:52:20'),
	(12, 'test1', 'DELETE', '/doc/delData/22984a1a-709b-40d9-a8fc-e0c096155442', '{}', '{"state":1,"msg":"删除成功"}', '2020-07-14 02:54:43'),
	(13, 'test1', 'DELETE', '/doc/delData/219c2e27-7ab7-4a99-856c-5ecd4501a6f0', '{}', '{"state":1,"msg":"删除成功"}', '2020-07-14 02:54:46'),
	(14, 'test1', 'POST', '/doc/add', '{"title":"test16","url":"123sad1f2s","projectId":"1"}', '{"state":1,"msg":"添加成功"}', '2020-07-14 02:55:04'),
	(15, 'test1', 'POST', '/doc/modifData', '{"id":"2081accf-a587-4578-bd0f-62649e67367b","detail":"","isEnabled":"1","url":"123sad1f2ssdf","title":"test16"}', '{"state":1,"msg":"更新成功"}', '2020-07-14 02:55:38'),
	(16, 'test1', 'POST', '/doc/uploadImg', '{}', '{"fileName":"1594695352577a283d53b-611a-4528-bb25-3fd5d05aa56c.jpg","state":1}', '2020-07-14 02:55:58'),
	(17, 'test1', 'POST', '/doc/uploadImg', '{}', '{"fileName":"159469535605384f7e997-eb98-4101-acda-8c9f87ae1ecb.jpg","state":1}', '2020-07-14 02:56:01'),
	(18, 'test1', 'POST', '/doc/modifData', '{"id":"2081accf-a587-4578-bd0f-62649e67367b","detail":[{"value":"asdfsdf","hintImg":"159469535605384f7e997-eb98-4101-acda-8c9f87ae1ecb.jpg"},{"value":"asfsd33241","hintImg":"1594695352577a283d53b-611a-4528-bb25-3fd5d05aa56c.jpg"}],"isEnabled":"1","url":"123sad1f2ssdf","title":"test16"}', '{"state":1,"msg":"更新成功"}', '2020-07-14 02:56:05'),
	(20, 'admin', 'DELETE', '/users/del/test5', '{}', '{"msg":"删除成功","state":1}', '2020-07-15 01:26:23'),
	(21, 'libeibei', 'DELETE', '/doc/delData/0f82efc5-0633-4367-a99b-1815e1aaa175', '{}', '{"state":1,"msg":"删除成功"}', '2020-07-16 04:03:25'),
	(22, 'admin', 'POST', '/doc/modifData', '{"id":"3d8e8079-b59a-4326-869c-e26c1323c8ae","detail":[{"value":"2020-7-18","hintImg":"1594345938892f442d9be-4ffb-4c26-bf34-a6daa9831c47.jpg"},{"value":"4.14","hintImg":"158633258501884ff259d-c99f-418a-b63e-3eea1132517a.jpg"},{"value":"众志成城","hintImg":"1586332595027789e5c51-6fba-4a38-af0b-ce093db7794c.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"15863326078072e55a5bb-2ef8-4d59-8b09-50a92f4a5976.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"158633263075535585f88-f2ad-4162-82dd-9dee714c4b6a.jpg"},{"value":"3月20-3月21","hintImg":"15863326469801dde5668-366b-47b7-808c-c849ea34ac50.jpg"},{"value":"3月22-2月23日","hintImg":"15863326593799c34aa28-cac7-4d1e-801a-30b9c650dbfb.jpg"},{"value":"3月24日","hintImg":"15863326702125729c91b-4140-4490-8b01-ef57bb9c6c62.jpg"},{"value":"3月30日","hintImg":"15863326870434288fab4-6d7f-4077-bf9f-c0ae1c9f9b02.jpg"},{"value":"3月20日10:00--3月24日 24:00","hintImg":"158633270420528f3c7b8-0746-4b1c-9d5e-106f535c5051.jpg"},{"value":"3月20日--3月25日","hintImg":"1586332740948474930ec-5ed3-467d-a455-4fe2aaf80b6a.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"1586332753574ad3bf4a0-f1d5-4192-9b32-4e9b8cb293a3.jpg"},{"value":"ggws0324","hintImg":"1586332770102253b9dfe-d48b-4fce-bd3a-c4b77391fc1b.jpg"}],"isEnabled":"1","url":"http://gg.yr.dev.q1.com/test.html","title":"新服预约"}', '{"state":1,"msg":"更新成功"}', '2020-07-16 10:40:56'),
	(23, 'admin', 'POST', '/doc/modifData', '{"id":"3d8e8079-b59a-4326-869c-e26c1323c8ae","detail":[{"value":"2020-7-19","hintImg":"1594345938892f442d9be-4ffb-4c26-bf34-a6daa9831c47.jpg"},{"value":"4.14","hintImg":"158633258501884ff259d-c99f-418a-b63e-3eea1132517a.jpg"},{"value":"众志成城","hintImg":"1586332595027789e5c51-6fba-4a38-af0b-ce093db7794c.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"15863326078072e55a5bb-2ef8-4d59-8b09-50a92f4a5976.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"158633263075535585f88-f2ad-4162-82dd-9dee714c4b6a.jpg"},{"value":"3月20-3月21","hintImg":"15863326469801dde5668-366b-47b7-808c-c849ea34ac50.jpg"},{"value":"3月22-2月23日","hintImg":"15863326593799c34aa28-cac7-4d1e-801a-30b9c650dbfb.jpg"},{"value":"3月24日","hintImg":"15863326702125729c91b-4140-4490-8b01-ef57bb9c6c62.jpg"},{"value":"3月30日","hintImg":"15863326870434288fab4-6d7f-4077-bf9f-c0ae1c9f9b02.jpg"},{"value":"3月20日10:00--3月24日 24:00","hintImg":"158633270420528f3c7b8-0746-4b1c-9d5e-106f535c5051.jpg"},{"value":"3月20日--3月25日","hintImg":"1586332740948474930ec-5ed3-467d-a455-4fe2aaf80b6a.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"1586332753574ad3bf4a0-f1d5-4192-9b32-4e9b8cb293a3.jpg"},{"value":"ggws0324","hintImg":"1586332770102253b9dfe-d48b-4fce-bd3a-c4b77391fc1b.jpg"}],"isEnabled":"1","url":"http://gg.yr.dev.q1.com/test.html","title":"新服预约"}', '{"state":1,"msg":"更新成功"}', '2020-07-17 08:44:31'),
	(24, 'admin', 'POST', '/doc/modifData', '{"id":"3d8e8079-b59a-4326-869c-e26c1323c8ae","detail":[{"value":"2020-7-19","hintImg":"1594345938892f442d9be-4ffb-4c26-bf34-a6daa9831c47.jpg"},{"value":"4.14","hintImg":"158633258501884ff259d-c99f-418a-b63e-3eea1132517a.jpg"},{"value":"众志成城","hintImg":"1586332595027789e5c51-6fba-4a38-af0b-ce093db7794c.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"15863326078072e55a5bb-2ef8-4d59-8b09-50a92f4a5976.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"158633263075535585f88-f2ad-4162-82dd-9dee714c4b6a.jpg"},{"value":"3月20-3月21","hintImg":"15863326469801dde5668-366b-47b7-808c-c849ea34ac50.jpg"},{"value":"3月22-2月23日","hintImg":"15863326593799c34aa28-cac7-4d1e-801a-30b9c650dbfb.jpg"},{"value":"3月24日","hintImg":"15863326702125729c91b-4140-4490-8b01-ef57bb9c6c62.jpg"},{"value":"3月30日","hintImg":"15863326870434288fab4-6d7f-4077-bf9f-c0ae1c9f9b02.jpg"},{"value":"3月20日10:00--3月24日 24:00","hintImg":"158633270420528f3c7b8-0746-4b1c-9d5e-106f535c5051.jpg"},{"value":"3月20日--3月25日","hintImg":"1586332740948474930ec-5ed3-467d-a455-4fe2aaf80b6a.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"1586332753574ad3bf4a0-f1d5-4192-9b32-4e9b8cb293a3.jpg"},{"value":"ggws0324","hintImg":"1586332770102253b9dfe-d48b-4fce-bd3a-c4b77391fc1b.jpg"}],"isEnabled":"1","url":"http://gg.yr.dev.q1.com/test.html","title":"新服预约"}', '{"state":1,"msg":"更新成功"}', '2020-07-17 10:05:55'),
	(25, 'admin', 'POST', '/doc/modifData', '{"id":"3d8e8079-b59a-4326-869c-e26c1323c8ae","detail":[{"value":"2020-7-20","hintImg":"1594345938892f442d9be-4ffb-4c26-bf34-a6daa9831c47.jpg"},{"value":"4.14","hintImg":"158633258501884ff259d-c99f-418a-b63e-3eea1132517a.jpg"},{"value":"众志成城","hintImg":"1586332595027789e5c51-6fba-4a38-af0b-ce093db7794c.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"15863326078072e55a5bb-2ef8-4d59-8b09-50a92f4a5976.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"158633263075535585f88-f2ad-4162-82dd-9dee714c4b6a.jpg"},{"value":"3月20-3月21","hintImg":"15863326469801dde5668-366b-47b7-808c-c849ea34ac50.jpg"},{"value":"3月22-2月23日","hintImg":"15863326593799c34aa28-cac7-4d1e-801a-30b9c650dbfb.jpg"},{"value":"3月24日","hintImg":"15863326702125729c91b-4140-4490-8b01-ef57bb9c6c62.jpg"},{"value":"3月30日","hintImg":"15863326870434288fab4-6d7f-4077-bf9f-c0ae1c9f9b02.jpg"},{"value":"3月20日10:00--3月24日 24:00","hintImg":"158633270420528f3c7b8-0746-4b1c-9d5e-106f535c5051.jpg"},{"value":"3月20日--3月25日","hintImg":"1586332740948474930ec-5ed3-467d-a455-4fe2aaf80b6a.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"1586332753574ad3bf4a0-f1d5-4192-9b32-4e9b8cb293a3.jpg"},{"value":"ggws0324","hintImg":"1586332770102253b9dfe-d48b-4fce-bd3a-c4b77391fc1b.jpg"}],"isEnabled":"1","url":"http://gg.yr.dev.q1.com/test.html","title":"新服预约"}', '{"state":1,"msg":"更新成功"}', '2020-07-17 10:06:15'),
	(26, 'admin', 'POST', '/doc/modifData', '{"id":"3d8e8079-b59a-4326-869c-e26c1323c8ae","detail":[{"value":"2020-7-19","hintImg":"1594345938892f442d9be-4ffb-4c26-bf34-a6daa9831c47.jpg"},{"value":"4.14","hintImg":"158633258501884ff259d-c99f-418a-b63e-3eea1132517a.jpg"},{"value":"众志成城","hintImg":"1586332595027789e5c51-6fba-4a38-af0b-ce093db7794c.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"15863326078072e55a5bb-2ef8-4d59-8b09-50a92f4a5976.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"158633263075535585f88-f2ad-4162-82dd-9dee714c4b6a.jpg"},{"value":"3月20-3月21","hintImg":"15863326469801dde5668-366b-47b7-808c-c849ea34ac50.jpg"},{"value":"3月22-2月23日","hintImg":"15863326593799c34aa28-cac7-4d1e-801a-30b9c650dbfb.jpg"},{"value":"3月24日","hintImg":"15863326702125729c91b-4140-4490-8b01-ef57bb9c6c62.jpg"},{"value":"3月30日","hintImg":"15863326870434288fab4-6d7f-4077-bf9f-c0ae1c9f9b02.jpg"},{"value":"3月20日10:00--3月24日 24:00","hintImg":"158633270420528f3c7b8-0746-4b1c-9d5e-106f535c5051.jpg"},{"value":"3月20日--3月25日","hintImg":"1586332740948474930ec-5ed3-467d-a455-4fe2aaf80b6a.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"1586332753574ad3bf4a0-f1d5-4192-9b32-4e9b8cb293a3.jpg"},{"value":"ggws0324","hintImg":"1586332770102253b9dfe-d48b-4fce-bd3a-c4b77391fc1b.jpg"}],"isEnabled":"1","url":"http://gg.yr.dev.q1.com/test.html","title":"新服预约"}', '{"state":1,"msg":"更新成功"}', '2020-07-17 10:06:29'),
	(27, 'admin', 'POST', '/doc/modifData', '{"id":"3d8e8079-b59a-4326-869c-e26c1323c8ae","detail":[{"value":"2020-7-20","hintImg":"1594345938892f442d9be-4ffb-4c26-bf34-a6daa9831c47.jpg"},{"value":"4.14","hintImg":"158633258501884ff259d-c99f-418a-b63e-3eea1132517a.jpg"},{"value":"众志成城","hintImg":"1586332595027789e5c51-6fba-4a38-af0b-ce093db7794c.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"15863326078072e55a5bb-2ef8-4d59-8b09-50a92f4a5976.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"158633263075535585f88-f2ad-4162-82dd-9dee714c4b6a.jpg"},{"value":"3月20-3月21","hintImg":"15863326469801dde5668-366b-47b7-808c-c849ea34ac50.jpg"},{"value":"3月22-2月23日","hintImg":"15863326593799c34aa28-cac7-4d1e-801a-30b9c650dbfb.jpg"},{"value":"3月24日","hintImg":"15863326702125729c91b-4140-4490-8b01-ef57bb9c6c62.jpg"},{"value":"3月30日","hintImg":"15863326870434288fab4-6d7f-4077-bf9f-c0ae1c9f9b02.jpg"},{"value":"3月20日10:00--3月24日 24:00","hintImg":"158633270420528f3c7b8-0746-4b1c-9d5e-106f535c5051.jpg"},{"value":"3月20日--3月25日","hintImg":"1586332740948474930ec-5ed3-467d-a455-4fe2aaf80b6a.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"1586332753574ad3bf4a0-f1d5-4192-9b32-4e9b8cb293a3.jpg"},{"value":"ggws0324","hintImg":"1586332770102253b9dfe-d48b-4fce-bd3a-c4b77391fc1b.jpg"}],"isEnabled":"1","url":"http://gg.yr.dev.q1.com/test.html","title":"新服预约"}', '{"state":1,"msg":"更新成功"}', '2020-07-17 10:08:28'),
	(28, 'admin', 'POST', '/doc/modifData', '{"id":"3d8e8079-b59a-4326-869c-e26c1323c8ae","detail":[{"value":"2020-7-19","hintImg":"1594345938892f442d9be-4ffb-4c26-bf34-a6daa9831c47.jpg"},{"value":"4.14","hintImg":"158633258501884ff259d-c99f-418a-b63e-3eea1132517a.jpg"},{"value":"众志成城","hintImg":"1586332595027789e5c51-6fba-4a38-af0b-ce093db7794c.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"15863326078072e55a5bb-2ef8-4d59-8b09-50a92f4a5976.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"158633263075535585f88-f2ad-4162-82dd-9dee714c4b6a.jpg"},{"value":"3月20-3月21","hintImg":"15863326469801dde5668-366b-47b7-808c-c849ea34ac50.jpg"},{"value":"3月22-2月23日","hintImg":"15863326593799c34aa28-cac7-4d1e-801a-30b9c650dbfb.jpg"},{"value":"3月24日","hintImg":"15863326702125729c91b-4140-4490-8b01-ef57bb9c6c62.jpg"},{"value":"3月30日","hintImg":"15863326870434288fab4-6d7f-4077-bf9f-c0ae1c9f9b02.jpg"},{"value":"3月20日10:00--3月24日 24:00","hintImg":"158633270420528f3c7b8-0746-4b1c-9d5e-106f535c5051.jpg"},{"value":"3月20日--3月25日","hintImg":"1586332740948474930ec-5ed3-467d-a455-4fe2aaf80b6a.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"1586332753574ad3bf4a0-f1d5-4192-9b32-4e9b8cb293a3.jpg"},{"value":"ggws0324","hintImg":"1586332770102253b9dfe-d48b-4fce-bd3a-c4b77391fc1b.jpg"}],"isEnabled":"1","url":"http://gg.yr.dev.q1.com/test.html","title":"新服预约"}', '{"state":1,"msg":"更新成功"}', '2020-07-17 10:09:02'),
	(29, 'admin', 'POST', '/doc/modifData', '{"id":"3d8e8079-b59a-4326-869c-e26c1323c8ae","detail":[{"value":"2020-7-20","hintImg":"1594345938892f442d9be-4ffb-4c26-bf34-a6daa9831c47.jpg"},{"value":"4.14","hintImg":"158633258501884ff259d-c99f-418a-b63e-3eea1132517a.jpg"},{"value":"众志成城","hintImg":"1586332595027789e5c51-6fba-4a38-af0b-ce093db7794c.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"15863326078072e55a5bb-2ef8-4d59-8b09-50a92f4a5976.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"158633263075535585f88-f2ad-4162-82dd-9dee714c4b6a.jpg"},{"value":"3月20-3月21","hintImg":"15863326469801dde5668-366b-47b7-808c-c849ea34ac50.jpg"},{"value":"3月22-2月23日","hintImg":"15863326593799c34aa28-cac7-4d1e-801a-30b9c650dbfb.jpg"},{"value":"3月24日","hintImg":"15863326702125729c91b-4140-4490-8b01-ef57bb9c6c62.jpg"},{"value":"3月30日","hintImg":"15863326870434288fab4-6d7f-4077-bf9f-c0ae1c9f9b02.jpg"},{"value":"3月20日10:00--3月24日 24:00","hintImg":"158633270420528f3c7b8-0746-4b1c-9d5e-106f535c5051.jpg"},{"value":"3月20日--3月25日","hintImg":"1586332740948474930ec-5ed3-467d-a455-4fe2aaf80b6a.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"1586332753574ad3bf4a0-f1d5-4192-9b32-4e9b8cb293a3.jpg"},{"value":"ggws0324","hintImg":"1586332770102253b9dfe-d48b-4fce-bd3a-c4b77391fc1b.jpg"}],"isEnabled":"1","url":"http://gg.yr.dev.q1.com/test.html","title":"新服预约"}', '{"state":1,"msg":"更新成功"}', '2020-07-17 10:11:34'),
	(30, 'admin', 'POST', '/doc/modifData', '{"id":"3d8e8079-b59a-4326-869c-e26c1323c8ae","detail":[{"value":"2020-7-19","hintImg":"1594345938892f442d9be-4ffb-4c26-bf34-a6daa9831c47.jpg"},{"value":"4.14","hintImg":"158633258501884ff259d-c99f-418a-b63e-3eea1132517a.jpg"},{"value":"众志成城","hintImg":"1586332595027789e5c51-6fba-4a38-af0b-ce093db7794c.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"15863326078072e55a5bb-2ef8-4d59-8b09-50a92f4a5976.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"158633263075535585f88-f2ad-4162-82dd-9dee714c4b6a.jpg"},{"value":"3月20-3月21","hintImg":"15863326469801dde5668-366b-47b7-808c-c849ea34ac50.jpg"},{"value":"3月22-2月23日","hintImg":"15863326593799c34aa28-cac7-4d1e-801a-30b9c650dbfb.jpg"},{"value":"3月24日","hintImg":"15863326702125729c91b-4140-4490-8b01-ef57bb9c6c62.jpg"},{"value":"3月30日","hintImg":"15863326870434288fab4-6d7f-4077-bf9f-c0ae1c9f9b02.jpg"},{"value":"3月20日10:00--3月24日 24:00","hintImg":"158633270420528f3c7b8-0746-4b1c-9d5e-106f535c5051.jpg"},{"value":"3月20日--3月25日","hintImg":"1586332740948474930ec-5ed3-467d-a455-4fe2aaf80b6a.jpg"},{"value":"3月20日10:00--3月24日 14:00","hintImg":"1586332753574ad3bf4a0-f1d5-4192-9b32-4e9b8cb293a3.jpg"},{"value":"ggws0324","hintImg":"1586332770102253b9dfe-d48b-4fce-bd3a-c4b77391fc1b.jpg"}],"isEnabled":"1","url":"http://gg.yr.dev.q1.com/test.html","title":"新服预约"}', '{"state":1,"msg":"更新成功"}', '2020-07-17 10:11:42');
/*!40000 ALTER TABLE `handle_log` ENABLE KEYS */;


-- 导出  表 websystem.projects 结构
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `project_id` varchar(50) DEFAULT '0' COMMENT '项目ID',
  `name` varchar(50) DEFAULT NULL COMMENT '游戏名称',
  `logo` varchar(200) DEFAULT NULL COMMENT '游戏logo图片URL',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='项目列表';

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
) ENGINE=InnoDB AUTO_INCREMENT=228 DEFAULT CHARSET=utf8 COMMENT='存储token列表';

-- 正在导出表  websystem.token_list 的数据：~5 rows (大约)
DELETE FROM `token_list`;
/*!40000 ALTER TABLE `token_list` DISABLE KEYS */;
INSERT INTO `token_list` (`id`, `token`, `user_name`, `maxTime`) VALUES
	(179, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoieWVyb25nMTU5NDYyNTEwNzQxOCIsImlhdCI6MTU5NDYyNTEwN30.2_8P_FtJ3QxcmBvOmFdD5LO_vomc9lxCPoX_Hm0zzv4', 'yerong', '2020-07-13 23:25:07'),
	(186, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoidGVzdDIxNTk0NjI2MzIwMzQ5IiwiaWF0IjoxNTk0NjI2MzIwfQ.fo3ldvMWsHAsKysm4ahu9UK3EmrHFBIjLKDNQy--ylU', 'test2', '2020-07-13 23:45:20'),
	(190, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoidGVzdDExNTk0Njk0Njk0MzY4IiwiaWF0IjoxNTk0Njk0Njk0fQ.ELdw7l4P8LlVGgYxSQTmDyv4fZOFtfoxvV99IopCfLg', 'test1', '2020-07-14 18:44:54'),
	(216, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibGliZWliZWkxNTk0ODcyMTc0MTk2IiwiaWF0IjoxNTk0ODcyMTc0fQ.4haZFS_Fln8MK7lSPj9hGCl8fQsZC-foZ9p_jYZh0n0', 'libeibei', '2020-07-16 20:02:54'),
	(227, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYWRtaW4xNTk0OTgyMjQ0NzIxIiwiaWF0IjoxNTk0OTgyMjQ0fQ.iGoYW8JnYI1qu4UNWbVoB9jDI-asUBvE3VioYSJv92M', 'admin', '2020-07-18 02:37:25');
/*!40000 ALTER TABLE `token_list` ENABLE KEYS */;


-- 导出  表 websystem.users 结构
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `userName` varchar(50) NOT NULL COMMENT '用户名',
  `name` varchar(50) NOT NULL COMMENT '中文名',
  `password` varchar(256) NOT NULL COMMENT '密码',
  `powers` mediumtext COMMENT '权限',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COMMENT='用户列表';

-- 正在导出表  websystem.users 的数据：~10 rows (大约)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `userName`, `name`, `password`, `powers`, `createTime`) VALUES
	(1, 'admin', '超级管理员', 'e747811e49a731613e285525b828146a8b2429b7a70db0da374190c44eec62be', '0', '2020-03-25 17:06:03'),
	(2, 'yerong', '叶荣', 'e747811e49a731613e285525b828146a8b2429b7a70db0da374190c44eec62be', '1', '2020-03-27 15:07:22'),
	(3, 'liujin', '刘津', 'e747811e49a731613e285525b828146a8b2429b7a70db0da374190c44eec62be', '1', '2020-07-01 08:37:23'),
	(8, 'libeibei', '李贝贝', 'e747811e49a731613e285525b828146a8b2429b7a70db0da374190c44eec62be', '1', '2020-07-02 06:57:28'),
	(9, 'chendonghua', '陈东华', 'e747811e49a731613e285525b828146a8b2429b7a70db0da374190c44eec62be', '1', '2020-07-02 07:09:20'),
	(16, 'xufuchuan', '徐福川', 'e747811e49a731613e285525b828146a8b2429b7a70db0da374190c44eec62be', '2', '2020-07-08 06:32:27'),
	(33, 'test1', 'test1', 'e747811e49a731613e285525b828146a8b2429b7a70db0da374190c44eec62be', '2', '2020-07-14 02:18:11'),
	(34, 'test2', 'test2', 'e747811e49a731613e285525b828146a8b2429b7a70db0da374190c44eec62be', '2', '2020-07-14 02:19:18'),
	(38, 'test3', 'test3', 'e747811e49a731613e285525b828146a8b2429b7a70db0da374190c44eec62be', '2', '2020-07-14 02:42:17'),
	(39, 'test4', 'test4', 'e747811e49a731613e285525b828146a8b2429b7a70db0da374190c44eec62be', '2', '2020-07-14 02:45:14');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
