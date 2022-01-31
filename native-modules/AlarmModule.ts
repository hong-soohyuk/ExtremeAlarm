/**
* This exposes the native ExtremeAlarmModule module as a JS module. This has a
* function 'createExtremeAlarm' which takes the following parameters:
*
* 1. String name: A string representing the name of the event
*/
import { NativeModules } from 'react-native';
const { ExtremeAlarmModule } = NativeModules;
interface ExtremeAlarmInterface {
   createExtremeAlarm(name: string): void;
}
export default ExtremeAlarmModule as ExtremeAlarmInterface;