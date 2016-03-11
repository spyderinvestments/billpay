'use strict';

//index, navbar controller
app.controller('dashboardCtrl', function($scope, $state, $uibModal, $log) {

  if (!localStorage.getItem("token")) {
    $state.go('login');
  } 

  $scope.allBills = [
    {
      name: 'Rent',
      amount: '4000',
      due: '3/1/2016',
      repeats: 'monthly',
      split: [
        'Joe', 'Mike', 'Steve'
      ],
      notes: 'none',
      paid: false
    },
    {
      name: 'Internet/Cable',
      amount: '200',
      due: '3/1/2016',
      repeats: 'monthly',
      split: [
        'Joe', 'Mike', 'Steve'
      ],
      notes: 'none',
      paid: false
    },
    {
      name: 'Water',
      amount: '400',
      due: '3/1/2016',
      repeats: 'monthly',
      split: [
        'Joe', 'Mike', 'Steve'
      ],
      notes: 'none',
      paid: false
    },
    {
      name: 'Random',
      amount: '60',
      due: '3/1/2016',
      repeats: 'monthly',
      split: [
        'Joe', 'Mike', 'Steve'
      ],
      notes: 'none',
      paid: false
    },
    {
      name: 'Dinner',
      amount: '50',
      due: '3/1/2016',
      repeats: 'monthly',
      split: [
        'Steph'
      ],
      notes: 'none',
      paid: false
    }
  ]

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
});
