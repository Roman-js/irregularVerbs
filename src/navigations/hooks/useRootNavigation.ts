import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../constants/colors';
import {HIDED_TAB_SCREENS_DATA} from '../../constants/nav';
import {
  setHideTabNavigationAction,
  setAvailableStepAction,
} from '../../store/actions/actions';
import {AppStateType} from '../../store/store';
import {navRef} from '../../utils/rootNav';
import {getSavedStep} from '../../utils/savedSteps';

export const useRootNavigation = () => {
  const dispatch = useDispatch();
  const {hideTabNavigation} = useSelector((state: AppStateType) => state.home);

  useEffect(() => {
    (async () => {
      const savedStep: string = (await getSavedStep()) || '1';
      dispatch(setAvailableStepAction(Number(savedStep)));
    })();
  }, [dispatch]);

  const setHideTabNavigation = () => {
    const currentRoute = navRef?.current?.getCurrentRoute()?.name;

    const hideTab = HIDED_TAB_SCREENS_DATA.find(
      screen => screen === currentRoute,
    );
    if (hideTab) {
      dispatch(setHideTabNavigationAction(true));
    } else {
      dispatch(setHideTabNavigationAction(false));
    }
  };

  const styleTabLabel = (focused: boolean) =>
    focused ? colors.yellow : colors.darkGrey;

  const styleTabIcon = (focused: boolean, tabName: string) => {
    if (tabName === 'Home') {
      return focused
        ? require('../../assets/tabs/homeColor.gif')
        : require('../../assets/tabs/homeColorStatic.png');
    } else if (tabName === 'Profile') {
      return focused
        ? require('../../assets/tabs/settings.gif')
        : require('../../assets/tabs/settingsStatic.png');
    }
  };

  return {
    setHideTabNavigation,
    styleTabLabel,
    hideTabNavigation,
    styleTabIcon,
  };
};
