


describe("Algomania", () => {
    it("Two sum: O(n³)", () => {
        function solution(numbers, target_sum) {

            let i = 0;
            for (let number of numbers) {
                const number_2 = numbers.slice(i + 1);
                for (let auxNumber of number_2) {
                    if (number !== auxNumber && (number + (auxNumber)) === target_sum) {
                        return [number, auxNumber]
                    }
                }
                i++;
            }
            return []
        }
        expect(solution([4, 1, 2, -2, 11, 15, 1, -1, -6, -4], 9)).toEqual([-2, 11])
        expect(solution([1, 4], 9)).toEqual([])
        expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 9)).toEqual([1, 8])
    })
    it("Two sum: O(n)", () => {
        function solution(numbers, target_sum) {
            //Y=target-numbers[i] = X
            //if x includes in array break;
            let i = 0;
            while (i < numbers.length) {
                let result = target_sum - numbers[i]
                if (numbers.includes(result)) {
                    return [numbers[i], result]
                }
                i++;
            }

            return []

        }
        expect(solution([4, 1, 2, -2, 11, 15, 1, -1, -6, -4], 9)).toEqual([-2, 11])
        expect(solution([1, 4], 9)).toEqual([])
        expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 9)).toEqual([1, 8])
    });
    it("Two sum: O(n log(n))", () => {
        function solution(numbers, target_sum) {
            //sort
            numbers = numbers.sort((a, b) => a - b)

            let begin = 0;
            let end = numbers.length - 1;

            while (begin !== end) {
                let result = numbers[begin] + numbers[end];
                if (result === target_sum) {
                    return [numbers[begin], numbers[end]]
                }
                if (result > target_sum) {
                    end--;
                }
                if (result < target_sum) {
                    begin++;
                }

            }


            return []

        }
        expect(solution([4, 1, 2, -2, 11, 16, 1, -1, -6, -4], 9)).toEqual([-2, 11])
        expect(solution([1, 4], 9)).toEqual([])
    });
    it("Three sum: O(n n³)", () => {
        function solution(numbers, target_sum) {
            numbers = numbers.sort((a, b) => a - b);
            //[-8, -6, 1, 2, 3, 5, 6, 12]

            let temp = new Map()
            let i = 0;
            for (let number of numbers) {
                const numbers_2 = numbers.slice(i + 1);
                for (let number_2 of numbers_2) {
                    const numbers_3 = numbers_2.slice(i + 2);
                    for (let number_3 of numbers_3) {

                        let result = number + number_2 + number_3
                        if (number_2 !== number_3 && result === 0) {
                            let t = [number, number_2, number_3].sort((a, b) => a - b)
                            temp.set(`${t}`, t);
                        }
                    }
                }
                i++;
            }
            return Array.from(temp.values())

        }
        expect(solution([12, 3, 1, 2, -6, 5, -8, 6], 0)).toEqual([[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]])
        //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    });
    it("Three sum: O(n n²)", () => {
        function solution(numbers, target_sum) {
            numbers = numbers.sort((a, b) => a - b);
            //[-8, -6, 1, 2, 3, 5, 6, 12]

            let temp = []


            for (let index = 0; index < numbers.length; index++) {
                const number = numbers[index];

                let next = index + 1;
                let end = numbers.length - 1;


                while (next < end) {
                    let left = numbers[next];
                    let rigth = numbers[end];
                    const result = number + left + rigth;

                    if (result === target_sum) {
                        temp.push([number, left, rigth])
                        next++;
                        end--;
                        continue;
                    }
                    if (result < target_sum) {
                        next++;
                    } else if (result > target_sum) {
                        end--;
                    }
                }


            }


            return temp
        }
        expect(solution([12, 3, 1, 2, -6, 5, -8, 6], 0)).toEqual([[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]])
        //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    });
    it("Four sum: O(n)", () => {
        function solution(numbers, target_sum) {

            let temp = new Map();

            // slice nos 2 primeiros numeros
            // verificar a soma dos proximos 2
            let numbers_1 = numbers.slice(0, 2);
            let numbers_2 = numbers.slice(2);
            let new_target = target_sum - (numbers_1[0] + numbers_1[1]);

            for (let number of numbers_2) {
                let result = new_target - number
                if (numbers_2.includes(result)) {
                    let t = numbers_1.concat([number, result].sort((a, b) => a - b))
                    temp.set(`${t}`, t)

                }
            }

            return Array.from(temp.values())
        }
        expect(solution([7, 6, 4, -1, 1, 2], 16)).toEqual([[7, 6, -1, 4], [7, 6, 1, 2]]);
        expect(solution([1, 2, 3, 4, 5, 6, 7], 10)).toEqual([[1, 2, 3, 4]]);
    });
    it("Subsort array: O(n)", () => {
        function solution(array) {

            let array_return = [];
            const array_copy_order = array.slice();
            array_copy_order.sort((a, b) => a - b)
            for (let index = 0; index < array_copy_order.length; index++) {
                const element = array_copy_order[index];
                const current_array = array[index];
                if (element !== current_array) {
                    array_return.push(index);
                }
            }

            if (array_return && array_return.length != 0) {
                const first = array_return[0];
                const last = array_return[array_return.length - 1];
                if (first !== last) return [first, last]
            }
            return [-1, -1]

        }
        expect(solution([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])).toEqual([3, 9]);
        expect(solution([1, 1, 1, 1, 2, 3, 7, 9])).toEqual([-1, -1]);

    });
    it("Longest substring without repeating characters: O(1) Space O(n)", () => {
        function solution(s) {
            const array_string = s.split('')
            const aux_array_string = [...new Set(array_string)]
            return aux_array_string.length
        }
        expect(solution("abcabcbb")).toEqual(3);
        expect(solution("zzzabcdzzz")).toEqual(5);

    });
    it("Smallest substring of all characters O(n³) Space O(n)", () => {
        function solution(array, s) {

            //tem como resolver com two points
            //formando e checando as strings.

            const array_string = s.split('')
            let aux_valid = 0
            let index = 0;


            while (index < s.length) {

                const text_check = array_string.slice(index, index + 3);

                for (let index = 0; index < array.length; index++) {
                    const character = array[index];

                    if (!text_check.includes(character)) {
                        aux_valid = 0;
                        break;
                    }
                    aux_valid++;

                }
                if (aux_valid === 3) {
                    return text_check.join('')
                };
                index++;

            }

        }
        expect(solution(['x', 'y', 'z'], 'xyyzyzyx')).toEqual("zyx");
        //expect(solution(['b', 'b', 'b'], 'aabcsbbba')).toEqual("bbb");
    });

    it("Calculate n combinations are there to a n-digit lock O(1) Space O(1)", () => {
        function solution(values, keys) {

            let elements = values.length;
            let value = elements;
            while (keys > 1) {

                value *= elements
                keys--;
            }


            return value
        }
        expect(solution([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual(1000);
    });
    // it("Calculate n combinations steps ways to uper stairs O(2^n) Space O(n)", () => {
    //     function solution(steps) {


    //         // while (i > 0) {

    //         //     if (steps === 1) {
    //         //         combinations.push([0, 1]);
    //         //     } else if (steps === 0) {
    //         //         combinations.push([0])
    //         //     } else {
    //         //         let amount = 0
    //         //         let aux_array = []
    //         //         while (amount !== steps) {
    //         //             aux_array.push(amount)
    //         //             amount++;
    //         //         }

    //         //     }


    //         //     i--;
    //         // }
    //         const total = num_ways(steps)

    //         if (true) {

    //         }

    //         const ways_bottom_up = []

    //         for (let i = 0; i <= steps; i++) {
    //             ways_bottom_up.push(num_ways_bottom_up(i))
    //         }

    //         console.log(total, ways_bottom_up)
    //     }
    //     function num_ways(n) {

    //         if (n === 0 || n === 1) return 1;
    //         return ((n - 1) + (n - 2))
    //     }
    //     function num_ways_bottom_up(n) {

    //         let nums = new Array(n + 1);
    //         nums[0] = 0;
    //         //aqui no meio vai as variacoes 1 até n - 1 sempre decrementando o n
    //         //1,2,3,4 = 4, sum = 10
    //         //2,3,4 = 3, sum = 9
    //         //1,3,4 = 3, sum = 8
    //         //1,2,4 = 3, sum = 7
    //         //2,4 = 2, sum = 6
    //         //2,3 = 2, sum = 5
    //         nums[n - 1] = n;
    //         //10-4 = 6

    //         //10-6=4
    //         //9-6=3
    //         //8-6=2
    //         //7-6=1

    //         //9-3=6

    //         //9-6=3
    //         //8-6=2
    //         //7-6=1
    //         //[0,1,2,3,5]

    //         // for (let index = n - 1; index <= n; index++) {
    //         //     nums[index] = nums[index - 1] + nums[index - 2];
    //         // }
    //         console.log(JSON.stringify(nums))
    //         return nums[n];
    //     }
    //     expect(solution(5)).toEqual({
    //         "steps": [[0, 1, 2, 3, 4, 5], [0, 1, 2, 4, 5],
    //         [0, 1, 3, 4, 5], [0, 1, 3, 5], [0, 2, 3, 4, 5],
    //         [0, 2, 3, 4, 5], [0, 2, 4, 5], [0, 2, 3, 5]],
    //         "total": 7
    //     });
    //     //expect(solution(0)).toEqual(1);
    // });

    it("Minimum Steps to Minimize n to 1 o(log^n)", () => {

        /**
         * Given an integer n, return the minimum
         * steps to minimize n to 1
         * 
         * Available steps are:
         *   1- decrement n by 1.
         *   2- If n is divisible by 2, then divide n by 2.
         *   3- If n is divisible by 3, then divide n by 3.
         * 
         *   examples:
         *    10 => 3 steps (10=>9=>3=>1)
         *    15 => 4 steps (15=>5=>4=>2=>1)
         *  */
        //recursive O(2^n)
        function recursive(n) {
            if (n === 1) {
                return 0;
            }
            let result = recursive(n - 1);

            if (n % 2 === 0) {
                result = Math.min(result, recursive(n / 2));
            }
            if (n % 3 === 0) {
                result = Math.min(result, recursive(n / 3));
            }
            return result + 1
        }


        //memo cache O(n)
        function recursiveMemo(n, memo) {
            if (n === 1) {
                return 0;
            }
            if (memo[n] != null && memo[n] !== 0) {

                return memo[n];
            }

            let result = recursiveMemo(n - 1, memo);

            if (n % 2 === 0) {
                result = Math.min(result, recursiveMemo(n / 2, memo));
            }
            if (n % 3 === 0) {
                result = Math.min(result, recursiveMemo(n / 3, memo));
            }
            memo[n] = result + 1;
            return memo[n];
        }


        //tab O(log^n)
        function solutions(n) {

            let table = new Array(n + 1);
            table.fill(n)
            table[1] = 0;


            for (let i = 1; i < n; i++) {
                table[i + 1] = Math.min(table[i + 1], table[i] + 1);

                if (i * 2 <= n) {
                    table[i * 2] = Math.min(table[i] + 1, table[i * 2]);
                }
                if (i * 3 <= n) {
                    table[i * 3] = Math.min(table[i] + 1, table[i * 3]);
                }
            }

            return table[n]
        }
        expect(recursive(15)).toEqual(4);
        expect(recursive(10)).toEqual(3);
        expect(recursive(1)).toEqual(0);
        expect(recursive(6)).toEqual(2);
        expect(recursive(100)).toEqual(7);

        expect(recursiveMemo(15, new Array(16))).toEqual(4);
        expect(recursiveMemo(10, new Array(11))).toEqual(3);
        expect(recursiveMemo(1, new Array(2))).toEqual(0);
        expect(recursiveMemo(6, new Array(7))).toEqual(2);
        expect(recursiveMemo(100, new Array(101))).toEqual(7);
        expect(recursiveMemo(1000, new Array(1001))).toEqual(9);

        expect(solutions(15)).toEqual(4);
        expect(solutions(10)).toEqual(3);
        expect(solutions(1)).toEqual(0);
        expect(solutions(6)).toEqual(2);
        expect(solutions(100)).toEqual(7);
        expect(solutions(10000)).toEqual(14);


    });

    it("Fibonacci using bottom_up O(n) space O(n)", () => {

        //O(n) space O(n)
        function solutions(n) {
            let fib = [];
            fib[0] = 0;
            for (let i = 1; i < n; i++) {

                if (i <= 2) {
                    fib.push(1)
                } else {
                    fib.push(fib[i - 1] + fib[i - 2]);
                }
            }
            return fib[n - 1]
        }

        //O(n) space O(1)
        function solutionsSaveSpace(n) {
            let a = 0, b = 1, c, i;

            for (i = 2; i < n; i++) {
                c = a + b;
                a = b;
                b = c;
            }

            return b
        }

        expect(solutions(15)).toEqual(377)
        expect(solutionsSaveSpace(15)).toEqual(377)
    });
    it("Minimium Blocks I should live. O(n²) O(n)", () => {

        function solutions(blocks, reqs) {
            let actual = 1;
            let after;
            let before;

            for (actual; actual < blocks.length - 1; actual++) {
                after = actual + 1;
                before = actual - 1;
                let sumDistance = 0;

                for (let i = 0; i < reqs.length; i++) {
                    const element = reqs[i];

                    const elementActual = blocks[actual][element];
                    const elementBefore = blocks[before][element];
                    const elementAfter = blocks[after][element];
                    if (elementActual || elementBefore || elementAfter) {
                        sumDistance++;
                    }
                }
                if (sumDistance === 3) {
                    break;
                };

            }
            return actual;


        }



        expect(solutions(
            [
                {
                    "gym": false,
                    "school": true,
                    "store": false
                },
                {
                    "gym": true,
                    "school": false,
                    "store": false
                },
                {
                    "gym": true,
                    "school": true,
                    "store": false
                },
                {
                    "gym": false,
                    "school": true,
                    "store": false
                },
                {
                    "gym": false,
                    "school": true,
                    "store": true
                }
            ], ["gym", "school", "store"])
        ).toEqual(3)
    });

});
