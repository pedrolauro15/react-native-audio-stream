import { EmitterSubscription, NativeEventEmitter, NativeModules } from "react-native";
import { AudioStreamOptions } from "./types/options";
const { Recording } = NativeModules;
const eventEmitter = new NativeEventEmitter(Recording);

interface RnLiveAudio {
  init: (options: AudioStreamOptions) => void;
  start: () => void;
  stop: () => void;
  addRecordingEventListener: (listener: (data: ArrayBuffer) => void) => EmitterSubscription;
}
export default {
  init: (options: AudioStreamOptions) => Recording.init(options),
  start: () => Recording.start(),
  stop: () => Recording.stop(),
  addRecordingEventListener: (listener: (data: ArrayBuffer) => void) =>
    eventEmitter.addListener("recording", listener),
} as RnLiveAudio;
