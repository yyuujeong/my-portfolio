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
            사용자 경험을 고려한 UI/UX 구현과 문제 해결에 관심이 많은 프론트엔드 개발자입니다.
            </li>
            <li>
            React 기반 프로젝트에서 Open API 활용, 상태 관리, UI 구현 경험
            </li>
            <li>
            Express 서버 구축을 통한 API 키 노출 문제 해결 경험
            </li>
            <li>
            문제 분석과 개선을 통해 더 나은 사용자 경험 제공
            </li>
          </ul>
          <div className={styles.profile_text}>
            <ul className={styles.profile_details}>
              <li className={styles.details_left}>
                <a href="https://github.com/yyuujeong" target="_blank"><FaGithub className={styles.icons}/>깃허브: yyuujeong</a>
              </li>
              <li className={styles.details_left}>
                <FaEnvelope className={styles.icons} />
                이메일: imnyj9@gmail.com
              </li>
              <li className={styles.details_left}>
                <FaMobileButton className={styles.icons} />
                핸드폰: 010-2402-7496
              </li>
            </ul>
            <ul className={styles.profile_details}>
              <li className={styles.details_right}>
                UI/UX 반응형 웹디자인&웹퍼블리셔
              </li>
              <li className={styles.details_right}>
              - HTML5, CSS3, JavaScript를 활용한 웹 퍼블리싱 및 반응형 구현
              </li>
              <li className={styles.details_right}>
              - 시맨틱 마크업 및 웹 표준 기반의 웹 제작 프로세스 학습
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
