import { useFonts } from "expo-font";

import GeneralSans_Regular from "./general-sans/GeneralSans-Regular.otf";
import GeneralSans_Bold from "./general-sans/GeneralSans-Bold.otf";

export const loadFonts = () => {
  const [fontsLoaded] = useFonts({
    "GeneralSans-Regular": GeneralSans_Regular,
    "GeneralSans-Bold": GeneralSans_Bold,
  });

  return { fontsLoaded };
};
