


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
})
