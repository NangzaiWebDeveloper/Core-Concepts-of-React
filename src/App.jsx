import ConRenInIfElse from "./components/ConRenInIfElse"
import ConRenInInvokeFun from "./components/ConRenInInvokeFun"
import ConRenInSwitchStatement from "./components/ConRenInSwitchStatement"
import ConRenInTernary from "./components/ConRenInTernary"
import ConRenLogicalAndAnd from "./components/ConRenLogicalAndAnd"
import Demo from "./components/Demo"
import ImmediatelyInvokedFun from "./components/immediatelyInvokedFun"
import LoopInsideJsx from "./components/LoopInsideJsx"
import PropsTopic from "./components/ParentAndChildWithProps/PropsTopic"


function App() {

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

        {/* know about how to data pass Parent component to Child component BY props */}
        <PropsTopic title="This is Props" description="In details how to pass props"/>
      </>
  )
}

export default App
