'use strict';

//index, navbar controller
app.controller('dashboardCtrl', function ($scope, $state, $uibModal, $log, api) {

  if (!localStorage.getItem("token")) {
    $state.go('login');
  }

  api.getBills().then(
    data => $scope.allBills = data.data, err => console.error(err)
  );

  // $scope.allBills = [{
  //   name: 'Rent',
  //   amount: '4000',
  //   due: '3/1/2016',
  //   repeats: 'monthly',
  //   split: [
  //     'Joe', 'Mike', 'Steve'
  //   ],
  //   notes: 'none',
  //   paid: false
  // }, {
  //   name: 'Internet/Cable',
  //   amount: '200',
  //   due: '3/1/2016',
  //   repeats: 'monthly',
  //   split: [
  //     'Joe', 'Mike', 'Steve'
  //   ],
  //   notes: 'none',
  //   paid: false
  // }, {
  //   name: 'Water',
  //   amount: '400',
  //   due: '3/1/2016',
  //   repeats: 'monthly',
  //   split: [
  //     'Joe', 'Mike', 'Steve'
  //   ],
  //   notes: 'none',
  //   paid: false
  // }, {
  //   name: 'Random',
  //   amount: '60',
  //   due: '3/1/2016',
  //   repeats: 'monthly',
  //   split: [
  //     'Joe', 'Mike', 'Steve'
  //   ],
  //   notes: 'none',
  //   paid: false
  // }, {
  //   name: 'Dinner',
  //   amount: '50',
  //   due: '3/1/2016',
  //   repeats: 'monthly',
  //   split: [
  //     'Steph'
  //   ],
  //   notes: 'none',
  //   paid: false
  // }];


  $scope.open = function (size) {

    function addBillCtrl($scope, $uibModalInstance) {
      $scope.ok = function () {
        //TODO: do something
        // $uibModalInstance.close($scope.selected.item);
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }

    var modalInstance = $uibModal.open({
      animation: true,
      controller: addBillCtrl,
      templateUrl: 'myModalContent.html'
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };




});
