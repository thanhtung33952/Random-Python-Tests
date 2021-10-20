/* eslint-disable react/react-in-jsx-scope */
import { lazy } from 'react';

// icon
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
// pages
const HomePage = lazy(() => import('./layout/MenuItem/Home'));
const Customers = lazy(() => import('./layout/MenuItem/Customer'));
const FormCustomer = lazy(() => import('./page/Form/FormCustomer'));
const Device = lazy(() => import('./layout/MenuItem/Device')); 
const FormDevice = lazy(() => import('./page/Form/FormDevice'));
const DeviceType = lazy(() => import('./layout/MenuItem/DeviceType'));
const FormDeviceType = lazy(() => import('./page/Form/FormDeviceType'));

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
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    protected: true,
    type: 'hide',
  },
  {
    path: '/Khach-Hang',
    name: 'Khách Hàng',
    component: Customers,
    type: 'submenu',
    icon: <PersonIcon/>
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
    path: `/Khach-Hang/update/:customer_id`,
    name: 'Update Customer.',
    component: FormCustomer,
    // protected: true,
    type: 'hide',
    // permistion: 1
  },
  {
    path: '/Thiet-Bi',
    name: 'Thiết Bị',
    component: Device,
    icon: <PhoneIphoneIcon />
    // protected: true
  },
  {
    path: `/Thiet-Bi/addnew`,
    name: 'Addnew Device',
    component: FormDevice,
    type: 'hide',
    // protected: true
  },
  {
    path: `/Thiet-Bi/update/:device_id`,
    name: 'Update Device.',
    component: FormDevice,
    // protected: true,
    type: 'hide',
    // permistion: 1
  },
  {
    path: '/Loai-Thiet-Bi',
    name: 'Loại Thiết Bị',
    component: DeviceType,
    icon: <DevicesOtherIcon />
    // protected: true
  },
  {
    path: `/Loai-Thiet-Bi/addnew`,
    name: 'Addnew DeviceType',
    component: FormDeviceType,
    type: 'hide',
    // protected: true
  },
  {
    path: `/Loai-Thiet-Bi/update/:deviceType_id`,
    name: 'Update DeviceType.',
    component: FormDeviceType,
    type: 'hide',
  },
];

export default indexRoutes;
