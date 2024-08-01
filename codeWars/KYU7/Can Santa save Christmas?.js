// Can Santa save Christmas?
// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .


const arr = ["00:30:00", "02:30:00", "00:15:00",'24:00:00']

function determineTime (durations) {
  let s = 0
  let allTime = 24 * 60 * 60

  durations.forEach(time => {
    const el = time.split(':')
    s += (+el[0] * 60 * 60 + (+el[1] * 60) + (+el[2]))
  });

  return s <= allTime
}

console.log(determineTime(arr))

//второй способ
const determineTime = durations =>
  durations.map(val => val.split(`:`)).reduce((pre, [h, m, s]) => pre + h * 3600 + m * 60 + +s, 0) <= 8.64e4;