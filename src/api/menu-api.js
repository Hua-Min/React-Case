import ajax from './ajax'


export const getMenuList = () => ajax("api/menus/list");