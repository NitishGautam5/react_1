// {} is used in react.createElement to give attribute(props ) to html tag eg:- h1


const heading=React.createElement(
    "h1",

    {
        id:"heading"
         
    },
    "hello word using react ! ")
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)

// react.createelement("h1",{},"")
//                             /\
//                            here we can also give new react.create element which is going
                             // children of the h1
                             
