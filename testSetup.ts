import 'react-native-gesture-handler/jestSetup';
import { AppStateType } from './src/store/store';

const templates: AppStateType = {home: {
    availableStep: 4,
    currentStep: 1,
    currentLesson: [],
    hideTabNavigation: false,
}, lesson: {
    soundAvailable: false,
}}

jest.mock("react-native-linear-gradient");
jest.mock('react-redux', () => {
    const ActualReactRedux = jest.requireActual('react-redux');
    
    return {
        ...ActualReactRedux,
        useSelector: jest.fn().mockImplementation(callback => {
            return callback(templates);
        }),
        useDispatch: () => jest.fn(),
    };
});

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');
    Reanimated.default.call = () => { };
    return Reanimated;
});


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
    return {
        useNavigation: () => ({
            navigate: jest.fn(),
            dispatch: jest.fn(),
        }),
        useRoute: () => ({
            params: {
                id: '123',
            },
        }),
    };
});
