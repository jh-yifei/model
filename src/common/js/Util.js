/**
 * 解析URL参数
 * @example ?id=123456&a=b
 * @return Object {id:123456,a:b}
 */
export function urlParse() {
  const url = window.location.search;
  const reg = /[?&][^?&]+=[^?&]+/g;
  const arr = url.match(reg);
  const obj = {};
  let key, val;
  // ['?id=123456', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substr(1).split('=');
      key = decodeURIComponent(tempArr[0]);
      val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
}
