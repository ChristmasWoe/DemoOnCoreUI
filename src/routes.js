import React from 'react';

// const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
// const Cards = React.lazy(() => import('./views/Base/Cards'));
// const Carousels = React.lazy(() => import('./views/Base/Carousels'));
// const Collapses = React.lazy(() => import('./views/Base/Collapses'));
// const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
// const Forms = React.lazy(() => import('./views/Base/Forms'));
// const Navbars = React.lazy(() => import('./views/Base/Navbars'));
// const Navs = React.lazy(() => import('./views/Base/Navs'));
// const Paginations = React.lazy(() => import('./views/Base/Paginations'));
// const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
// const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
// const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
// const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
// // const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
// // const Users = React.lazy(() => import('./views/Users/Users'));
// const User = React.lazy(() => import('./views/Users/User'));

// // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  //   { path: '/base', exact: true, name: 'Base', component: Cards },
  //   { path: '/base/cards', name: 'Cards', component: Cards },
  //   { path: '/base/forms', name: 'Forms', component: Forms },
  //   // { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  //   { path: '/base/carousels', name: 'Carousel', component: Carousels },
  //   { path: '/base/collapses', name: 'Collapse', component: Collapses },
  //   { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  //   // { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  //   // { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  //   { path: '/base/navbars', name: 'Navbars', component: Navbars },
  //   { path: '/base/navs', name: 'Navs', component: Navs },
  //   { path: '/base/paginations', name: 'Paginations', component: Paginations },
  //   { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  //   { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  //   // { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  //   { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  //   // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  //   { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  //   { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  //   // { path: '/icons/flags', name: 'Flags', component: Flags },
  //   { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  //   { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  //   // { path: '/charts', name: 'Charts', component: Charts },
  //   { path: '/users', exact: true, name: 'Users', component: Users },
  //   { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
