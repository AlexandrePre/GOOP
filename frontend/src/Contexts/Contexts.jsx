// /* eslint-disable camelcase */
// import { createContext, useState } from "react";
// import PropTypes from "prop-types";
// // import { useNavigate } from "react-router-dom";
// // , useEffect, useMemo,
// const CurrentContext = createContext();

// export default CurrentContext;

// export function CurrentContextProvider({ children }) {
//   const [input, setInput] = useState({
//     dateStart: "",
//     dateEnd: "",
//     villeDepart: "",
//     villeArrivee: "",
//   });
//   // eslint-disable-next-line react/jsx-no-constructed-context-values
//   const value = { input, setInput };

//   return (
//     <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>
//   );
// }
// CurrentContextProvider.propTypes = {
//   children: PropTypes.string.isRequired,
// };
