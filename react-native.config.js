module.exports = {
  dependency: {
    platforms: {
      ios: { project: "lib/ios/react-native-recording.podspec" },
      android: { sourceDir: "lib/android" }
    }
  },
  dependencies: {
    "rn-live-audio": {
      root: __dirname,
      platforms: {
        ios: { sourceDir: __dirname + "/lib/ios" },
        android: {
          sourceDir: __dirname + "/lib/android",
          packageImportPath: "import com.s4s.react.rnliveaudio.RecordingPackage;",
          packageInstance: "new RecordingPackage()"
        }
      }
    }
  }
};
