import styles from "./calender.module.css";

const Calender = ({ onClose }) => {
  return (
    <div className={styles.calender}>
      <div className={styles.calenderInner}>
        <div className={styles.arrowLeftParent}>
          <img
            className={styles.arrowLeftIcon}
            alt=""
            src="/arrowleft@2x.png"
          />
          <div className={styles.calendar}>November 2023</div>
          <img
            className={styles.arrowLeftIcon}
            alt=""
            src="/arrowright@2x.png"
          />
        </div>
      </div>
      <div className={styles.cale}>
        <div className={styles.frameParent}>
          <div className={styles.sunWrapper}>
            <div className={styles.sun}>SUN</div>
          </div>
          <div className={styles.monWrapper}>
            <div className={styles.sun}>MON</div>
          </div>
          <div className={styles.monWrapper}>
            <div className={styles.sun}>TUE</div>
          </div>
          <div className={styles.monWrapper}>
            <div className={styles.sun}>WED</div>
          </div>
          <div className={styles.monWrapper}>
            <div className={styles.sun}>THURS</div>
          </div>
          <div className={styles.monWrapper}>
            <div className={styles.sun}>FRI</div>
          </div>
          <div className={styles.monWrapper}>
            <div className={styles.sun}>SAT</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.wrapper}>
            <div className={styles.sun}>29</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.sun}>30</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.sun}>31</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>Nov 1</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>2</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>3</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>4</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>5</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>6</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>7</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>8</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>9</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>10</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>11</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>12</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>13</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>14</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>15</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.wrapper14}>
              <div className={styles.sun}>16</div>
            </div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>17</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>18</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>19</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>20</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>21</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>22</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>23</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>24</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>25</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>26</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>27</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>28</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>29</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>30</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>31</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.sun}>DEC 1</div>
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>2</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>3</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>4</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>5</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>6</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>7</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>8</div>
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>9</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>10</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>11</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>12</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>13</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>14</div>
          </div>
          <div className={styles.nov1Wrapper}>
            <div className={styles.sun}>15</div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <div className={styles.calendar}>Calendar</div>
        </div>
        <img
          className={styles.frameIcon}
          alt=""
          src="/frame@2x.png"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Calender;
