import { STData, STColumnViewValue } from './st.interfaces';
import _ from 'lodash'

export function generateModel(data: STData): { [key: string]: any } {
  const model = {};
  const valueList = (data._values || []);
  valueList
    .filter(v => v.index)
    .forEach(v => {
      v.index?.reduce((acc, key, index) => {
        if (index !== v.index?.length! - 1) {
          /* access path */
          acc = acc[key] ? acc[key] : acc[key] = {};
        } else {
          /* final object key */
          switch (v.type) {
            case 'date':
              acc[key] = v.value ? new Date(v.value).toISOString() : v.value;
              break;
            default:
              acc[key] = v.value;
          }
        }
        return acc;
      }, model)
    })
  return model;
}

// 已经玩崩了，这个函数只用于co-st
// todo filter sorted array to remove not exist columns
export function mergeSorted(origin: any[], sorted: any[], key = 'index', insertAfter = true): any[] {
  if (!sorted?.length) return [...origin];

  const groups = _.groupBy(origin, key);
  const result = _.map(sorted, function (i) {
    if (groups[i[key]]) {
      // if (groups[i[key]][0]?.children?.length && i?.children?.length) {
      /* 不处理，递归会走 else */
      // } else {
      let shallow: any = { ...i };
      delete shallow.children;
      return Object.assign(groups[i[key]][0], shallow);
      // }
    } else {
      return null;
    }
  }).filter(o => !!o);
  {
    const arr: any[] = [];
    origin.forEach(o => {
      const hit = sorted.find(p => o[key] && p[key] === o[key]);
      if (!hit) {
        /*  */
        const index = _.findLastIndex(result, (r) => o.sortGroup && o.sortGroup === r.sortGroup);
        if (index !== -1) {
          result.splice(index, 0, o);
        } else {
          arr.push(o);
        }
      } else {
        /* 命中 */
        /* 递归 children */
        if (o?.children?.length && hit?.children?.length) {
          o.children = mergeSorted(o.children, hit.children);
        }
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
        result.splice(resultIndex + 1, 0, o);
      }
    });
  }

  return result;
}

