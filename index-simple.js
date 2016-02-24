var app = angular.module("MyApp", ['pascalprecht.translate']);

app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('en', {
        'title': 'Hello World',
        'foo': 'This is just an international test ',
        'BUTTON_LANG_ZH': 'Chinese',
        'BUTTON_LANG_EN': 'English'
    });

    $translateProvider.translations('zh', {
        'title': '你好, 世界',
        'foo': '这仅仅是一个国际化的测试',
        'BUTTON_LANG_ZH': '中文',
        'BUTTON_LANG_EN': '英文'
    });

    // try to find out preferred language by yourself
    $translateProvider.determinePreferredLanguage();

    $translateProvider.preferredLanguage('zh');

}]);

app.controller('indexCtrl', ['$scope', '$translate',
    function($scope, $translate) {
        $scope.changeLanguage = function(langKey) {
            $translate.use(langKey);
        };
    }
]);
