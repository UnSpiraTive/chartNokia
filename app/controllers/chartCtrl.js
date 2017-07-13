angular
  .module('chartApp')
  .controller('chartCtrl', chartSettings);

function chartSettings($scope, dataProvider, bindDataProv){
    let vm = this;
    vm.info = "Unsubscribe"
    vm.name = "Chart app";
    vm.labels = ["CPU", "RAM", "MEMORY"];
    vm.state = [true, true, true];
    vm.val = true;

    let refreshView = ()=>{
      vm.tabOfData = bindDataProv.bindData(vm.data, vm.state); //bind data
    }

    //Take data from services
      let init = ()=>{
          dataProvider.subscribe((data)=>{
          $scope.$apply(()=>{
            vm.data = data; //bind data(left panel)
            vm.tabOfData = bindDataProv.bindData(data, vm.state); //bind data
          });
        });
      };

      // subscribe || Unsubscribe
      vm.subscribe = (val) => {
        val ? ( vm.info = "Subscribe", dataProvider.unsubscribe() ) : (vm.info = "Unsubscribe", init())
        vm.val = !val;
      }

      vm.isChecked = (index) => {
        vm.state[index] = !vm.state[index];
        refreshView(); //refresh view
      }

      //do stuff
      init();
}
