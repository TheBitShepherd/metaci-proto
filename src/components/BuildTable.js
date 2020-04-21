import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import BuildTableRow, { DropDownTableRow } from './BuildTableRow';


const BuildTable = () => {
    /*
    In production this would be made into a
    custom hook: useBuilds()
    */
    const [ builds, setBuilds ] = useState([
        {'num': '125009', 'status': 'running', 'repo': 'NPSP', 'plan': 'Feature Test', 'start': 'April 18 1:35 p.m.', 'end':'', 'branch': 'feature/cool-new-feature'},
        {'num': '125008', 'status': 'running', 'repo': 'NPSP', 'plan': 'Feature Test', 'start': 'April 18 1:14 p.m.', 'end':'', 'branch': 'feature/fix-account-picklist'},
        {'num': '125007', 'status': 'error', 'repo': 'NPSP', 'plan': 'Feature Test', 'start': 'April 18 11:35 a.m.', 'end':'April 18  11:37 a.m.', 'branch': 'feature/fix-account-picklist'},
        {'num': '125007', 'status': 'success', 'repo': 'NPSP', 'plan': 'Feature Test', 'start': 'April 17 1:35 p.m.', 'end':'April 18  11:32 a.m.', 'branch': 'feature/fancy-animation'},
        {'num': '125007', 'status': 'success', 'repo': 'NPSP', 'plan': 'Feature Test', 'start': 'April 17 12:25 p.m.', 'end':'April 18  12:32 a.m.', 'branch': 'feature/toast-modal'},
    ]);
    


    return (
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Build No.</th>
                    <th scope="col">Status</th>
                    <th scope="col">Repo</th>
                    <th scope="col">Plan</th>
                    <th scope="col">Branch</th>
                </tr>
            </thead>
            <tbody>
                {builds.map(build => (
                    <BuildTableRow build={build} />
                ))}
            </tbody>
    </table> 
    )
}



export default BuildTable;