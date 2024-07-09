import React, { useState } from "react";
import styles from "../styles/Projects.module.css";
import { groupAList, groupBList } from "../datastorage/basic";
import { FaGithub, FaLink, FaHashtag } from "react-icons/fa";
import Modal from "./Modal";

const Projects = () => {
  const [modal, setModal] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getData = (item) => {
    setModal([item]);
    setOpenModal(!openModal);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setOpenModal(!openModal);
    document.body.style.overflow = "unset";
  };

  // 모바일 창크기 띄우기
  const mobileWindow = () => {
    window.open(
      "https://yyuujeong.github.io/mobile-renewal/oldchannel/",
      "_blank",
      "Popup",
      "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=500, height=600, top=30"
    );
  };

  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.projects_title}>프로젝트</h1>
      <div className={styles.projects_container}>
        <div>
          {groupAList.map((item) => (
            <div key={item.id}>
              <ul className={styles.groupA_wrapper}>
                <li>
                  <img src={item.img} alt={item.name} />
                </li>
                <li>
                  <div className={styles.groupA_detail_header}>
                    <h3 className={styles.groupA_project_title}>
                      {item.title}
                    </h3>
                    <ul className={styles.groupA_detail_btns}>
                      <li className={styles.project_detail_btn}>
                        <a href={item.github} target="_blank">
                          <FaGithub className={styles.icon} />
                        </a>
                      </li>
                      <li className={styles.project_detail_btn}>
                        <a href={item.site} target="_blank">
                          <FaLink className={styles.icon} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.groupA_catendate}>
                    <ul>
                      <li>{item.category}</li>
                      <li>{item.date}</li>
                    </ul>
                  </div>
                  <div className={styles.groupA_hashtag}>
                    {item.tags.map((tag) => (
                      <span key={tag.id}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.groupA_detail}>
                    <div className={styles.groupA_detail_wrapper}>
                      {item.infos.map((info) => (
                        <ul>
                          <li>{info}</li>
                        </ul>
                      ))}
                    </div>
                    <div className={styles.groupA_detail_wrapper}>
                      <div className={styles.bookmark_title}>
                        <FaHashtag className={styles.bookmark} />
                        주요 기능
                      </div>
                      {item.descs.map((desc, index) => (
                        <ul key={index}>
                          <li>{desc}</li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.line}></div>
        <div className={styles.groupB_container}>
          {groupBList.map((item) => (
            <div key={item.id}>
              <ul>
                <li className={styles.groupB_wrapper}>
                  <img src={item.img} alt={item.name} />
                  <div className={styles.project_info}>
                    <p className={styles.project_date}>{item.date}</p>
                    <div className={styles.project_hashtag}>
                      {item.tags.map((tag) => (
                        <span key={tag.id}>{tag}</span>
                      ))}
                    </div>
                    <span className={styles.project_category}>
                      {item.category}
                    </span>
                    <h3 className={styles.project_title}>{item.title}</h3>
                    <div>
                      <ul className={styles.project_btns}>
                        <li
                          className={`${styles.project_btn} ${styles.more_info}`}
                        >
                          <a onClick={() => getData(item)}>세부내용</a>
                        </li>
                        <li
                          className={`${styles.project_btn} ${styles.more_info}`}
                        >
                          {item.id < 6 ? (
                            <a href={item.site} target="_blank">
                              사이트
                            </a>
                          ) : (
                            <a target="_blank" onClick={mobileWindow}>
                              사이트
                            </a>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
          {openModal && (
            <Modal
              modal={modal}
              setOpenModal={setOpenModal}
              openmodal={openModal}
              closeModal={closeModal}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
