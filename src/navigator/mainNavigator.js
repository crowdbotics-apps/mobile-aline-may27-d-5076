import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen5219Navigator from '../features/BlankScreen5219/navigator';
import BlankScreen5218Navigator from '../features/BlankScreen5218/navigator';
import BlankScreen5217Navigator from '../features/BlankScreen5217/navigator';
import BlankScreen5215Navigator from '../features/BlankScreen5215/navigator';
import BlankScreen5213Navigator from '../features/BlankScreen5213/navigator';
import BlankScreen5212Navigator from '../features/BlankScreen5212/navigator';
import BlankScreen5211Navigator from '../features/BlankScreen5211/navigator';
import BlankScreen5209Navigator from '../features/BlankScreen5209/navigator';
import BlankScreen5207Navigator from '../features/BlankScreen5207/navigator';
import BlankScreen5204Navigator from '../features/BlankScreen5204/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen5219: { screen: BlankScreen5219Navigator },
BlankScreen5218: { screen: BlankScreen5218Navigator },
BlankScreen5217: { screen: BlankScreen5217Navigator },
BlankScreen5215: { screen: BlankScreen5215Navigator },
BlankScreen5213: { screen: BlankScreen5213Navigator },
BlankScreen5212: { screen: BlankScreen5212Navigator },
BlankScreen5211: { screen: BlankScreen5211Navigator },
BlankScreen5209: { screen: BlankScreen5209Navigator },
BlankScreen5207: { screen: BlankScreen5207Navigator },
BlankScreen5204: { screen: BlankScreen5204Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
