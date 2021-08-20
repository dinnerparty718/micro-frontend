import { loadRemoteEntry } from '@angular-architects/module-federation';


// import('./bootstrap')
// 	.catch(err => console.error(err));


Promise.all([
  loadRemoteEntry('http://localhost:4201/remoteEntry.js', 'dashboard')
])
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));
