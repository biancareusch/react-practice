// JSX - declarative
function MainContent(){
    return (
        <h1>Hello World</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root"));


//vanilla JS - imperative
// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program"
// h1.className = "header";
// document.getElementById("root").append(h1);

const element = <h1 className="header">This is JSX</h1>
// ReactDOM.render(element, document.getElementById("root"))
//
// console.log(element)

// output: object:
// {
//      type: "h1",
//      key: null,
//      ref: null,
//      props: {
//          className: "header",
//          children: "This is JSX"
//      },
//      _owner: null,
//      _store: {}
// }
const root = document.getElementById("root");

const page = (
    <div>
        <h1 className="header">My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by some very skilled people</li>
        </ol>
    </div>
)
//
// document.getElementById("root").append(JSON.stringify(page))
ReactDOM.render(page, root)


// Challenge:
const nav = (
    <nav>
        <h1>Example page</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(nav,root)

// Challenge









