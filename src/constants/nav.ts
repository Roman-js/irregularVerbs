import {HomeTabParamList} from '../navigations/HomeNavigation/HomeTab';
import {TabStackParamList} from '../navigations/RootNavigation';

type HideTabScreensData = keyof (HomeTabParamList & TabStackParamList);

export const HIDED_TAB_SCREENS_DATA: HideTabScreensData[] = ['LessonScreen'];
