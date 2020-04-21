import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const capitalizeFirstLetter = str => (
    str.charAt(0).toUpperCase() + str.slice(1)
)

const DropDownBuildInfoWrapper = ({ children, toggle }) => {

    const transitions = useTransition(toggle, null, {
        from: { transform: 'translateY(-10%)' },
        to: { transform: 'translateY(0%)' },
        leave: { transform: 'translateY(10%)' },
    });

    return (
        <>
        {transitions.map(({ item, key, props }) => (
            item && (
                <animated.div style={props} className="dropdown-info" key={key}>
                    { children }
                </animated.div>
            )
        ))}
        </>
    )
}

const BuildTableRow = ({ build }) => {
    const [ rowOpen, setRowOpen ] = useState(false);

    const handleRowClick = () => setRowOpen(!rowOpen);

    return (
        <tr onClick={handleRowClick}>
            <td>
                <button type="button" class="btn btn-light">{build.num}</button>
            </td>
            <td>
                <div className={"statusDiv " + build.status}>
                    {capitalizeFirstLetter(build.status)} 
                </div>
            </td>
            <td>{build.repo}</td>
            <td>{build.plan}</td>
            <td>{build.branch}</td>
            <DropDownBuildInfoWrapper toggle={rowOpen}>
                <div>
                    Start: {build.start} End: {build.end}
                </div>
            </DropDownBuildInfoWrapper>
        </tr>
    );
}

export default BuildTableRow;