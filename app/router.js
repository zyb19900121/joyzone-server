'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
	router.get('/', controller.home.index);
	router.resources('user', '/api/user', controller.user);
	router.resources('game', '/api/game', controller.game);
	router.resources('appInfo', '/api/appInfo', controller.appInfo);
	router.resources('log', '/api/log', controller.log);
	router.resources('gameComment', '/api/gameComment', controller.gameComment);
	router.resources('gameCompany', '/api/gameCompany', controller.gameCompany);
	router.resources('gameType', '/api/gameType', controller.gameType);
	router.resources('gameNews', '/api/gameNews', controller.gameNews);

	router.post('/login', controller.user.login);
	router.post('/manage/fileUpload', controller.fileUpload.upload);
	router.resources('user', '/manage/user', controller.user);
	router.resources('game', '/manage/game', controller.game);
	router.resources('appInfo', '/manage/appInfo', controller.appInfo);
	router.resources('log', '/manage/log', controller.log);
	router.resources('gameComment', '/manage/gameComment', controller.gameComment);
	router.resources('gameCompany', '/manage/gameCompany', controller.gameCompany);
	router.resources('gameType', '/manage/gameType', controller.gameType);
	router.resources('gameNews', '/manage/gameNews', controller.gameNews);
};
