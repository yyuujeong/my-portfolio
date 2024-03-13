import React, { useState } from "react";
import styles from "../styles/Projects.module.css";
import { projectList } from "../datastorage/basic";
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
        {projectList.map((item) => (
          <div className={styles.projects_wrapper} key={item.id}>
            <ul>
              <li className={styles.project}>
                <img src={item.img} alt={item.name} />
                <div className={styles.project_info}>
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
                        {item.id < 5 ? (
                          <a href={item.site} target="_blank">
                            사이트
                          </a>
                        ) : (
                          <a
                            target="_blank"
                            onClick={mobileWindow}
                          >
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
    </section>
  );
};

export default Projects;
