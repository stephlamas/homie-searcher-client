import React from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

function SearchBar() {
  const { Option } = Select;

 
function handleChange(value) {
  console.log(`selected ${value}`);
}

function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log("search:", val);
}
  return (
    <>
      <Select
        defaultValue="Madrid"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="Paris">Paris</Option>
        <Option value="Berlin">Berlin</Option>
        <Option value="Rome">Rome</Option>
        <Option value="New York">New York</Option>
        <Option value="Madrid">Madrid</Option>
        <Option value="Sydney">Sydney</Option>
        <Option value="Barcelona">Barcelona</Option>
        <Option value="Dubai">Dubai</Option>
      </Select>
      <Select
        // style={{width:200}}
        showSearch
        placeholder="Select a Category"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="flat">Flat</Option>
        <Option value="apartment">Apartment</Option>
        <Option value="penthouse">Penthouse</Option>
        <Option value="Duplex">Duplex</Option>
        <Option value="House">House</Option>
      </Select>
      <Select
        // style={{width:200}}
        showSearch
        placeholder="Select a Country"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="France">Francia</Option>
        <Option value="Spain">Apartment</Option>
        <Option value="Italy">Penthouse</Option>
        <Option value="Germany">Barcelona</Option>
      </Select>
      <Select
        // style={{width:200}}
        showSearch
        placeholder="Select a Condition"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="New">New</Option>
        <Option value="Second hand">Second hand</Option>
      </Select>
      <Button as="input" type="submit" value="Submit" />
    </>
  );
}

export default SearchBar;



