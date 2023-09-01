import React from "react";
import "./Page.css";
import BasicModal from "../components/ModalPopUp";
import Button from "../components/Button";
import InputField from "../components/Input";
import OptionSelect from "../components/OptionSelect";
import { Link } from "react-router-dom";
import axios from "axios";

const Page = () => {
  const options = [
    {
      label: "First Name",
      value: "first_name",
    },
    {
      label: "Last Name",
      value: "last_name",
    },
    {
      label: "Gender",
      value: "gender",
    },
    {
      label: "Age",
      value: "age",
    },
    {
      label: "Account Name",
      value: "account_name",
    },
    {
      label: "City",
      value: "city",
    },
    {
      label: "State",
      value: "state",
    },
  ];

  const [popup, setPopup] = React.useState(false);
  const [box, setBox] = React.useState(false);
  const [option, setOption] = React.useState(options);
  const [username, setUsername] = React.useState("");
  const [dropValue, setDropValue] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState([]);

  const handleChange = (e, name) => {
    setDropValue({ label: name.label, value: name.value });
  };

  const onSubmit = () => {
    if(box){
      const dataToSend = {
        segment_name: username,
        schema: selectedValue.map((k) => {
          let val = {};
          let key = String(k.label).toLowerCase().replaceAll(" ", "_");
          let value = k.label;
          val[key] = value;
          return val;
        }),
      };
  
      const headers = {
        "Content-Type": "application/json",
        Authorization: "JWT fefege...",
      };
  
      axios
        .post(
          "https://webhook.site/f601bf5d-a947-4fb1-9173-899cce202d28",
          dataToSend,
          {
            headers: headers,
          }
        )
        .then((response) => {
          console.log("POST request successful");
          console.log("Response:", response.data);
        })
        .catch((error) => {
          console.error("POST request failed");
          console.error("Error:", error);
        });
  
      setPopup(true);
    }
    
  };
  const handleBox = () => {
    if (dropValue === null) {
      alert("Please select a field to add");
    } else {
      setSelectedValue([...selectedValue, dropValue]);
      setOption(option.filter((x) => x.label !== dropValue.label));
      setDropValue(null);
      setBox(true);
    }
  };
  const removeElement = (val) => {
    let newVal = selectedValue.filter((y) => y.label !== val.label);
    let Elements = newVal.map((x) => x.label);
    console.log(Elements);
    setSelectedValue(newVal);
    setOption(options.filter((x) => !Elements.includes(x.label)));
    if(val){
      setBox(!box);
    }
  };

  return (
    <div>
      <div>
        <div className="segment-header">Welcome to save segment page</div>
        <div
          className="segment-button"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "5%",
          }}
        >
          <Button
            name={"Save segment"}
            boxShadow="0px 5px 10px 0px #00000040"
            bgColor="#052955"
            textColor="#fff"
            fontSize="18px"
            fontWeight="400"
            width="170px"
            height="40px"
            onClick={() => {
              setPopup(true);
            }}
          >
            {" "}
          </Button>
        </div>
      </div>
      <BasicModal
      
        open={popup}
        title={"Saving Segment"}
        content={
          <div>
            <div
              style={{
                height: "100px",
                width: "400px",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <InputField
                label={"Enter the Name of the Segment"}
                name="segment"
                placeholder="Name of the segment"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div style={{ height: "auto", width: "380px" }}>
              To save your segment you need to add the schemas to build the
              query
              {box && (
                <React.Fragment>
                  <div
                    style={{
                      border: "3px solid blue",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "column",
                      width:"400px",
                      height:"auto"
                    }}
                  >
                    {selectedValue.map((x) => {
                      return (
                        <div style={{display:"flex",justifyContent:"center",flexDirection:"row"}}>
                          <OptionSelect
                            style={{ marginLeft: "15px" }}
                            width="300px"
                            value={x}
                          />

                          <span
                            style={{
                              cursor: "pointer",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "60px",
                              fontSize: "20px",
                            }}
                            onClick={() => removeElement(x)}
                          >
                            X
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  {/* {selectedValue.map((x) => (
                    <div
                      style={{
                        border: "3px solid blue",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <OptionSelect style={{marginLeft : "15px"}} width="300px" value={x} />
                      <span
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "60px",
                          fontSize:"20px"
                        }}
                        onClick={() => removeElement(x)}
                      >
                        X
                      </span>
                    </div>
                  ))} */}
                </React.Fragment>
              )}
              <OptionSelect
                width="300px"
                options={option}
                value={dropValue}
                onChange={handleChange}
                placeholder="Add schema to segment"
              />
              <Link onClick={handleBox}> + Add new schema</Link>
            </div>
          </div>
        }
        onSubmit={onSubmit}
        handleClose={() => {
          setPopup(false);
          setBox(false);
        }}
      />
    </div>
  );
};

export default Page;
