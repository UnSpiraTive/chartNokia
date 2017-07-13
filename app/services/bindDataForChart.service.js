'use strict';

angular
.module('chartApp')
.service('bindDataProv', function(){
    return{
      bindData:  (data, state) => {
        let counter = 0;
        let temp = [];

        angular.forEach(data, (value, key)=>{
          if(state[counter] === true)
          temp.push(value.value);
          else
          temp.push(0);

          counter++;
        });
      return temp;
      }
  }

});
