import { useMemo } from "react";
import styles from "./dashbaord.module.css";

const Dashbaord = ({
  frame,
  notification1,
  setting2,
  infoCircle1,
  releaseNote,
  component2,
  customers,
  finance,
  activity1,
  insight,
  frame1,
  showFrameDiv,
  frameDivVisible,
  showComponent2Icon,
  showComponent9,
  dashbaordWidth,
  dashbaordHeight,
  dashbaordPosition,
  dashbaordTop,
  dashbaordRight,
  dashbaordBottom,
  dashbaordLeft,
  activity1IconOpacity,
  component9BackgroundColor,
  newListingColor,
}) => {
  const dashbaordStyle = useMemo(() => {
    return {
      width: dashbaordWidth,
      height: dashbaordHeight,
      position: dashbaordPosition,
      top: dashbaordTop,
      right: dashbaordRight,
      bottom: dashbaordBottom,
      left: dashbaordLeft,
    };
  }, [
    dashbaordWidth,
    dashbaordHeight,
    dashbaordPosition,
    dashbaordTop,
    dashbaordRight,
    dashbaordBottom,
    dashbaordLeft,
  ]);

  const activity1IconStyle = useMemo(() => {
    return {
      opacity: activity1IconOpacity,
    };
  }, [activity1IconOpacity]);

  const component9Style = useMemo(() => {
    return {
      backgroundColor: component9BackgroundColor,
    };
  }, [component9BackgroundColor]);

  const newListingStyle = useMemo(() => {
    return {
      color: newListingColor,
    };
  }, [newListingColor]);

  return (
    <div className={styles.dashbaord} style={dashbaordStyle}>
      <div className={styles.dashbaordChild} />
      {showFrameDiv && (
        <div className={styles.frameParent}>
          <img className={styles.frameIcon} alt="" src={frame} />
          <img
            className={styles.notification1Icon}
            alt=""
            src={notification1}
          />
          <img className={styles.notification1Icon} alt="" src={setting2} />
        </div>
      )}
      <div className={styles.dashbaordItem} />
      {frameDivVisible && (
        <div className={styles.infoCircle1Parent}>
          <img className={styles.home1Icon} alt="" src={infoCircle1} />
          <div className={styles.releaseNote}>{releaseNote}</div>
        </div>
      )}
      {showComponent2Icon && (
        <img className={styles.component2Icon} alt="" src={component2} />
      )}
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.home1Parent}>
            <img className={styles.home1Icon} alt="" src="/home-1@2x.png" />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.location1Parent}>
            <img className={styles.home1Icon} alt="" src="/location-1@2x.png" />
            <div className={styles.releaseNote}>Listings</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.profile1Parent}>
            <img className={styles.home1Icon} alt="" src="/profile-1@2x.png" />
            <div className={styles.releaseNote}>{customers}</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.wallet1Parent}>
            <img className={styles.home1Icon} alt="" src="/wallet-1@2x.png" />
            <div className={styles.releaseNote}>{finance}</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.wallet1Parent}>
            <img className={styles.home1Icon} alt="" src="/calendar-1@2x.png" />
            <div className={styles.releaseNote}>Request</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.activity1Parent}>
            <img
              className={styles.home1Icon}
              alt=""
              src={activity1}
              style={activity1IconStyle}
            />
            <div className={styles.releaseNote}>{insight}</div>
          </div>
        </div>
      </div>
      {showComponent9 && (
        <div className={styles.component9} style={component9Style}>
          <img className={styles.home1Icon} alt="" src={frame1} />
          <div className={styles.releaseNote} style={newListingStyle}>
            New Listing
          </div>
        </div>
      )}
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild3} />
        <img className={styles.search1Icon} alt="" src="/search-1@2x.png" />
        <div className={styles.searchPropertiesCustomer}>
          Search... properties, customers here
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
