// fetchMiddleware.js

import {store} from './app/store'; // Redux mağazasını içe aktarın
import { setProgress, setLoading } from './features/sidePanelSlice'; // Yüzdeyi ve yükleme durumunu değiştiren eylemleri içe aktarın

const originalFetch = window.fetch;
let loadedSize = 0;
let totalSize = 18241765;

window.fetch = async (input, init) => {
  console.log(`Fetching: ${input}`);
  
  const response = await originalFetch(input, init);

//   const contentLength = response.headers.get('content-length');
//   if (contentLength === null) {
//     totalSize += 1024; // Örnek bir varsayılan değer
//   } else {
//     console.log(`Content length: ${contentLength}`);
//     totalSize += (parseInt(contentLength, 10) );
//     console.log(`Total size: ${totalSize}`);
//   }

  loadedSize += parseInt(response.headers.get('content-length'), 10) || 0;
  console.log(`Loaded size: ${loadedSize}`);
  const progress = Math.round((loadedSize / totalSize) * 100); // Yüzdeyi hesaplayın

  console.log(`Progress: ${progress}%`); 

  store.dispatch(setProgress(progress)); // Yüzdeyi Redux'a gönderin

  if (loadedSize >= totalSize) {
    store.dispatch(setLoading(false)); // Yükleme tamamlandığında yükleme durumunu false olarak ayarlayın
  }

  return response;
};

export default window.fetch;
