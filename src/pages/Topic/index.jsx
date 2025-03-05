import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getListTopic } from '../../services/topicService';

function Topic() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTopic();
      setTopics(response);
    }
    fetchApi();
  }, []);

  return (
    <>
    <h2>Danh sách chủ đề</h2>

    {topics.length > 0 && (
      <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Tên chủ đề</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {topics.map(item => (
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <Link to={"/quiz/" + item.id}>Làm bài</Link>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    )}
    </>
  )
}

export default Topic