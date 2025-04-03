import ClickEventFunction from "./components/ClickEvent/ClickEventFunction"
import FormSubmitPart from "./components/ClickEvent/FormSubmitPart"
import ConRenInIfElse from "./components/ConRenInIfElse"
import ConRenInInvokeFun from "./components/ConRenInInvokeFun"
import ConRenInSwitchStatement from "./components/ConRenInSwitchStatement"
import ConRenInTernary from "./components/ConRenInTernary"
import ConRenLogicalAndAnd from "./components/ConRenLogicalAndAnd"
import Demo from "./components/Demo"
import ImmediatelyInvokedFun from "./components/immediatelyInvokedFun"
import LoopInsideJsx from "./components/LoopInsideJsx"
import PassingDataByFunction from "./components/ParentAndChildWithProps/PassingDataByFunction"
import PassingDataByProps from "./components/ParentAndChildWithProps/PassingDataByProps"
import PropsTopic from "./components/ParentAndChildWithProps/PropsTopic"
import AttributeWithUseRef from "./components/ReactHook/AttributeWithUseRef"
import ExpensiveComputation from "./components/ReactHook/ExpensiveComputation"
import MutableValue from "./components/ReactHook/MutableValue"
import UseRef from "./components/ReactHook/UseRef"
import UseRefInInput from "./components/ReactHook/UseRefInInput"
import HelloUseState from "./components/ReactHook/UseStateMethod/HelloUseState"
import ImmutableObjectUseState from "./components/ReactHook/UseStateMethod/ImmutableObjectUseState"
import ToDoWithUseState from "./components/ReactHook/UseStateMethod/ToDoWithUseState"


function App() {

  // if we hold to be that is parent component 
  // const itemObj ={
  //   name : "Abuzam Nangzai Singha",
  //   designation : "Frontend Developer",
  //   age : 28,
  //   hometown : "Moulvibazar",
  // }

  // const btnClick =()=>{
  //   alert("Hello Nangzai")
  // }

  return (  
      <>
        {/* <Demo/> */}
        {/* <ImmediatelyInvokedFun/> */}
        {/* <LoopInsideJsx/> */}

        {/* conditional rendering using if else. */}
        {/* <ConRenInIfElse/> */}

        {/* conditional rendering using Switch Statement. */}
        {/* <ConRenInSwitchStatement/> */}

        {/* conditional rendering using Ternary Operator. */}
        {/* <ConRenInTernary/> */}

        {/* conditional rendering using Logical &&. */}
        {/* <ConRenLogicalAndAnd/> */}

        {/* conditional rendering using Immediately invoke function */}
        {/* <ConRenInInvokeFun/> */}

        {/* props topics start from here  */}

        {/* know about how to data pass Parent component to Child component BY props */}
        {/* <PropsTopic title="This is Props" description="In details how to pass props"/> */}

        {/* passing Object data by props */}
        {/* <PassingDataByProps item ={itemObj}/> */}

        {/* passing Function data by props */}
        {/* <PassingDataByFunction childClickBtn={btnClick} /> */}

        {/* Click Event Function */}
        {/* <ClickEventFunction/> */}

        {/* input form submit */}
        {/* <FormSubmitPart/> */}

        {/* #---React Hooks---#  */}

        {/*....useRef() method is part of React Hook....  */}

        {/*change innerText/innerHTML by useRef method */}
        {/* <UseRef/> */}

        {/*change Attributes value by useRef method*/}
        {/* <AttributeWithUseRef/> */}

        {/*using useRef in input element*/}
        {/* <UseRefInInput/> */}

        {/*using useRef control CSS class         !!! this is not completed for tailwind issue*/}   
        {/* <UseRefControlCss/> */}

        {/* using useRef create Persisted Mutable Value */}
        {/* <MutableValue/> */}

        {/* useRef Caching Expensive Computation //// means API call 1 times not call again or re-render*/}
        {/* <ExpensiveComputation/> */}

        {/* ....useState() method is part of React Hook....  */}

        {/* <HelloUseState/> */}

        {/* useState Immutable Object */}
        {/* <ImmutableObjectUseState/> */}

        {/* TO-DO application with useState */}
        <ToDoWithUseState/>

      </>
  )
}

export default App

