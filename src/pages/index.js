import * as React from "react"

const styles = {
  main: {
    backgroundColor: "#000000",
    minWidth: "100%",
    maxWidth: "100%"
  },
  title: {
    color: "white",
    textAlign: "center"
  }
}

// markup
const IndexPage = () => {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Unlimited Grapes</h1>
    </main>
  )
}

export default IndexPage
