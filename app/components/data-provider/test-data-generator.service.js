'use strict';

angular
    .module('chartApp')
    .service('testDataGenerator', [testDataGenerator]);

function testDataGenerator() {

    const memoryGenerator = valueGenerator('%', 0, 100, 34);
    const ramGenerator = valueGenerator('%', 0, 100, 23);
    const cpuGenerator = valueGenerator('%', 0, 100, 51);

    return {
        next: next
    };

    function next() {
        return {
            MEMORY: memoryGenerator.next(),
            RAM: ramGenerator.next(),
            CPU: cpuGenerator.next()
        }
    }

    function valueGenerator(unit, min, max, start) {

        var value = start;

        return {
            next: next
        };

        function next() {
            return {
                unit: unit,
                value: generate()
            }
        }

        function generate() {
            const percent = Math.random() * 2;
            const sign = Math.random() >= 0.5 ? -1 : 1;
            const diff = sign * ((value * percent) / 100);
            value += diff;
            if (value > max) value = max;
            if (value < min) value = min;
            return value;
        }

    }

}