import React,{Suspense} from 'react'
const Home=React.lazy(()=>import("./Home"))
const About=React.lazy(()=>import("./About"))

export default function LazyLoad() {
  return (
    <>
    <div>LazyLoad</div>
    <Suspense fallback={<div>Home Page loading....</div>}>
        <Home/>
    </Suspense>
    <Suspense fallback={<div>About Page loading....</div>}>
        <About/>
    </Suspense>
    </>
  )
}
//if any one compenenet is heavy so it load after normal component
