import './NameList.css'
import React from 'react';
export default function NameList(props){
    return(
        <div>
<table>
    <tr>
        <th>
        Name
        </th>
        <th>
        Seniority
        </th>
    </tr>
    <tr>
        <td> {props.fullName}</td>
        <td> {props.seniority}</td>

        </tr>
</table>

        </div>
    )
}
// export default NameList;