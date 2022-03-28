import { useLottie } from "lottie-react";
import designAnimation from "./design.json";


const Designer = () => {
  const options = {
    animationData: designAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);
  return View
}

export default Designer;