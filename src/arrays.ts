/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const length: number = numbers.length;
    if (length < 1) {
        return [];
    } else {
        return [numbers[0], numbers[length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //use Number() to figure out if its a number. otherwise returns NaN. use isInteger to figure out if integer. returns bool
    const isInt = (item: string): number =>
        !isNaN(Number(item)) && Number(item) % 1 === 0 ? Number(item) : 0;
    return numbers.map(isInt);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newAmounts = amounts.map((ammount: string): string =>
        ammount.replace("$", "")
    );
    return newAmounts.map((ammount: string): number =>
        !isNaN(Number(ammount)) ? Number(ammount) : 0
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
//  */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const question = (message: string): boolean => {
        return message[message.length - 1] !== "?";
    };
    const exclamation = (message: string): string => {
        return message[message.length - 1] === "!"
            ? message.toUpperCase()
            : message;
    };
    //const newMessages: string[] = messages.filter(question);
    return [...messages.filter(question)].map(exclamation);
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.reduce(
        (currentTotal: number, word: string) =>
            word.length < 4 ? currentTotal + 1 : currentTotal,
        0
    );
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const sum = colors.reduce(
        (currentTotal: number, color: string) =>
            color !== "red" && color !== "blue" && color !== "green"
                ? currentTotal + 1
                : currentTotal,
        0
    );
    return sum < 1;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    if (addends.length > 0) {
        return sum + "=" + addends.join("+");
    } else {
        return sum + "=" + addends.join("+") + 0;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newValues = [...values];
    const index: number = values.findIndex((value: number) => value < 0);
    if (index > -1) {
        const sum = values
            .slice(0, index)
            .reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0
            );
        newValues.splice(index + 1, 0, sum);
    } else {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newValues.splice(newValues.length, 0, sum);
    }

    return newValues;
}
