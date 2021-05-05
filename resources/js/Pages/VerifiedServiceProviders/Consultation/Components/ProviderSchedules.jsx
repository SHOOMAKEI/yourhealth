import React, {useState, useEffect} from 'react'


export default function  ProviderSchedules({sessions, user,callback})
{
    const [sessionsData, setSessionsData] = useState(sessions);

    function checkIfUserIsCompany() {
        return (user.provider_profile.account_category_type === 'company' ||
            user.provider_profile.account_category_type === 'facility')
    }

    useEffect(()=>{
        setSessionsData(sessions)
    },[sessions])

    return(
        <>
            {sessionsData && sessionsData.length > 0 && sessionsData.map((session, index) => (
                <div key={index+1}>
                    <h4>{checkIfUserIsCompany() ? session.name : session.first_name + " " + session.last_name}'s
                        Sessions
                    </h4>
                    <table className="table table-hover table-centered mb-0">

                        <thead>
                        <tr>
                            <th>
                                Day
                            </th>
                            <th>
                                Session Name
                            </th>
                            <th>
                                Form
                            </th>
                            <th>
                                To
                            </th>
                            <th>
                                Interval
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {session.sessions && session.sessions.length > 0 && session.sessions.map((ses, index) => (
                            <tr key={index + 1}>
                                <td>
                                    {ses.day.name}
                                </td>
                                <td>
                                    {ses.name}
                                </td>
                                <td>
                                    {ses.from}
                                </td>
                                <td>
                                    {ses.to}
                                </td>
                                <td>
                                    {ses.interval}
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm"
                                            onClick={(e) => callback(e, ses)}>
                                        <i className="dripicons-trash"/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}

        </>

    )
}
