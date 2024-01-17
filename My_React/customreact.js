function customRender(reactElement,mainContainer)
{
    // const domElement=document.createElement(reactElement.type);
    // domElement.innerHTML=reactElement.context;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // mainContainer.appendChild(domElement);
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.context;
    for (const prop in reactElement.props) {
      if(prop==='context')continue;
      domElement.setAttribute(prop,reactElement.props[prop])
    }
    domElement.style.color = "red";
    domElement.style.backgroundColor="white";
    domElement.style.fontSize="24px";
    mainContainer.appendChild(domElement);
}
const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    context:"Click Me"
};
const mainContainer=document.querySelector("#root");
customRender(reactElement,mainContainer);