import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) => {
  const styles = {
    container: {
      backgroundColor: `#dadada`,
      color: "#171717",
      border: "none",
      font: "Gilroy",
      fontSize: "20px",
      cursor: "pointer",
      outline: "inherit",
      padding: "15px 70px",
      borderRadius: "20px",
      maxWidth: "350px"
    },
    inner: {
      display: "flex",
      alignItems: "center",
    },
  };
  return (
    <button style={styles.container}>
      <div style={styles.inner}>
        {props.children}
        <FontAwesomeIcon
          icon={["fas", "caret-right"]}
          style={{ fontSize: "30px", marginLeft: "10px" }}
        />
      </div>
    </button>
  );
};
