import React from "react";
import _ from "loadsh";

const useDebounce = (cb, delay) => {
  // const inputsRef = React.useRef(cb); // mutable ref like with useThrottle
  // React.useEffect(() => {
  //   inputsRef.current = { cb, delay };
  // }); //also track cur. delay
  // return React.useCallback(
  //   _.debounce(
  //     (...args) => {
  //       if (inputsRef.current.delay === delay && isMounted())
  //         inputsRef.current.cb(...args);
  //     },
  //     delay,
  //     options
  //   ),
  //   [delay, _.debounce]
  // );
};

export default useDebounce;
