/*
  Write a function called stringifyNumbers which takes in an object and
  finds all of the values which are numbers and converts them to strings.
  Recursion would be a great way to solve this!

  let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
  }

 stringifyNumbers(obj)
 {
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
 }
* */
function stringifyNumbers(object) {
  let result = {};
  for (let key in object) {
    if (typeof object[key] === "number") {
      result[key] = object[key].toString();
    } else if (typeof object[key] === "object" && !Array.isArray(object[key])) {
      result[key] = stringifyNumbers(object[key]);
    } else {
      result[key] = object[key];
    }
  }
  return result;
}
