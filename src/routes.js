/* eslint-disable react/react-in-jsx-scope */
import { lazy } from 'react';

// icon
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
// pages
const HomePage = lazy(() => import('./layout/MenuItem/Home'));
const Customers = lazy(() => import('./layout/MenuItem/Customer'));
const FormCustomer = lazy(() => import('./page/Form/FormCustomer'));
const Device = lazy(() => import('./layout/MenuItem/Device')); 
const FormDevice = lazy(() => import('./page/Form/FormDevice'));
const DeviceType = lazy(() => import('./layout/MenuItem/DeviceType'));
const FormDeviceType = lazy(() => import('./page/Form/FormDeviceType'));
const Signin = lazy(() => import('./page/Authentication/Signin'));
const Dashboard = lazy(() => import('./layout/MenuItem/Dashboard'));
const ControlHistory = lazy(() => import('./layout/MenuItem/ControlHistory'));

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
    path: '/dashboard',
    name: 'Bảng điều khiển',
    component: Dashboard,
    icon: <DashboardIcon/>
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
  {
    path: '/control-history',
    name: 'Lịch sử điều khiển',
    component: ControlHistory,
    icon: <HourglassEmptyIcon/>,
    // protected: true
    type: 'hide',
  },
  {
    path: '/Khach-Hang',
    name: 'Khách Hàng',
    component: Customers,
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
  // end
  {
    path: '/authentication',
    name: 'authentication',
    type: 'hide',
    children: [
      {
        path: '/signin',
        name: 'Signin',
        component: Signin
      },
      // {
      //   path: '/signup',
      //   name: 'Signup',
      //   component: Signup
      // },
      // {
      //   path: '/forgot',
      //   name: 'Forgot',
      //   component: PasswordReset
      // },
      // {
      //   path: '/change-password',
      //   name: 'change-password',
      //   component: ChangePassword
      // }
    ]
  }
];

export default indexRoutes;
