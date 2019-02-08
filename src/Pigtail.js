import SVGs from './resource/SVGs'
import './resource/animation.css'

export default function Pigtail(options) {
    let originElements = [], generateElements = [];
    const _default = {
        stroke: '#000'
    };
    const init = function(options) {
        const myElements = document.querySelectorAll('.pigtail');
        originElements = myElements;

        options = {..._default,...options};

        for ( let i = 0 ; i < originElements.length ; i++ ) 
        {        
            generateElements.push(
                {
                    object: originElements[i],
                    height: originElements[i].offsetWidth,
                    width: originElements[i].offsetWidth
                }
            );
        }        
        make();
    }
    const make = function() {
        for ( let i = 0 ; i < generateElements.length ; i++ )
        {
            let placeholder = document.createElement('span'), svgObj, item;
            item = generateElements[i];
            placeholder.innerHTML = SVGs.getStar(options.stroke);
            placeholder.style.position = 'relative';
            svgObj = placeholder.firstChild;            
            //
            svgObj.style.height = item.height * (2/3);
            svgObj.style.top = (item.height * (-1/3)) + 'px';
            svgObj.style.left = (item.height * (-1/3)) + 'px';
            svgObj.style.position = 'absolute';            
            //            
            item.object.appendChild(placeholder);
        }                
    }
    return init(options);
}