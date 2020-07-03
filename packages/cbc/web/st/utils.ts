import { STData, STColumnViewValue } from './st.interfaces';

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
