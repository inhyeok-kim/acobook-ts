import { useEffect, useLayoutEffect, useRef, useState } from "react"

interface propsType {
    option? : optionType
    onChange : Function
    initial? : boolean
}
interface optionType {
    width? : string
    height? : string
    color? : string
    offColor? : string
    onColor? : string
}

export default function ButtonOnOff({option, onChange, initial} : propsType){

    
    const [value, setValue] = useState(initial);
    useEffect(()=>{
        onChange(value);
        if(circle.current){
            if(value){
                isOn();
            } else {
                isOff();
            }
        }
    },[value]);
    function isOn(){
        if(circle.current){
            circle.current.style.left = `calc(100% - ${circle.current.offsetHeight}px)`;
        }
        setBackColor(onColor);
    }
    function isOff(){
        if(circle.current){
            circle.current.style.left = `0px`;
        }
        setBackColor(offColor);
    }

    const offColor = option && option.offColor ? option.offColor : 'grey'
    const onColor = option && option.onColor ? option.onColor : '#69eb5b'
    const [backColor, setBackColor] = useState(option && option.offColor ? option.offColor : 'grey');

    const wrapperStyleDef = {
        width : option && option.width ? option.width : '45px',
        height : option && option.height ? option.height : '25px',
        position: 'relative' as const
    }
    
    const circleStyle = {
        height : '100%',
        background : option && option.color ? option.color : 'white',
        borderRadius : '100%',
        position: 'absolute' as const,
        zIndex : '1',
        transition : 'left 0.2s',
    }
    
    const backgroundCircleLeft = {
        height : '100%',
        borderRadius : '100% 0px 0px 100%',
        position: 'absolute' as const,
        left : '0px',
        boxSiging : 'border-box',
    }
    const backgroundCircleRight = {
        height : '100%',
        borderRadius : '0px 100% 100% 0px',
        position: 'absolute' as const,
        right : '0px',
        boxSiging : 'border-box',
    }
    
    const backgroundRect = {
        height : '100%',
        width : '100%',
        position: 'absolute' as const,
        boxSiging : 'border-box',
    }

    const wrapper = useRef<HTMLDivElement>(null);
    const circle = useRef<HTMLDivElement>(null);
    const BackgroundCircleLeftRef = useRef<HTMLDivElement>(null);
    const BackgroundCircleRightRef = useRef<HTMLDivElement>(null);
    const backgroundRectRef = useRef<HTMLDivElement>(null);
    let wrapHeight = 0;
    useLayoutEffect(()=>{
        if(wrapper.current){
            wrapHeight = wrapper.current.offsetHeight;
        }
        if(circle.current){
            circle.current.style.width = wrapHeight + 'px';
        }
        if(BackgroundCircleLeftRef.current){
            BackgroundCircleLeftRef.current.style.width = wrapHeight + 'px';
        }
        if(BackgroundCircleRightRef.current){
            BackgroundCircleRightRef.current.style.width = wrapHeight + 'px';
        }
        if(backgroundRectRef.current){
            backgroundRectRef.current.style.left = (wrapHeight -1) + 'px';
            backgroundRectRef.current.style.width = 'calc(100% - ' + ((wrapHeight *2 ) -2) + 'px)';
        }
    },[]);

    return (
        <div ref={wrapper} style={wrapperStyleDef}
            onClick={()=>{setValue(curr=>!curr)}}
        >
            <div ref={circle} style={circleStyle}>

            </div>
            <div ref={BackgroundCircleLeftRef} style={{...backgroundCircleLeft,...{background : backColor}}}>

            </div>
            <div ref={backgroundRectRef} style={{...backgroundRect,...{background : backColor}}}>

            </div>
            <div ref={BackgroundCircleRightRef} style={{...backgroundCircleRight,...{background : backColor}}}>

            </div>
        </div>
    )
}

type objType = {
    [key : string] : string;
}
function deepClone(obj : objType){
    const keys = Object.keys(obj);
    const newObj : any = {};
    keys.forEach(key=>{
        newObj[key] = obj[key];
    });
    return newObj;
}