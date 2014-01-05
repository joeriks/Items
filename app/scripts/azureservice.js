var myModule = angular.module('windowsAzure', []);
myModule.factory('mobileServiceClient', function() {
    return new WindowsAzure.MobileServiceClient(
        "https://items1.azure-mobile.net/",
        "yzEYNXZcorVzFDJLQsNCQpIEUTyvRh87"
    );
});


