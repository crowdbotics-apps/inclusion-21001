import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList123389Navigator from '../features/NotificationList123389/navigator';
import Settings123388Navigator from '../features/Settings123388/navigator';
import Settings123380Navigator from '../features/Settings123380/navigator';
import UserProfile123378Navigator from '../features/UserProfile123378/navigator';
import Settings123323Navigator from '../features/Settings123323/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList123389: { screen: NotificationList123389Navigator },
Settings123388: { screen: Settings123388Navigator },
Settings123380: { screen: Settings123380Navigator },
UserProfile123378: { screen: UserProfile123378Navigator },
Settings123323: { screen: Settings123323Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
