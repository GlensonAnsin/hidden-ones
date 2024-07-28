import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useLocation
} from 'react-router-dom';
import AcGames from './Components/Webpages/AcGames/AcGames.jsx'
import Assassins from './Components/Webpages/Assassins/Assassins.jsx'
import News from './Components/Webpages/News/News.jsx'
import ContactDev from './Components/Webpages/ContactDeveloper/ContactDev.jsx'
import Ac1 from './Components/Webpages/AcGames/GameDetails/Ac1.jsx'
import Ac2 from './Components/Webpages/AcGames/GameDetails/Ac2.jsx'
import AcBH from './Components/Webpages/AcGames/GameDetails/AcBH.jsx'
import AcRev from './Components/Webpages/AcGames/GameDetails/AcRev.jsx'
import Ac3 from './Components/Webpages/AcGames/GameDetails/Ac3.jsx'
import AcLib from './Components/Webpages/AcGames/GameDetails/AcLib.jsx'
import AcBF from './Components/Webpages/AcGames/GameDetails/AcBF.jsx'
import AcFC from './Components/Webpages/AcGames/GameDetails/AcFC.jsx'
import AcRogue from './Components/Webpages/AcGames/GameDetails/AcRogue.jsx'
import AcUnity from './Components/Webpages/AcGames/GameDetails/AcUnity.jsx'
import AcSyndicate from './Components/Webpages/AcGames/GameDetails/AcSyndicate.jsx'
import AcOrigins from './Components/Webpages/AcGames/GameDetails/AcOrigins.jsx'
import AcOdyssey from './Components/Webpages/AcGames/GameDetails/AcOdyssey.jsx'
import AcValhalla from './Components/Webpages/AcGames/GameDetails/AcValhalla.jsx'
import AcMirage from './Components/Webpages/AcGames/GameDetails/AcMirage.jsx'
import AcShadows from './Components/Webpages/AcGames/GameDetails/AcShadows.jsx'
import Altair from './Components/Webpages/Assassins/AssassinDetails/Altair.jsx';
import Ezio from './Components/Webpages/Assassins/AssassinDetails/Ezio.jsx';
import Connor from './Components/Webpages/Assassins/AssassinDetails/Connor.jsx';
import Aveline from './Components/Webpages/Assassins/AssassinDetails/Aveline.jsx';
import Edward from './Components/Webpages/Assassins/AssassinDetails/Edward.jsx';
import Adewale from './Components/Webpages/Assassins/AssassinDetails/Adewale.jsx';
import Shay from './Components/Webpages/Assassins/AssassinDetails/Shay.jsx';
import Arno from './Components/Webpages/Assassins/AssassinDetails/Arno.jsx';
import Jacob from './Components/Webpages/Assassins/AssassinDetails/Jacob.jsx';
import Evie from './Components/Webpages/Assassins/AssassinDetails/Evie.jsx';
import Bayek from './Components/Webpages/Assassins/AssassinDetails/Bayek.jsx';
import Aya from './Components/Webpages/Assassins/AssassinDetails/Aya.jsx';
import Kassandra from './Components/Webpages/Assassins/AssassinDetails/Kassandra.jsx';
import Eivor from './Components/Webpages/Assassins/AssassinDetails/Eivor.jsx';
import Basim from './Components/Webpages/Assassins/AssassinDetails/Basim.jsx';
import Yasuke from './Components/Webpages/Assassins/AssassinDetails/Yasuke.jsx';
import Naoe from './Components/Webpages/Assassins/AssassinDetails/Naoe.jsx';
import Lydia from './Components/Webpages/Assassins/AssassinDetails/Lydia.jsx';
import Achilles from './Components/Webpages/Assassins/AssassinDetails/Achilles.jsx';
import AlMualim from './Components/Webpages/Assassins/AssassinDetails/AlMualim.jsx';
import Darius from './Components/Webpages/Assassins/AssassinDetails/Darius.jsx';
import Giovanni from './Components/Webpages/Assassins/AssassinDetails/Giovanni.jsx';
import Henry from './Components/Webpages/Assassins/AssassinDetails/Henry.jsx';
import Hope from './Components/Webpages/Assassins/AssassinDetails/Hope.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/acgames',
    element: <AcGames />
  },
  {
    path: '/assassins',
    element: <Assassins />
  },
  {
    path: '/news',
    element: <News />
  },
  {
    path: '/contactdev',
    element: <ContactDev />
  },
  {
    path: '/acgames/assassins-creed',
    element: <Ac1 />
  },
  {
    path: '/acgames/assassins-creed-2',
    element: <Ac2 />
  },
  {
    path: '/acgames/assassins-creed-brotherhood',
    element: <AcBH />
  },
  {
    path: '/acgames/assassins-creed-revelations',
    element: <AcRev />
  },
  {
    path: '/acgames/assassins-creed-3',
    element: <Ac3 />
  },
  {
    path: '/acgames/assassins-creed-liberation',
    element: <AcLib />
  },
  {
    path: '/acgames/assassins-creed-black-flag',
    element: <AcBF />
  },
  {
    path: '/acgames/assassins-creed-freedom-cry',
    element: <AcFC />
  },
  {
    path: '/acgames/assassins-creed-rogue',
    element: <AcRogue />
  },
  {
    path: '/acgames/assassins-creed-unity',
    element: <AcUnity />
  },
  {
    path: '/acgames/assassins-creed-syndicate',
    element: <AcSyndicate />
  },
  {
    path: '/acgames/assassins-creed-origins',
    element: <AcOrigins />
  },
  {
    path: '/acgames/assassins-creed-odyssey',
    element: <AcOdyssey />
  },
  {
    path: '/acgames/assassins-creed-valhalla',
    element: <AcValhalla />
  },
  {
    path: '/acgames/assassins-creed-mirage',
    element: <AcMirage />
  },
  {
    path: '/acgames/assassins-creed-shadows',
    element: <AcShadows />
  },
  {
    path: '/assassins/altair',
    element: <Altair />
  },
  {
    path: '/assassins/ezio',
    element: <Ezio />
  },
  {
    path: '/assassins/connor',
    element: <Connor />
  },
  {
    path: '/assassins/aveline',
    element: <Aveline />
  },
  {
    path: '/assassins/edward',
    element: <Edward />
  },
  {
    path: '/assassins/adewale',
    element: <Adewale />
  },
  {
    path: '/assassins/shay',
    element: <Shay />
  },
  {
    path: '/assassins/arno',
    element: <Arno />
  },
  {
    path: '/assassins/jacob',
    element: <Jacob />
  },
  {
    path: '/assassins/evie',
    element: <Evie />
  },
  {
    path: '/assassins/bayek',
    element: <Bayek />
  },
  {
    path: '/assassins/aya',
    element: <Aya />
  },
  {
    path: '/assassins/kassandra',
    element: <Kassandra />
  },
  {
    path: '/assassins/eivor',
    element: <Eivor />
  },
  {
    path: '/assassins/basim',
    element: <Basim />
  },
  {
    path: '/assassins/yasuke',
    element: <Yasuke />
  },
  {
    path: '/assassins/naoe',
    element: <Naoe />
  },
  {
    path: '/assassins/lydia',
    element: <Lydia />
  },
  {
    path: '/assassins/achilles',
    element: <Achilles />
  },
  {
    path: '/assassins/almualim',
    element: <AlMualim />
  },
  {
    path: '/assassins/darius',
    element: <Darius />
  },
  {
    path: '/assassins/giovanni',
    element: <Giovanni />
  },
  {
    path: '/assassins/henry',
    element: <Henry />
  },
  {
    path: '/assassins/hope',
    element: <Hope />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router = {router} />
    </React.StrictMode>,
)