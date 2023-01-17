/*
 Navicat Premium Data Transfer

 Source Server         : yeb
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : my_db_01

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 17/01/2023 17:55:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ev_article_cate
-- ----------------------------
DROP TABLE IF EXISTS `ev_article_cate`;
CREATE TABLE `ev_article_cate`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '分类名称',
  `alias` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '分类别名',
  `is_delete` tinyint(1) NOT NULL COMMENT '数据是否被标记删除\r\n0：没有被删除\r\n1：被删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ev_article_cate
-- ----------------------------
INSERT INTO `ev_article_cate` VALUES (1, '科技', 'KeJi', 0);
INSERT INTO `ev_article_cate` VALUES (2, '历史', 'LiShi', 0);

-- ----------------------------
-- Table structure for ev_users
-- ----------------------------
DROP TABLE IF EXISTS `ev_users`;
CREATE TABLE `ev_users`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户昵称',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户邮箱',
  `user_pic` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '用户头像',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ev_users
-- ----------------------------
INSERT INTO `ev_users` VALUES (2, 'a', '$2a$10$zeSxObQAHBdYIvgzEQaF5OrBkwtUxTxPvJkKFwEFq98jI9FUUtogq', 'abc', 'abc@qq.com', NULL);
INSERT INTO `ev_users` VALUES (5, 'b', '$2a$10$NUO/j126R2BqYrexguI7GOcDZoUx7dYC9cjKROBjATJJgy5t1VYVO', NULL, NULL, NULL);
INSERT INTO `ev_users` VALUES (6, 'admin', '$2a$10$9JXljHx6eBNGHOM1VBLcOOUZaiCcnrmsweBBIp1bxxb4ICgN7vW9S', NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
