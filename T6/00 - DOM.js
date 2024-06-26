function inicio() {
    console.log(document);
    let DOMnodes = processDOMnodes();
    let DOMElements = processDOMelements();
}

const node_types = [
    "", // no hay nodo
    "ELEMENT NODE", // 1
    "ATTRIBUTE NODE", // 2
    "TEXT NODE",
    "CDATA SECTION NODE",
    "ENTITY REFERENCE NODE",
    "ENTITY NODE",
    "PROCESSING INSTRUCTION NODE",
    "COMMENT NODE",
    "DOCUMENT NODE",
    "DOCUMENT TYPE NODE",
    "DOCUMENT FRAGMENT NODE",
    "NOTATION NODE"
]

/* NODES
    rootNode ... document.getRootNode()
        childNodes // Colección, similar a un array. usar for..of
        parentNode
        parentElement
        previousSibling
        nextSibling
        firstChild
        lastChild        
*/

function processDOMnodes() {
    let domArrayNodes = domToArray(document);
    printArray(domArrayNodes);
    return domArrayNodes;
}

function printArray(array) {
    console.log(array);
}

function domToArray(document) {
    let domArray = [];
    moveDomNodesToArray(document, domArray, 'N0');
    return domArray;    
}

function moveDomNodesToArray(node, domArray, numero) {
    domArray.push([numero ,node_types[node.nodeType].toLowerCase(), node.nodeName, node.id, node.className, node.nodeValue, node]);
    if (node.attributes) {
        for (let i=0; i < node.attributes.length; ++i){
            moveDomNodesToArray(node.attributes.item(i), domArray, numero+'.A'+i.toString().padStart(2,'0'));       
       }
    }
    if (node.childNodes) {
        for (let i=0; i < node.childNodes.length; ++i){
            moveDomNodesToArray(node.childNodes.item(i), domArray, numero+'.N'+i.toString().padStart(2,'0'));
        }
    }
}

/* ELEMENTS
    rootNode ... document.documentElement
        children
        parentElement
        previousElementSibling
        nextElementSibling
        firstElementChild
        lastElementChild
*/

function processDOMelements() {
    let domArrayElements = domToArrayElements(document);
    printArrayElements(domArrayElements);
    return domArrayElements;
}

function printArrayElements(array) {
    console.log(array);
}

function domToArrayElements(document) {
    let domArray = [];
    moveDomElementsToArray(document, domArray, 'E0');
    return domArray;    
}

function moveDomElementsToArray(element, domArray, numero) {
    domArray.push([numero ,element.nodeName, element.id, element.className, element.nodeValue, element]);
    if (element.children) {
        for (let i=0; i < element.children.length; ++i){
            moveDomElementsToArray(element.children.item(i), domArray, numero+'.e'+i.toString().padStart(2,'0'));
        }
    }
}