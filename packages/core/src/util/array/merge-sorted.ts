import _ from 'lodash'

// todo filter sorted array to remove not exist columns
export function mergeSorted(origin: any[], sorted: any[], key, insertAfter = true): any[] {
  if (!sorted) return [...origin];

  const groups = _.groupBy(origin, key);
  const result = _.map(sorted, function (i) { return Object.assign(groups[i[key]][0], i); });
  {
    const arr: any[] = [];
    origin.forEach(o => {
      const hit = sorted.find(p => o[key] && p[key] !== o[key]);
      if (!hit) {
        arr.push(o);
      }
    });
    arr.forEach((o, i) => {
      const originIndex = origin.indexOf(o)
      if (i === originIndex) {
        result.unshift(o)
      } else if ((arr.length - i) === (origin.length - originIndex)) {
        result.push(o);
      } else {
        const resultIndex = result.indexOf(origin[originIndex - 1])
        result.splice(resultIndex, 0, o);
      }
    });
  }

  return result;
}
