angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  $(document).ready(function() {
  $('[data-toggle]').on('click', function(e) {
    e.preventDefault();
    
    $('[data-toggle]').removeClass('in');
    $(this).addClass('in');
    
    var activeSection = $('.' + $(this).data('toggle') + '-section');
    var clipPathOut = 'circle(0 at 50% 50%)';
    var clipPathTrans = 'circle(0 at ' + e.clientX + 'px ' + e.clientY + 'px)';
    var clipPathIn = 'circle(150% at ' + e.clientX + 'px ' + e.clientY + 'px)';
    
    if(activeSection.hasClass('in')) {
      return;
    }
    
    $('.section').removeClass('in').css({
        '-webkit-clip-path': clipPathOut
      });
    activeSection.addClass('transition').css({
        '-webkit-clip-path': clipPathTrans
      });
    
    window.setTimeout(function() {
     activeSection.removeClass('transition').addClass('in').css({
        '-webkit-clip-path': clipPathIn
      });
    }, 10);

  });
});
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
