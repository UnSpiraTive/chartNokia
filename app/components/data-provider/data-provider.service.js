'use strict';

angular
    .module('chartApp')
    .service('dataProvider', ['testDataGenerator', dataProvider]);

function dataProvider(testDataGenerator) {

    var stop = false;

    return {
        subscribe: subscribe,
        unsubscribe: unsubscribe
    };


    function unsubscribe() {
        stop = true;
    }

    function subscribe(listener) {
        sendNextAfterTimeout(0);

        function sendNextAfterTimeout(timeout) {
            setTimeout(sendNextData, timeout);
        }

        function sendNextData() {
            if (stop) {
                stop = false;
                return;
            }
            listener(testDataGenerator.next());
            const timeInterval = Math.ceil(Math.random() * 5000);
            sendNextAfterTimeout(timeInterval);
        }
    }



}
