import React from "react";
import styles from "../styles/AboutSkill.module.css";
import profileImg1 from "../images/profile-img1.png";
import profileImg2 from "../images/profile-img2.png";
import { FaEnvelope, FaMobileButton ,FaGithub, FaGear } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { skillTools } from "../datastorage/basic";

const AboutSkill = () => {
  return (
    <section id="aboutskill" className={styles.aboutskill}>
      <h1 className={styles.about_title}>소개 & 기술</h1>
      <div>
        <img
          src={profileImg1}
          alt="프로필이미지"
          className={styles.profile_img1}
        />
        <div className={styles.about_wrapper}>
          <ul className={styles.profile_sentence}>
            <li>
            리액트로 개발하고 깃허브로 버전 관리를 하여 Vercel을 통해 프로젝트를 배포한 경험이 있습니다.
            </li>
            <li>
            사용자 경험과 편의성을 중시하며 개선 방법을 탐구하고 적용하는 데 집중합니다.
            </li>
            <li>
            TypeScript, SCSS, Zustand 등 다양한 기술을 학습하며, 협업을 통해 사용자 중심의 서비스를 제공하고자 합니다.
            </li>
          </ul>
          <div className={styles.profile_text}>
            <ul className={styles.profile_details}>
              <li className={styles.details_left}>
                <a href="https://github.com/yyuujeong" target="_blank"><FaGithub className={styles.icons}/>깃허브: yyuujeong</a>
              </li>
              <li className={styles.details_left}>
                <FaMobileButton className={styles.icons} />
                핸드폰: 010-2402-7496
              </li>
              <li className={styles.details_left}>
                <FaEnvelope className={styles.icons} />
                이메일: imnyj9@gmail.com
              </li>
            </ul>
            <ul className={styles.profile_details}>
              <li className={styles.details_right}>
                UI/UX 반응형 웹디자인&웹퍼블리셔{"("}디자인&코딩{")"}
              </li>
              <li className={styles.details_right}>
                웹기획, 웹디자인{"("}UIUX{")"} & 웹퍼블리셔, 반응형 웹페이지
                구현
              </li>
              <li className={styles.date}>2022.01 ~ 2022.07</li>
            </ul>
          </div>
        </div>
      </div>
      {skillTools.map((skillTool) => (
        <div>
          <div className={styles.profile_img_wrapper}>
            <img
              src={profileImg2}
              alt="프로필이미지"
              className={styles.profile_img2}
            />
          </div>
          <div className={styles.about_wrapper}>
            <div className={styles.skills_wrapper}>
              <ul>
                <li className={styles.skills_title}>
                  <FaCode className={styles.skills_tools_icons} />
                  기술
                </li>
              </ul>
              <div className={styles.skills_tools_hashtag}>
                {skillTool.skills.map((skill) => (
                  <span key={skill.id}>{skill}</span>
                ))}
              </div>
              <div className={styles.skills_tools_text}>
                <ul>
                  {skillTool.skilldescs.map((skilldesc) => (
                    <li>{skilldesc}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.tools_wrapper}>
              <ul>
                <li className={styles.tools_title}>
                  <FaGear className={styles.skills_tools_icons} />툴
                </li>
              </ul>
              <div className={styles.skills_tools_hashtag}>
                {skillTool.tools.map((tool) => (
                  <span key={tool.id}>{tool}</span>
                ))}
              </div>
              <div className={styles.skills_tools_text}>
                <ul>
                  {skillTool.tooldescs.map((tooldesc) => (
                    <li key={tooldesc.id}>{tooldesc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutSkill;
