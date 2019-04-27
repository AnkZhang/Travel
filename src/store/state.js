let defaultCity = '上海'
// //city属性默认值为上海，
// 当localStorage中有值时，city应用localStore.city
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
