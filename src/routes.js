import { lazy } from 'react';

// pages
// const HomePage = lazy(() => import('./layout/MenuItem/Home'));
const Tours = lazy(() => import('./layout/MenuItem/Device'));
const Customers = lazy(() => import('./layout/MenuItem/Customer'));
// const FlightTickets = lazy(() => import('./layout/MenuItem/FlightTickets'));
// const Eating = lazy(() => import('./layout/MenuItem/Eating'));

// note route
//  - permistion: 1 => Chỉ những user có role == 1 mới vào được <> không vào được
//  - tab: "1,2" => Để xác định menu sidebar thuộc tab nào
//  - type: "hide" => Ẩn menu này trên sidebar, "external" => Hiển thị trên sidebar, "submenu" => Có menu con (children)
//  - component: => Component của route tương ứng, Nếu type == submenu thì không có component (sẽ auto vào 404)
//  - protected: true => Đã login mới vào được  <> redirect routing 404

// constant
var indexRoutes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: HomePage,
  //   protected: true
  // },
  {
    path: '/Khach-Hang',
    name: 'Khách Hàng',
    component: Customers,
    type: 'submenu',
    // protected: true
  },
  {
    path: '/Thiet-Bi',
    name: 'Thiết Bị',
    component: Tours,
    // protected: true
  },
];

export default indexRoutes;
