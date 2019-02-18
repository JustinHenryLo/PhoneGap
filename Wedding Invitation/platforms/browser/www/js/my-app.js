var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/index/',
      url: 'index.html',
    },
    {
      path: '/timeline/',
      url: 'timeline.html',
    },
    {
      path: '/family/',
      url: 'family.html',
    },
    {
      path: '/reception/',
      url: 'reception.html',
    },
    {
      path: '/venue/',
      url: 'venue.html',
    },
    {
      path: '/attire/',
      url: 'attire.html',
    },
    {
      path: '/creator/',
      url: 'creator.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');



