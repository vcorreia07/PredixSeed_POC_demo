/**
 * Load controllers, directives, filters, services before bootstrapping the
 * application. NOTE: These are named references that are defined inside of the
 * config.js RequireJS configuration file.
 */
define([ 'jquery', 'angular', 'main', 'routes', 'interceptors',
		'px-datasource', 'ng-bind-polymer' ], function($, angular) {
	'use strict';

	/**
	 * Application definition This is where the AngularJS application is
	 * defined and all application dependencies declared.
	 * 
	 * @type {module}
	 */
	var predixApp = angular.module('predixApp', [ 'app.routes',
			'app.interceptors', 'sample.module', 'predix.datasource',
			'px.ngBindPolymer' ]);

	/**
	 * Main Controller This controller is the top most level controller
	 * that allows for all child controllers to access properties
	 * defined on the $rootScope.
	 */
	predixApp.controller('MainCtrl', [ '$http', '$scope', '$rootScope',
			'PredixUserService',
			function($http, $scope, $rootScope, predixUserService) {
			
				window.App = $rootScope.App = {
					version : '1.0',
					name : 'Predix Seed',
					session : {},
					tabs : [ {
						icon : 'fa-tachometer',
						state : 'dashboards',
						label : 'Dashboards'
					}, {
						icon : 'fa-file-o',
						state : 'ViewChart',
						label : 'Adgas Sensor Data'
					},

					]
				};
			} ]);

	//Set on window for debugging
	window.predixApp = predixApp;

	//Return the application  object
	return predixApp;
});
