export default function Header({appName, appDescription}) {
  return (
    <header className="header">
        <h1>{appName}</h1>
        <p>{appDescription}</p>
    </header>
  )
}


// export default function Header(props) {
//   return (
//     <header className="header">
//         <h1>{props.appName}</h1>
//         <p>{props.appDescription}</p>
//     </header>
//   )
// }