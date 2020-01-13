import React, {useState} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {Link} from "react-router-dom";

const DropdownCustom = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Genres
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>

                <DropdownItem divider/>
                <Link to={"/Action"}>
                    <DropdownItem>Action</DropdownItem>
                </Link>
                <Link to={"/Drama"}>
                    <DropdownItem>Drama</DropdownItem>
                </Link>
                <Link to={"/Thriller"}>
                    <DropdownItem>Thriller</DropdownItem>
                </Link>
                <DropdownItem divider/>
            </DropdownMenu>
        </Dropdown>
    );
}

export default DropdownCustom;