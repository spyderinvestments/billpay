'use strict';

//index, navbar controller
app.controller('dashboardCtrl', function($scope, $state) {
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

});
