import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const RunningStatusDiv = () => {
    const props = useSpring({
        from: { background: "#e3e3e3" },
        to: async next => {
            while (1) {
                await next({ background: "#b5b5b5"})
                await next({ background: "#e3e3e3"})
            }
        }
    });
    return (
        <td>
            <animated.div className="statusDiv running" style={props}>
                Running
            </animated.div>
        </td>
    )
}

const BuildTableRow = ({ build }) => {
    if (build.status !== 'running') {
        return (
            <tr>
                <td>
                    <a href="#">{build.num}</a>
                </td>
                <td>
                    <div className={"statusDiv " + build.status}>
                        {capitalizeFirstLetter(build.status)} 
                    </div>
                </td>
                <td>{build.repo}</td>
                <td>{build.plan}</td>
                <td>{build.start}</td>
                <td>{build.end ? build.end : '-'}</td>
            </tr>
        )
    }
    else {
        return (
            <tr>
                <td>
                    <a href="#">{build.num}</a>
                </td>
                <td>
                    <RunningStatusDiv />
                </td>
                <td>{build.repo}</td>
                <td>{build.plan}</td>
                <td>{build.start}</td>
                <td>{build.end ? build.end : '-'}</td>
            </tr>
        )

    }
}

const BuildTable = () => {
    const [ builds, setBuilds ] = useState([
        {'num': '125009', 'status': 'running', 'repo': 'NPSP', 'plan': 'Feature Test', 'start': 'April 18 1:35 p.m.', 'end':'', 'branch': 'feature/cool-new-feature'},
        {'num': '125008', 'status': 'running', 'repo': 'NPSP', 'plan': 'Feature Test', 'start': 'April 18 1:14 p.m.', 'end':'', 'branch': 'feature/fancy-animations'},
        {'num': '125007', 'status': 'error', 'repo': 'NPSP', 'plan': 'Feature Test', 'start': 'April 18 11:35 a.m.', 'end':'April 18  11:37 a.m.'},
        {'num': '125007', 'status': 'success', 'repo': 'NPSP', 'plan': 'Feature Test', 'start': 'April 17 1:35 p.m.', 'end':'April 18  11:32 a.m.'},
        {'num': '125007', 'status': 'success', 'repo': 'NPSP', 'plan': 'Feature Test', 'start': 'April 17 12:25 p.m.', 'end':'April 18  12:32 a.m.'},
    ]);
    
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Build No.</th>
                    <th scope="col">Status</th>
                    <th scope="col">Repo</th>
                    <th scope="col">Plan</th>
                    <th scope="col">Start</th>
                    <th scope="col">End</th>
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