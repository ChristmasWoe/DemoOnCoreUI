export default {
  items: [
    {
      name: 'Account',
      url: '/dashboard',
      icon: 'icon-user',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Shopping basket',
      url: '/dashboard', icon: 'icon-basket',
    },
    {
      name: 'News',
      url: '/dashboard',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Events',
      url: '/dashboard',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Notifications',
      url: '/dashboard',
      icon: 'icon-bell',
    },
    {
      name: 'About us',
      url: '/dashboard',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },

    {
      name: 'Download our app',
      url: '/dashboard',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
