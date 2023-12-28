import { useState, useRef, useCallback } from "react";
import Calender from "../components/calender";
import { Button, Menu, MenuButton, MenuList, Icon } from "@chakra-ui/react";
import {
  FaQuestionCircle,
  FaUserFriends,
  FaSignOutAlt,
  FaComments,
  FaChevronRight,
} from "react-icons/fa";
import PortalPopup from "../components/portal-popup";
import Dashbaord from "../components/dashbaord";
import styles from "./index.module.css";

const DashboardEmptyStateYearly = () => {
  const calendarRef = useRef(null);
  const [isCalenderPopupOpen, setCalenderPopupOpen] = useState(false);

  const openCalenderPopup = useCallback(() => {
    setCalenderPopupOpen(true);
  }, []);

  const closeCalenderPopup = useCallback(() => {
    setCalenderPopupOpen(false);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.dashboardEmptyStateYearly}>
        <div className={styles.background}>
          <div className={styles.backgroundChild} />
        </div>
        <div className={styles.dashboardEmptyStateYearlyChild} />
        <div className={styles.dashboardEmptyStateYearlyItem} />
        <div className={styles.dashboardEmptyStateYearlyInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.dashboardEmptyStateYearlyChild1} />
        <div className={styles.dashboardEmptyStateYearlyChild2} />
        <img className={styles.groupIcon} alt="" src="/group-20464@2x.png" />
        <img className={styles.vectorIcon} alt="" src="/vector-2@2x.png" />
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.week}>1 Week</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.month}>1 Month</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.year}>1 Year</div>
          </div>
        </div>
        <div className={styles.salesOverview}>Sales Overview</div>
        <div className={styles.div}>
          <span>₦ 0</span>
          <span className={styles.span}>.00</span>
        </div>
        <div className={styles.totalSold}>Total Sold</div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild1} />
          <div className={styles.div1}>0</div>
          <div className={styles.total}>Total</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild1} />
          <div className={styles.div1}>0</div>
          <div className={styles.available}>Available</div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild1} />
          <div className={styles.div1}>0</div>
          <div className={styles.soldOut}>Sold Out</div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild4} />
          <div className={styles.div4}>0</div>
          <div className={styles.total1}>Total</div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild5} />
          <div className={styles.div5}>0</div>
          <div className={styles.new}>New</div>
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild4} />
          <div className={styles.div6}>0</div>
          <div className={styles.active}>Active</div>
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.groupChild4} />
          <div className={styles.div6}>0</div>
          <div className={styles.active}>Inactive</div>
        </div>
        <div className={styles.topSelling}>Top Selling</div>
        <div className={styles.viewAllParent}>
          <div className={styles.viewAll}>View all</div>
          <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
        </div>
        <div className={styles.viewAllGroup}>
          <div className={styles.viewAll}>View all</div>
          <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
        </div>
        <div className={styles.wholeUnitsSold}>Whole units sold</div>
        <div className={styles.none}>None</div>
        <div className={styles.propertyIconParent}>
          <img
            className={styles.propertyIcon}
            alt=""
            src="/property-icon@2x.png"
          />
          <div className={styles.viewAll}>Property Overview</div>
        </div>
        <div className={styles.div8}>0</div>
        <div className={styles.fractionsAvailable}>Fractions available</div>
        <div className={styles.div9}>0</div>
        <div className={styles.welcomeToYour}>Welcome to your Dashboard</div>
        <div className={styles.showingOverviewJan}>
          Showing overview Jan 2022 - Sep 2022
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-12749@2x.png"
          />
          <div className={styles.hiAhmed}>Hi Ahmed</div>
        </div>
        <div className={styles.dashboardEmptyStateYearlyChild3} />
        <div className={styles.dashboardEmptyStateYearlyChild4} />
        <div className={styles.div10}>1/5</div>
        <div className={styles.groupContainer}>
          <img className={styles.frameItem} alt="" src="/group-20464@2x.png" />
          <img className={styles.frameInner} alt="" src="/group-20463@2x.png" />
        </div>
        <div className={styles.div11}>
          <span>₦ 0</span>
          <span className={styles.span}>.00</span>
        </div>
        <div className={styles.totalOutstandingBalance}>
          Total Outstanding Balance
        </div>
        <div className={styles.outstandingBalance}>Outstanding Balance</div>
        <div className={styles.rectangleParent7}>
          <div className={styles.groupChild8} />
          <div className={styles.groupChild9} />
        </div>
        <div className={styles.none1}>None</div>
        <div className={styles.div12}>₦ 0.00</div>
        <div className={styles.dashboardEmptyStateYearlyChild5} />
        <img className={styles.image2Icon} alt="" src="/image-1@2x.png" />
        <div className={styles.profileParent}>
          <img className={styles.profileIcon} alt="" src="/profile@2x.png" />
          <div className={styles.customersOverview}>Customers Overview</div>
        </div>
        <div className={styles.viewAllContainer}>
          <div className={styles.viewAll}>View all</div>
          <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
        </div>
        <div className={styles.listingOverview}>Listing Overview</div>
        <div className={styles.noneParent}>
          <div className={styles.none2}>None</div>
          <div className={styles.groupChild10} />
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.rectangleParent8}>
          <div className={styles.groupChild11} />
          <div className={styles.div13}>₦ 0.00</div>
          <div className={styles.deposit}>Deposit</div>
          <div className={styles.frameParent}>
            <img className={styles.frameIcon3} alt="" src="/frame@2x.png" />
            <div className={styles.veergeAssistant}>0%</div>
          </div>
        </div>
        <div className={styles.dashboardEmptyStateYearlyChild6} />
        <div className={styles.div15}>₦ 0.00</div>
        <div className={styles.balance}>Balance</div>
        <div className={styles.dashboardEmptyStateYearlyChild7} />
        <div className={styles.div16}>
          <span>₦ 0</span>
          <span className={styles.span}>.00</span>
        </div>
        <div className={styles.dashboardEmptyStateYearlyChild8} />
        <img className={styles.bookmark1Icon} alt="" src="/bookmark-1@2x.png" />
        <div className={styles.div17}>0</div>
        <div className={styles.numberOfWatchlists}>Number of watchlists</div>
        <div className={styles.rectangleParent9}>
          <div className={styles.groupChild11} />
          <div className={styles.div13}>₦ 0.00</div>
          <div className={styles.deposit}>Withdrawal</div>
          <div className={styles.frameGroup}>
            <img className={styles.frameIcon3} alt="" src="/frame@2x.png" />
            <div className={styles.veergeAssistant}>0%</div>
          </div>
        </div>
        <img
          className={styles.dashboardEmptyStateYearlyChild9}
          alt=""
          src="/group-20471@2x.png"
        />
        <div className={styles.janParent}>
          <div className={styles.jan}>Jan</div>
          <div className={styles.jan}>Feb</div>
          <div className={styles.jan}>Mar</div>
          <div className={styles.jan}>Apr</div>
          <div className={styles.jan}>May</div>
          <div className={styles.jan}>Jun</div>
          <div className={styles.jan}>Jul</div>
          <div className={styles.jan}>Aug</div>
          <div className={styles.jan}>Sep</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild13} alt="" src="/vector-4@2x.png" />
          <div className={styles.mostViewed}>Most viewed</div>
        </div>
        <div className={styles.noneGroup}>
          <div className={styles.none2}>None</div>
          <div className={styles.groupChild14} />
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.vectorGroup}>
          <img className={styles.groupChild15} alt="" src="/vector-5@2x.png" />
          <div className={styles.mostViewed}>Most shared</div>
        </div>
        <div className={styles.noneContainer}>
          <div className={styles.none2}>None</div>
          <div className={styles.groupChild16} />
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.mostWatchlisted}>Most watchlisted</div>
        <img className={styles.bookmark2Icon} alt="" src="/bookmark-2@2x.png" />
        <div className={styles.downlaodReportState}>
          <img className={styles.frameIcon5} alt="" src="/frame@2x.png" />
          <div className={styles.viewAll}>View Transactions</div>
          <img className={styles.frameIcon5} alt="" src="/frame@2x.png" />
        </div>
        <img
          className={styles.dashboardEmptyStateYearlyChild10}
          alt=""
          src="/vector-3@2x.png"
        />
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <div className={styles.fiRrBulbParent}>
          <img className={styles.frameIcon} alt="" src="/firrbulb@2x.png" />
          <div className={styles.veergeAssistant}>Veerge Assistant</div>
          <img
            className={styles.frameIcon}
            alt=""
            src="/firrcrosscircle@2x.png"
          />
        </div>
        <div className={styles.endToEndEncryptionParent}>
          <div className={styles.endToEndEncryption}>End-to-end encryption</div>
          <img className={styles.fiRrLockIcon} alt="" src="/firrlock@2x.png" />
        </div>
        <div className={styles.developerPortalHeader}>
          <Dashbaord
            frame="/frame@2x.png"
            notification1="/notification-1@2x.png"
            setting2="/setting-2@2x.png"
            infoCircle1="/info-circle-1@2x.png"
            releaseNote="Help Centre"
            component2="/component-2@2x.png"
            customers="Users"
            finance="Account"
            activity1="/activity-1@2x.png"
            insight="Settings"
            frame1="/frame@2x.png"
            showFrameDiv={false}
            frameDivVisible={false}
            showComponent2Icon={false}
            showComponent9={false}
            dashbaordWidth="100%"
            dashbaordHeight="100%"
            dashbaordPosition="absolute"
            dashbaordTop="0%"
            dashbaordRight="0%"
            dashbaordBottom="0%"
            dashbaordLeft="0%"
            activity1IconOpacity="0"
            component9BackgroundColor="#fff"
            newListingColor="#191919"
          />
          <img
            className={styles.iconlylightsetting}
            alt=""
            src="/iconlylightsetting@2x.png"
          />
          <div className={styles.newSet}>
            <img
              className={styles.frameInner}
              alt=""
              src="/iconlyboldplus@2x.png"
            />

            <button
              className={styles.calendar}
              ref={calendarRef}
              onClick={openCalenderPopup}
            >
              <img className={styles.fill1Icon} alt="" src="/fill-1@2x.png" />
              <img className={styles.fill4Icon} alt="" src="/fill-4@2x.png" />
              <img className={styles.fill6Icon} alt="" src="/fill-6@2x.png" />
              <img className={styles.fill9Icon} alt="" src="/fill-9@2x.png" />
            </button>

            <img
              className={styles.notification1Icon}
              alt=""
              src="/notification-2@2x.png"
            />
          </div>
          <div className={styles.logo}>
            <img
              className={styles.inscentive1Icon}
              alt=""
              src="/inscentive-1@2x.png"
            />
            <div className={styles.forMainstone}>For Mainstone</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <img className={styles.frameIcon3} alt="" src="/frame@2x.png" />
          <div className={styles.veergeAssistant}>0%</div>
        </div>
        <div className={styles.purchaseParent}>
          <div className={styles.viewAll}>Purchase</div>
          <div className={styles.frameParent1}>
            <img className={styles.frameIcon3} alt="" src="/frame@2x.png" />
            <div className={styles.veergeAssistant}>0%</div>
          </div>
        </div>

        <Menu onClose={toggleDropdown}>
          <MenuButton
            as={Button}
            className={styles.component13}
            onClick={toggleDropdown}
          >
            <img
              className={styles.component32Icon}
              alt=""
              src="/component-32@2x.png"
            />
            <div className={styles.ahmedAli}>Ahmed Ali</div>
            <img
              className={styles.frameIcon9}
              alt=""
              src={isOpen ? "/frame-3@2x.png" : "/frame1@2x.png"}
              style={{
                width: isOpen ? "15px" : "30px",
                height: isOpen ? "15px" : "30px",
                left: isOpen ? "85%" : "81%",
                top: isOpen ? "38%" : "20%",
              }}
            />
          </MenuButton>
          <MenuList
            bg="white"
            border="1px solid #ccc"
            borderRadius="4px"
            padding="4px 0"
            width="180px"
            height="100px"
            fontSize="medium"
          >
            <div
              style={{
                position: "absolute",
                top: "15%",
                borderBottom: "1px solid #ccc",
                width: "100%",
              }}
            >
              <Icon as={FaComments} color="grey" mr="2" />
              <span
                style={{
                  position: "absolute",
                  left: "20%",
                }}
              >
                {" "}
                Support Center
              </span>
              <FaChevronRight
                style={{
                  color: "grey",
                  fontSize: "13px",
                  left: "88%",
                  position: "absolute",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                borderBottom: "1px solid #ccc",
                width: "100%",
              }}
            >
              <Icon as={FaUserFriends} color="grey" mr="2" />
              <span
                style={{
                  position: "absolute",
                  left: "20%",
                }}
              >
                Switch Accounts
              </span>
              <FaChevronRight
                style={{
                  color: "grey",
                  fontSize: "13px",
                  left: "88%",
                  position: "absolute",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "80%",
                borderBottom: "1px solid #ccc",
                width: "100%",
              }}
            >
              <Icon as={FaSignOutAlt} color="grey" mr="2" />

              <span
                style={{
                  position: "absolute",
                  left: "20%",
                }}
              >
                Logout
              </span>

              <FaChevronRight
                style={{
                  color: "grey",
                  fontSize: "13px",
                  left: "88%",
                  position: "absolute",
                }}
              />
            </div>
          </MenuList>
        </Menu>
      </div>

      {isCalenderPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom left"
          bottom={20}
          relativeLayerRef={calendarRef}
          onOutsideClick={closeCalenderPopup}
        >
          <Calender onClose={closeCalenderPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DashboardEmptyStateYearly;
