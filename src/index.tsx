import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line @typescript-eslint/no-redeclare

// interface IAppProps {
//   name: string; // переменная name имеет тип string
//   surname: string;
//   link: string;
// }

// class WhoAmI extends Component<IAppProps, { years: number }> {
//   // nextYear: () => void;
//   // eslint-disable-next-line @typescript-eslint/no-useless-constructor
//   constructor(props: IAppProps) {
//     super(props);
//     // this.state = {
//     //   years: 26,
//     // };
//     // this.nextYear = this.nextYear.bind(this);
//     // this.nextYear = () => {
//     //   this.setState((state) => ({
//     //     years: state.years + 1,
//     //   }));
//     // };
//   }
//   state = {
//     years: 26,
//   };
//   nextYear = () => {
//     this.setState((state) => ({
//       years: state.years + 1,
//     }));
//   };

//   // nextYear() {
//   //   this.setState((state) => ({
//   //     years: state.years + 1,
//   //   }));
//   // }
//   render() {
//     const { name, surname, link } = this.props;
//     const { years } = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear}>++</button>
//         <h1>
//           My name is {name}, surname - {surname},years = {years}
//         </h1>
//         <a href={link}> My profile </a>
//       </>
//     );
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="Johon" surname="Smith" link="facebook.com" />
//       <WhoAmI name="Ivan" surname="Ivk" link="vk.com" />
//       <WhoAmI name="Yvgen" surname="Smith" link="linkendin.com" />
//     </>
//   );
// };

ReactDOM.render(
  <React.StrictMode>{<App />}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
