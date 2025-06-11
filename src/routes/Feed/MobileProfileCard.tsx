import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="top">💻 Profile</div>
      <div className="mid">
        <div className="wrapper">
          <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            css={{ position: "relative" }}
            alt="profile_image"
          />
          <div className="wrapper">
            <div className="top">{CONFIG.profile.name}</div>
            <div className="mid">{CONFIG.profile.role}</div>
            <div className="btm">{CONFIG.profile.bio}</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default MobileProfileCard

const StyledWrapper = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }

  > .top {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .mid {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    > .wrapper {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      > .wrapper {
        height: fit-content;
        display: flex; /* 추가 */
        flex-direction: column; /* 추가 */
        align-items: center; /* 추가: 내부 요소들을 중앙 정렬 */
        text-align: center; /* 추가: 텍스트 자체를 중앙 정렬 */

        > .top {
          font-size: 1.25rem;
          line-height: 1.75rem;
          font-style: italic;
          font-weight: 700;
        }
        > .mid {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: ${({ theme }) => theme.colors.gray11};
        }
        > .btm {
          font-size: 0.875rem;
          line-height: 1.25rem;
          word-wrap: break-word; /* 긴 단어 자동 줄바꿈 */
          overflow-wrap: break-word; /* 최신 표준 */
          text-align: center; /* 텍스트를 가운데 정렬 */
          white-space: normal; /* 줄바꿈 허용 */
          width: 100%; 
        }
      }
    }
  }
`
