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
ReactDOM.render(element, document.getElementById("root"))

console.log(element)
// output object
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