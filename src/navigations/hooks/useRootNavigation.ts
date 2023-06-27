import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../constants/colors';
import {HIDED_TAB_SCREENS_DATA} from '../../constants/nav';
import {
  setHideTabNavigationAction,
  setAvailableStepAction,
  setActivityCounter,
} from '../../store/actions/actions';
import {AppStateType} from '../../store/store';
import {ActivityCounterType} from '../../types/commonTypes';
import {
  getActivityValue,
  setActivityValue,
  getSavedStep,
} from '../../services/api/asyncStorage';
import {dateCounter} from '../../utils/dateCounter';
import {navRef} from '../../utils/rootNav';

export const useRootNavigation = () => {
  const dispatch = useDispatch();
  const {hideTabNavigation} = useSelector((state: AppStateType) => state.home);
  const [loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const savedStep: string = (await getSavedStep()) || '1';
      const progressStartDdate: ActivityCounterType = await getActivityValue();
      dispatch(setAvailableStepAction(Number(savedStep)));

      const breakDays = dateCounter(progressStartDdate.lastChangesDate);
      const defaultDate = new Date();

      if (breakDays > 1) {
        dispatch(
          setActivityCounter({
            startDate: defaultDate,
            lastChangesDate: defaultDate,
          }),
        );
        setActivityValue({
          startDate: defaultDate,
          lastChangesDate: defaultDate,
        });
      } else {
        dispatch(setActivityCounter(progressStartDdate));
      }
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
    loading,
    setIsLoading,
  };
};
