import { EmitterSubscription, NativeEventEmitter, NativeModules } from "react-native";
import { AudioStreamOptions } from "./types/options";
const { Recording } = NativeModules;
const eventEmitter = new NativeEventEmitter(Recording);

interface ExportData {
  init: (options: AudioStreamOptions) => void;
  start: () => void;
  stop: () => void;
  addRecordingEventListener: (listener: (data: any) => void) => EmitterSubscription;
}
export default {
  init: (options: AudioStreamOptions) => Recording.init(options),
  start: () => Recording.start(),
  stop: () => Recording.stop(),
  addRecordingEventListener: (listener: (data: any) => void) =>
    eventEmitter.addListener("recording", listener),
} as ExportData;
