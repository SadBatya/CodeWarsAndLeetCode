const arr = ["xyz", "abc", "zyx", "klm", "cab", "xyz"]; // [['xyz', 'zyx', 'xyz'], ['abc', 'bca', 'cab']]

function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    const sorted = str.split("").sort().join("");

    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }

  return Array.from(map.values()).filter((group) => group.length > 1);
}

const result = groupAnagrams(arr);

console.log(result);
