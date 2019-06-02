import React, { useEffect, useRef } from "react"
import Reward from "react-rewards"
import { keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Animation from "../components/animation"

const spaceOut = keyframes`
  from {
    letter-spacing: 0;
    font-size: 50px;
  }

  to {
    letter-spacing: 4.3px;
    font-size: 60px;
  }
`

const enter = keyframes`
  from {
  opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const IndexPage = () => {
  const reward = useRef(null)
  useEffect(() => {
    reward.current.rewardMe()
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <div
        css={`
          display: flex;
          width: 100vw;
          height: 100vh;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        `}
      >
        <Reward
          config={{
            angle: 90,
            decay: 0.91,
            spread: 80,
            startVelocity: 35,
            elementCount: 300,
            elementSize: 8,
            zIndex: 10,
            springAnimation: true,
          }}
          ref={reward}
          type="confetti"
        >
          <h1
            css={`
              font-weight: bold;
              animation: ${spaceOut} 2s linear;
              animation-fill-mode: forwards;
              cursor: pointer;
            `}
            onClick={() => reward.current.rewardMe()}
          >
            JReact
          </h1>
        </Reward>
        <Animation />
        <code
          css={`
            font-family: monospace;
            font-size: 24px;
            animation: ${enter} 2s linear;
            animation-fill-mode: forwards;
            opacity: 0;
            animation-delay: 3s;
          `}
        >
          npm i jreact-lib
        </code>
        <ul
          css={`
            font-family: sans-serif;
            list-style: none;
            margin: 0;
            padding: 0;
            margin-top: 20px;
            text-transform: uppercase;
            opacity: 0;
            animation: ${enter} 2s linear;
            animation-fill-mode: forwards;
            animation-delay: 3s;
          `}
        >
          <li>
            <a
              css={`
                color: white;
                margin-right: 10px;
              `}
              href="https://github.com/walaura/jquery-jsx-pragma"
              target="_blank"
            >
              Github
            </a>
            <a
              css={`
                color: white;
              `}
              href="https://www.npmjs.com/package/jreact-lib"
              target="blank"
            >
              NPM
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
