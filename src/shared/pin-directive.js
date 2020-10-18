
function applyStyle(element, binding){
    Object.keys(binding.value).forEach( (keyVar) =>{
        element.style[keyVar] = binding.value[keyVar];
    });
    element.style.position = 'absolute';
}
/*
export default{
    
    bind: (element, binding ) => {

        applyStyle( element, binding );
        
    }, 
    update: (element, binding) => {
        applyStyle(element, binding);
    }
    
} */

/** bind and update at once  */
export default function( element, binding) {
    applyStyle( element, binding );
}