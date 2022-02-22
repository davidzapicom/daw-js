/* ELEMENTS
    rootNode ... document.documentElement
        children
        parentElement
        previousElementSibling
        nextElementSibling
        firstElementChild
        lastElementChild
*/
let domArrayElements;
function processDOMelements() {
    domArrayElements = domToArrayElements(document);
    printArrayElements(domArrayElements);
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