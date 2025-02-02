const elem = React.createElement("div", {id:"headings"}, 
[React.createElement("h2", {}, "sdsdsd sa"),React.createElement("h2", {}, "sd sa")]
);//this is jsx object with children and props and its not h1 tag 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elem);