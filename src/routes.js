import { lazy } from 'react';

// pages
// const HomePage = lazy(() => import('./layout/MenuItem/Home'));
const Device = lazy(() => import('./layout/MenuItem/Device'));
const Customers = lazy(() => import('./layout/MenuItem/Customer'));
const FormCustomer = lazy(() => import('./page/Form/FormCustomer'));
const FormDevrce = lazy(() => import('./page/Form/FormDevrce'));
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
    component: Device,
    // protected: true
  },
  {
    path: `/Khach-Hang/addnew`,
    name: 'Addnew Customer',
    component: FormCustomer,
    type: 'hide',
    // protected: true
  },
  {
    path: `/Khach-Hang/update/:user_id`,
    name: 'Update Customer.',
    component: FormCustomer,
    // protected: true,
    type: 'hide',
    // permistion: 1
  },
  {
    path: `/Thiet-Bi/addnew`,
    name: 'Addnew Devrce',
    component: FormDevrce,
    type: 'hide',
    // protected: true
  },
  {
    path: `/Thiet-Bi/update/:device_id`,
    name: 'Update Devrce.',
    component: FormDevrce,
    // protected: true,
    type: 'hide',
    // permistion: 1
  },
];

export default indexRoutes;
