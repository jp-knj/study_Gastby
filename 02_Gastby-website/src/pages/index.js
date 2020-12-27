import React from "react"
import Layout from "../components/layout"

// Context
import { useGlobalStateContext, useGlobalDispatchContext } from "../context/globalContext"

// Components
import HomeBanner from "../components/homePage/HomeBanner";
import HomeContent from "../components/homePage/HomeContent";

const IndexPage = props => {

  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent/>
    </Layout>
  )
}

export default IndexPage
